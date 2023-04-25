import Footer from "../../components/Footer";
import Title from "../../components/Title";
import React from "react";
import { TextareaAutosize } from "@mui/base";
import Tag from "../../components/Tag";

const IntranetWritePostPage = () => {
  return (
    <div className="intranet-write-post-page">
      <div className="main">
        <Title title="Write a post" />

        <form action="../" method="post">
          <TextareaAutosize
            className="title"
            maxLength={100}
            placeholder="Title"
          />
          <textarea
            className="content"
            placeholder="Write the content here..."
          />

          <div className="tags-container">
            <div className="rewriting-check-box">
              <input
                type="checkbox"
                id="rewriting"
                name="rewriting"
                value="rewriting"
              />
              <label htmlFor="rewriting">
                <Tag name="Rewriting" />
              </label>
            </div>

            <div className="lambda-calculus-check-box">
              <input
                type="checkbox"
                id="lambda-calculus"
                name="lambda-calculus"
                value="lambda-calculus"
              />
              <label htmlFor="lambda-calculus">
                <Tag name="Lambda Calculus" />
              </label>
            </div>

            <div className="logic-check-box">
              <input type="checkbox" id="logic" name="logic" value="logic" />
              <label htmlFor="logic">
                <Tag name="Logic" />
              </label>
            </div>
          </div>
          <input class="submit" type="submit" value="Post" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default IntranetWritePostPage;
