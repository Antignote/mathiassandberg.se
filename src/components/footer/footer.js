import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const formatPhonenumber = (phoneNumber) => {
  if(phoneNumber.length !== 10) {
    return phoneNumber;
  }

  return `${phoneNumber.slice(0, 4)}-${phoneNumber.slice(4, 6)} ${phoneNumber.slice(6, 8)} ${phoneNumber.slice(8, 10)}`
}

const Footer = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      site {
        siteMetadata {
          author
          siteUrl
          contact {
            linkedIn
            phone
          }
        }
      }
    }
  `);

  const {
    author,
    contact = {},
  } = data.site.siteMetadata;

  return (
    <footer
      style={{
        marginTop: `2rem`,
      }}
    >
      <ul>
        <li>
          <a href={`mailto:${author}`}>{author}</a>
        </li>
        {/* <li>
          <a href={`tel:${contact.phone}`}>{formatPhonenumber(contact.phone)}</a>
        </li> */}
        <li>
          <a href={contact.linkedIn}>Linked In</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;