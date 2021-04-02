import React from "react";
import { CompletedClallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
   
    <div className = {styles.container}>

      <Head>
        <title>Home | moveit</title>
      </Head>

      <ExperienceBar />

      <section>

        <div>

          <Profile />
          <CompletedClallenges />
          <Countdown />

        </div>

        <div>

        </div>
      </section>

    </div>

  )
}
