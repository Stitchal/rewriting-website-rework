import React from "react";
import RewritingNavigation from "../../../../components/RewritingNavigation";
import Title from "../../../../components/Title";
import Section from "../../../../components/Section";
import Path from "../../../../components/Path";

const Books = () => {
  const titles = ["Lorem, ipsum dolor.", "Lorem ipsum dolor sit amet."];
  const contents = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum dolorum incidunt aliquam repellendus ullam sequi voluptates vitae ex ut iure voluptatibus facilis, ducimus ratione corporis esse enim, tenetur reiciendis vel? Labore dolor fugit in nesciunt, eveniet quisquam et. Possimus cumque quibusdam quis voluptatum pariatur earum rem nostrum iure magnam aperiam delectus explicabo aliquid enim assumenda quod, fugit autem quas reiciendis in repellendus? Mollitia hic corrupti tempora possimus vero quam a, adipisci laudantium temporibus expedita ullam est, minus fuga excepturi, animi quis quaerat alias officiis quos eius! Vero, asperiores ipsum eum eaque voluptatem porro cum? Voluptates excepturi totam sapiente accusamus aliquam assumenda delectus nostrum hic, mollitia suscipit sequi magni quasi, quidem ab nam quo ipsum placeat amet facere, est soluta saepe incidunt quisquam! Dolorem dolor rerum aliquid eaque repellat cumque ex laudantium, error vel ipsum cupiditate. Porro optio suscipit dolorum nesciunt fugit vitae numquam officiis iusto ab. Perspiciatis, ab. Pariatur.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illo, porro perferendis impedit delectus voluptatum officia adipisci aliquam molestias quibusdam, quos minima dolore. Consectetur magnam quisquam maxime soluta inventore debitis commodi ut quidem recusandae incidunt, at assumenda repellendus, rerum cum rem possimus ex qui beatae veniam tempore enim corrupti officiis libero! Quis quos magni nesciunt obcaecati atque a assumenda, aspernatur dolorum odit ullam provident nihil ut voluptatibus nulla earum id reprehenderit. Obcaecati nihil delectus ab laborum alias mollitia suscipit, aperiam animi, vitae nostrum officiis odit. Rem ipsum exercitationem id nihil, corporis neque dolore ex laborum vitae quam molestiae consequatur libero?",
  ];

  const rewritingPath = {
    name: "Rewriting",
    path: "/rewriting",
  };

  const ressourcesPath = {
    name: "Ressources",
    path: "/rewriting/ressources",
  };
  const externalRessourcesPath = {
    name: "Learning ressources",
    path: "/rewriting/ressources/learning-ressources",
  };

  const booksPath = {
    name: "Books",
    path: "/rewriting/ressources/learning-ressources/books",
  };

  const paths = [
    rewritingPath,
    ressourcesPath,
    externalRessourcesPath,
    booksPath,
  ];

  return (
    <div>
      <RewritingNavigation />
      <div className="main">
        <Path paths={paths} />
        <Title title="Books" />
        <Section title={titles[0]} content={[contents[0]]} />
        <Section title={titles[1]} content={[contents[0]]} />
        <Section title={titles[0]} content={[contents[1]]} />
        <Section title={titles[1]} content={[contents[0]]} />
      </div>
    </div>
  );
};

export default Books;
