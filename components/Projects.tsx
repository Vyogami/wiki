import { Link } from 'nextra-theme-docs';
import styles from './Projects.module.css';
import { Project } from './Project'

import { Bot, CodeXml, TerminalSquare, BrainCircuit, TramFront } from 'lucide-react';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Projects() {
  return (
    <div className={styles.root}>
      <h3>Projects</h3>
      <ul className={styles.projects}>
        <Project
          title="Vadi"
          description={
            <>
            A simple, interpreted and dynamically-typed programming language.
            <br/>
            <Link href="https://github.com/vyogami/vadi"> Github →</Link>
            </>
          }
          icon={<CodeXml />}
        />
        <Project
          title="Amibot-tg"
          description={
            <>
              Telegram bot for Amizone, powered by the go-amizone API
              <br/>
              <Link href="https://github.com/asetalias/amibot-tg">Github →</Link>
            </>
          }
          icon={<Bot/>}
        />
        <Project
          title="Gritlle"
          description={
            <>
              OS agnostic package fuzzy finder TUI for apt, dnf, yay, winget and brew.
              <br/>
              <Link href="https://github.com/vyogami/grittle">Github →</Link>
            </>
          }
          icon={<TerminalSquare />}
        />
        <Project
          title="Amidroid"
          description={
            <>
              Android application for go-amizone API with beautiful Material You UI 3.
              <br/>
              <Link href="https://github.com/vyogami/amidroid">Github →</Link>
            </>
          }
          icon={<FontAwesomeIcon icon={faAndroid}/>}
        />
        <Project
          title="Dorf"
          description={
            <>
              Image categorization and deduplication system.
              <br/>
              It employs Golang for better performance.
              <br/>
              <Link href="https://github.com/vyogami/dorf">Github →</Link>
            </>
          }
          icon={<BrainCircuit />}
        />
        <Project
          title="Teas"
          description={
            <>
              Transit Efficiency & Allocation System for optimzing resource allocation in metro.
              <br/>
              <Link href="https://github.com/vyogami/teas">Github →</Link>
            </>
          }
          icon={<TramFront />}
        />
      </ul>
    </div>
  );
}
