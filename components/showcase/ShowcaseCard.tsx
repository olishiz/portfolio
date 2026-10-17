'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import type { ShowcaseProject } from '@/data/showcase';
import { withBasePath } from '@/lib/basePath';

import styles from '@/styles/Showcase.module.css';

const resolve = (href: string) => (/^https?:\/\//.test(href) ? href : withBasePath(href));

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" className={styles.arrow}>
      <path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Desktop-only live preview: the real site in a scaled 1280x800 frame. */
function PreviewDialog({ project, onClose }: { project: ShowcaseProject; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
  const [loaded, setLoaded] = useState(false);
  const url = resolve(project.href);

  useEffect(() => {
    const d = ref.current;
    d?.showModal();
    const fit = () => stage.current && setScale(stage.current.clientWidth / 1280);
    fit();
    window.addEventListener('resize', fit);
    return () => {
      window.removeEventListener('resize', fit);
      d?.close();
    };
  }, []);

  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      aria-label={`${project.name} live preview`}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      <div className={styles.dialogBar}>
        <span className={styles.dots} aria-hidden="true"><i /><i /><i /></span>
        <span className={styles.dialogUrl}>{project.hrefLabel}</span>
        <a href={url} target={url.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={styles.dialogOpen}>
          Open <Arrow />
        </a>
        <button type="button" className={styles.dialogClose} onClick={onClose} aria-label="Close preview">
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
        </button>
      </div>
      <div ref={stage} className={styles.stage} style={{ height: 800 * scale }}>
        {!loaded && (
          <Image src={withBasePath(project.image)} alt="" width={1200} height={750} className={styles.stagePoster} aria-hidden="true" />
        )}
        <iframe
          src={url}
          title={`${project.name} live preview`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={styles.frame}
          style={{ transform: `scale(${scale})`, opacity: loaded ? 1 : 0 }}
          referrerPolicy="no-referrer"
        />
      </div>
    </dialog>
  );
}

export default function ShowcaseCard({ project, index }: { project: ShowcaseProject; index: number }) {
  const [preview, setPreview] = useState(false);
  const close = useCallback(() => setPreview(false), []);
  const url = resolve(project.href);
  const external = url.startsWith('http');
  const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <article className={styles.card} data-project={project.slug}>
      <a href={url} {...linkProps} className={styles.thumb} aria-label={`Open ${project.name}`}>
        <Image
          src={withBasePath(project.image)}
          alt={project.imageAlt}
          width={1200}
          height={750}
          sizes="(max-width: 720px) 100vw, 560px"
          priority={index === 0}
          className={styles.thumbImg}
        />
      </a>

      <div className={styles.cardBody}>
        <div className={styles.cardHead}>
          <span className={styles.num}>{String(index + 1).padStart(2, '0')}</span>
          <h2 className={styles.name}>
            <a href={url} {...linkProps}>{project.name}</a>
          </h2>
          <span className={styles.cardYear}>{project.year}</span>
        </div>
        <p className={styles.desc}>{project.description}</p>
        <ul className={styles.tags} aria-label="Built with">
          {project.tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <div className={styles.actions}>
          <a href={url} {...linkProps} className={styles.visit}>
            {project.hrefLabel} <Arrow />
          </a>
          {project.livePreview && (
            <button type="button" className={styles.previewBtn} onClick={() => setPreview(true)} aria-haspopup="dialog">
              <span className={styles.liveDot} aria-hidden="true" /> Live preview
            </button>
          )}
        </div>
      </div>
      {preview && <PreviewDialog project={project} onClose={close} />}
    </article>
  );
}
