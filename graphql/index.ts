
export const CV_QUERY = `query CV_QUERY {
  cv {
    personalSummary {
      value
    }
    contactDetails {
      label
      method
      id
      href
      icon {
        id
        height
        width
        mimeType
        url(imgixParams: {ar: "1:1"})
      }
    }
    skills {
      id
      name
      icon {
        url(imgixParams: {ar: "1:1"})
      }
      showcase
    }
    experience {
      id
      position
      companyName
      logo {
        id
      }
      customIcon {
        url
      }
      email
      companyUrl
      address
      summary {
        value
      }
      roles {
        id
        startDate
        endDate
        jobTitle
        summary {
          value
        }
      }
      skills {
        id
        name
        icon {
          url
        }
      }
    }
  }
}
`

