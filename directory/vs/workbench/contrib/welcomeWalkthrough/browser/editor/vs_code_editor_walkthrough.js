define(de[3282], he([1, 0, 12, 78]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.default = w),
				(t = mt(t));
			function w(E) {
				const C = t.$r && !E.get(i.$r8).remoteAuthority;
				return `
## Interactive Editor Playground
The core editor in VS Code is packed with features.  This page highlights a number of them and lets you interactively try them out through the use of a number of embedded editors.  For full details on the editor features for VS Code and more head over to our [documentation](command:workbench.action.openDocumentationUrl).

* [Multi-cursor Editing](#multi-cursor-editing) - block selection, select all occurrences, add additional cursors and more.
* [IntelliSense](#intellisense) - get code assistance and parameter suggestions for your code and external modules.
* [Line Actions](#line-actions) - quickly move lines around to re-order your code.${
					C
						? ""
						: `
* [Rename Refactoring](#rename-refactoring) - quickly rename symbols across your code base.`
				}
* [Formatting](#formatting) - keep your code looking great with inbuilt document & selection formatting.
* [Code Folding](#code-folding) - focus on the most relevant parts of your code by folding other areas.
* [Errors and Warnings](#errors-and-warnings) - see errors and warnings as you type.
* [Snippets](#snippets) - spend less time typing with snippets.
* [Emmet](#emmet) - integrated Emmet support takes HTML and CSS editing to the next level.
* [JavaScript Type Checking](#javascript-type-checking) - perform type checking on your JavaScript file using TypeScript with zero configuration.



### Multi-Cursor Editing
Using multiple cursors allows you to edit multiple parts of the document at once, greatly improving your productivity.  Try the following actions in the code block below:
1. Box Selection - press <span class="mac-only windows-only">any combination of kb(cursorColumnSelectDown), kb(cursorColumnSelectRight), kb(cursorColumnSelectUp), kb(cursorColumnSelectLeft) to select a block of text. You can also press</span> <span class="shortcut mac-only">|\u21E7\u2325|</span><span class="shortcut windows-only linux-only">|Shift+Alt|</span> while selecting text with the mouse or drag-select using the middle mouse button.
2. Add a cursor - press kb(editor.action.insertCursorAbove) to add a new cursor above, or kb(editor.action.insertCursorBelow) to add a new cursor below. You can also use your mouse with <span class="shortcut"><span class="multi-cursor-modifier"></span>+Click</span> to add a cursor anywhere.
3. Create cursors on all occurrences of a string - select one instance of a string e.g. |background-color| and press kb(editor.action.selectHighlights).  Now you can replace all instances by simply typing.

That is the tip of the iceberg for multi-cursor editing. Have a look at the selection menu and our handy [keyboard reference guide](command:workbench.action.keybindingsReference) for additional actions.

|||css
#p1 {background-color: #ff0000;}                /* red in HEX format */
#p2 {background-color: hsl(120, 100%, 50%);}    /* green in HSL format */
#p3 {background-color: rgba(0, 4, 255, 0.733);} /* blue with alpha channel in RGBA format */
|||

> **CSS Tip:** You may have noticed in the example above we also provide color swatches inline for CSS, additionally if you hover over an element such as |#p1| we will show how this is represented in HTML.  These swatches also act as color pickers that allow you to easily change a color value.  A simple example of some language-specific editor features.

### IntelliSense

Visual Studio Code comes with the powerful IntelliSense for JavaScript and TypeScript pre-installed. In the below example, position the text cursor right after the dot and press kb(editor.action.triggerSuggest) to invoke IntelliSense.  Notice how the suggestions come from the Canvas API.

|||js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

context.strokeStyle = 'blue';
context.
|||

>**Tip:** While we ship JavaScript and TypeScript support out of the box other languages can be upgraded with better IntelliSense through one of the many [extensions](command:workbench.extensions.action.showPopularExtensions).


### Line Actions
Since it's very common to work with the entire text in a line we provide a set of useful shortcuts to help with this.
1. <span class="mac-only windows-only">Copy a line and insert it above or below the current position with kb(editor.action.copyLinesDownAction) or kb(editor.action.copyLinesUpAction) respectively.</span><span class="linux-only">Copy the entire current line when no text is selected with kb(editor.action.clipboardCopyAction).</span>
2. Move an entire line or selection of lines up or down with kb(editor.action.moveLinesUpAction) and kb(editor.action.moveLinesDownAction) respectively.
3. Delete the entire line with kb(editor.action.deleteLines).

|||json
{
	"name": "John",
	"age": 31,
	"city": "New York"
}
|||

>**Tip:** Another very common task is to comment out a block of code - you can toggle commenting by pressing kb(editor.action.commentLine).


${
	C
		? ""
		: `
### Rename Refactoring
It's easy to rename a symbol such as a function name or variable name.  Hit kb(editor.action.rename) while in the symbol |Book| to rename all instances - this will occur across all files in a project. You also have |Rename Symbol| in the right-click context menu.

|||js
// Reference the function
new Book("War of the Worlds", "H G Wells");
new Book("The Martian", "Andy Weir");

/**
 * Represents a book.
 *
 * @param {string} title Title of the book
 * @param {string} author Who wrote the book
 */
function Book(title, author) {
	this.title = title;
	this.author = author;
}
|||

> **JSDoc Tip:** VS Code's IntelliSense uses JSDoc comments to provide richer suggestions. The types and documentation from JSDoc comments show up when you hover over a reference to |Book| or in IntelliSense when you create a new instance of |Book|.

`
}
### Formatting
Keeping your code looking great is hard without a good formatter.  Luckily it's easy to format content, either for the entire document with kb(editor.action.formatDocument) or for the current selection with kb(editor.action.formatSelection).  Both of these options are also available through the right-click context menu.

|||js
const cars = ["\u{1F697}", "\u{1F699}", "\u{1F695}"];

for (const car of cars){
	// Drive the car
	console.log(|This is the car \${car}|);
}
|||

>**Tip:** Additional formatters are available in the [extension gallery](command:workbench.extensions.action.showPopularExtensions).  Formatting support can also be configured via [settings](command:workbench.action.openGlobalSettings) e.g. enabling |editor.formatOnSave|.


### Code Folding
In a large file it can often be useful to collapse sections of code to increase readability.  To do this, you can simply press kb(editor.fold) to fold or press kb(editor.unfold) to unfold the ranges at the current cursor position.  Folding can also be done with the down and right angle bracket icons in the left gutter.  To fold all sections use kb(editor.foldAll) or to unfold all use kb(editor.unfoldAll).

|||html
<div>
	<header>
		<ul>
			<li><a href=""></a></li>
			<li><a href=""></a></li>
		</ul>
	</header>
	<footer>
		<p></p>
	</footer>
</div>
|||

>**Tip:** Folding is based on indentation and as a result can apply to all languages.  Simply indent your code to create a foldable section you can fold a certain number of levels with shortcuts like kb(editor.foldLevel1) through to kb(editor.foldLevel5).

### Errors and Warnings
Errors and warnings are highlighted as you edit your code with squiggles.  In the sample below you can see a number of syntax errors.  By pressing kb(editor.action.marker.nextInFiles) you can navigate across them in sequence and see the detailed error message.  As you correct them the squiggles and scrollbar indicators will update.

|||js
// This code has a few syntax errors
Console.log(add(1, 1.5));


function Add(a, b)
	return a + b;
}
|||


###  Snippets
You can greatly accelerate your editing through the use of snippets.  Simply start typing |try| and select |trycatch| from the suggestion list and press kb(insertSnippet) to create a |try|->|catch| block.  Your cursor will be placed on the text |error| for easy editing.  If more than one parameter exists then press kb(jumpToNextSnippetPlaceholder) to jump to it.

|||js

|||

>**Tip:** The [extension gallery](command:workbench.extensions.action.showPopularExtensions) includes snippets for almost every framework and language imaginable.  You can also create your own [user-defined snippets](command:workbench.action.openSnippets).


### Emmet
Emmet takes the snippets idea to a whole new level: you can type CSS-like expressions that can be dynamically parsed, and produce output depending on what you type in the abbreviation. Try it by selecting |Emmet: Expand Abbreviation| from the |Edit| menu with the cursor at the end of a valid Emmet abbreviation or snippet and the expansion will occur.

|||html
ul>li.item$*5
|||

>**Tip:** The [Emmet cheat sheet](https://docs.emmet.io/cheat-sheet/) is a great source of Emmet syntax suggestions. To expand Emmet abbreviations and snippets using the |tab| key use the |emmet.triggerExpansionOnTab| [setting](command:workbench.action.openGlobalSettings). Check out the docs on [Emmet in VS Code](https://code.visualstudio.com/docs/editor/emmet) to learn more.



### JavaScript Type Checking
Sometimes type checking your JavaScript code can help you spot mistakes you might have not caught otherwise. You can run the TypeScript type checker against your existing JavaScript code by simply adding a |// @ts-check| comment to the top of your file.

|||js
// @ts-nocheck

let easy = true;
easy = 42;
|||

>**Tip:** You can also enable the checks workspace or application wide by adding |"js/ts.implicitProjectConfig.checkJs": true| to your workspace or user settings and explicitly ignoring files or lines using |// @ts-nocheck| and |// @ts-expect-error|. Check out the docs on [JavaScript in VS Code](https://code.visualstudio.com/docs/languages/javascript) to learn more.


## Thanks!
Well if you have got this far then you will have touched on some of the editing features in Visual Studio Code.  But don't stop now :)  We have lots of additional [documentation](https://code.visualstudio.com/docs), [introductory videos](https://code.visualstudio.com/docs/getstarted/introvideos) and [tips and tricks](https://go.microsoft.com/fwlink/?linkid=852118) for the product that will help you learn how to use it.  And while you are here, here are a few additional things you can try:
- Open the Integrated Terminal by pressing kb(workbench.action.terminal.toggleTerminal), then see what's possible by [reviewing the terminal documentation](https://code.visualstudio.com/docs/editor/integrated-terminal)
- Work with version control by pressing kb(workbench.view.scm). Understand how to stage, commit, change branches, and view diffs and more by reviewing the [version control documentation](https://code.visualstudio.com/docs/editor/versioncontrol)
- Browse thousands of extensions in our integrated gallery by pressing kb(workbench.view.extensions). The [documentation](https://code.visualstudio.com/docs/editor/extension-gallery) will show you how to see the most popular extensions, disable installed ones and more.

That's all for now,

Happy Coding! \u{1F389}

`.replace(/\|/g, "`");
			}
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3283],
		he([1, 0, 3282, 4, 18, 5, 1277, 23, 11, 99, 1276]),
		function (ce, e, t, i, w, E, C, d, m, r, u) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$yYc = e.$xYc = void 0),
				(t = xi(t)),
				u.$lYc.registerProvider(
					"vs/workbench/contrib/welcomeWalkthrough/browser/editor/vs_code_editor_walkthrough",
					t.default,
				);
			const a = "workbench.editors.walkThroughInput",
				h = {
					typeId: a,
					name: (0, i.localize)(11657, null),
					resource: d.$7g
						.asBrowserUri(
							"vs/workbench/contrib/welcomeWalkthrough/browser/editor/vs_code_editor_walkthrough.md",
						)
						.with({
							scheme: d.Schemas.walkThrough,
							query: JSON.stringify({
								moduleId:
									"vs/workbench/contrib/welcomeWalkthrough/browser/editor/vs_code_editor_walkthrough",
							}),
						}),
					telemetryFrom: "walkThrough",
				};
			class c extends m.$3X {
				static {
					this.ID = "workbench.action.showInteractivePlayground";
				}
				static {
					this.LABEL = (0, i.localize2)(11658, "Interactive Editor Playground");
				}
				constructor() {
					super({
						id: c.ID,
						title: c.LABEL,
						category: r.$ck.Help,
						f1: !0,
						metadata: {
							description: (0, i.localize2)(
								11659,
								"Opens an interactive playground for learning about the editor.",
							),
						},
					});
				}
				run(p) {
					const o = p.get(w.$IY),
						b = p.get(E.$Li).createInstance(C.$oYc, h);
					return o.openEditor(b, { pinned: !0 }).then(() => {});
				}
			}
			e.$xYc = c;
			class n {
				static {
					this.ID = a;
				}
				canSerialize(p) {
					return !0;
				}
				serialize(p) {
					return "";
				}
				deserialize(p) {
					return p.createInstance(C.$oYc, h);
				}
			}
			e.$yYc = n;
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3284],
		he([1, 0, 111, 3, 57, 2948, 20, 78, 34]),
		function (ce, e, t, i, w, E, C, d, m) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ivc = void 0),
				(t = xi(t));
			let r = class extends i.$1c {
				constructor(a, h) {
					super(),
						(this.a = a),
						(this.b = h),
						(this.model = this.D(new E.$hvc())),
						(this.onWillShowDialog = this.model.onWillShowDialog),
						(this.onDidShowDialog = this.model.onDidShowDialog);
				}
				c() {
					return this.a.isExtensionDevelopment &&
						this.a.extensionTestsLocationURI
						? !0
						: !!this.a.enableSmokeTestDriver;
				}
				async confirm(a) {
					return this.c()
						? (this.b.trace(
								"DialogService: refused to show confirmation dialog in tests.",
							),
							{ confirmed: !0 })
						: await this.model.show({ confirmArgs: { confirmation: a } })
								.result;
				}
				async prompt(a) {
					if (this.c())
						throw new Error(
							`DialogService: refused to show dialog in tests. Contents: ${a.message}`,
						);
					const c = await this.model.show({ promptArgs: { prompt: a } }).result;
					return { result: await c.result, checkboxChecked: c.checkboxChecked };
				}
				async input(a) {
					if (this.c())
						throw new Error(
							"DialogService: refused to show input dialog in tests.",
						);
					return await this.model.show({ inputArgs: { input: a } }).result;
				}
				async info(a, h) {
					await this.prompt({ type: t.default.Info, message: a, detail: h });
				}
				async warn(a, h) {
					await this.prompt({ type: t.default.Warning, message: a, detail: h });
				}
				async error(a, h) {
					await this.prompt({ type: t.default.Error, message: a, detail: h });
				}
				async customError(a, h) {
					await this.prompt({
						type: t.default.Error,
						message: a,
						detail: h,
						custom: !0,
					});
				}
				async about() {
					if (this.c())
						throw new Error(
							"DialogService: refused to show about dialog in tests.",
						);
					await this.model.show({}).result;
				}
			};
			(e.$ivc = r),
				(e.$ivc = r = Ne([j(0, d.$r8), j(1, m.$ik)], r)),
				(0, C.$lK)(w.$GO, r, C.InstantiationType.Delayed);
		},
	),
		define(
			de[151],
			he([1, 0, 113, 5, 1178, 138, 23, 19]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vcd = e.$ucd = void 0),
					(e.$ucd = (0, i.$Ni)(t.$Ti));
				class m extends w.$in {
					get mainPid() {
						return this.d.mainPid;
					}
					get machineId() {
						return this.d.machineId;
					}
					get macMachineId() {
						return this.d.macMachineId;
					}
					get sqmId() {
						return this.d.sqmId;
					}
					get devDeviceId() {
						return this.d.devDeviceId;
					}
					get remoteAuthority() {
						return this.d.remoteAuthority;
					}
					get expectsResolverExtension() {
						return !!this.d.remoteAuthority?.includes("+");
					}
					get execPath() {
						return this.d.execPath;
					}
					get backupPath() {
						return this.d.backupPath;
					}
					get window() {
						return {
							id: this.d.windowId,
							colorScheme: this.d.colorScheme,
							maximized: this.d.maximized,
							accessibilitySupport: this.d.accessibilitySupport,
							perfMarks: this.d.perfMarks,
							isInitialStartup: this.d.isInitialStartup,
							isCodeCaching: typeof this.d.codeCachePath == "string",
						};
					}
					get shadowWindowForWorkspaceId() {
						return this.d.shadowWindowForWorkspaceId;
					}
					get windowLogsPath() {
						return (0, d.$nh)(this.logsHome, `window${this.d.windowId}`);
					}
					get logFile() {
						return (0, d.$nh)(this.windowLogsPath, "renderer.log");
					}
					get extHostLogsPath() {
						return (0, d.$nh)(this.windowLogsPath, "exthost");
					}
					get extHostTelemetryLogFile() {
						return (0, d.$nh)(this.extHostLogsPath, "extensionTelemetry.log");
					}
					get webviewExternalEndpoint() {
						return `${C.Schemas.vscodeWebview}://{{uuid}}`;
					}
					get skipReleaseNotes() {
						return !!this.args["skip-release-notes"];
					}
					get skipWelcome() {
						return !!this.args["skip-welcome"];
					}
					get skipOnboarding() {
						return !!this.args["skip-onboarding"];
					}
					get overrideCursorAuthToken() {
						return this.args["override-cursor-auth-token"];
					}
					get logExtensionHostCommunication() {
						return !!this.args.logExtensionHostCommunication;
					}
					get enableSmokeTestDriver() {
						return !!this.args["enable-smoke-test-driver"];
					}
					get extensionEnabledProposedApi() {
						if (Array.isArray(this.args["enable-proposed-api"]))
							return this.args["enable-proposed-api"];
						if ("enable-proposed-api" in this.args) return [];
					}
					get os() {
						return this.d.os;
					}
					get filesToOpenOrCreate() {
						return this.d.filesToOpenOrCreate;
					}
					get filesToDiff() {
						return this.d.filesToDiff;
					}
					get filesToMerge() {
						return this.d.filesToMerge;
					}
					get filesToWait() {
						return this.d.filesToWait;
					}
					constructor(u, a) {
						super(
							u,
							{
								homeDir: u.homeDir,
								tmpDir: u.tmpDir,
								userDataDir: u.userDataDir,
							},
							a,
						),
							(this.d = u);
					}
				}
				(e.$vcd = m),
					Ne([E.$ei], m.prototype, "mainPid", null),
					Ne([E.$ei], m.prototype, "machineId", null),
					Ne([E.$ei], m.prototype, "macMachineId", null),
					Ne([E.$ei], m.prototype, "sqmId", null),
					Ne([E.$ei], m.prototype, "devDeviceId", null),
					Ne([E.$ei], m.prototype, "remoteAuthority", null),
					Ne([E.$ei], m.prototype, "expectsResolverExtension", null),
					Ne([E.$ei], m.prototype, "execPath", null),
					Ne([E.$ei], m.prototype, "backupPath", null),
					Ne([E.$ei], m.prototype, "window", null),
					Ne([E.$ei], m.prototype, "shadowWindowForWorkspaceId", null),
					Ne([E.$ei], m.prototype, "windowLogsPath", null),
					Ne([E.$ei], m.prototype, "logFile", null),
					Ne([E.$ei], m.prototype, "extHostLogsPath", null),
					Ne([E.$ei], m.prototype, "extHostTelemetryLogFile", null),
					Ne([E.$ei], m.prototype, "webviewExternalEndpoint", null),
					Ne([E.$ei], m.prototype, "skipReleaseNotes", null),
					Ne([E.$ei], m.prototype, "skipWelcome", null),
					Ne([E.$ei], m.prototype, "skipOnboarding", null),
					Ne([E.$ei], m.prototype, "overrideCursorAuthToken", null),
					Ne([E.$ei], m.prototype, "logExtensionHostCommunication", null),
					Ne([E.$ei], m.prototype, "enableSmokeTestDriver", null),
					Ne([E.$ei], m.prototype, "extensionEnabledProposedApi", null),
					Ne([E.$ei], m.prototype, "os", null),
					Ne([E.$ei], m.prototype, "filesToOpenOrCreate", null),
					Ne([E.$ei], m.prototype, "filesToDiff", null),
					Ne([E.$ei], m.prototype, "filesToMerge", null),
					Ne([E.$ei], m.prototype, "filesToWait", null);
			},
		),
		define(
			de[3285],
			he([1, 0, 4, 22, 9, 151, 110, 23, 11, 119, 99]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9fd = e.$8fd = void 0);
				class a extends m.$3X {
					constructor() {
						super({
							id: "workbench.extensions.action.openExtensionsFolder",
							title: (0, t.localize2)(6615, "Open Extensions Folder"),
							category: r.$Mp,
							f1: !0,
						});
					}
					async run(n) {
						const g = n.get(C.$y7c),
							p = n.get(i.$ll),
							o = n.get(E.$ucd),
							f = w.URI.file(o.extensionsPath),
							b = await p.resolve(f);
						let s;
						if (
							(b.children && b.children.length > 0
								? (s = b.children[0].resource)
								: (s = f),
							s.scheme === d.Schemas.file)
						)
							return g.showItemInFolder(s.fsPath);
					}
				}
				e.$8fd = a;
				class h extends m.$3X {
					constructor() {
						super({
							id: "_workbench.extensions.action.cleanUpExtensionsFolder",
							title: (0, t.localize2)(6616, "Cleanup Extensions Folder"),
							category: u.$ck.Developer,
							f1: !0,
						});
					}
					async run(n) {
						return n.get(r.$Hp).cleanUp();
					}
				}
				e.$9fd = h;
			},
		),
		define(
			de[1806],
			he([1, 0, 62, 50, 9, 5, 4, 33, 327, 19, 57, 41, 110, 151, 941, 22, 76]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Wfd = void 0),
					(e.$Xfd = b);
				class o {
					static fromExtension($) {
						let v;
						if ($.bugs && typeof $.bugs.url == "string") {
							const S = w.URI.parse($.bugs.url),
								I = /\/([^/]+)\/([^/]+)\/issues\/?$/.exec($.bugs.url);
							I &&
								(v = {
									base: S.with({
										path: null,
										fragment: null,
										query: null,
									}).toString(!0),
									owner: I[1],
									repo: I[2],
								});
						}
						if (!v && $.repository && typeof $.repository.url == "string") {
							const S = w.URI.parse($.repository.url),
								I = /\/([^/]+)\/([^/]+)(\.git)?$/.exec($.repository.url);
							I &&
								(v = {
									base: S.with({
										path: null,
										fragment: null,
										query: null,
									}).toString(!0),
									owner: I[1],
									repo: I[2],
								});
						}
						return v && v.base.indexOf("github") === -1 && (v = void 0), v;
					}
				}
				let f = class extends i.$rj {
					constructor($, v, S) {
						super(
							"report.slow",
							(0, C.localize)(6619, null),
							"extension-action report-issue",
						),
							(this.extension = $),
							(this.profile = v),
							(this.a = S),
							(this.enabled = !!o.fromExtension($));
					}
					async run() {
						const $ = await this.a.invokeFunction(
							b,
							this.extension,
							this.profile,
						);
						$ && (await $.run());
					}
				};
				(e.$Wfd = f), (e.$Wfd = f = Ne([j(2, E.$Li)], f));
				async function b(y, $, v) {
					const S = o.fromExtension($);
					if (!S) return;
					const I = y.get(m.$Aq),
						T = y.get(E.$Li),
						P = `https://api.github.com/search/issues?q=is:issue+state:open+in:title+repo:${S.owner}/${S.repo}+%22Extension+causes+high+cpu+load%22`;
					let k;
					try {
						k = await I.request({ url: P }, d.CancellationToken.None);
					} catch {
						return;
					}
					const L = await (0, m.$Eq)(k);
					if (!L) return;
					const D = JSON.parse(L);
					if (!(!D || typeof D.total_count != "number"))
						return D.total_count === 0
							? T.createInstance(s, $, S, v)
							: T.createInstance(l, $, S, v);
				}
				let s = class extends i.$rj {
					constructor($, v, S, I, T, P, k, L, D) {
						super("report.slow", (0, C.localize)(6620, null)),
							(this.extension = $),
							(this.repoInfo = v),
							(this.profile = S),
							(this.a = I),
							(this.b = T),
							(this.c = P),
							(this.f = k),
							(this.g = L),
							(this.h = D);
					}
					async run() {
						const $ = n.Utils.rewriteAbsolutePaths(
								this.profile.data,
								"pii_removed",
							),
							v = (0, r.$nh)(
								this.g.tmpDir,
								`${this.extension.identifier.value}-unresponsive.cpuprofile.txt`,
							);
						await this.h.writeFile(
							v,
							p.$Te.fromString(JSON.stringify($, void 0, 4)),
						);
						const S = await this.f.getOSProperties(),
							I = encodeURIComponent("Extension causes high cpu load"),
							T = `${S.type} ${S.arch} ${S.release}`,
							P = `:warning: Make sure to **attach** this file from your *home*-directory:
:warning:\`${v}\`

Find more details here: https://github.com/microsoft/vscode/wiki/Explain-extension-causes-high-cpu-load`,
							k = encodeURIComponent(`- Issue Type: \`Performance\`
- Extension Name: \`${this.extension.name}\`
- Extension Version: \`${this.extension.version}\`
- OS Version: \`${T}\`
- Cursor version: \`${this.c.version}\`
- VS Code version: \`${this.c.vscodeVersion}\`

${P}`),
							L = `${this.repoInfo.base}/${this.repoInfo.owner}/${this.repoInfo.repo}/issues/new/?body=${k}&title=${I}`;
						this.b.open(w.URI.parse(L)),
							this.a.info(
								(0, C.localize)(6621, null),
								(0, C.localize)(6622, null, v.fsPath),
							);
					}
				};
				s = Ne(
					[
						j(3, u.$GO),
						j(4, a.$7rb),
						j(5, t.$Bk),
						j(6, h.$y7c),
						j(7, c.$ucd),
						j(8, g.$ll),
					],
					s,
				);
				let l = class extends i.$rj {
					constructor($, v, S, I, T, P, k) {
						super("show.slow", (0, C.localize)(6623, null)),
							(this.extension = $),
							(this.repoInfo = v),
							(this.profile = S),
							(this.a = I),
							(this.b = T),
							(this.c = P),
							(this.f = k);
					}
					async run() {
						const $ = n.Utils.rewriteAbsolutePaths(
								this.profile.data,
								"pii_removed",
							),
							v = (0, r.$nh)(
								this.c.tmpDir,
								`${this.extension.identifier.value}-unresponsive.cpuprofile.txt`,
							);
						await this.f.writeFile(
							v,
							p.$Te.fromString(JSON.stringify($, void 0, 4)),
						);
						const S = `${this.repoInfo.base}/${this.repoInfo.owner}/${this.repoInfo.repo}/issues?utf8=\u2713&q=is%3Aissue+state%3Aopen+%22Extension+causes+high+cpu+load%22`;
						this.b.open(w.URI.parse(S)),
							this.a.info(
								(0, C.localize)(6624, null),
								(0, C.localize)(6625, null, v.fsPath),
							);
					}
				};
				l = Ne([j(3, u.$GO), j(4, a.$7rb), j(5, c.$ucd), j(6, g.$ll)], l);
			},
		),
		define(
			de[3286],
			he([1, 0, 139, 344, 20, 769, 62, 51, 35, 151, 376, 75]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hgd = void 0);
				let h = class {
					constructor(g, p, o, f) {
						(this.a = g), (this.b = p), (this.c = o), (this.d = f);
					}
					openProcessExplorer() {
						const g = this.b.getColorTheme(),
							p = {
								pid: this.c.mainPid,
								zoomLevel: (0, t.$Hfb)(a.$Bfb),
								styles: {
									backgroundColor: c(g, d.$8P),
									color: c(g, d.$9P),
									listHoverBackground: c(g, d.$MS),
									listHoverForeground: c(g, d.$NS),
									listFocusBackground: c(g, d.$AS),
									listFocusForeground: c(g, d.$BS),
									listFocusOutline: c(g, d.$CS),
									listActiveSelectionBackground: c(g, d.$ES),
									listActiveSelectionForeground: c(g, d.$FS),
									listHoverOutline: c(g, d.$PP),
									scrollbarShadowColor: c(g, d.$3P),
									scrollbarSliderActiveBackgroundColor: c(g, d.$6P),
									scrollbarSliderBackgroundColor: c(g, d.$4P),
									scrollbarSliderHoverBackgroundColor: c(g, d.$5P),
								},
								platform: i.$ic,
								applicationName: this.d.applicationName,
							};
						return this.a.openProcessExplorer(p);
					}
				};
				(e.$hgd = h),
					(e.$hgd = h =
						Ne([j(0, E.$5Xb), j(1, m.$iP), j(2, r.$ucd), j(3, C.$Bk)], h));
				function c(n, g) {
					const p = n.getColor(g);
					return p ? p.toString() : void 0;
				}
				(0, w.$lK)(u.$8Xb, h, w.InstantiationType.Delayed);
			},
		),
		define(
			de[3287],
			he([1, 0, 4, 11, 376, 31, 99, 113, 57, 110, 84, 769, 40, 3286, 1736]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class c extends i.$3X {
					static {
						this.ID = "workbench.action.openProcessExplorer";
					}
					constructor() {
						super({
							id: c.ID,
							title: (0, t.localize2)(7324, "Open Process Explorer"),
							category: C.$ck.Developer,
							f1: !0,
						});
					}
					async run(o) {
						return o.get(w.$8Xb).openProcessExplorer();
					}
				}
				(0, i.$4X)(c),
					i.$ZX.appendMenuItem(i.$XX.MenubarHelpMenu, {
						group: "5_tools",
						command: { id: c.ID, title: (0, t.localize)(7317, null) },
						order: 2,
					});
				class n extends i.$3X {
					static {
						this.ID = "workbench.action.toggleCPUProfiler";
					}
					constructor() {
						super({
							id: n.ID,
							title: (0, t.localize2)(7325, "Start CPU Profiler"),
							category: C.$ck.Developer,
							f1: !0,
						});
					}
					async run(o) {
						const f = o.get(h.$4N),
							b = o.get(a.$5Xb),
							s = o.get(u.$8N),
							l = async () => {
								await s.withProgress(
									{
										location: u.ProgressLocation.Dialog,
										title: (0, t.localize)(7318, null),
										cancellable: !1,
										detail: (0, t.localize)(7319, null),
									},
									() => b.stopProfiler(),
								);
							};
						if (await b.isProfilerRunning()) {
							await l();
							return;
						}
						await b.startProfiler();
						const y = {
								id: "stopCPUProfiler",
								label: "Stop",
								tooltip: "Stop",
								enabled: !0,
								class: "codicon codicon-stop",
								run: async () => {
									(y.enabled = !1), await l(), $.close();
								},
							},
							$ = await f.notify({
								severity: h.Severity.Info,
								message: "CPU Profiler is running",
								progress: { infinite: !0 },
								actions: { primary: [y] },
							});
					}
				}
				(0, i.$4X)(n);
				class g extends i.$3X {
					static {
						this.ID = "workbench.action.stopTracing";
					}
					constructor() {
						super({
							id: g.ID,
							title: (0, t.localize2)(7326, "Stop Tracing"),
							category: C.$ck.Developer,
							f1: !0,
						});
					}
					async run(o) {
						const f = o.get(a.$5Xb),
							b = o.get(d.$Ui),
							s = o.get(m.$GO),
							l = o.get(r.$y7c),
							y = o.get(u.$8N);
						if (!b.args.trace) {
							const { confirmed: $ } = await s.confirm({
								message: (0, t.localize)(7320, null),
								primaryButton: (0, t.localize)(7321, null),
							});
							if ($) return l.relaunch({ addArgs: ["--trace"] });
						}
						await y.withProgress(
							{
								location: u.ProgressLocation.Dialog,
								title: (0, t.localize)(7322, null),
								cancellable: !1,
								detail: (0, t.localize)(7323, null),
							},
							() => f.stopTracing(),
						);
					}
				}
				(0, i.$4X)(g),
					E.$fk.registerCommand("_issues.getSystemStatus", (p) =>
						p.get(a.$5Xb).getSystemStatus(),
					);
			},
		),
		define(
			de[3288],
			he([1, 0, 50, 4, 110, 151, 22, 19, 23]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Sfd = e.$Rfd = void 0),
					(i = mt(i));
				let r = class extends t.$rj {
					static {
						this.ID = "workbench.action.openLogsFolder";
					}
					static {
						this.TITLE = i.localize2(7437, "Open Logs Folder");
					}
					constructor(h, c, n, g) {
						super(h, c), (this.a = n), (this.b = g);
					}
					run() {
						return this.b.showItemInFolder(
							(0, d.$nh)(this.a.logsHome, "main.log").with({
								scheme: m.Schemas.file,
							}).fsPath,
						);
					}
				};
				(e.$Rfd = r), (e.$Rfd = r = Ne([j(2, E.$ucd), j(3, w.$y7c)], r));
				let u = class extends t.$rj {
					static {
						this.ID = "workbench.action.openExtensionLogsFolder";
					}
					static {
						this.TITLE = i.localize2(7438, "Open Extension Logs Folder");
					}
					constructor(h, c, n, g, p) {
						super(h, c), (this.a = n), (this.b = g), (this.c = p);
					}
					async run() {
						const h = await this.b.resolve(this.a.extHostLogsPath);
						if (h.children && h.children[0])
							return this.c.showItemInFolder(
								h.children[0].resource.with({ scheme: m.Schemas.file }).fsPath,
							);
					}
				};
				(e.$Sfd = u),
					(e.$Sfd = u = Ne([j(2, E.$ucd), j(3, C.$ll), j(4, w.$y7c)], u));
			},
		),
		