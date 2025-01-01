function page() {
  return <div>page</div>;
}

export default page;
// Builder.registerComponent(RelatedPosts, {
//   name: "RelatedPosts",
//   inputs: [
//     {
//       name: "blogSelections",
//       type: "list",
//       subFields: [
//         {
//           name: "blogRef",
//           type: "reference",
//           model: "home-blogs",
//           friendlyName: "Select Blog",
//         },
//       ],
//       defaultValue: [],
//       friendlyName: "Blog Selections",
//       helperText: "Add blogs to display in this section",
//     },
//   ],
// });
