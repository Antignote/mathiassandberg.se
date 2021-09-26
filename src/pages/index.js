import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const startWorkingDate = new Date(2012, 11, 1);
const now = new Date();

function yearDiff(startDate, endDate) {
  let diffYear = (endDate.getTime() - startDate.getTime()) / 1000;
  diffYear /= (60 * 60 * 24);
  return Math.abs(
    Math.round(diffYear/365.25)
  );
}

const IndexPage = () => (
  <Layout>
    <Seo title="Resume" />
    <section>
      <h2>Who am I?</h2>
      <p>
        My name is <strong>Mathias Sandberg</strong>. I'm currently work as a Software Architect at the state-owned company Svenska Spel in Sweden.
      </p>

      <p>
        With <strong>{yearDiff(startWorkingDate, now)} years</strong> of experience in software development and I tend to live by the rules of Murphys law &ndash; <em>&quot;anyhing that can go wrong will eventually go wrong&quot;.</em> That means that I leave nothing to chance; defensive architectual application design. I put much effort to achive applications with great performance that are easily tested with either unit tests or regression tests.
      </p>

      <p>
        I always care to help my colleagues &ndash; <em>sharing is caring.</em> There is always something new to learn and I beleive that discussing possible solutions and excanging experience is a exceptional way to both build a better application and to grow as a developer.
      </p>

      <p>
        My passion for web development started at a young age where I tend to debug, inspect and improove existing web applications.
      </p>

      <p>
        On my spare time I like to stay up to date and read up on new technology, or programming paradigms - because one thing that's important to me is great architectual code that is also testable with unittests
      </p>

      <h3>🖤 Love</h3>
      <ul>
        <li>Performant web aplications</li>
        <li>Great atchitecture &amp; testable code</li>
      </ul>
      
      <h3>💩 Dislikes</h3>
      <ul>
        <li>Laggy animations</li>
      </ul>
    </section>

    <section>
      <h2>Work life experience</h2>
      <ul>
        <li><strong>Svenska Spel, Software Architect dec 2020</strong>
          <ul>
            <li>Leading frontend development and responsible of LCM for Svenska Spels pool games like; Stryktipset, Europatipset, Challenge etc.</li>
            <li>Evaluating, identifying and developing software solutions</li>
            <li>Work close to product owners (PO)</li>
            <li>Mentoring and introducing new developers to the tech stack</li>
            <li><em>...Same chores as a frontend developer accorting to below</em></li>
          </ul>
        </li>

        <li><strong>Svenska Spel, Frontend developer aug 2016 - dec 2020</strong>
          <ul>
            <li>React eco system (Redux, RTK, React Router, RTL etc.)</li>
            <li>Nodejs</li>
            <li>Express.js</li>
            <li>SEO, Google core web vitals</li>
            <li>REST</li>
          </ul>
        </li>

        <li><strong>Skatteverket, developer dec 2012 - jun 2016</strong>
          <ul>
            <li>Java EE</li>
            <li>Servlets, JSF, Apache Strust</li>
            <li>JavaScript</li>
            <li>XML Parseing</li>
          </ul>
        </li>
      </ul>
    </section>

    <section>
      <h2>Education</h2>
      <ul>
        <li><strong>Innovativ programmering</strong>, Linköping Technical University (LiTH) 2009 - 2012</li>
      </ul>
    </section>

  </Layout>
)

export default IndexPage
