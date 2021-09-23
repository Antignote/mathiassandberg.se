import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Resume" />
    <h2>Who am I?</h2>
    <p>Software architect/techlead working at the state-owned company Svenska Spel in Sweden.</p>

    <h3>🖤 Love</h3>
    <ul>
      <li>Performant web aplications</li>
      <li>Great atchitecture &amp; testable code</li>
    </ul>
    
    <h3>💩 Dislikes</h3>
    <ul>
      <li>Laggy animations</li>
    </ul>

    <h2>Work life experience</h2>
    <ul>
      <li><strong>Svenska Spel, Software Architect dec 2020</strong>
        <ul>
          <li>Leading frontend development and responsible of LCM for Svenska Spels pool games like; Stryktipset, Europatipset, Challenge etc.</li>
          <li>Evaluating, identifying and developing software solutions</li>
          <li>Work close to product owners (PO)</li>
          <li>Mentoring and introducing new developers to the tech stack</li>
        </ul>
      </li>

      <li><strong>Svenska Spel, Frontend developer aug 2016 - dec 2020</strong>
        <ul>
          <li>React eco system (Redux, RTK, React Router, RTL etc.)</li>
          <li>Nodejs</li>
          <li>Express.js</li>
          <li>SEO, Google core web vitals</li>
        </ul>
      </li>

      <li><strong>Skatteverket, developer dec 2012 - jun 2016</strong>
        <ul>
          <li>Java EE</li>
          <li>Servlets, JSF, Apache Strust</li>
          <li>XML Parseing</li>
        </ul>
      </li>
    </ul>

    <h2>Education</h2>
    <ul>
      <li><strong>Innovativ programmering</strong>, Linköping Technical University (LiTH) 2009 - 2012</li>
    </ul>

  </Layout>
)

export default IndexPage
