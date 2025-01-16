define(
			de[3070],
			he([1, 0, 7, 29, 9, 4, 768, 769, 110, 35, 676, 1735, 376]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fgd = void 0);
				const c = 7500;
				let n = class extends a.$q6c {
					constructor(p, o, f, b, s, l, y, $, v) {
						super(p, o, f, b, s, !1, y, v),
							(this.J = l),
							(this.I = $),
							this.I.$getSystemInfo().then((S) => {
								this.issueReporterModel.update({ systemInfo: S }),
									(this.receivedSystemInfo = !0),
									this.L(this.issueReporterModel.getData()),
									this.updatePreviewButtonState();
							}),
							this.data.issueType === h.IssueType.PerformanceIssue &&
								this.I.$getPerformanceInfo().then((S) => {
									this.updatePerformanceInfo(S);
								}),
							this.setEventHandlers(),
							(0, u.$28c)(this.data.zoomLevel, this.window),
							this.O(this.data.experiments),
							this.M(this.data.restrictedMode),
							this.N(this.data.isUnsupported);
					}
					setEventHandlers() {
						super.setEventHandlers(),
							this.addEventListener("issue-type", "change", (p) => {
								const o = parseInt(p.target.value);
								this.issueReporterModel.update({ issueType: o }),
									o === h.IssueType.PerformanceIssue &&
										!this.receivedPerformanceInfo &&
										this.I.$getPerformanceInfo().then((b) => {
											this.updatePerformanceInfo(b);
										});
								const f = this.getElementById("issue-title");
								f && (f.placeholder = (0, E.localize)(7314, null)),
									this.updatePreviewButtonState(),
									this.setSourceOptions(),
									this.render();
							});
					}
					async submitToGitHub(p, o, f) {
						const b = `https://api.github.com/repos/${f.owner}/${f.repositoryName}/issues`,
							s = {
								method: "POST",
								body: JSON.stringify({ title: p, body: o }),
								headers: new Headers({
									"Content-Type": "application/json",
									Authorization: `Bearer ${this.data.githubAccessToken}`,
								}),
							},
							l = await fetch(b, s);
						if (!l.ok) return console.error("Invalid GitHub URL provided."), !1;
						const y = await l.json();
						return await this.J.openExternal(y.html_url), this.close(), !0;
					}
					async createIssue() {
						const p = this.issueReporterModel.getData().selectedExtension;
						if (this.nonGitHubIssueUrl) {
							const v = this.getExtensionBugsUrl();
							if (v)
								return (
									(this.hasBeenSubmitted = !0), await this.J.openExternal(v), !0
								);
						}
						if (!this.validateInputs()) {
							const v =
								this.window.document.getElementsByClassName("invalid-input");
							return (
								v.length && v[0].focus(),
								this.addEventListener("issue-title", "input", (S) => {
									this.validateInput("issue-title");
								}),
								this.addEventListener("description", "input", (S) => {
									this.validateInput("description");
								}),
								this.addEventListener("issue-source", "change", (S) => {
									this.validateInput("issue-source");
								}),
								this.issueReporterModel.fileOnExtension() &&
									this.addEventListener("extension-selector", "change", (S) => {
										this.validateInput("extension-selector"),
											this.validateInput("description");
									}),
								!1
							);
						}
						this.hasBeenSubmitted = !0;
						const f = this.getElementById("issue-title").value,
							b = this.issueReporterModel.serialize();
						let s = this.getIssueUrl();
						if (!s) return console.error("No issue url found"), !1;
						p?.uri && (s = w.URI.revive(p.uri).toString());
						const l = this.parseGitHubUrl(s),
							y = this.getIssueUrlWithTitle(
								this.getElementById("issue-title").value,
								s,
							);
						let $ = y + `&body=${encodeURIComponent(b)}`;
						if ($.length > c)
							try {
								$ = await this.writeToClipboard(y, b);
							} catch {
								return console.error("Writing to clipboard failed"), !1;
							}
						else if (this.data.githubAccessToken && l)
							return this.submitToGitHub(f, b, l);
						return await this.J.openExternal($), !0;
					}
					async writeToClipboard(p, o) {
						if (!(await this.issueFormService.showClipboardDialog()))
							throw new i.$9();
						return (
							await this.J.writeClipboardText(o),
							p + `&body=${encodeURIComponent((0, E.localize)(7315, null))}`
						);
					}
					L(p) {
						const o = this.window.document.querySelector(
							".block-system .block-info",
						);
						if (o) {
							const f = p.systemInfo,
								b = (0, t.$)(
									"table",
									void 0,
									(0, t.$)(
										"tr",
										void 0,
										(0, t.$)("td", void 0, "CPUs"),
										(0, t.$)("td", void 0, f.cpus || ""),
									),
									(0, t.$)(
										"tr",
										void 0,
										(0, t.$)("td", void 0, "GPU Status"),
										(0, t.$)(
											"td",
											void 0,
											Object.keys(f.gpuStatus)
												.map((s) => `${s}: ${f.gpuStatus[s]}`)
												.join(`
`),
										),
									),
									(0, t.$)(
										"tr",
										void 0,
										(0, t.$)("td", void 0, "Load (avg)"),
										(0, t.$)("td", void 0, f.load || ""),
									),
									(0, t.$)(
										"tr",
										void 0,
										(0, t.$)("td", void 0, "Memory (System)"),
										(0, t.$)("td", void 0, f.memory),
									),
									(0, t.$)(
										"tr",
										void 0,
										(0, t.$)("td", void 0, "Process Argv"),
										(0, t.$)("td", void 0, f.processArgs),
									),
									(0, t.$)(
										"tr",
										void 0,
										(0, t.$)("td", void 0, "Screen Reader"),
										(0, t.$)("td", void 0, f.screenReader),
									),
									(0, t.$)(
										"tr",
										void 0,
										(0, t.$)("td", void 0, "VM"),
										(0, t.$)("td", void 0, f.vmHint),
									),
								);
							(0, t.$hhb)(o, b),
								f.remoteData.forEach((s) => {
									if ((o.appendChild((0, t.$)("hr")), (0, C.$9m)(s))) {
										const l = (0, t.$)(
											"table",
											void 0,
											(0, t.$)(
												"tr",
												void 0,
												(0, t.$)("td", void 0, "Remote"),
												(0, t.$)("td", void 0, s.hostName),
											),
											(0, t.$)(
												"tr",
												void 0,
												(0, t.$)("td", void 0, ""),
												(0, t.$)("td", void 0, s.errorMessage),
											),
										);
										o.appendChild(l);
									} else {
										const l = (0, t.$)(
											"table",
											void 0,
											(0, t.$)(
												"tr",
												void 0,
												(0, t.$)("td", void 0, "Remote"),
												(0, t.$)(
													"td",
													void 0,
													s.latency
														? `${s.hostName} (latency: ${s.latency.current.toFixed(2)}ms last, ${s.latency.average.toFixed(2)}ms average)`
														: s.hostName,
												),
											),
											(0, t.$)(
												"tr",
												void 0,
												(0, t.$)("td", void 0, "OS"),
												(0, t.$)("td", void 0, s.machineInfo.os),
											),
											(0, t.$)(
												"tr",
												void 0,
												(0, t.$)("td", void 0, "CPUs"),
												(0, t.$)("td", void 0, s.machineInfo.cpus || ""),
											),
											(0, t.$)(
												"tr",
												void 0,
												(0, t.$)("td", void 0, "Memory (System)"),
												(0, t.$)("td", void 0, s.machineInfo.memory),
											),
											(0, t.$)(
												"tr",
												void 0,
												(0, t.$)("td", void 0, "VM"),
												(0, t.$)("td", void 0, s.machineInfo.vmHint),
											),
										);
										o.appendChild(l);
									}
								});
						}
					}
					M(p) {
						this.issueReporterModel.update({ restrictedMode: p });
					}
					N(p) {
						this.issueReporterModel.update({ isUnsupported: p });
					}
					O(p) {
						this.issueReporterModel.update({ experimentInfo: p });
						const o = this.window.document.querySelector(
							".block-experiments .block-info",
						);
						o && (o.textContent = p || (0, E.localize)(7316, null));
					}
				};
				(e.$fgd = n),
					(e.$fgd = n =
						Ne([j(5, m.$y7c), j(6, h.$6Xb), j(7, d.$5Xb), j(8, r.$iP)], n));
			},
		),
		