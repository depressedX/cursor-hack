import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import './languagesRegistry.js';
import '../../../base/common/arrays.js';
import '../languages.js';
import '../languages/modesRegistry.js';
import '../../../base/common/observable.js';
define(
			de[2774],
			he([1, 0, 6, 3, 2773, 24, 74, 172, 77]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*languagesRegistry*/,
 E /*arrays*/,
 C /*languages*/,
 d /*modesRegistry*/,
 m /*observable*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pYb = void 0);
				class r extends i.$1c {
					static {
						this.instanceCount = 0;
					}
					constructor(h = !1) {
						super(),
							(this.c = this.D(new t.$re())),
							(this.onDidRequestBasicLanguageFeatures = this.c.event),
							(this.f = this.D(new t.$re())),
							(this.onDidRequestRichLanguageFeatures = this.f.event),
							(this.g = this.D(new t.$re({ leakWarningThreshold: 200 }))),
							(this.onDidChange = this.g.event),
							(this.h = new Set()),
							(this.m = new Set()),
							r.instanceCount++,
							(this.n = this.D(new w.$oYb(!0, h))),
							(this.languageIdCodec = this.n.languageIdCodec),
							this.D(this.n.onDidChange(() => this.g.fire()));
					}
					dispose() {
						r.instanceCount--, super.dispose();
					}
					registerLanguage(h) {
						return this.n.registerLanguage(h);
					}
					isRegisteredLanguageId(h) {
						return this.n.isRegisteredLanguageId(h);
					}
					getRegisteredLanguageIds() {
						return this.n.getRegisteredLanguageIds();
					}
					getSortedRegisteredLanguageNames() {
						return this.n.getSortedRegisteredLanguageNames();
					}
					getLanguageName(h) {
						return this.n.getLanguageName(h);
					}
					getMimeType(h) {
						return this.n.getMimeType(h);
					}
					getIcon(h) {
						return this.n.getIcon(h);
					}
					getExtensions(h) {
						return this.n.getExtensions(h);
					}
					getFilenames(h) {
						return this.n.getFilenames(h);
					}
					getConfigurationFiles(h) {
						return this.n.getConfigurationFiles(h);
					}
					getLanguageIdByLanguageName(h) {
						return this.n.getLanguageIdByLanguageName(h);
					}
					getLanguageIdByMimeType(h) {
						return this.n.getLanguageIdByMimeType(h);
					}
					guessLanguageIdByFilepathOrFirstLine(h, c) {
						const n = this.n.guessLanguageIdByFilepathOrFirstLine(h, c);
						return (0, E.$Sb)(n, null);
					}
					createById(h) {
						return new u(this.onDidChange, () => this.q(h));
					}
					createByMimeType(h) {
						return new u(this.onDidChange, () => {
							const c = this.getLanguageIdByMimeType(h);
							return this.q(c);
						});
					}
					createByFilepathOrFirstLine(h, c) {
						return new u(this.onDidChange, () => {
							const n = this.guessLanguageIdByFilepathOrFirstLine(h, c);
							return this.q(n);
						});
					}
					createByLanguageNameOrFilepathOrFirstLine(h, c, n) {
						return new u(this.onDidChange, () => {
							let g = null;
							return (
								h && (g = this.getLanguageIdByLanguageName(h)),
								g || (g = this.guessLanguageIdByFilepathOrFirstLine(c, n)),
								this.q(g)
							);
						});
					}
					q(h) {
						return (!h || !this.isRegisteredLanguageId(h)) && (h = d.$0M), h;
					}
					requestBasicLanguageFeatures(h) {
						this.h.has(h) || (this.h.add(h), this.c.fire(h));
					}
					requestRichLanguageFeatures(h) {
						this.m.has(h) ||
							(this.m.add(h),
							this.requestBasicLanguageFeatures(h),
							C.$lM.getOrCreate(h),
							this.f.fire(h));
					}
				}
				e.$pYb = r;
				class u {
					constructor(h, c) {
						(this.a = (0, m.observableFromEvent)(this, h, () => c())),
							(this.onDidChange = t.Event.fromObservable(this.a));
					}
					get languageId() {
						return this.a.get();
					}
				}
			},
		),
		