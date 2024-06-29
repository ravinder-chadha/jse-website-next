import { defineType, defineField   } from "sanity";

export default defineType({
  title: "Article",
  name: "article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",      
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name:"publishedOn",
      title:"Published on",
      type:"datetime",
    }),
  ],
});