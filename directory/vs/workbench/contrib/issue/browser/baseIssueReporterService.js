import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/button/button.js';
import '../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../base/browser/window.js';
import '../../../../base/common/async.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/collections.js';
import '../../../../base/common/decorators.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/uri.js';
import '../../../../nls.js';
import '../../../../platform/theme/browser/iconsStyleSheet.js';
import '../../../../platform/theme/common/themeService.js';
import './issueReporterModel.js';
import '../common/issue.js';
import '../common/issueReporterUtil.js';
define(
			de[1735],
			he([
				1, 0, 7, 183, 182, 75, 15, 14, 456, 138, 29, 3, 12, 37, 26, 9, 4, 1661,
				35, 3066, 376, 3068,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$q6c = void 0),
					(e.hide = S),
					(e.show = I);
				const y = 7500;
				var $;
				(function (T) {
					(T.VSCode = "vscode"),
						(T.Extension = "extension"),
						(T.Marketplace = "marketplace"),
						(T.Unknown = "unknown");
				})($ || ($ = {}));
				let v = class extends a.$1c {
					constructor(P, k, L, D, M, N, A, R) {
						super(),
							(this.disableExtensions = P),
							(this.data = k),
							(this.os = L),
							(this.product = D),
							(this.window = M),
							(this.isWeb = N),
							(this.issueFormService = A),
							(this.themeService = R),
							(this.receivedSystemInfo = !1),
							(this.numberOfSearchResultsDisplayed = 0),
							(this.receivedPerformanceInfo = !1),
							(this.shouldQueueSearch = !1),
							(this.hasBeenSubmitted = !1),
							(this.openReporter = !1),
							(this.loadingExtensionData = !1),
							(this.selectedExtension = ""),
							(this.delayedSubmit = new C.$Jh(300)),
							(this.nonGitHubIssueUrl = !1);
						const O = k.extensionId
							? k.enabledExtensions.find(
									(K) =>
										K.id.toLocaleLowerCase() ===
										k.extensionId?.toLocaleLowerCase(),
								)
							: void 0;
						this.issueReporterModel = new b.$o6c({
							...k,
							issueType: k.issueType || s.IssueType.Bug,
							versionInfo: {
								vscodeVersion: `${D.nameShort} ${D.darwinUniversalAssetId ? `${D.version} (Universal)` : D.version} (${D.commit || "Commit unknown"}, ${D.date || "Date unknown"})`,
								os: `${this.os.type} ${this.os.arch} ${this.os.release}${h.$o ? " snap" : ""}`,
							},
							extensionsDisabled: !!this.disableExtensions,
							fileOnExtension: k.extensionId ? !O?.isBuiltin : void 0,
							selectedExtension: O,
						});
						const B = k.issueSource === $.Marketplace,
							U = k.issueSource === $.VSCode;
						this.issueReporterModel.update({
							fileOnMarketplace: B,
							fileOnProduct: U,
						});
						const z = this.getElementById("issue-reporter");
						if (z) {
							this.previewButton = new i.$oob(z, i.$nob);
							const K = document.createElement("a");
							z.appendChild(K),
								(K.id = "show-repo-name"),
								K.classList.add("hidden"),
								this.updatePreviewButtonState();
						}
						const F = k.issueTitle;
						if (F) {
							const K = this.getElementById("issue-title");
							K && (K.value = F);
						}
						const x = k.issueBody;
						if (x) {
							const K = this.getElementById("description");
							K &&
								((K.value = x),
								this.issueReporterModel.update({ issueDescription: x }));
						}
						this.window.document.documentElement.lang !== "en" &&
							I(this.getElementById("english"));
						const H = (0, t.$Rgb)();
						H.id = "codiconStyles";
						const q = this.D((0, o.$owc)(this.themeService));
						function V() {
							H.textContent = q.getCSS();
						}
						const G = new C.$Yh(V, 0);
						q.onDidChange(() => G.schedule()),
							G.schedule(),
							this.g(k.enabledExtensions),
							this.w(),
							this.c(k.styles),
							(k.data || k.uri) && O && this.updateExtensionStatus(O);
					}
					render() {
						this.renderBlocks();
					}
					setInitialFocus() {
						const { fileOnExtension: P } = this.issueReporterModel.getData();
						P
							? this.window.document.getElementById("issue-title")?.focus()
							: this.window.document.getElementById("issue-type")?.focus();
					}
					c(P) {
						const k = document.createElement("style"),
							L = [];
						P.inputBackground &&
							L.push(
								`input[type="text"], textarea, select, .issues-container > .issue > .issue-state, .block-info { background-color: ${P.inputBackground} !important; }`,
							),
							P.backgroundColor &&
								(L.push(
									`.monaco-workbench { background-color: ${P.backgroundColor} !important; }`,
								),
								L.push(
									`.issue-reporter-body::-webkit-scrollbar-track { background-color: ${P.backgroundColor}; }`,
								)),
							P.inputBorder
								? L.push(
										`input[type="text"], textarea, select { border: 1px solid ${P.inputBorder}; }`,
									)
								: L.push(
										'input[type="text"], textarea, select { border: 1px solid transparent; }',
									),
							P.inputForeground &&
								L.push(
									`input[type="text"], textarea, select, .issues-container > .issue > .issue-state, .block-info { color: ${P.inputForeground} !important; }`,
								),
							P.inputErrorBorder &&
								(L.push(
									`.invalid-input, .invalid-input:focus, .validation-error { border: 1px solid ${P.inputErrorBorder} !important; }`,
								),
								L.push(`.required-input { color: ${P.inputErrorBorder}; }`)),
							P.inputErrorBackground &&
								L.push(
									`.validation-error { background: ${P.inputErrorBackground}; }`,
								),
							P.inputErrorForeground &&
								L.push(
									`.validation-error { color: ${P.inputErrorForeground}; }`,
								),
							P.inputActiveBorder &&
								L.push(
									`input[type='text']:focus, textarea:focus, select:focus, summary:focus, button:focus, a:focus, .workbenchCommand:focus  { border: 1px solid ${P.inputActiveBorder}; outline-style: none; }`,
								),
							P.textLinkColor &&
								L.push(`a, .workbenchCommand { color: ${P.textLinkColor}; }`),
							P.textLinkColor && L.push(`a { color: ${P.textLinkColor}; }`),
							P.textLinkActiveForeground &&
								L.push(
									`a:hover, .workbenchCommand:hover { color: ${P.textLinkActiveForeground}; }`,
								),
							P.sliderActiveColor &&
								L.push(
									`.issue-reporter-body::-webkit-scrollbar-thumb:active { background-color: ${P.sliderActiveColor}; }`,
								),
							P.sliderHoverColor &&
								(L.push(
									`.issue-reporter-body::-webkit-scrollbar-thumb { background-color: ${P.sliderHoverColor}; }`,
								),
								L.push(
									`.issue-reporter-body::--webkit-scrollbar-thumb:hover { background-color: ${P.sliderHoverColor}; }`,
								)),
							P.buttonBackground &&
								L.push(
									`.monaco-text-button { background-color: ${P.buttonBackground} !important; }`,
								),
							P.buttonForeground &&
								L.push(
									`.monaco-text-button { color: ${P.buttonForeground} !important; }`,
								),
							P.buttonHoverBackground &&
								L.push(
									`.monaco-text-button:not(.disabled):hover, .monaco-text-button:focus { background-color: ${P.buttonHoverBackground} !important; }`,
								),
							(k.textContent = L.join(`
`)),
							this.window.document.head.appendChild(k),
							(this.window.document.body.style.color = P.color || "");
					}
					async f(P) {
						try {
							if (P.uri) {
								const k = g.URI.revive(P.uri);
								P.bugsUrl = k.toString();
							}
						} catch {
							this.renderBlocks();
						}
					}
					g(P) {
						const k = P.filter((N) => !N.isBuiltin),
							{ nonThemes: L, themes: D } = (0, m.$e)(k, (N) =>
								N.isTheme ? "themes" : "nonThemes",
							),
							M = D && D.length;
						this.issueReporterModel.update({
							numberOfThemeExtesions: M,
							enabledNonThemeExtesions: L,
							allExtensions: k,
						}),
							this.updateExtensionTable(L, M),
							(this.disableExtensions || k.length === 0) &&
								(this.getElementById("disableExtensions").disabled = !0),
							this.h(k);
					}
					h(P) {
						const k = P.map((M) => ({
							name: M.displayName || M.name || "",
							id: M.id,
						}));
						k.sort((M, N) => {
							const A = M.name.toLowerCase(),
								R = N.name.toLowerCase();
							return A > R ? 1 : A < R ? -1 : 0;
						});
						const L = (M, N) => {
								const A = N && M.id === N.id;
								return (0, t.$)(
									"option",
									{ value: M.id, selected: A || "" },
									M.name,
								);
							},
							D = this.getElementById("extension-selector");
						if (D) {
							const { selectedExtension: M } =
								this.issueReporterModel.getData();
							(0, t.$hhb)(
								D,
								this.makeOption("", (0, p.localize)(7172, null), !0),
								...k.map((N) => L(N, M)),
							),
								M || (D.selectedIndex = 0),
								this.addEventListener(
									"extension-selector",
									"change",
									async (N) => {
										this.clearExtensionData();
										const A = N.target.value;
										this.selectedExtension = A;
										const O = this.issueReporterModel
											.getData()
											.allExtensions.filter((B) => B.id === A);
										if (O.length) {
											this.issueReporterModel.update({
												selectedExtension: O[0],
											});
											const B =
												this.issueReporterModel.getData().selectedExtension;
											if (B) {
												const U = document.createElement("span");
												U.classList.add(
													...n.ThemeIcon.asClassNameArray(d.$ak.loading),
													"codicon-modifier-spin",
												),
													this.setLoading(U);
												const z = await this.j(B);
												z
													? this.selectedExtension === A &&
														(this.removeLoading(U, !0), (this.data = z))
													: (this.loadingExtensionData ||
															U.classList.remove(
																...n.ThemeIcon.asClassNameArray(d.$ak.loading),
																"codicon-modifier-spin",
															),
														this.removeLoading(U),
														this.clearExtensionData(),
														(B.data = void 0),
														(B.uri = void 0)),
													this.selectedExtension === A &&
														(this.updateExtensionStatus(O[0]),
														(this.openReporter = !1));
											} else
												this.issueReporterModel.update({
													selectedExtension: void 0,
												}),
													this.clearSearchResults(),
													this.clearExtensionData(),
													this.validateSelectedExtension(),
													this.updateExtensionStatus(O[0]);
										}
									},
								);
						}
						this.addEventListener("problem-source", "change", (M) => {
							this.clearExtensionData(), this.validateSelectedExtension();
						});
					}
					async j(P) {
						try {
							return await this.issueFormService.sendReporterMenu(P.id);
						} catch (k) {
							console.error(k);
							return;
						}
					}
					setEventHandlers() {
						[
							"includeSystemInfo",
							"includeProcessInfo",
							"includeWorkspaceInfo",
							"includeExtensions",
							"includeExperiments",
							"includeExtensionData",
						].forEach((k) => {
							this.addEventListener(k, "click", (L) => {
								L.stopPropagation(),
									this.issueReporterModel.update({
										[k]: !this.issueReporterModel.getData()[k],
									});
							});
						});
						const P = this.window.document.getElementsByClassName("showInfo");
						for (let k = 0; k < P.length; k++)
							P.item(k).addEventListener("click", (D) => {
								D.preventDefault();
								const M = D.target;
								if (M) {
									const N = M.parentElement && M.parentElement.parentElement,
										A = N && N.lastElementChild;
									A && A.classList.contains("hidden")
										? (I(A), (M.textContent = (0, p.localize)(7173, null)))
										: (S(A), (M.textContent = (0, p.localize)(7174, null)));
								}
							});
						this.addEventListener("issue-source", "change", (k) => {
							const L = k.target.value,
								D = this.getElementById("problem-source-help-text");
							if (L === "") {
								this.issueReporterModel.update({ fileOnExtension: void 0 }),
									I(D),
									this.clearSearchResults(),
									this.render();
								return;
							} else S(D);
							const M = this.getElementById("issue-title");
							L === $.VSCode
								? (M.placeholder = (0, p.localize)(7175, null))
								: L === $.Extension
									? (M.placeholder = (0, p.localize)(7176, null))
									: L === $.Marketplace
										? (M.placeholder = (0, p.localize)(7177, null))
										: (M.placeholder = (0, p.localize)(7178, null));
							let N,
								A = !1;
							L === $.Extension ? (N = !0) : L === $.Marketplace && (A = !0),
								this.issueReporterModel.update({
									fileOnExtension: N,
									fileOnMarketplace: A,
								}),
								this.render();
							const R = this.getElementById("issue-title").value;
							this.searchIssues(R, N, A);
						}),
							this.addEventListener("description", "input", (k) => {
								const L = k.target.value;
								if (
									(this.issueReporterModel.update({ issueDescription: L }),
									this.issueReporterModel.fileOnExtension() === !1)
								) {
									const D = this.getElementById("issue-title").value;
									this.searchVSCodeIssues(D, L);
								}
							}),
							this.addEventListener("issue-title", "input", (k) => {
								const L = this.getElementById("issue-title");
								if (L) {
									const D = L.value;
									this.issueReporterModel.update({ issueTitle: D });
								}
							}),
							this.addEventListener("issue-title", "input", (k) => {
								const L = k.target.value,
									D = this.getElementById(
										"issue-title-length-validation-error",
									),
									M = this.getIssueUrl();
								L && this.getIssueUrlWithTitle(L, M).length > y ? I(D) : S(D);
								const N = this.getElementById("issue-source");
								if (!N || N.value === "") return;
								const { fileOnExtension: A, fileOnMarketplace: R } =
									this.issueReporterModel.getData();
								this.searchIssues(L, A, R);
							}),
							this.previewButton.onDidClick(async () => {
								this.delayedSubmit.trigger(async () => {
									this.createIssue();
								});
							}),
							this.addEventListener("disableExtensions", "click", () => {
								this.issueFormService.reloadWithExtensionsDisabled();
							}),
							this.addEventListener("extensionBugsLink", "click", (k) => {
								const L = k.target.innerText;
								(0, t.$rhb)(L);
							}),
							this.addEventListener("disableExtensions", "keydown", (k) => {
								k.stopPropagation(),
									(k.key === "Enter" || k.key === " ") &&
										this.issueFormService.reloadWithExtensionsDisabled();
							}),
							(this.window.document.onkeydown = async (k) => {
								const L = h.$m ? k.metaKey : k.ctrlKey;
								if (
									(L &&
										k.key === "Enter" &&
										this.delayedSubmit.trigger(async () => {
											(await this.createIssue()) && this.close();
										}),
									L && k.key === "w")
								) {
									k.stopPropagation(), k.preventDefault();
									const D = this.getElementById("issue-title").value,
										{ issueDescription: M } = this.issueReporterModel.getData();
									!this.hasBeenSubmitted && (D || M)
										? this.issueFormService.showConfirmCloseDialog()
										: this.close();
								}
								h.$m &&
									L &&
									k.key === "a" &&
									k.target &&
									((0, t.$3gb)(k.target) || (0, t.$2gb)(k.target)) &&
									k.target.select();
							});
					}
					updatePerformanceInfo(P) {
						this.issueReporterModel.update(P),
							(this.receivedPerformanceInfo = !0);
						const k = this.issueReporterModel.getData();
						this.C(k), this.F(k), this.updatePreviewButtonState();
					}
					updatePreviewButtonState() {
						this.m()
							? (this.data.githubAccessToken
									? (this.previewButton.label = (0, p.localize)(7179, null))
									: (this.previewButton.label = (0, p.localize)(7180, null)),
								(this.previewButton.enabled = !0))
							: ((this.previewButton.enabled = !1),
								(this.previewButton.label = (0, p.localize)(7181, null)));
						const P = this.getElementById("show-repo-name"),
							k = this.issueReporterModel.getData().selectedExtension;
						if (k && k.uri) {
							const L = g.URI.revive(k.uri).toString();
							(P.href = L),
								P.addEventListener("click", (M) => this.H(M)),
								P.addEventListener("auxclick", (M) => this.H(M));
							const D = this.parseGitHubUrl(L);
							(P.textContent = D ? D.owner + "/" + D.repositoryName : L),
								Object.assign(P.style, {
									alignSelf: "flex-end",
									display: "block",
									fontSize: "13px",
									marginBottom: "10px",
									padding: "4px 0px",
									textDecoration: "none",
									width: "auto",
								}),
								I(P);
						} else P.removeAttribute("style"), S(P);
						this.y();
					}
					m() {
						const P = this.issueReporterModel.getData().issueType;
						if (this.loadingExtensionData) return !1;
						if (this.isWeb) {
							if (
								P === s.IssueType.FeatureRequest ||
								P === s.IssueType.PerformanceIssue ||
								P === s.IssueType.Bug
							)
								return !0;
						} else if (
							(P === s.IssueType.Bug && this.receivedSystemInfo) ||
							(P === s.IssueType.PerformanceIssue &&
								this.receivedSystemInfo &&
								this.receivedPerformanceInfo) ||
							P === s.IssueType.FeatureRequest
						)
							return !0;
						return !1;
					}
					n() {
						const P = this.issueReporterModel.getData().selectedExtension;
						return P && P.repositoryUrl;
					}
					getExtensionBugsUrl() {
						const P = this.issueReporterModel.getData().selectedExtension;
						return P && P.bugsUrl;
					}
					searchVSCodeIssues(P, k) {
						P ? this.t(P, k) : this.clearSearchResults();
					}
					searchIssues(P, k, L) {
						if (k) return this.q(P);
						if (L) return this.r(P);
						const D = this.issueReporterModel.getData().issueDescription;
						this.searchVSCodeIssues(P, D);
					}
					q(P) {
						const k = this.y();
						if (P) {
							const L = /^https?:\/\/github\.com\/(.*)/.exec(k);
							if (L && L.length) {
								const D = L[1];
								return this.s(D, P);
							}
							if (this.issueReporterModel.getData().selectedExtension)
								return this.clearSearchResults(), this.u([]);
						}
						this.clearSearchResults();
					}
					r(P) {
						if (P) {
							const k = this.parseGitHubUrl(
								this.product.reportMarketplaceIssueUrl,
							);
							if (k) return this.s(`${k.owner}/${k.repositoryName}`, P);
						}
					}
					async close() {
						await this.issueFormService.closeReporter();
					}
					clearSearchResults() {
						const P = this.getElementById("similar-issues");
						(P.innerText = ""), (this.numberOfSearchResultsDisplayed = 0);
					}
					s(P, k) {
						const L = `is:issue+repo:${P}+${k}`,
							D = this.getElementById("similar-issues");
						fetch(`https://api.github.com/search/issues?q=${L}`)
							.then((M) => {
								M.json()
									.then((N) => {
										if (((D.innerText = ""), N && N.items)) this.u(N.items);
										else {
											const A = (0, t.$)("div.list-title");
											(A.textContent = (0, p.localize)(7182, null)),
												D.appendChild(A);
											const R = M.headers.get("X-RateLimit-Reset"),
												O = R ? parseInt(R) - Math.floor(Date.now() / 1e3) : 1;
											this.shouldQueueSearch &&
												((this.shouldQueueSearch = !1),
												setTimeout(() => {
													this.s(P, k), (this.shouldQueueSearch = !0);
												}, O * 1e3));
										}
									})
									.catch((N) => {
										console.warn("Timeout or query limit exceeded");
									});
							})
							.catch((M) => {
								console.warn("Error fetching GitHub issues");
							});
					}
					t(P, k) {
						const L =
								"https://vscode-probot.westus.cloudapp.azure.com:7890/duplicate_candidates",
							D = {
								method: "POST",
								body: JSON.stringify({ title: P, body: k }),
								headers: new Headers({ "Content-Type": "application/json" }),
							};
						fetch(L, D)
							.then((M) => {
								M.json()
									.then((N) => {
										if ((this.clearSearchResults(), N && N.candidates))
											this.u(N.candidates);
										else
											throw new Error(
												"Unexpected response, no candidates property",
											);
									})
									.catch((N) => {});
							})
							.catch((M) => {});
					}
					u(P) {
						const k = this.getElementById("similar-issues");
						if (P.length) {
							const L = (0, t.$)("div.issues-container"),
								D = (0, t.$)("div.list-title");
							(D.textContent = (0, p.localize)(7183, null)),
								(this.numberOfSearchResultsDisplayed =
									P.length < 5 ? P.length : 5);
							for (let M = 0; M < this.numberOfSearchResultsDisplayed; M++) {
								const N = P[M],
									A = (0, t.$)("a.issue-link", { href: N.html_url });
								(A.textContent = N.title),
									(A.title = N.title),
									A.addEventListener("click", (B) => this.H(B)),
									A.addEventListener("auxclick", (B) => this.H(B));
								let R, O;
								if (N.state) {
									R = (0, t.$)("span.issue-state");
									const B = (0, t.$)("span.issue-icon");
									B.appendChild(
										(0, w.$Tib)(
											N.state === "open"
												? d.$ak.issueOpened
												: d.$ak.issueClosed,
										),
									);
									const U = (0, t.$)("span.issue-state.label");
									(U.textContent =
										N.state === "open"
											? (0, p.localize)(7184, null)
											: (0, p.localize)(7185, null)),
										(R.title =
											N.state === "open"
												? (0, p.localize)(7186, null)
												: (0, p.localize)(7187, null)),
										R.appendChild(B),
										R.appendChild(U),
										(O = (0, t.$)("div.issue", void 0, R, A));
								} else O = (0, t.$)("div.issue", void 0, A);
								L.appendChild(O);
							}
							k.appendChild(D), k.appendChild(L);
						} else {
							const L = (0, t.$)("div.list-title");
							(L.textContent = (0, p.localize)(7188, null)), k.appendChild(L);
						}
					}
					w() {
						const P = (D, M) =>
								(0, t.$)("option", { value: D.valueOf() }, (0, c.$nf)(M)),
							k = this.getElementById("issue-type"),
							{ issueType: L } = this.issueReporterModel.getData();
						(0, t.$hhb)(
							k,
							P(s.IssueType.Bug, (0, p.localize)(7189, null)),
							P(s.IssueType.FeatureRequest, (0, p.localize)(7190, null)),
							P(s.IssueType.PerformanceIssue, (0, p.localize)(7191, null)),
						),
							(k.value = L.toString()),
							this.setSourceOptions();
					}
					makeOption(P, k, L) {
						const D = document.createElement("option");
						return (D.disabled = L), (D.value = P), (D.textContent = k), D;
					}
					setSourceOptions() {
						const P = this.getElementById("issue-source"),
							{
								issueType: k,
								fileOnExtension: L,
								selectedExtension: D,
								fileOnMarketplace: M,
								fileOnProduct: N,
							} = this.issueReporterModel.getData();
						let A = P.selectedIndex;
						A === -1 &&
							(L !== void 0
								? (A = L ? 2 : 1)
								: D?.isBuiltin
									? (A = 1)
									: M
										? (A = 3)
										: N && (A = 1)),
							(P.innerText = ""),
							P.append(this.makeOption("", (0, p.localize)(7192, null), !0)),
							P.append(
								this.makeOption($.VSCode, (0, p.localize)(7193, null), !1),
							),
							P.append(
								this.makeOption($.Extension, (0, p.localize)(7194, null), !1),
							),
							this.product.reportMarketplaceIssueUrl &&
								P.append(
									this.makeOption(
										$.Marketplace,
										(0, p.localize)(7195, null),
										!1,
									),
								),
							k !== s.IssueType.FeatureRequest &&
								P.append(
									this.makeOption($.Unknown, (0, p.localize)(7196, null), !1),
								),
							A !== -1 && A < P.options.length
								? (P.selectedIndex = A)
								: ((P.selectedIndex = 0),
									S(this.getElementById("problem-source-help-text")));
					}
					renderBlocks() {
						const {
								issueType: P,
								fileOnExtension: k,
								fileOnMarketplace: L,
								selectedExtension: D,
							} = this.issueReporterModel.getData(),
							M = this.getElementById("block-container"),
							N = this.window.document.querySelector(".block-system"),
							A = this.window.document.querySelector(".block-process"),
							R = this.window.document.querySelector(".block-workspace"),
							O = this.window.document.querySelector(".block-extensions"),
							B = this.window.document.querySelector(".block-experiments"),
							U = this.window.document.querySelector(".block-extension-data"),
							z = this.getElementById("problem-source"),
							F = this.getElementById("issue-description-label"),
							x = this.getElementById("issue-description-subtitle"),
							H = this.getElementById("extension-selection"),
							q = this.getElementById("issue-title-container"),
							V = this.getElementById("description"),
							G = this.getElementById("extension-data");
						if (
							(S(M),
							S(N),
							S(A),
							S(R),
							S(O),
							S(B),
							S(H),
							S(G),
							S(U),
							I(z),
							I(q),
							I(V),
							k && I(H),
							D && this.nonGitHubIssueUrl)
						) {
							S(q),
								S(V),
								(0, t.$hhb)(F, (0, p.localize)(7197, null)),
								(0, t.$hhb)(x, (0, p.localize)(7198, null, D.displayName)),
								(this.previewButton.label = (0, p.localize)(7199, null));
							return;
						}
						if (k && D?.data) {
							const K = D?.data;
							(G.innerText = K.toString()), (G.readOnly = !0), I(U);
						}
						k &&
							this.openReporter &&
							((G.readOnly = !0),
							setTimeout(() => {
								this.openReporter && I(U);
							}, 100),
							I(U)),
							P === s.IssueType.Bug
								? (L || (I(M), I(N), I(B), k || I(O)),
									(0, t.$hhb)(
										F,
										(0, p.localize)(7200, null) + " ",
										(0, t.$)("span.required-input", void 0, "*"),
									),
									(0, t.$hhb)(x, (0, p.localize)(7201, null)))
								: P === s.IssueType.PerformanceIssue
									? (L || (I(M), I(N), I(A), I(R), I(B)),
										k ? I(H) : L || I(O),
										(0, t.$hhb)(
											F,
											(0, p.localize)(7202, null) + " ",
											(0, t.$)("span.required-input", void 0, "*"),
										),
										(0, t.$hhb)(x, (0, p.localize)(7203, null)))
									: P === s.IssueType.FeatureRequest &&
										((0, t.$hhb)(
											F,
											(0, p.localize)(7204, null) + " ",
											(0, t.$)("span.required-input", void 0, "*"),
										),
										(0, t.$hhb)(x, (0, p.localize)(7205, null)));
					}
					validateInput(P) {
						const k = this.getElementById(P),
							L = this.getElementById(`${P}-empty-error`),
							D = this.getElementById("description-short-error");
						return P === "description" &&
							this.nonGitHubIssueUrl &&
							this.data.extensionId
							? !0
							: k.value
								? P === "description" && k.value.length < 10
									? (k.classList.add("invalid-input"),
										D?.classList.remove("hidden"),
										L?.classList.add("hidden"),
										!1)
									: (k.classList.remove("invalid-input"),
										L?.classList.add("hidden"),
										P === "description" && D?.classList.add("hidden"),
										!0)
								: (k.classList.add("invalid-input"),
									L?.classList.remove("hidden"),
									D?.classList.add("hidden"),
									!1);
					}
					validateInputs() {
						let P = !0;
						return (
							["issue-title", "description", "issue-source"].forEach((k) => {
								P = this.validateInput(k) && P;
							}),
							this.issueReporterModel.fileOnExtension() &&
								(P = this.validateInput("extension-selector") && P),
							P
						);
					}
					async submitToGitHub(P, k, L) {
						const D = `https://api.github.com/repos/${L.owner}/${L.repositoryName}/issues`,
							M = {
								method: "POST",
								body: JSON.stringify({ title: P, body: k }),
								headers: new Headers({
									"Content-Type": "application/json",
									Authorization: `Bearer ${this.data.githubAccessToken}`,
									"User-Agent": "request",
								}),
							},
							N = await fetch(D, M);
						if (!N.ok) return console.error("Invalid GitHub URL provided."), !1;
						const A = await N.json();
						return E.$Bfb.open(A.html_url, "_blank"), this.close(), !0;
					}
					async createIssue() {
						const P = this.issueReporterModel.getData().selectedExtension;
						if (this.nonGitHubIssueUrl && this.getExtensionBugsUrl())
							return (this.hasBeenSubmitted = !0), !0;
						if (!this.validateInputs()) {
							const O =
								this.window.document.getElementsByClassName("invalid-input");
							return (
								O.length && O[0].focus(),
								this.addEventListener("issue-title", "input", (B) => {
									this.validateInput("issue-title");
								}),
								this.addEventListener("description", "input", (B) => {
									this.validateInput("description");
								}),
								this.addEventListener("issue-source", "change", (B) => {
									this.validateInput("issue-source");
								}),
								this.issueReporterModel.fileOnExtension() &&
									this.addEventListener("extension-selector", "change", (B) => {
										this.validateInput("extension-selector");
									}),
								!1
							);
						}
						this.hasBeenSubmitted = !0;
						const L = this.getElementById("issue-title").value,
							D = this.issueReporterModel.serialize();
						let M = this.getIssueUrl();
						if (!M) return console.error("No issue url found"), !1;
						P?.uri && (M = g.URI.revive(P.uri).toString());
						const N = this.parseGitHubUrl(M);
						if (this.data.githubAccessToken && N)
							return this.submitToGitHub(L, D, N);
						const A = this.getIssueUrlWithTitle(
							this.getElementById("issue-title").value,
							M,
						);
						let R = A + `&body=${encodeURIComponent(D)}`;
						if (R.length > y)
							try {
								R = await this.writeToClipboard(A, D);
							} catch {
								return console.error("Writing to clipboard failed"), !1;
							}
						return this.window.open(R, "_blank"), !0;
					}
					async writeToClipboard(P, k) {
						if (!(await this.issueFormService.showClipboardDialog()))
							throw new u.$9();
						return (
							P + `&body=${encodeURIComponent((0, p.localize)(7206, null))}`
						);
					}
					getIssueUrl() {
						return this.issueReporterModel.fileOnExtension()
							? this.y()
							: this.issueReporterModel.getData().fileOnMarketplace
								? this.product.reportMarketplaceIssueUrl
								: this.product.reportIssueUrl;
					}
					parseGitHubUrl(P) {
						const k = /^https?:\/\/github\.com\/([^\/]*)\/([^\/]*).*/.exec(P);
						if (k && k.length) return { owner: k[1], repositoryName: k[2] };
						console.error("No GitHub issues match");
					}
					y() {
						let P = "";
						const k = this.getExtensionBugsUrl(),
							L = this.n();
						return (
							k &&
							k.match(
								/^https?:\/\/github\.com\/([^\/]*)\/([^\/]*)\/?(\/issues)?$/,
							)
								? (P = (0, l.$p6c)(k))
								: L && L.match(/^https?:\/\/github\.com\/([^\/]*)\/([^\/]*)$/)
									? (P = (0, l.$p6c)(L))
									: ((this.nonGitHubIssueUrl = !0), (P = k || L || "")),
							P
						);
					}
					getIssueUrlWithTitle(P, k) {
						this.issueReporterModel.fileOnExtension() &&
							(k = k + "/issues/new");
						const L = k.indexOf("?") === -1 ? "?" : "&";
						return `${k}${L}title=${encodeURIComponent(P)}`;
					}
					clearExtensionData() {
						(this.nonGitHubIssueUrl = !1),
							this.issueReporterModel.update({ extensionData: void 0 }),
							(this.data.issueBody = this.data.issueBody || ""),
							(this.data.data = void 0),
							(this.data.uri = void 0);
					}
					async updateExtensionStatus(P) {
						this.issueReporterModel.update({ selectedExtension: P });
						const k = this.data.issueBody;
						if (k) {
							const N = this.getElementById("description"),
								A = N.value;
							if (A === "" || !A.includes(k.toString())) {
								const R =
									A +
									(A === ""
										? ""
										: `
`) +
									k.toString();
								(N.value = R),
									this.issueReporterModel.update({ issueDescription: R });
							}
						}
						const L = this.data.data;
						if (L) {
							this.issueReporterModel.update({ extensionData: L }),
								(P.data = L);
							const N = this.window.document.querySelector(
								".block-extension-data",
							);
							I(N), this.renderBlocks();
						}
						const D = this.data.uri;
						D && ((P.uri = D), this.f(P)), this.validateSelectedExtension();
						const M = this.getElementById("issue-title").value;
						this.q(M), this.updatePreviewButtonState(), this.renderBlocks();
					}
					validateSelectedExtension() {
						const P = this.getElementById(
								"extension-selection-validation-error",
							),
							k = this.getElementById(
								"extension-selection-validation-error-no-url",
							);
						if (
							(S(P), S(k), !this.issueReporterModel.getData().selectedExtension)
						) {
							this.previewButton.enabled = !0;
							return;
						}
						if (this.loadingExtensionData) return;
						this.y()
							? (this.previewButton.enabled = !0)
							: (this.z(), (this.previewButton.enabled = !1));
					}
					setLoading(P) {
						(this.openReporter = !0),
							(this.loadingExtensionData = !0),
							this.updatePreviewButtonState();
						const k = this.getElementById("extension-id");
						S(k),
							Array.from(
								this.window.document.querySelectorAll(".ext-parens"),
							).forEach((M) => S(M));
						const D = this.getElementById("ext-loading");
						for (I(D); D.firstChild; ) D.firstChild.remove();
						D.append(P), this.renderBlocks();
					}
					removeLoading(P, k = !1) {
						(this.openReporter = k),
							(this.loadingExtensionData = !1),
							this.updatePreviewButtonState();
						const L = this.getElementById("extension-id");
						I(L),
							Array.from(
								this.window.document.querySelectorAll(".ext-parens"),
							).forEach((N) => I(N));
						const M = this.getElementById("ext-loading");
						S(M), M.firstChild && P.remove(), this.renderBlocks();
					}
					z() {
						const P = this.getElementById(
								"extension-selection-validation-error",
							),
							k = this.getElementById(
								"extension-selection-validation-error-no-url",
							),
							L = this.getExtensionBugsUrl();
						if (L) {
							I(P);
							const M = this.getElementById("extensionBugsLink");
							M.textContent = L;
							return;
						}
						const D = this.n();
						if (D) {
							I(P);
							const M = this.getElementById("extensionBugsLink");
							M.textContent = D;
							return;
						}
						I(k);
					}
					C(P) {
						const k = this.window.document.querySelector(
							".block-process .block-info",
						);
						k && (0, t.$hhb)(k, (0, t.$)("code", void 0, P.processInfo ?? ""));
					}
					F(P) {
						this.window.document.querySelector(
							".block-workspace .block-info code",
						).textContent =
							`
` + P.workspaceInfo;
					}
					updateExtensionTable(P, k) {
						const L = this.window.document.querySelector(
							".block-extensions .block-info",
						);
						if (L) {
							if (this.disableExtensions) {
								(0, t.$hhb)(L, (0, p.localize)(7207, null));
								return;
							}
							const D = k
								? `
(${k} theme extensions excluded)`
								: "";
							if (((P = P || []), !P.length)) {
								L.innerText = "Extensions: none" + D;
								return;
							}
							(0, t.$hhb)(L, this.G(P), document.createTextNode(D));
						}
					}
					G(P) {
						return (0, t.$)(
							"table",
							void 0,
							(0, t.$)(
								"tr",
								void 0,
								(0, t.$)("th", void 0, "Extension"),
								(0, t.$)("th", void 0, "Author (truncated)"),
								(0, t.$)("th", void 0, "Version"),
							),
							...P.map((k) =>
								(0, t.$)(
									"tr",
									void 0,
									(0, t.$)("td", void 0, k.name),
									(0, t.$)("td", void 0, k.publisher?.substr(0, 3) ?? "N/A"),
									(0, t.$)("td", void 0, k.version),
								),
							),
						);
					}
					H(P) {
						P.preventDefault(),
							P.stopPropagation(),
							P.which < 3 && (0, t.$rhb)(P.target.href);
					}
					getElementById(P) {
						const k = this.window.document.getElementById(P);
						if (k) return k;
					}
					addEventListener(P, k, L) {
						this.getElementById(P)?.addEventListener(k, L);
					}
				};
				(e.$q6c = v),
					Ne([(0, r.$fi)(300)], v.prototype, "s", null),
					Ne([(0, r.$fi)(300)], v.prototype, "t", null),
					(e.$q6c = v = Ne([j(6, s.$6Xb), j(7, f.$iP)], v));
				function S(T) {
					T?.classList.add("hidden");
				}
				function I(T) {
					T?.classList.remove("hidden");
				}
			},
		),
		