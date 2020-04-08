import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router";
import styled from "styled-components";

// import components
import Header from "components/organisms/header/Header";

// import utils
import pages from "utils/pages";
import * as breakPoints from "utils/breakPoints";

import * as routes from "routes";

const Wrapper = styled.div`
  margin-right: ${breakPoints.isIPhone5s() ? "-19px" : "0"};
`;

const App: FC = () => (
  <Wrapper>
    <Header />
    <Switch>
      <Route path={pages.home.path} component={routes.Home} exact />
      <Route path={pages.admin.path} component={routes.Admin} exact />
      <Route
        path={pages.adminCreateArticle.path}
        component={routes.AdminCreateArticle}
        exact
      />
      <Route
        path={pages.adminArticles.path}
        component={routes.AdminArticles}
        exact
      />
      <Route path={pages.article.path} component={routes.Article} exact />
      <Route path={pages.articleEdit.path} component={routes.ArticleEdit} exact />
      <Route path={pages.tag.path} component={routes.Tag} exact />
      <Route path={pages.contact.path} component={routes.Contact} exact />
      <Route path={pages.profile.path} component={routes.Profile} exact />
      <Redirect to="/" />
    </Switch>
  </Wrapper>
);

export default App;
