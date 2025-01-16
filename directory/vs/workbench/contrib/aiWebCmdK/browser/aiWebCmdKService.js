define(
			de[1346],
			he([
				1, 0, 3, 9, 20, 5, 45, 18, 42, 118, 670, 205, 1285, 65, 85, 191, 341,
				1045, 22,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Icc = e.$Hcc = void 0),
					(e.$Hcc = (0, E.$Mi)("aiWebCmdKService"));
				let b = class extends t.$1c {
					constructor(l, y, $, v, S, I, T, P) {
						super(),
							(this.a = l),
							(this.b = y),
							(this.c = $),
							(this.f = v),
							(this.g = S),
							(this.h = I),
							(this.j = T),
							(this.m = P);
					}
					async submit() {
						const l = this.a.nonPersistentStorage.webCmdKState.promptBar;
						if (l === void 0) {
							console.error("no prompt bar");
							return;
						}
						const y = await this.c.createModelReference(l.sourceURI),
							[$, v] = this.f.registerNewGeneration({ metadata: void 0 });
						this.a.setNonPersistentStorage(
							"webCmdKState",
							"promptBar",
							"lastGenerationUUID",
							$,
						);
						try {
							const S = y.object.textEditorModel;
							let I = l.sourceLineNumber;
							const T = S.getLineIndentColumn(I);
							let P = I + 1;
							for (; P < S.getLineCount(); ) {
								if (S.getLineContent(P).trim() === "") {
									P++;
									continue;
								}
								if (S.getLineIndentColumn(P) <= T) break;
								P++;
							}
							const k = S.getValue(),
								L = this.g.create(
									S,
									this.h.getActiveCodeEditor(),
									{
										startLineNumber: I,
										endLineNumber: P,
										startColumn: 1,
										endColumn: S.getLineMaxColumn(P),
									},
									{},
								),
								D = await this.f.aiClient(),
								M = this.f.getModelDetails(),
								N = D.streamWebCmdKV1(
									{
										modelDetails: M,
										fileContents: k,
										relativeWorkspacePath: l.sourceURI.path,
										selectionRange: {
											startLineNumber: I,
											endLineNumberInclusive: P,
										},
										images:
											l.images && l.images.length > 0
												? [
														await (0, o.$F7b)(
															l.images[0],
															() => {},
															this.m,
															512,
														),
													]
												: [],
										prompt: l.delegate.getText(),
									},
									{ signal: v.signal, headers: (0, g.$m6b)($) },
								),
								A = p.$q0.typeName + "/" + p.$q0.methods.streamWebCmdKV1.name,
								R = this.f.streamResponse({
									modelDetails: M,
									streamer: (0, r.$Mfc)(N),
									generationUUID: $,
									streamerURL: A,
									rethrowCancellation: !0,
									rerun: void 0,
									source: "other",
								});
							L.show();
							for await (const O of R)
								O.cmdKResponse?.response.case === "editStream" &&
									L.append(O.cmdKResponse.response.value.text);
							await L.finish(),
								await L.accept(),
								await this.j.save(l.sourceURI);
						} finally {
							y.dispose(),
								this.a.setNonPersistentStorage("inprogressAIGenerations", (S) =>
									S.filter((I) => I.generationUUID !== $),
								);
						}
					}
					close() {
						this.b.activeEditorPane?.focus(),
							this.a.setNonPersistentStorage(
								"webCmdKState",
								"promptBar",
								void 0,
							);
					}
					async showWebCmdKInputBox(l) {
						const y = {
							sourceLineNumber: l.source.lineNumber,
							sourceURI: i.URI.parse(l.source.fileName),
							delegate: new u.$KN(),
							inputBoxDelegate: new a.$Zzb(),
							initText: "",
							images: [],
							originalPositionX: 0,
							originalPositionY: 0,
						};
						this.a.setNonPersistentStorage("webCmdKState", "promptBar", y);
					}
				};
				(e.$Icc = b),
					(e.$Icc = b =
						Ne(
							[
								j(0, C.$0zb),
								j(1, d.$IY),
								j(2, m.$MO),
								j(3, r.$Nfc),
								j(4, h.$Fcc),
								j(5, c.$dtb),
								j(6, n.$kZ),
								j(7, f.$ll),
							],
							b,
						)),
					(0, w.$lK)(e.$Hcc, b, w.InstantiationType.Delayed);
			},
		);
	var ms =
			(this && this.__addDisposableResource) ||
			function (ce, e, t) {
				if (e != null) {
					if (typeof e != "object" && typeof e != "function")
						throw new TypeError("Object expected.");
					var i, w;
					if (t) {
						if (!Symbol.asyncDispose)
							throw new TypeError("Symbol.asyncDispose is not defined.");
						i = e[Symbol.asyncDispose];
					}
					if (i === void 0) {
						if (!Symbol.dispose)
							throw new TypeError("Symbol.dispose is not defined.");
						(i = e[Symbol.dispose]), t && (w = i);
					}
					if (typeof i != "function")
						throw new TypeError("Object not disposable.");
					w &&
						(i = function () {
							try {
								w.call(this);
							} catch (E) {
								return Promise.reject(E);
							}
						}),
						ce.stack.push({ value: e, dispose: i, async: t });
				} else t && ce.stack.push({ async: !0 });
				return e;
			},
		ps =
			(this && this.__disposeResources) ||
			(function (ce) {
				return function (e) {
					function t(C) {
						(e.error = e.hasError
							? new ce(C, e.error, "An error was suppressed during disposal.")
							: C),
							(e.hasError = !0);
					}
					var i,
						w = 0;
					function E() {
						for (; (i = e.stack.pop()); )
							try {
								if (!i.async && w === 1)
									return (w = 0), e.stack.push(i), Promise.resolve().then(E);
								if (i.dispose) {
									var C = i.dispose.call(i.value);
									if (i.async)
										return (
											(w |= 2),
											Promise.resolve(C).then(E, function (d) {
												return t(d), E();
											})
										);
								} else w |= 1;
							} catch (d) {
								t(d);
							}
						if (w === 1)
							return e.hasError ? Promise.reject(e.error) : Promise.resolve();
						if (e.hasError) throw e.error;
					}
					return E();
				};
			})(
				typeof SuppressedError == "function"
					? SuppressedError
					: function (ce, e, t) {
							var i = new Error(t);
							return (
								(i.name = "SuppressedError"),
								(i.error = ce),
								(i.suppressed = e),
								i
							);
						},
			);
	