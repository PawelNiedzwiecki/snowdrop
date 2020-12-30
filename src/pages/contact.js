// import React from 'react';
// import PropTypes from 'prop-types';

// import GlobalStateProvider from '../context/provider';
// import Layout from '../components/layout';
// import SEO from '../components/seo';
// import { seoTitleSuffix } from '../../config';

// const Contact = ({ data }) => {
//   const { body, frontmatter } = data.imprint.edges[0].node;
//   const { title, seoTitle, useSeoTitleSuffix, useSplashScreen } = frontmatter;

//   const globalState = {
//     isIntroDone: useSplashScreen ? false : true,
//     darkMode: false,
//   };

//   return (
//     <GlobalStateProvider initialState={globalState}>
//       <Layout>
//         <SEO
//           title={
//             useSeoTitleSuffix
//               ? `${seoTitle} - ${seoTitleSuffix}`
//               : `${seoTitle}`
//           }
//           meta={[{ name: 'robots', content: 'noindex' }]}
//         />
//         <form method="post" action="#">
//           <label>
//             Name
//             <input type="text" name="name" id="name" />
//           </label>
//           <label>
//             Email
//             <input type="email" name="email" id="email" />
//           </label>
//           <label>
//             Subject
//             <input type="text" name="subject" id="subject" />
//           </label>
//           <label>
//             Message
//             <textarea name="message" id="message" rows="5" />
//           </label>
//           <button type="submit">Send</button>
//           <input type="reset" value="Clear" />
//         </form>
//       </Layout>
//     </GlobalStateProvider>
//   );
// };

// Contact.propTypes = {
//   data: PropTypes.shape({
//     imprint: PropTypes.shape({
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             body: PropTypes.string.isRequired,
//             frontmatter: PropTypes.object.isRequired,
//           }).isRequired,
//         }).isRequired
//       ).isRequired,
//     }).isRequired,
//   }).isRequired,
// };

// export default Contact;

// export const pageQuery = graphql`
//   {
//     contactForm: allMdx(filter: { fileAbsolutePath: { regex: "/imprint/" } }) {
//       edges {
//         node {
//           body
//           frontmatter {
//             title
//             seoTitle
//             useSeoTitleSuffix
//             useSplashScreen
//           }
//         }
//       }
//     }
//   }
// `;
