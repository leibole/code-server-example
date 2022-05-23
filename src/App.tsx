import "./App.css";

import userflow from "userflow.js";

userflow.init("ct_2cr2apkujvh7xag4ezserzr6ey");

userflow.identify("USER_ID", {
  name: "USER_NAME2",
});

const getElementByXpath = (path: string) => {
  return document
    .querySelector("iframe")
    ?.contentDocument?.evaluate(
      path,
      document.querySelector("iframe")?.contentDocument as Node,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
};

const waitForElementAndCallMethod = (
  path: string,
  callback: (node: HTMLElement) => void
) => {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      const element = getElementByXpath(path);
      if (element) {
        callback(element as HTMLElement);
        clearInterval(interval);
        resolve(true);
      }
    }, 1000);
  });
};

const clickElementIfExists = (path: string) => {
  return waitForElementAndCallMethod(path, (node) => {
    node.click();
  });
};

const scrollDown = async (path: string) => {
  return waitForElementAndCallMethod(path, (node) => {
    node.scroll(0, 1200);
  });
};

const openGameCode = async () => {
  await clickElementIfExists("//span[text()='src']");
  await clickElementIfExists("//span[text()='routes']");
  await clickElementIfExists("//span[text()='game.js']");
  await scrollDown("//*[contains(@class, 'editor-scrollable')]");
};

openGameCode();

function App() {
  return (
    <div style={{ display: "flex" }}>
      <div className="App" style={{ height: "100vh", width: "100%" }}>
        <iframe
          src="http://localhost:8080?folder=/Users/idoleibovich/workspace/guessle"
          width="100%"
          height="100%"
          title="Code server"
        />
      </div>
      <div className="App" style={{ height: "100vh", width: "100%" }}>
        <iframe
          src="http://localhost:4001"
          width="100%"
          height="100%"
          title="Code server"
        />
      </div>
    </div>
  );
}

export default App;
