define(
			de[3660],
			he([1, 0, 536, 3, 77, 531, 196, 17, 1590, 1152, 326, 3659]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hyc = void 0);
				class h extends i.$1c {
					static {
						this.a = 0;
					}
					constructor(p, o, f, b, s, l) {
						super(),
							(this.q = p),
							(this.r = o),
							(this.u = f),
							(this.w = b),
							(this.y = s),
							(this.z = l),
							(this.controllerId = h.a++),
							(this.f = []),
							(this.g = new m.$gV()),
							(this.h = (0, u.$Mwb)(
								"editor.experimental.asyncTokenizationLogging",
								!1,
								this.y,
							)),
							this.D((0, w.keepObserved)(this.h)),
							this.D(
								this.q.onDidChangeContent((v) => {
									this.C &&
										console.log("model change", {
											fileName: this.q.uri.fsPath.split("\\").pop(),
											changes: n(v.changes),
										}),
										this.r.$acceptModelChanged(this.controllerId, v),
										this.f.push(v);
								}),
							),
							this.D(
								this.q.onDidChangeLanguage((v) => {
									const S = this.q.getLanguageId(),
										I = this.u.encodeLanguageId(S);
									this.r.$acceptModelLanguageChanged(this.controllerId, S, I);
								}),
							);
						const y = this.q.getLanguageId(),
							$ = this.u.encodeLanguageId(y);
						this.r.$acceptNewModel({
							uri: this.q.uri,
							versionId: this.q.getVersionId(),
							lines: this.q.getLinesContent(),
							EOL: this.q.getEOL(),
							languageId: y,
							encodedLanguageId: $,
							maxTokenizationLineLength: this.z.get(),
							controllerId: this.controllerId,
						}),
							this.D(
								(0, w.autorun)((v) => {
									const S = this.z.read(v);
									this.r.$acceptMaxTokenizationLineLength(this.controllerId, S);
								}),
							);
					}
					dispose() {
						super.dispose(), this.r.$acceptRemovedModel(this.controllerId);
					}
					requestTokens(p, o) {
						this.r.$retokenize(this.controllerId, p, o);
					}
					async setTokensAndStates(p, o, f, b) {
						if (this.controllerId !== p) return;
						let s = r.$cV.deserialize(new Uint8Array(f));
						if (
							(this.C &&
								console.log("received background tokenization result", {
									fileName: this.q.uri.fsPath.split("\\").pop(),
									updatedTokenLines: s.map((y) => y.getLineRange()).join(" & "),
									updatedStateLines: b
										.map((y) =>
											new C.$rL(
												y.startLineNumber,
												y.startLineNumber + y.stateDeltas.length,
											).toString(),
										)
										.join(" & "),
								}),
							this.C)
						) {
							const y = this.f
								.filter(($) => $.versionId <= o)
								.map(($) => $.changes)
								.map(($) => n($))
								.join(" then ");
							console.log("Applying changes to local states", y);
						}
						for (; this.f.length > 0 && this.f[0].versionId <= o; ) {
							const y = this.f.shift();
							this.g.acceptChanges(y.changes);
						}
						if (this.f.length > 0) {
							if (this.C) {
								const v = this.f
									.map((S) => S.changes)
									.map((S) => n(S))
									.join(" then ");
								console.log("Considering non-processed changes", v);
							}
							const y = a.$Fyc.fromMany(this.f.map((v) => c(v.changes))),
								$ = new r.$cV();
							for (const v of s)
								for (let S = v.startLineNumber; S <= v.endLineNumber; S++)
									y.transform(S - 1) !== void 0 && $.add(S, v.getLineTokens(S));
							s = $.finalize();
							for (const v of this.f)
								for (const S of v.changes)
									for (let I = 0; I < s.length; I++)
										s[I].applyEdit(S.range, S.text);
						}
						const l = a.$Fyc.fromMany(this.f.map((y) => c(y.changes)));
						if (!this.m || !this.n) {
							const { applyStateStackDiff: y, INITIAL: $ } = await (0, t.$Tq)(
								"vscode-textmate",
								"release/main.js",
							);
							(this.m = y), (this.n = $);
						}
						for (const y of b) {
							let $ =
								y.startLineNumber <= 1
									? this.n
									: this.g.getEndState(y.startLineNumber - 1);
							for (let v = 0; v < y.stateDeltas.length; v++) {
								const S = y.stateDeltas[v];
								let I;
								S
									? ((I = this.m($, S)),
										this.g.setEndState(y.startLineNumber + v, I))
									: (I = this.g.getEndState(y.startLineNumber + v));
								const T = l.transform(y.startLineNumber + v - 1);
								T !== void 0 && this.w.setEndState(T + 1, I),
									y.startLineNumber + v >= this.q.getLineCount() - 1 &&
										this.w.backgroundTokenizationFinished(),
									($ = I);
							}
						}
						this.w.setTokens(s);
					}
					get C() {
						return this.h.get();
					}
				}
				e.$Hyc = h;
				function c(g) {
					return new a.$Dyc(
						g.map(
							(p) =>
								new a.$Eyc(
									p.range.startLineNumber - 1,
									p.range.endLineNumber - p.range.startLineNumber + 1,
									(0, E.$6L)(p.text)[0] + 1,
								),
						),
					);
				}
				function n(g) {
					return g
						.map((p) => d.$iL.lift(p.range).toString() + " => " + p.text)
						.join(" & ");
				}
			},
		),
		