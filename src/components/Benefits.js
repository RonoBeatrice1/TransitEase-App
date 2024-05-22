// import React from "react";
// import "../styles/HomePage.css"; // Import your regular CSS file
// import BenefitCard from "./BenefitCard"; // Assuming you have a BenefitCard component

// function Benefits() {
//   const benefitProps = [
//     {
//       image: "/images/unified2.webp",
//       title: "Unified Transit Management",
//       text: "Effortlessly manage tickets for various transport modes through one interface, simplifying travel logistics and ticketing processes.",
//     },
//     {
//       image: "/images/icon-touchless.svg",
//       title: "Touchless Transactions",
//       text: "Ensure secure payments using smart cards or NFC-enabled devices, providing a convenient and hygienic travel experience without physical contact.",
//     },
//     {
//       image: "public/images/real-time.png",
//       title: "Real-Time Planning",
//       text: "Access up-to-date transit info and optimized routes, enhancing journey planning efficiency and reducing travel time through intelligent route suggestions.",
//     },
//     {
//       image: "public/images/Cashless.png",
//       title: "Cashless Operations",
//       text: "Enhance safety with digital payments, minimizing cash handling risks for both passengers and transport operators while streamlining fare collection processes.",
//     },
//     {
//       image: "public/images/Analytics.png",
//       title: "Analytics Dashboard",
//       text: "Optimize service quality and resource allocation with insightful data analytics, enabling transport operators to make data-driven decisions for improved operational efficiency.",
//     },
//     {
//       image: "public/images/inclusive.jpeg",
//       title: "Inclusive Accessibility",
//       text: "Ensure equal access for users with disabilities through tailored features and specialized assistance services, fostering an inclusive and accessible transportation environment for all passengers.",
//     },
//   ];

//   return (
//     <section className="benefitsContainer">
//       <div className="benefitsTitleContent">
//         <h2 className="heading-l">Benefits of TransitEase</h2>
//         <p className="body-m">
//           Experience the following advantages with TransitEase, making your
//           journey seamless and efficient.
//         </p>
//       </div>

//       <div className="benefitsCardsWrapper">
//         {benefitProps.map((value, index) => {
//           return (
//             <BenefitCard
//               key={index}
//               id={value.image}
//               image={`/images/icon-${value.image}.svg`}
//               title={value.title}
//               text={value.text}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default Benefits;
