var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/components/MainNavigation.jsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function MainNavigation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { id: "main-navigation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: "/", children: "Home" }, void 0, !1, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 8,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: "/notes", children: "My Notes" }, void 0, !1, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 11,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: "/users", children: "Users List" }, void 0, !1, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MainNavigation.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/MainNavigation.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var MainNavigation_default = MainNavigation;

// app/styles/main.css
var main_default = "/build/_assets/main-ZBNXKCZK.css";

// app/root.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainNavigation_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  var _a;
  let caughtResponse = (0, import_react3.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: caughtResponse.statusText }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainNavigation_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "error", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: caughtResponse.statusText }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: ((_a = caughtResponse.data) == null ? void 0 : _a.message) || "Something went wrong!" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
          "Back to ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", children: "safety" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 58,
            columnNumber: 21
          }, this),
          "!"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "An error occurred!" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 75,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainNavigation_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 79,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "error", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "An error occurred!" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: error.message }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
          "Back to ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", children: "safety" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 85,
            columnNumber: 21
          }, this),
          "!"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 84,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 77,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: main_default }];
}

// app/routes/users.$user_id.jsx
var users_user_id_exports = {};
__export(users_user_id_exports, {
  action: () => action2,
  default: () => users_user_id_default,
  links: () => links3,
  loader: () => loader
});

// app/routes/adduserpage.jsx
var adduserpage_exports = {};
__export(adduserpage_exports, {
  action: () => action,
  default: () => adduserpage_default,
  links: () => links2
});
var import_react4 = require("react"), import_node2 = require("@remix-run/node");

// app/components/NewNote/NewNote.css
var NewNote_default = "/build/_assets/NewNote-OAIWOVZQ.css";

// app/routes/adduserpage.jsx
var import_react5 = require("@remix-run/react");

// app/utils/Api_Calls.js
var import_promises = __toESM(require("fs/promises")), import_axios = __toESM(require("axios"));
async function getStoredNotes() {
  let rawFileContent = await import_promises.default.readFile("notes.json", { encoding: "utf-8" });
  return JSON.parse(rawFileContent).notes ?? [];
}
function storeNotes(notes) {
  return import_promises.default.writeFile("notes.json", JSON.stringify({ notes: notes || [] }));
}
async function getAllUsers() {
  try {
    return (await import_axios.default.get("http://localhost:8085/api/user/get_users")).data ?? [];
  } catch (error) {
    return console.error("Error fetching courses:", error), [];
  }
}
async function getOneUser(user_id) {
  try {
    return (await import_axios.default.get(`http://localhost:8085/api/user/${user_id}`)).data ?? [];
  } catch (error) {
    return console.error("Error fetching courses:", error), [];
  }
}
async function addUsers(adduserdata) {
  try {
    return await import_axios.default.post("http://localhost:8085/api/user/add_users", adduserdata);
  } catch (error) {
    return console.error("Error fetching courses:", error), [];
  }
}
async function updateUsers(adduserdata, user_id) {
  try {
    return await import_axios.default.put(`http://localhost:8085/api/user/updateUsers/${user_id}`, adduserdata);
  } catch (error) {
    return console.error("Error fetching courses:", error), [];
  }
}
async function deleteUsers(user_id) {
  try {
    return await import_axios.default.delete(`http://localhost:8085/api/user/deleteUser/${user_id}`);
  } catch (error) {
    return console.error("Error fetching courses:", error), [];
  }
}

