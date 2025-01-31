import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/core/range.js';
import '../../../../base/browser/dom.js';
import '../../../services/ai/browser/aiService.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uri.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../services/ai/browser/aiMiscServices.js';
import '../../../services/aiSettings/browser/aiSettingsService.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../services/ai/browser/repositoryService.js';
import '../../../../platform/native/common/native.js';
import '../../../../base/common/resources.js';
import '../../../services/editor/common/editorService.js';
import '../../../../../proto/aiserver/v1/lint_pb.js';
import '../browser/aiWatcherHelpers.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../services/editor/common/editorGroupsService.js';
import './aiLintBugHandler.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/undoRedo/common/undoRedo.js';
import '../../../../editor/contrib/documentSymbols/browser/outlineModel.js';
import '../../../services/ai/browser/aiUtilsService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/product/common/productService.js';
import '../../../services/ai/browser/utils.js';
import '../../../services/textfile/common/textfiles.js';
define(
			de[3943],
			he([
				1, 0, 47, 65, 17, 7, 118, 3, 9, 42, 20, 90, 45, 134, 137, 315, 22, 25,
				226, 110, 19, 18, 1110, 975, 32, 148, 83, 66, 2999, 69, 31, 155, 204,
				567, 10, 62, 191, 85,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*uuid*/,
				i /*codeEditorService*/,
				w /*range*/,
				E /*dom*/,
				C /*aiService*/,
				d /*lifecycle*/,
				m /*uri*/,
				r /*resolverService*/,
				u /*extensions*/,
				a /*markers*/,
				h /*reactiveStorageService*/,
				c /*reactiveStorageTypes*/,
				n /*aiMiscServices*/,
				g /*aiSettingsService*/,
				p /*files*/,
				o /*workspace*/,
				f /*repositoryService*/,
				b /*native*/,
				s /*resources*/,
				l /*editorService*/,
				y /*lint_pb*/,
				$ /*aiWatcherHelpers*/,
				v /*telemetry*/,
				S /*aiserver_pb*/,
				I /*utils_pb*/,
				T /*editorGroupsService*/,
				P /*aiLintBugHandler*/,
				k /*languageFeatures*/,
				L /*commands*/,
				D /*undoRedo*/,
				M /*outlineModel*/,
				N /*aiUtilsService*/,
				A /*configuration*/,
				R /*productService*/,
				O /*utils*/,
				B /*textfiles*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Eed = void 0),
					(E = mt(E));
				let U = class extends d.$1c {
					constructor(
						x,
						H,
						q,
						V,
						G,
						K,
						J,
						W,
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
					) {
						super(),
							(this.c = x),
							(this.f = H),
							(this.g = q),
							(this.h = V),
							(this.j = G),
							(this.m = K),
							(this.n = J),
							(this.q = W),
							(this.r = X),
							(this.s = Y),
							(this.t = ie),
							(this.u = ne),
							(this.w = ee),
							(this.y = _),
							(this.z = te),
							(this.C = Q),
							(this.F = Z),
							(this.G = se),
							(this.H = re),
							(this.I = le),
							(this.J = oe),
							(this.L = ae),
							(this.fileStates = {}),
							(this.notificationHandlers = {}),
							(this.lastOpenedFiles = []),
							(this.M = new Map()),
							(this.handleKeyDown = (pe) => {
								pe.key === "Escape" && this.Q();
							}),
							(this.U = {});
					}
					getMarker(x) {
						return this.notificationHandlers[x]?.getMarker();
					}
					async getGitDiffChangedRanges() {
						if (this.r.getWorkspace().folders.length === 0)
							return console.error("Watcher: not in a folder; giving up"), [];
						this.r.getWorkspace().folders.length > 1 &&
							console.warn(
								"Watcher: in a multi-root workspace; just doing it for the first folder",
							);
						const x = this.r.getWorkspace().folders[0].uri,
							H = await this.t.exec2("git diff", {
								cwd: x.fsPath,
								maxBuffer: 1024 * 1024,
							}),
							q = H.stdout ?? H.stderr;
						if (H.error)
							return (
								console.error("Watcher: error getting git diff", H.error), []
							);
						const V =
								/diff --git a\/(.*) b\/\1\nindex [\da-f]+\.\.[\da-f]+ \d+\n--- a\/\1\n\+\+\+ b\/\1\n@@ -\d+,\d+ \+(\d+),(\d+) @@.*\n(?:\s*.*\n)*/g,
							G = [];
						let K;
						for (; (K = V.exec(q)) !== null; ) {
							const J = parseInt(K[2], 10),
								W = parseInt(K[3], 10),
								X = J + W - 1,
								Y = K[1],
								ie = (0, s.$nh)(x, Y);
							G.push({ range: new w.$iL(J, 1, X, 1), uri: ie }),
								(V.lastIndex = K.index + 1);
						}
						return G;
					}
					async diffScan() {
						throw new Error("deprecated");
					}
					async scanDisplayedFiles() {
						throw new Error("deprecated");
					}
					N() {
						this.M.forEach((x) => x.forEach((H) => H.dispose())),
							this.M.clear();
					}
					async startBackgroundWatch() {
						this.j.applicationUserPersistentStorage.watcherEnabled === !0 &&
							(this.N(), this.O());
					}
					O() {
						for (const H of this.f.listCodeEditors()) this.R(H);
						this.M.set("global", [
							this.D(
								this.f.onCodeEditorAdd((H) => {
									this.R(H);
								}),
							),
						]),
							this.D(
								this.L.files.onDidSave((H) => {
									const q = this.f.getActiveCodeEditor();
									if (q === null) return;
									const V = q.getModel();
									V !== null &&
										H.model.resource.toString() === V.uri.toString() &&
										this.j.applicationUserPersistentStorage.lintSettings
											.runOnSaveInstead &&
										this.W(q, V, V.getEOL());
								}),
							);
						const x = E.getWindows();
						this.M.set("window", [
							this.D({
								dispose: () => {
									for (const H of x)
										H.window.document.removeEventListener(
											"keydown",
											this.handleKeyDown,
										);
								},
							}),
						]);
						for (const H of x)
							H.window.document.addEventListener("keydown", this.handleKeyDown);
					}
					P(x, H) {
						return !(
							x.endLineNumber < H.lineNumber ||
							x.startLineNumber > H.lineNumber ||
							(x.endLineNumber === x.startLineNumber &&
								x.endColumn < H.column) ||
							(x.startLineNumber === x.endLineNumber &&
								x.startColumn > H.column)
						);
					}
					Q() {
						const x = this.f.getActiveCodeEditor();
						if (x === null) return;
						const H = x.getModel();
						if (H === null) return;
						const q = x.getPosition();
						if (q)
							for (const [V, G] of Object.entries(this.notificationHandlers)) {
								const K = G.getMarker();
								K !== void 0 &&
									K.resource.toString() === H.uri.toString() &&
									this.P(
										new w.$iL(
											K.startLineNumber,
											K.startColumn,
											K.endLineNumber,
											K.endColumn,
										),
										q,
									) &&
									(G.dispose(), delete this.notificationHandlers[V]);
							}
					}
					run() {
						throw new Error("deprecated");
					}
					R(x) {
						const H = x.getId();
						this.M.set(H, [
							x.onDidDispose(() => {
								this.M.get(H)?.forEach((V) => V.dispose()), this.M.delete(H);
							}),
						]);
						const q = x.getModel();
						q !== null && this.S(x, q),
							this.M.get(H).push(
								this.D(
									x.onDidChangeModel(() => {
										const V = x.getModel();
										V !== null && this.S(x, V);
									}),
								),
							);
					}
					S(x, H) {
						this.D(
							H.onDidChangeContent(async (q) => {
								this.Q(),
									this.j.applicationUserPersistentStorage.lintSettings
										.runOnSaveInstead || this.W(x, H, H.getEOL());
							}),
						);
					}
					W(x, H, q) {
						clearTimeout(this.U[H.uri.toString()]);
						const V = x.getPosition(),
							G = this.j.applicationUserPersistentStorage.lintSettings
								.runOnSaveInstead
								? 0
								: this.j.applicationUserPersistentStorage.lintSettings
										.watcherDebounceTimeSeconds * 1e3;
						this.U[H.uri.toString()] = setTimeout(() => {
							this.computeBugsForFileAroundLocation(x, H, q, V);
						}, G);
					}
					async computeBugsForFileAroundLocation(x, H, q, V) {
						const G = new d.$Zc(),
							K = (0, t.$9g)();
						try {
							this.j.setNonPersistentStorage(
								"lintState",
								"lastLintGenerationUuid",
								K,
							),
								this.j.setNonPersistentStorage(
									"lintState",
									"lastLintResult",
									c.LintResult.NONE,
								);
							const J = this.g.getModelDetails(),
								[W, X] = this.g.registerNewGeneration({
									metadata: void 0,
									generationUUID: K,
								}),
								Y = await this.J.getPartialCppRequest({
									editor: x,
									uri: H.uri,
									modelValue: H.getValue(),
									modelVersion: H.getVersionId(),
									position: V,
									source: c.CppSource.Unknown,
									shouldRelyOnFileSyncForFile: !1,
								}),
								ie = Y.currentFile?.contents;
							if (!ie) throw new Error("Contents are undefined");
							const ne = ie.split(q),
								ee = ne.findIndex((le) => le.trim().length > 0),
								_ =
									ne.length -
									ne.reverse().findIndex((le) => le.trim().length > 0) -
									1,
								te = await this.m.createModelReference(H.uri);
							G.add(te);
							const Q = new $.$59b(te, [
								new w.$iL(ee, 1, _, H.getLineMaxColumn(_)),
							]);
							G.add(Q);
							const Z = await this.g.aiClient();
							console.log("[Linter] calling findBugs");
							const se = await Z.findBugs(
									new S.$dJ({
										currentFile: Y.currentFile,
										modelDetails: {
											modelName:
												"accounts/anysphere/models/bugfind-codestral-22b-09-23",
										},
									}),
								),
								{ bug: re } = se;
							if (
								re !== void 0 &&
								re.confidence >=
									this.j.applicationUserPersistentStorage.lintSettings
										.watcherThreshold
							) {
								const le = Q.getUpdatedRange(
									new w.$iL(
										re.lineNumber,
										1,
										re.lineNumber,
										H.getLineMaxColumn(re.lineNumber),
									),
								);
								if (!le) {
									console.error(
										"Watcher: range is outside the original range. This shouldnt happen unless the server is broken",
									);
									return;
								}
								const oe = 3,
									ae = new w.$iL(
										Math.max(1, le.startLineNumber - oe),
										1,
										Math.min(H.getLineCount(), le.endLineNumber + oe),
										H.getLineMaxColumn(
											Math.min(H.getLineCount(), le.endLineNumber + oe),
										),
									);
								if (
									[
										...this.n
											.read({
												resource: H.uri,
												severities:
													a.MarkerSeverity.Error | a.MarkerSeverity.Warning,
												take: 1e3,
											})
											.map(
												(me) =>
													new w.$iL(
														me.startLineNumber,
														me.startColumn,
														me.endLineNumber,
														me.endColumn,
													),
											),
										...Object.values(this.j.nonPersistentStorage.lintState.bugs)
											.map((me) => me.bug.replaceRange)
											.flatMap((me) => me ?? [])
											.map(
												(me) =>
													new w.$iL(
														me.startLineNumber,
														me.startColumn,
														me.endLineNumberInclusive,
														me.endColumn,
													),
											),
									].filter(
										(me) =>
											(me.startLineNumber >= ae.startLineNumber &&
												me.startLineNumber <= ae.endLineNumber) ||
											(me.endLineNumber >= ae.startLineNumber &&
												me.endLineNumber <= ae.endLineNumber),
									).length > 0 &&
									this.j.applicationUserPersistentStorage.lintSettings
										.silenceIfOverlappingWithRegularLinter
								) {
									console.warn(
										"Skipping bug because there is already a marker in the range!!!",
										re,
									);
									return;
								}
								const ue = H.getValueInRange(ae),
									fe = new y.$aD({
										relativeWorkspacePath: this.r.asRelativePath(H.uri),
										uuid: (0, t.$9g)(),
										message: `(confidence: ${Math.floor(re.confidence * 100)}%) ${re.description} (click + ESC to dismiss)`,
										replaceRange: {
											startLineNumber: ae.startLineNumber,
											startColumn: ae.startColumn,
											endLineNumberInclusive: ae.endLineNumber,
											endColumn: ae.endColumn,
										},
										replaceText: ue,
										replaceInitialText: ue,
									});
								this.j.setNonPersistentStorage("lintState", "bugs", (me) => [
									...me.filter((ve) => ve.bug.uuid !== fe.uuid),
									{
										bug: fe,
										uri: this.r
											.getWorkspace()
											.folders[0].toResource(fe.relativeWorkspacePath),
									},
								]),
									(this.notificationHandlers[fe.uuid] = new P.$Ced(
										te,
										{ bug: fe, uri: H.uri },
										this.j,
										this.n,
										this.r,
									));
							}
						} catch {
							this.j.setNonPersistentStorage(
								"lintState",
								"lastLintResult",
								c.LintResult.ERROR,
							);
						} finally {
							G.dispose(),
								this.j.setNonPersistentStorage("inprogressAIGenerations", (W) =>
									W.filter((X) => X.generationUUID !== K),
								);
							const J = Math.floor(Date.now() / 1e3);
							this.j.setNonPersistentStorage(
								"lintState",
								"lastLintTimestamp",
								J,
							);
						}
					}
					async computeBugsForFileRanges(x, H, q) {
						const V = new d.$Zc(),
							G = (0, t.$9g)();
						try {
							this.j.setNonPersistentStorage(
								"lintState",
								"lastLintGenerationUuid",
								G,
							),
								this.j.setNonPersistentStorage(
									"lintState",
									"lastLintResult",
									c.LintResult.NONE,
								);
							const K = this.g.getModelDetails(),
								[J, W] = this.g.registerNewGeneration({
									metadata: void 0,
									generationUUID: G,
								}),
								X = [];
							for (const { uri: Q, ranges: Z, entireFileRange: se } of x)
								try {
									const re = await this.m.createModelReference(Q);
									V.add(re);
									const le =
											Z ??
											(se
												? [re.object.textEditorModel.getFullModelRange()]
												: void 0),
										oe = await this.getRanges(
											re.object.textEditorModel,
											H,
											le,
											q,
										);
									if (oe.length > 0) {
										const ae = new $.$59b(re, oe);
										V.add(ae),
											X.push({
												model: re.object.textEditorModel,
												ranges: oe.map((pe) => {
													const $e = new w.$iL(
															pe.startLineNumber,
															1,
															pe.endLineNumber,
															re.object.textEditorModel.getLineMaxColumn(
																pe.endLineNumber,
															),
														),
														ye = re.object.textEditorModel
															.getValueInRange($e)
															.split(re.object.textEditorModel.getEOL());
													let ue = [];
													if (pe.startLineNumber > 1) {
														const me = new w.$iL(
															Math.max(1, pe.startLineNumber - 10),
															1,
															pe.startLineNumber - 1,
															re.object.textEditorModel.getLineMaxColumn(
																pe.startLineNumber - 1,
															),
														);
														ue = re.object.textEditorModel
															.getValueInRange(me)
															.split(re.object.textEditorModel.getEOL());
													}
													let fe = [];
													if (
														pe.endLineNumber <
														re.object.textEditorModel.getLineCount()
													) {
														const me = new w.$iL(
															pe.endLineNumber + 1,
															1,
															Math.min(
																re.object.textEditorModel.getLineCount(),
																pe.endLineNumber + 10,
															),
															re.object.textEditorModel.getLineMaxColumn(
																Math.min(
																	re.object.textEditorModel.getLineCount(),
																	pe.endLineNumber + 10,
																),
															),
														);
														fe = re.object.textEditorModel
															.getValueInRange(me)
															.split(re.object.textEditorModel.getEOL());
													}
													return {
														range: pe,
														lines: ye,
														contextLinesAfter: fe,
														contextLinesBefore: ue,
													};
												}),
												listener: ae,
												relativeWorkspacePath: this.r.asRelativePath(Q),
											});
									}
								} catch (re) {
									console.warn("Watcher: error getting ranges -- ", re);
									continue;
								}
							if (X.length === 0) {
								this.j.setNonPersistentStorage(
									"lintState",
									"lastLintResult",
									c.LintResult.NO_CHANGES_FOUND,
								);
								return;
							}
							const Y = [];
							if (this.r.getWorkspace().folders.length > 0) {
								const Q = this.r.getWorkspace().folders[0].uri;
								let Z = await this.readFileContents(
									m.URI.joinPath(Q, ".cursor", "lint.txt"),
								);
								Z.trim() !== "" &&
									(Z += `
`);
								const re = (
									Z + this.j.applicationUserPersistentStorage.lintRules
								)
									.split(`
`)
									.filter((le) => le.trim() !== "");
								for (let le = 0; le < re.length; le++)
									Y.push(new y.$eD({ text: re[le].trim() }));
							}
							const ie = X.flatMap((Q) =>
									Q.ranges.map(
										(Z) =>
											new S.$CG({
												relativeWorkspacePath: Q.relativeWorkspacePath,
												startLineNumber: Z.range.startLineNumber,
												lines: Z.lines,
												contextLinesBefore: Z.contextLinesBefore,
												contextLinesAfter: Z.contextLinesAfter,
											}),
									),
								),
								ne = ie.map((Q) => new S.$DG()),
								ee = new S.$BG({
									chunksToAnalyze: ie,
									explicitContext: await this.g.getExplicitContext(),
									workspaceRootPath: this.c.getWorkspaceRootPath(),
									modelDetails: K,
									dismissedBugs:
										this.j.nonPersistentStorage.lintState.dismissedBugs,
									activeBugs: this.j.nonPersistentStorage.lintState.bugs.map(
										(Q) => Q.bug,
									),
									lintRules: Y,
									clients: ne,
									forceEnableDiscriminators:
										this.j.applicationUserPersistentStorage.lintSettings
											.forceEnableDiscriminators,
									forceDisableDiscriminators:
										this.j.applicationUserPersistentStorage.lintSettings
											.forceDisableDiscriminators,
									forceEnableGenerators:
										this.j.applicationUserPersistentStorage.lintSettings
											.forceEnableGenerators,
									forceDisableGenerators:
										this.j.applicationUserPersistentStorage.lintSettings
											.forceDisableGenerators,
									version: 2,
								}),
								te = (await this.g.aiClient()).streamAiLintBug(ee, {
									signal: W.signal,
									headers: (0, O.$m6b)(G),
								});
							for await (const Q of te)
								switch (Q.response.case) {
									case "bug": {
										const Z = Q.response.value;
										if (!Z.replaceRange) continue;
										const se = X.filter(
											($e) =>
												$e.relativeWorkspacePath === Z.relativeWorkspacePath,
										)[0];
										if (!se) {
											console.error(
												"Watcher: could not find listener for bug. This shouldnt happen unless the server is broken",
											);
											continue;
										}
										const re = se.listener.getUpdatedRange(
											new w.$iL(
												Z.replaceRange.startLineNumber,
												Z.replaceRange.startColumn,
												Z.replaceRange.endLineNumberInclusive,
												Z.replaceRange.endColumn,
											),
										);
										if (!re) {
											console.error(
												"Watcher: range is outside the original range. This shouldnt happen unless the server is broken",
											);
											continue;
										}
										const le = Z.reevaluateRange
											? se.listener.getUpdatedRange(
													new w.$iL(
														Z.reevaluateRange.startLineNumber,
														Z.reevaluateRange.startColumn,
														Z.reevaluateRange.endLineNumberInclusive,
														Z.reevaluateRange.endColumn,
													),
												)
											: null;
										if (re.isEmpty()) {
											console.error(
												"Watcher: received bug with empty replace range. This shouldnt happen unless the server is broken",
											);
											continue;
										}
										(Z.replaceRange = new I.$Fs({
											startLineNumber: re.startLineNumber,
											startColumn: re.startColumn,
											endLineNumberInclusive: re.endLineNumber,
											endColumn: re.endColumn,
										})),
											(Z.reevaluateRange = le
												? new I.$Fs({
														startLineNumber: le.startLineNumber,
														startColumn: le.startColumn,
														endLineNumberInclusive: le.endLineNumber,
														endColumn: le.endColumn,
													})
												: void 0);
										const oe = se.model.getValueInRange(re),
											ae = Z.replaceInitialText;
										if (
											this.n
												.read({
													resource: se.model.uri,
													severities:
														a.MarkerSeverity.Error | a.MarkerSeverity.Warning,
													take: 1e3,
												})
												.filter(
													($e) =>
														($e.startLineNumber >= re.startLineNumber &&
															$e.startLineNumber <= re.endLineNumber) ||
														($e.endLineNumber >= re.startLineNumber &&
															$e.endLineNumber <= re.endLineNumber),
												).length > 0
										) {
											console.warn(
												"Skipping bug because there is already a marker in the range!!!",
												Z,
											);
											continue;
										}
										oe === ae
											? this.j.setNonPersistentStorage(
													"lintState",
													"bugs",
													($e) => [
														...$e.filter((ye) => ye.bug.uuid !== Z.uuid),
														{
															bug: Z,
															uri: this.r
																.getWorkspace()
																.folders[0].toResource(Z.relativeWorkspacePath),
														},
													],
												)
											: console.warn(
													"Watcher: text changed while linting was running. This is fine and can happen but shouldnt happen too often",
													Z,
													{ newText: oe, oldVersionOfText: ae },
												);
										break;
									}
									case "backgroundTaskUuid":
										break;
								}
						} catch (K) {
							console.error("Watcher: error running lint -- ", K),
								this.j.setNonPersistentStorage(
									"lintState",
									"lastLintResult",
									c.LintResult.ERROR,
								);
						} finally {
							V.dispose(),
								this.j.setNonPersistentStorage("inprogressAIGenerations", (J) =>
									J.filter((W) => W.generationUUID !== G),
								);
							const K = Math.floor(Date.now() / 1e3);
							this.j.setNonPersistentStorage(
								"lintState",
								"lastLintTimestamp",
								K,
							);
						}
					}
					async getRanges(x, H, q, V) {
						const G = x.uri;
						if (
							((q === void 0 && !this.fileStates[G.toString()]) ||
								x.getValue().split(`
`).length > 1e4 ||
								(this.fileStates[G.toString()] !== void 0 &&
									this.fileStates[G.toString()].split(`
`).length > 1e4)) &&
							((this.fileStates[G.toString()] = x.getValue()), V !== !0)
						)
							return [];
						let K =
							q ??
							(await (0, $.$49b)(this.fileStates[G.toString()], x.getValue()));
						const J = this.f.getFocusedCodeEditor(),
							X =
								J?.getModel()?.uri.toString() === G.toString()
									? J?.getPosition()
									: void 0;
						X != null && H && (K = K.filter((ne) => !ne.containsPosition(X)));
						const Y = K.map((ne) => {
								const ee = Math.max(1, ne.startLineNumber - 15),
									_ = Math.min(x.getLineCount(), ne.endLineNumber + 15);
								return new w.$iL(ee, 1, _, 1);
							}),
							ie = [];
						Y.sort((ne, ee) => ne.startLineNumber - ee.startLineNumber);
						for (const ne of Y)
							if (
								ie.length === 0 ||
								ie[ie.length - 1].endLineNumber < ne.startLineNumber
							)
								ie.push(ne);
							else {
								const ee = ie.pop(),
									_ = new w.$iL(
										ee.startLineNumber,
										1,
										Math.max(ee.endLineNumber, ne.endLineNumber),
										1,
									);
								ie.push(_);
							}
						return (this.fileStates[G.toString()] = x.getValue()), ie;
					}
					async readFileContents(x) {
						try {
							return (await this.q.readFile(x)).value.toString();
						} catch (H) {
							return console.error("Watcher: error reading file -- ", H), "";
						}
					}
					dispose() {
						super.dispose();
						for (const x of Object.values(this.notificationHandlers))
							x.dispose();
					}
					reevaluateBug(x, H) {
						H ||
							this.j.setNonPersistentStorage("lintState", "bugs", (q) =>
								q.filter((V) => V.bug.uuid !== x),
							);
					}
					findClosestBug(x) {
						let H;
						if (x !== void 0)
							H = this.j.nonPersistentStorage.lintState.bugs.filter(
								(q) => q.bug.uuid === x,
							)[0];
						else {
							const q = this.f.getFocusedCodeEditor();
							if (!q || !q.hasModel()) return;
							const V = q?.getPosition();
							for (const G of this.j.nonPersistentStorage.lintState.bugs) {
								if (!G.bug.replaceRange) continue;
								const K =
										V.lineNumber > G.bug.replaceRange.startLineNumber ||
										(V.lineNumber == G.bug.replaceRange.startLineNumber &&
											V.column >= G.bug.replaceRange.startColumn),
									J =
										V.lineNumber < G.bug.replaceRange.endLineNumberInclusive ||
										(V.lineNumber ==
											G.bug.replaceRange.endLineNumberInclusive &&
											V.column <= G.bug.replaceRange.endColumn);
								if (K && J) {
									H = G;
									break;
								}
							}
						}
						return H;
					}
					applyLint(x) {
						const H = this.findClosestBug(x);
						if (!H || !H.bug.replaceRange) return;
						const q = this.notificationHandlers[H.bug.uuid];
						if (!q) return;
						const V = [
								{
									range: new w.$iL(
										H.bug.replaceRange.startLineNumber,
										H.bug.replaceRange.startColumn,
										H.bug.replaceRange.endLineNumberInclusive,
										H.bug.replaceRange.endColumn,
									),
									text: H.bug.replaceText,
								},
							],
							G = q.modelRef.object.textEditorModel.applyEdits(V, !0),
							K = q.modelRef.object.textEditorModel;
						this.j.setNonPersistentStorage("lintState", "bugs", (J) =>
							J.filter((W) => W.bug.uuid !== H.bug.uuid),
						),
							this.F.pushElement({
								type: D.UndoRedoElementType.Resource,
								resource: H.uri,
								label: "Undo apply lint fix",
								code: "aiWatchService.undo.applyLint",
								undo: () => {
									K.applyEdits(G, !1),
										this.j.setNonPersistentStorage("lintState", "bugs", (J) => [
											...J,
											H,
										]);
								},
								redo: () => {
									K.applyEdits(V, !1),
										this.j.setNonPersistentStorage("lintState", "bugs", (J) =>
											J.filter((W) => W.bug.uuid !== H.bug.uuid),
										);
								},
								rebase: () => {},
							});
					}
					clarifyLint(x) {
						const H = this.findClosestBug(x);
						if (!H) return;
						const q = this.n
							.read({ resource: H.uri })
							.filter((V) => V.aiLintBugData?.bugUuid === H.bug.uuid)[0];
						q &&
							this.C.executeCommand("aichat.fixspecificerrormessage", {
								marker: q,
							});
					}
					dismissLint(x, H = !1) {
						const q = this.findClosestBug(x);
						if (!q) return;
						const V = q;
						this.j.setNonPersistentStorage("lintState", "bugs", (K) =>
							K.filter((J) => J.bug.uuid !== V.bug.uuid),
						),
							this.j.setNonPersistentStorage(
								"lintState",
								"dismissedBugs",
								(K) => [...K, V.bug],
							);
						const G = {
							type: D.UndoRedoElementType.Resource,
							resource: V.uri,
							label: "Undo dismiss lint fix",
							code: "aiWatchService.undo.dismissLint",
							undo: () => {
								this.j.setNonPersistentStorage(
									"lintState",
									"dismissedBugs",
									(K) => K.filter((J) => J.uuid !== V.bug.uuid),
								),
									this.j.setNonPersistentStorage("lintState", "bugs", (K) => [
										...K,
										V,
									]);
							},
							redo: () => {
								this.j.setNonPersistentStorage("lintState", "bugs", (K) =>
									K.filter((J) => J.bug.uuid !== V.bug.uuid),
								),
									this.j.setNonPersistentStorage(
										"lintState",
										"dismissedBugs",
										(K) => [...K, V.bug],
									);
							},
							rebase: () => {},
						};
						if (H) return G;
						this.F.pushElement(G);
					}
					async dismissLintAndBanSimilar(x) {
						const H = this.findClosestBug(x);
						if (!H) return;
						const q = this.dismissLint(x, !0),
							V = { hasBeenUndone: !1, undo: () => {} };
						this.F.pushElement({
							type: D.UndoRedoElementType.Resource,
							resource: H.uri,
							label: "Undo ban similar lints",
							code: "aiWatchService.undo.banSimilarLints",
							undo: () => {
								q?.undo(),
									V.hasBeenUndone || (V.undo(), (V.hasBeenUndone = !0));
							},
							redo: () => {
								q?.redo();
							},
							rebase: () => {},
						});
						const G = H.bug.message,
							K = await (0, C.$Pfc)(await this.g.streamNewLintRule(G));
						V.hasBeenUndone ||
							(this.j.setApplicationUserPersistentStorage(
								"lintRules",
								(J) =>
									J +
									`

` +
									K,
							),
							(V.undo = () => {
								this.j.setApplicationUserPersistentStorage("lintRules", (J) =>
									J.replace(
										`

` + K,
										"",
									),
								);
							}));
					}
				};
				(e.$Eed = U),
					(e.$Eed = U =
						Ne(
							[
								j(0, N.$36b),
								j(1, i.$dtb),
								j(2, C.$Nfc),
								j(3, g.$S6b),
								j(4, h.$0zb),
								j(5, r.$MO),
								j(6, a.$aM),
								j(7, p.$ll),
								j(8, o.$Vi),
								j(9, f.$J6b),
								j(10, b.$y7c),
								j(11, l.$IY),
								j(12, v.$km),
								j(13, T.$EY),
								j(14, k.$k3),
								j(15, L.$ek),
								j(16, D.$GN),
								j(17, M.$9Db),
								j(18, A.$gj),
								j(19, R.$Bk),
								j(20, n.$jfc),
								j(21, B.$kZ),
							],
							U,
						));
				function z(F, x, H) {
					return new Promise((q, V) => {
						setTimeout(() => {
							q(F), H.abort();
						}, x);
					});
				}
				(0, u.$lK)(n.$gfc, U, u.InstantiationType.Delayed);
			},
		)
