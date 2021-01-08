import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Posts from "./features/posts/components/Posts";
import RandomPosts from "./features/posts/components/RandomPosts";
import UpvotedPosts from "./features/posts/components/UpvotedPosts";
import DownvotedPosts from "./features/posts/components/DownvotedPosts";
import LastAddedPosts from "./features/posts/components/LastAddedPosts";
import Header from "./features/header/components/Header";
import Bookmarks from "./features/posts/components/Bookmarks";
import { darkTheme, lightTheme } from "./themes/themes";
import GlobalStyle from "./globalStyles";

import { useDarkMode } from "./state";

function App() {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/sort/random" component={RandomPosts} />
          <Route path="/sort/upvoted" component={UpvotedPosts} />
          <Route path="/sort/downvoted" component={DownvotedPosts} />
          <Route path="/sort/lastadded" component={LastAddedPosts} />
          <Route path="/bookmarks" component={Bookmarks} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