// app/routes/adduserpage.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function AddUserPage({ users }) {
  let data = (0, import_react5.useActionData)(), isSubmitting = (0, import_react5.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Form, { method: "post", id: "note-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "first_name", children: "First Name" }, void 0, !1, {
        fileName: "app/routes/adduserpage.jsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", id: "title", name: "first_name", defaultValue: users ? users.first_name : "", required: !0 }, void 0, !1, {
        fileName: "app/routes/adduserpage.jsx",
        lineNumber: 24,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/adduserpage.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "last_name", children: "Last Name" }, void 0, !1, {
        fileName: "app/routes/adduserpage.jsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", id: "title", name: "last_name", defaultValue: users ? users.last_name : "", required: !0 }, void 0, !1, {
        fileName: "app/routes/adduserpage.jsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/adduserpage.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "title", children: "E-Mail" }, void 0, !1, {
        fileName: "app/routes/adduserpage.jsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", id: "title", name: "email", defaultValue: users ? users.email : "", required: !0 }, void 0, !1, {
        fileName: "app/routes/adduserpage.jsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/adduserpage.jsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "form-actions", children: users ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Updating..." : "Update User" }, void 0, !1, {
      fileName: "app/routes/adduserpage.jsx",
      lineNumber: 36,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Adding..." : "Add User" }, void 0, !1, {
      fileName: "app/routes/adduserpage.jsx",
      lineNumber: 40,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/adduserpage.jsx",
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/adduserpage.jsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/adduserpage.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
var adduserpage_default = AddUserPage;
function links2() {
  return [{ rel: "stylesheet", href: NewNote_default }];
}
async function action({ request }) {
  let adduserdata = await request.formData(), userdata = Object.fromEntries(adduserdata);
  return await addUsers(userdata), (0, import_node2.redirect)("/users");
}

// app/routes/users.$user_id.jsx
var import_react6 = require("@remix-run/react"), import_node3 = require("@remix-run/node");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), editUser = () => {
  let users = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(adduserpage_default, { users }, void 0, !1, {
    fileName: "app/routes/users.$user_id.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}, users_user_id_default = editUser;
async function loader({ params }) {
  return await getOneUser(params.user_id);
}
async function action2({ request, params }) {
  let adduserdata = await request.formData(), userdata = Object.fromEntries(adduserdata);
  if (!params.user_id)
    await addUsers(userdata);
  else {
    let res = await updateUsers(userdata, params.user_id);
  }
  return (0, import_node3.redirect)("/users");
}
function links3() {
  return [{ rel: "stylesheet", href: NewNote_default }];
}

// app/routes/notes.$noteId.jsx
var notes_noteId_exports = {};
__export(notes_noteId_exports, {
  default: () => NoteDetailsPage,
  links: () => links4,
  loader: () => loader2,
  meta: () => meta2
});
var import_node4 = require("@remix-run/node"), import_react7 = require("@remix-run/react");

// app/styles/note-details.css
var note_details_default = "/build/_assets/note-details-7ZO3NCI4.css";

// app/routes/notes.$noteId.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function NoteDetailsPage() {
  let note = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { id: "note-details", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "/notes", children: "Back to all Notes" }, void 0, !1, {
        fileName: "app/routes/notes.$noteId.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/notes.$noteId.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: note.title }, void 0, !1, {
        fileName: "app/routes/notes.$noteId.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/notes.$noteId.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { className: "edit_icon", src: "/imgs/edit-icon.png" }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { id: "note-details-content", children: note.content }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
async function loader2({ params }) {
  let notes = await getStoredNotes(), noteId = params.noteId, selectedNote = notes.find((note) => note.id === noteId);
  if (!selectedNote)
    throw (0, import_node4.json)(
      { message: "Could not find note for id " + noteId },
      { status: 404 }
    );
  return selectedNote;
}
function links4() {
  return [{ rel: "stylesheet", href: note_details_default }];
}
function meta2({ data }) {
  return {
    title: data.title,
    description: "Manage your notes with ease."
  };
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links5
});
var import_react8 = require("@remix-run/react"), import_react9 = require("@remix-run/react");

// app/styles/home.css
var home_default = "/build/_assets/home-PJIINAIX.css";

// app/routes/index.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { id: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "A better way of keeping track of your notes" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Try our early beta and never loose track of your notes again!" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { id: "cta", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { to: "/notes", children: "Try Now!" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
function links5() {
  return [{ rel: "stylesheet", href: home_default }];
}

// app/routes/notes.jsx
var notes_exports = {};
__export(notes_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action3,
  default: () => NotesPage,
  links: () => links8,
  loader: () => loader3,
  meta: () => meta3
});
var import_node5 = require("@remix-run/node"), import_react12 = require("@remix-run/react"), import_axios2 = require("axios");

// app/components/NewNote/NewNote.jsx
var import_react10 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function NewNote() {
  let data = (0, import_react10.useActionData)(), isSubmitting = (0, import_react10.useTransition)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Form, { method: "post", id: "note-form", children: [
    (data == null ? void 0 : data.message) && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: data.message }, void 0, !1, {
      fileName: "app/components/NewNote/NewNote.jsx",
      lineNumber: 17,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "title", children: "Title" }, void 0, !1, {
        fileName: "app/components/NewNote/NewNote.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "text", id: "title", name: "title", required: !0 }, void 0, !1, {
        fileName: "app/components/NewNote/NewNote.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NewNote/NewNote.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "content", children: "Content" }, void 0, !1, {
        fileName: "app/components/NewNote/NewNote.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("textarea", { id: "content", name: "content", rows: "5", required: !0 }, void 0, !1, {
        fileName: "app/components/NewNote/NewNote.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NewNote/NewNote.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "form-actions", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Adding..." : "Add Note" }, void 0, !1, {
      fileName: "app/components/NewNote/NewNote.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/NewNote/NewNote.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NewNote/NewNote.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var NewNote_default2 = NewNote;
function links6() {
  return [{ rel: "stylesheet", href: NewNote_default }];
}

// app/components/Notelist/NoteList.jsx
var import_react11 = require("@remix-run/react");

// app/components/Notelist/NoteList.css
var NoteList_default = "/build/_assets/NoteList-5UGCPU6V.css";

// app/components/Notelist/NoteList.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function NoteList({ notes }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ul", { id: "note-list", children: notes && notes.map(
    (note, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { className: "note", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react11.Link, { to: note.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("article", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ul", { className: "note-meta", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: [
            "#",
            index + 1
          ] }, void 0, !0, {
            fileName: "app/components/Notelist/NoteList.jsx",
            lineNumber: 16,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("time", { dateTime: note.id, children: new Date(note.id).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          }) }, void 0, !1, {
            fileName: "app/components/Notelist/NoteList.jsx",
            lineNumber: 18,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/Notelist/NoteList.jsx",
            lineNumber: 17,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Notelist/NoteList.jsx",
          lineNumber: 15,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { children: note.title }, void 0, !1, {
          fileName: "app/components/Notelist/NoteList.jsx",
          lineNumber: 29,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Notelist/NoteList.jsx",
        lineNumber: 14,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: note.content }, void 0, !1, {
        fileName: "app/components/Notelist/NoteList.jsx",
        lineNumber: 31,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Notelist/NoteList.jsx",
      lineNumber: 13,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Notelist/NoteList.jsx",
      lineNumber: 12,
      columnNumber: 11
    }, this) }, note.id, !1, {
      fileName: "app/components/Notelist/NoteList.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  ) }, void 0, !1, {
    fileName: "app/components/Notelist/NoteList.jsx",
    lineNumber: 9,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/components/Notelist/NoteList.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var NoteList_default2 = NoteList;
function links7() {
  return [{ rel: "stylesheet", href: NoteList_default }];
}

// app/routes/notes.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function NotesPage() {
  let notes = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(NewNote_default2, {}, void 0, !1, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 12,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(NoteList_default2, { notes }, void 0, !1, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 13,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
async function loader3() {
  let notes = await getStoredNotes();
  if (!notes || notes.length === 0)
    throw (0, import_node5.json)(
      { message: "Could not find any notes." },
      {
        status: 404,
        statusText: "Not Found"
      }
    );
  return notes;
}
async function action3({ request }) {
  let formData = await request.formData(), noteData = Object.fromEntries(formData);
  if (noteData.title.trim().length < 5)
    return { message: "Invalid title - must be at least 5 characters long." };
  let existingNotes = await getStoredNotes();
  noteData.id = (/* @__PURE__ */ new Date()).toISOString();
  let updatedNotes = existingNotes.concat(noteData);
  return await storeNotes(updatedNotes), (0, import_node5.redirect)("/notes");
}
function links8() {
  return [...links6(), ...links7()];
}
function meta3() {
  return {
    title: "All Notes",
    description: "Manage your notes with ease."
  };
}
function CatchBoundary2() {
  var _a;
  let message = ((_a = (0, import_react12.useCatch)().data) == null ? void 0 : _a.message) || "Data not found.";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(NewNote_default2, {}, void 0, !1, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "info-message", children: message }, void 0, !1, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.jsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}
function ErrorBoundary2({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("main", { className: "error", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { children: "An error related to your notes occurred!" }, void 0, !1, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react12.Link, { to: "/", children: "safety" }, void 0, !1, {
        fileName: "app/routes/notes.jsx",
        lineNumber: 81,
        columnNumber: 17
      }, this),
      "!"
    ] }, void 0, !0, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.jsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}

// app/routes/users.jsx
var users_exports = {};
__export(users_exports, {
  default: () => users_default,
  links: () => links9,
  loader: () => loader4
});
var import_react13 = require("@remix-run/react");
var import_react14 = require("@remix-run/react"), import_react15 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function UsersLIst() {
  let users = (0, import_react13.useLoaderData)(), navigate = (0, import_react15.useNavigate)(), handleEditUser = (id) => {
    navigate(`/users/${id}`);
  }, handleDeleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user record ?"))
      try {
        let res = await deleteUsers(id);
        navigate("/users");
      } catch (error) {
        console.error("Error deleting user:", error);
      }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "UsersHeading", children: "List Of All Users" }, void 0, !1, {
      fileName: "app/routes/users.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bodybtn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react14.Link, { to: "/adduserpage", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("buton", { className: "adduserbtn", children: "Add User" }, void 0, !1, {
      fileName: "app/routes/users.jsx",
      lineNumber: 29,
      columnNumber: 33
    }, this) }, void 0, !1, {
      fileName: "app/routes/users.jsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/users.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ul", { id: "note-list", children: users && users.map(
      (users2, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { className: "note", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("article", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("header", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ul", { className: "note-meta", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: users2.first_name }, void 0, !1, {
              fileName: "app/routes/users.jsx",
              lineNumber: 39,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: users2.gender }, void 0, !1, {
              fileName: "app/routes/users.jsx",
              lineNumber: 40,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/users.jsx",
            lineNumber: 38,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: users2.email }, void 0, !1, {
            fileName: "app/routes/users.jsx",
            lineNumber: 44,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react14.Link, { to: users2.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { onClick: () => handleEditUser(users2.id), className: "edit_icon", src: "/imgs/edit-icon.png", alt: "Edit Icon" }, void 0, !1, {
            fileName: "app/routes/users.jsx",
            lineNumber: 46,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/users.jsx",
            lineNumber: 45,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { onClick: () => handleDeleteUser(users2.id), className: "delete_icon", src: "/imgs/delete-icon.png", alt: "Edit Icon" }, void 0, !1, {
            fileName: "app/routes/users.jsx",
            lineNumber: 48,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/users.jsx",
          lineNumber: 37,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: users2.ip_address }, void 0, !1, {
          fileName: "app/routes/users.jsx",
          lineNumber: 50,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/users.jsx",
        lineNumber: 36,
        columnNumber: 15
      }, this) }, users2.id, !1, {
        fileName: "app/routes/users.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ) }, void 0, !1, {
      fileName: "app/routes/users.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/users.jsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
var users_default = UsersLIst;
async function loader4() {
  return await getAllUsers();
}
function links9() {
  return [{ rel: "stylesheet", href: NoteList_default }];
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-AXWEPT5H.js", imports: ["/build/_shared/chunk-SLEKSNGD.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-OFBR2F3W.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/adduserpage": { id: "routes/adduserpage", parentId: "root", path: "adduserpage", index: void 0, caseSensitive: void 0, module: "/build/routes/adduserpage-FPKVEPW4.js", imports: ["/build/_shared/chunk-MUIY54FV.js", "/build/_shared/chunk-6UH7E4TX.js", "/build/_shared/chunk-KZSXZLYW.js", "/build/_shared/chunk-VXBEBPVD.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-LKEH2FSI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-TEYHS5V6.js", imports: ["/build/_shared/chunk-6UH7E4TX.js", "/build/_shared/chunk-KZSXZLYW.js", "/build/_shared/chunk-FBHBAM77.js", "/build/_shared/chunk-VXBEBPVD.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/notes.$noteId": { id: "routes/notes.$noteId", parentId: "root", path: "notes/:noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.$noteId-FIVPGRXA.js", imports: ["/build/_shared/chunk-KZSXZLYW.js", "/build/_shared/chunk-VXBEBPVD.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/users": { id: "routes/users", parentId: "root", path: "users", index: void 0, caseSensitive: void 0, module: "/build/routes/users-GZ2PWGXX.js", imports: ["/build/_shared/chunk-FBHBAM77.js", "/build/_shared/chunk-VXBEBPVD.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/users.$user_id": { id: "routes/users.$user_id", parentId: "root", path: "users/:user_id", index: void 0, caseSensitive: void 0, module: "/build/routes/users.$user_id-ZBALAW3K.js", imports: ["/build/_shared/chunk-MUIY54FV.js", "/build/_shared/chunk-6UH7E4TX.js", "/build/_shared/chunk-KZSXZLYW.js", "/build/_shared/chunk-VXBEBPVD.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "729a3458", hmr: void 0, url: "/build/manifest-729A3458.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/users.$user_id": {
    id: "routes/users.$user_id",
    parentId: "root",
    path: "users/:user_id",
    index: void 0,
    caseSensitive: void 0,
    module: users_user_id_exports
  },
  "routes/notes.$noteId": {
    id: "routes/notes.$noteId",
    parentId: "root",
    path: "notes/:noteId",
    index: void 0,
    caseSensitive: void 0,
    module: notes_noteId_exports
  },
  "routes/adduserpage": {
    id: "routes/adduserpage",
    parentId: "root",
    path: "adduserpage",
    index: void 0,
    caseSensitive: void 0,
    module: adduserpage_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  },
  "routes/users": {
    id: "routes/users",
    parentId: "root",
    path: "users",
    index: void 0,
    caseSensitive: void 0,
    module: users_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
