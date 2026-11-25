'use client'

import { useEffect, useRef, useState } from 'react'
import { AppWindow, BookOpen, Download, FileText, MessageSquare, Search, Sparkles } from 'lucide-react'
import sample from './terry-sample.json'
import styles from './TerryDemo.module.css'

export default function TerryDemo({ liveUrl }) {
  const [active, setActive] = useState(null)
  const [stage, setStage] = useState('ready')
  const timers = useRef([])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  function ask(clause) {
    timers.current.forEach(clearTimeout)
    setActive(clause)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStage('answered')
      return
    }

    setStage('searching')
    timers.current = [
      setTimeout(() => setStage('retrieved'), 230),
      setTimeout(() => setStage('answered'), 690),
    ]
  }

  const hasPassage = stage === 'retrieved' || stage === 'answered'

  return (
    <section id="terry-demo" className={styles.demo} aria-labelledby="terry-demo-title" data-reveal>
      <header className={styles.header}>
        <div>
          <p className="eyebrow"><span /> GUIDED DEMO</p>
          <h3 id="terry-demo-title">Try Terry<span>.</span></h3>
          <p className={styles.intro}>Pick a question to see which passage supports the sample answer.</p>
        </div>
        <a href={liveUrl} className="button button-outline" target="_blank" rel="noopener noreferrer">
          <AppWindow size={17} aria-hidden="true" /> Open live app
        </a>
      </header>

      <div className={styles.questions} role="group" aria-label="Sample questions">
        {sample.clauses.map((clause) => (
          <button
            key={clause.id}
            type="button"
            className={styles.question}
            aria-pressed={active?.id === clause.id}
            onClick={() => ask(clause)}
          >
            <MessageSquare size={15} aria-hidden="true" /> {clause.question}
          </button>
        ))}
      </div>

      <div className={styles.workspace}>
        <div className={styles.sourcePane}>
          <div className={styles.paneHeader}>
            <h4><FileText size={18} aria-hidden="true" /> Sample PDF</h4>
            <a className="text-link" href={'/' + sample.filename} download>
              <Download size={15} aria-hidden="true" /> Download sample
            </a>
          </div>
          <article className={styles.paper} aria-labelledby="terry-sample-title">
            <h5 id="terry-sample-title">{sample.title}</h5>
            <p className={styles.documentDescription}>{sample.description}</p>
            <div className={styles.clauses}>
              {sample.clauses.map((clause) => (
                <div
                  id={'terry-clause-' + clause.id}
                  key={clause.id}
                  className={styles.clause}
                  data-retrieved={hasPassage && active.id === clause.id}
                  tabIndex={-1}
                >
                  <h6><span>§ {clause.number}</span> {clause.title}</h6>
                  <p>{clause.passage}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className={styles.answerPane}>
          <div className={styles.paneHeader}>
            <h4><Sparkles size={18} aria-hidden="true" /> Sample answer</h4>
          </div>
          <div className={styles.workflow} aria-hidden="true">
            <span className={styles.step} data-active={stage === 'searching' || hasPassage}><Search size={15} /> Retrieve passage</span>
            <i />
            <span className={styles.step} data-active={stage === 'answered'}><MessageSquare size={15} /> Answer</span>
          </div>
          <div className={styles.result} data-stage={stage} role="status" aria-live="polite">
            {stage === 'answered' ? (
              <div className={styles.answer} key={active.id}>
                <p className={styles.askedQuestion}>{active.question}</p>
                <p>{active.answer}</p>
                <a href={'#terry-clause-' + active.id} className={styles.citation}>
                  <BookOpen size={16} aria-hidden="true" /> Page 1 · § {active.number} {active.title}
                </a>
              </div>
            ) : (
              <div className={styles.waiting}>
                <span className={styles.waitingIcon}><Search size={22} aria-hidden="true" /></span>
                <p>{stage === 'ready' ? 'Choose a question to start.' : stage === 'searching' ? 'Looking for the relevant passage…' : 'Passage found. Preparing the answer…'}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
