import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/keybindingParser.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/common/languages.js';
import '../../../../editor/common/languages/supports/tokenization.js';
import '../../../../editor/common/languages/language.js';
import '../../../../nls.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/request/common/request.js';
import '../../markdown/browser/markdownDocumentRenderer.js';
import '../../webviewPanel/browser/webviewWorkbenchService.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../platform/telemetry/common/telemetryUtils.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../base/common/lifecycle.js';
import '../../markdown/browser/markdownSettingRenderer.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/network.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../base/common/marked/marked.js';
import '../../../../css!vs/workbench/contrib/update/browser/media/releasenoteseditor.js';
define(
			de[3777],
			he([
				1, 0, 33, 29, 94, 918, 37, 9, 47, 74, 913, 61, 4, 113, 39, 41, 62, 327,
				1738, 623, 66, 18, 53, 269, 10, 32, 3, 3759, 5, 23, 65, 434, 2531,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_Xc = void 0),
					(h = mt(h));
				let M = class {
					constructor(A, R, O, B, U, z, F, x, H, q, V, G, K) {
						(this.g = A),
							(this.h = R),
							(this.i = O),
							(this.j = B),
							(this.k = U),
							(this.l = z),
							(this.m = F),
							(this.n = x),
							(this.o = H),
							(this.p = q),
							(this.q = V),
							(this.r = G),
							(this.s = K),
							(this.b = new Map()),
							(this.c = void 0),
							(this.f = new I.$Zc()),
							r.$lM.onDidChange(() => this.t()),
							z.onDidChangeConfiguration(this.A, this, this.f),
							q.onDidChangeActiveWebviewEditor(this.B, this, this.f),
							(this.a = this.s.createInstance(T.$$Xc));
					}
					async t() {
						if (!this.c || !this.d) return;
						const A = await this.z(this.d);
						this.c && this.c.webview.setHtml(A);
					}
					async show(A, R) {
						const O = await this.u(A, R);
						this.d = O;
						const B = await this.z(O),
							U = h.localize(11055, null, A),
							z = this.m.activeEditorPane;
						if (this.c)
							this.c.setName(U),
								this.c.webview.setHtml(B),
								this.p.revealWebview(
									this.c,
									z ? z.group : this.n.activeGroup,
									!1,
								);
						else {
							(this.c = this.p.openWebview(
								{
									title: U,
									options: {
										tryRestoreScrollPosition: !0,
										enableFindWidget: !0,
										disableServiceWorker: !0,
									},
									contentOptions: { localResourceRoots: [], allowScripts: !0 },
									extension: void 0,
								},
								"releaseNotes",
								U,
								{ group: l.$JY, preserveFocus: !1 },
							)),
								this.c.webview.onDidClickLink((x) => this.v(d.URI.parse(x)));
							const F = new I.$Zc();
							F.add(
								this.c.webview.onMessage((x) => {
									if (x.message.type === "showReleaseNotes")
										this.l.updateValue(
											"update.showReleaseNotes",
											x.message.value,
										);
									else if (x.message.type === "clickSetting") {
										const H =
												this.c?.webview.container.offsetLeft +
												x.message.value.x,
											q =
												this.c?.webview.container.offsetTop + x.message.value.y;
										this.a.updateSetting(
											d.URI.parse(x.message.value.uri),
											H,
											q,
										);
									}
								}),
							),
								F.add(
									this.c.onWillDispose(() => {
										F.dispose(), (this.c = void 0);
									}),
								),
								this.c.webview.setHtml(B);
						}
						return !0;
					}
					async u(A, R) {
						const O = /^(\d+\.\d+)\./.exec(A);
						if (!O) throw new Error("not found");
						const z = `https://code.visualstudio.com/raw/v${O[1].replace(/\./g, "_")}.md`,
							F = h.localize(11056, null),
							x = (V) => (0, C.$nf)(V).replace(/\\/g, "\\\\"),
							H = (V) => {
								const G = (X, Y) => {
										const ie = this.h.lookupKeybinding(Y);
										return (ie && ie.getLabel()) || F;
									},
									K = (X, Y) => {
										const ie = E.$Xpb.parseKeybinding(Y);
										if (!ie) return F;
										const ne = this.h.resolveKeybinding(ie);
										return ne.length === 0 ? F : ne[0].getLabel() || F;
									},
									J = (X, Y) => {
										const ie = G(X, Y);
										return ie && `<code title="${Y}">${x(ie)}</code>`;
									},
									W = (X, Y) => {
										const ie = K(X, Y);
										return ie && `<code title="${Y}">${x(ie)}</code>`;
									};
								return V.replace(/`kb\(([a-z.\d\-]+)\)`/gi, J)
									.replace(/`kbstyle\(([^\)]+)\)`/gi, W)
									.replace(/kb\(([a-z.\d\-]+)\)/gi, (X, Y) =>
										(0, w.$gl)(G(X, Y)),
									)
									.replace(/kbstyle\(([^\)]+)\)/gi, (X, Y) =>
										(0, w.$gl)(K(X, Y)),
									);
							},
							q = async () => {
								let V;
								try {
									if (R) {
										const G = this.o
											.getActiveCodeEditor()
											?.getModel()
											?.getValue();
										V = G ? G.substring(G.indexOf("#")) : void 0;
									} else
										V = await (0, o.$Fq)(
											await this.k.request(
												{ url: z },
												t.CancellationToken.None,
											),
										);
								} catch {
									throw new Error("Failed to fetch release notes");
								}
								if (!V || (!/^#\s/.test(V) && !R))
									throw new Error("Invalid release notes");
								return H(V);
							};
						return R
							? q()
							: (this.b.has(A) ||
									this.b.set(
										A,
										(async () => {
											try {
												return await q();
											} catch (V) {
												throw (this.b.delete(A), V);
											}
										})(),
									),
								this.b.get(A));
					}
					async v(A) {
						A.scheme === k.Schemas.codeSetting ||
							this.w(A, "ReleaseNotes")
								.then((R) =>
									this.j.open(R, {
										allowCommands: ["workbench.action.openSettings"],
									}),
								)
								.then(void 0, i.$4);
					}
					async w(A, R, O = "1") {
						return (0, $.$Xp)(this.r, this.g) &&
							(0, $.$Zp)(this.l) === S.TelemetryLevel.USAGE &&
							A.scheme === "https" &&
							A.authority === "code.visualstudio.com"
							? A.with({
									query: `${A.query ? A.query + "&" : ""}utm_source=VsCode&utm_medium=${encodeURIComponent(R)}&utm_content=${encodeURIComponent(O)}`,
								})
							: A;
					}
					async z(A) {
						const R = (0, m.$9g)(),
							O = new D.marked.Renderer();
						O.html = this.a.getHtmlRenderer();
						const B = await (0, f.$nTc)(A, this.q, this.i, {
								shouldSanitize: !1,
								renderer: O,
							}),
							U = r.$lM.getColorMap(),
							z = U ? (0, u.$M2b)(U) : "",
							F = !!this.l.getValue("update.showReleaseNotes");
						return `<!DOCTYPE html>
		<html>
			<head>
				<base href="https://code.visualstudio.com/raw/">
				<meta http-equiv="Content-type" content="text/html;charset=UTF-8">
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src https: data:; media-src https:; style-src 'nonce-${R}' https://code.visualstudio.com; script-src 'nonce-${R}';">
				<style nonce="${R}">
					${f.$mTc}
					${z}

					/* codesetting */

					code:has(.codesetting)+code {
						display: none;
					}

					code:has(.codesetting) {
						background-color: var(--vscode-textPreformat-background);
						color: var(--vscode-textPreformat-foreground);
						padding-left: 1px;
						margin-right: 3px;
						padding-right: 0px;
					}

					code:has(.codesetting):focus {
						border: 1px solid var(--vscode-button-border, transparent);
					}

					.codesetting {
						color: var(--vscode-textPreformat-foreground);
						padding: 0px 1px 1px 0px;
						font-size: 0px;
						overflow: hidden;
						text-overflow: ellipsis;
						outline-offset: 2px !important;
						box-sizing: border-box;
						text-align: center;
						cursor: pointer;
						display: inline;
						margin-right: 3px;
					}
					.codesetting svg {
						font-size: 12px;
						text-align: center;
						cursor: pointer;
						border: 1px solid var(--vscode-button-secondaryBorder, transparent);
						outline: 1px solid transparent;
						line-height: 9px;
						margin-bottom: -5px;
						padding-left: 0px;
						padding-top: 2px;
						padding-bottom: 2px;
						padding-right: 2px;
						display: inline-block;
						text-decoration: none;
						text-rendering: auto;
						text-transform: none;
						-webkit-font-smoothing: antialiased;
						-moz-osx-font-smoothing: grayscale;
						user-select: none;
						-webkit-user-select: none;
					}
					.codesetting .setting-name {
						font-size: 13px;
						padding-left: 2px;
						padding-right: 3px;
						padding-top: 1px;
						padding-bottom: 1px;
						margin-left: -5px;
						margin-top: -3px;
					}
					.codesetting:hover {
						color: var(--vscode-textPreformat-foreground) !important;
						text-decoration: none !important;
					}
					code:has(.codesetting):hover {
						filter: brightness(140%);
						text-decoration: none !important;
					}
					.codesetting:focus {
						outline: 0 !important;
						text-decoration: none !important;
						color: var(--vscode-button-hoverForeground) !important;
					}
					.codesetting .separator {
						width: 1px;
						height: 14px;
						margin-bottom: -3px;
						display: inline-block;
						background-color: var(--vscode-editor-background);
						font-size: 12px;
						margin-right: 8px;
					}

					header { display: flex; align-items: center; padding-top: 1em; }
				</style>
			</head>
			<body>
				${B}
				<script nonce="${R}">
					const vscode = acquireVsCodeApi();
					const container = document.createElement('p');
					container.style.display = 'flex';
					container.style.alignItems = 'center';

					const input = document.createElement('input');
					input.type = 'checkbox';
					input.id = 'showReleaseNotes';
					input.checked = ${F};
					container.appendChild(input);

					const label = document.createElement('label');
					label.htmlFor = 'showReleaseNotes';
					label.textContent = '${h.localize(11057, null)}';
					container.appendChild(label);

					const beforeElement = document.querySelector("body > h1")?.nextElementSibling;
					if (beforeElement) {
						document.body.insertBefore(container, beforeElement);
					} else {
						document.body.appendChild(container);
					}

					window.addEventListener('message', event => {
						if (event.data.type === 'showReleaseNotes') {
							input.checked = event.data.value;
						}
					});

					window.addEventListener('click', event => {
						const href = event.target.href ?? event.target.parentElement?.href ?? event.target.parentElement?.parentElement?.href;
						if (href && (href.startsWith('${k.Schemas.codeSetting}'))) {
							vscode.postMessage({ type: 'clickSetting', value: { uri: href, x: event.clientX, y: event.clientY }});
						}
					});

					window.addEventListener('keypress', event => {
						if (event.keyCode === 13) {
							if (event.target.children.length > 0 && event.target.children[0].href) {
								const clientRect = event.target.getBoundingClientRect();
								vscode.postMessage({ type: 'clickSetting', value: { uri: event.target.children[0].href, x: clientRect.right , y: clientRect.bottom }});
							}
						}
					});

					input.addEventListener('change', event => {
						vscode.postMessage({ type: 'showReleaseNotes', value: input.checked }, '*');
					});
				</script>
			</body>
		</html>`;
					}
					A(A) {
						A.affectsConfiguration("update.showReleaseNotes") && this.C();
					}
					B(A) {
						A && A === this.c && this.C();
					}
					C() {
						this.c &&
							this.c.webview.postMessage({
								type: "showReleaseNotes",
								value: this.l.getValue("update.showReleaseNotes"),
							});
					}
				};
				(e.$_Xc = M),
					(e.$_Xc = M =
						Ne(
							[
								j(0, c.$Ti),
								j(1, n.$uZ),
								j(2, a.$nM),
								j(3, g.$7rb),
								j(4, o.$Aq),
								j(5, v.$gj),
								j(6, l.$IY),
								j(7, s.$EY),
								j(8, L.$dtb),
								j(9, b.$qnc),
								j(10, y.$q2),
								j(11, p.$Bk),
								j(12, P.$Li),
							],
							M,
						));
			},
		),
		