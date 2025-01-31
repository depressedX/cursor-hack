import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/registry/common/platform.js';
import '../../../services/output/common/output.js';
import './outputLinkProvider.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../platform/log/common/log.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/views/common/viewsService.js';
import '../common/outputChannelModelService.js';
import '../../../../editor/common/languages/language.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../logs/common/logsActions.js';
import '../../logs/common/defaultLogLevels.js';
define(
			de[3835],
			he([
				1, 0, 6, 23, 9, 3, 5, 21, 30, 297, 3524, 42, 34, 52, 89, 1853, 61, 8,
				1852, 1019,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*network*/,
 w /*uri*/,
 E /*lifecycle*/,
 C /*instantiation*/,
 d /*storage*/,
 m /*platform*/,
 r /*output*/,
 u /*outputLinkProvider*/,
 a /*resolverService*/,
 h /*log*/,
 c /*lifecycle*/,
 n /*viewsService*/,
 g /*outputChannelModelService*/,
 p /*language*/,
 o /*contextkey*/,
 f /*logsActions*/,
 b /*defaultLogLevels*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bUc = void 0);
				const s = "output.activechannel";
				let l = class extends E.$1c {
					constructor(v, S, I) {
						super(),
							(this.outputChannelDescriptor = v),
							(this.scrollLock = !1),
							(this.id = v.id),
							(this.label = v.label),
							(this.uri = w.URI.from({
								scheme: i.Schemas.outputChannel,
								path: this.id,
							})),
							(this.model = this.D(
								S.createOutputChannelModel(
									this.id,
									this.uri,
									v.languageId
										? I.createById(v.languageId)
										: I.createByMimeType(v.log ? r.$f8 : r.$d8),
									v.file,
								),
							));
					}
					append(v) {
						this.model.append(v);
					}
					update(v, S) {
						this.model.update(v, S, !0);
					}
					clear() {
						this.model.clear();
					}
					replace(v) {
						this.model.replace(v);
					}
				};
				l = Ne([j(1, g.$8Tc), j(2, p.$nM)], l);
				let y = class extends E.$1c {
					constructor(v, S, I, T, P, k, L, D, M) {
						super(),
							(this.q = v),
							(this.r = S),
							(this.s = T),
							(this.t = P),
							(this.u = k),
							(this.w = L),
							(this.y = M),
							(this.a = new Map()),
							(this.f = this.D(new t.$re())),
							(this.onActiveOutputChannel = this.f.event),
							(this.b = this.q.get(s, d.StorageScope.WORKSPACE, "")),
							(this.g = r.$q8.bindTo(D)),
							this.g.set(this.b),
							this.D(this.onActiveOutputChannel((A) => this.g.set(A))),
							(this.h = r.$j8.bindTo(D)),
							(this.j = r.$k8.bindTo(D)),
							(this.m = r.$l8.bindTo(D)),
							(this.n = r.$m8.bindTo(D)),
							this.D(
								I.registerTextModelContentProvider(
									i.Schemas.outputChannel,
									this,
								),
							),
							this.D(S.createInstance(u.$_Tc));
						const N = m.$Io.as(r.$p8.OutputChannels);
						for (const A of N.getChannels()) this.z(A.id);
						if ((this.D(N.onDidRegisterChannel(this.z, this)), !this.c)) {
							const A = this.getChannelDescriptors();
							this.I(A && A.length > 0 ? this.getChannel(A[0].id) : void 0);
						}
						this.D(
							t.Event.filter(
								this.w.onDidChangeViewVisibility,
								(A) => A.id === r.$h8 && A.visible,
							)(() => {
								this.c &&
									this.w.getActiveViewWithId(r.$h8)?.showChannel(this.c, !0);
							}),
						),
							this.D(
								this.t.onDidChangeLogLevel((A) => {
									this.G(), this.H();
								}),
							),
							this.D(
								this.y.onDidChangeDefaultLogLevels(() => {
									this.H();
								}),
							),
							this.D(this.u.onDidShutdown(() => this.dispose()));
					}
					provideTextContent(v) {
						const S = this.getChannel(v.path);
						return S ? S.model.loadModel() : null;
					}
					async showChannel(v, S) {
						const I = this.getChannel(v);
						this.c?.id !== I?.id && (this.I(I), this.f.fire(v));
						const T = await this.w.openView(r.$h8, !S);
						T && I && T.showChannel(I, !!S);
					}
					getChannel(v) {
						return this.a.get(v);
					}
					getChannelDescriptor(v) {
						return m.$Io.as(r.$p8.OutputChannels).getChannel(v);
					}
					getChannelDescriptors() {
						return m.$Io.as(r.$p8.OutputChannels).getChannels();
					}
					getActiveChannel() {
						return this.c;
					}
					async z(v) {
						const S = this.C(v);
						this.a.set(v, S),
							(!this.c || this.b === v) &&
								(this.I(S),
								this.f.fire(v),
								this.w.getActiveViewWithId(r.$h8)?.showChannel(S, !0));
					}
					C(v) {
						const S = this.F(v);
						return (
							this.D(
								t.Event.once(S.model.onDispose)(() => {
									if (this.c === S) {
										const I = this.getChannelDescriptors(),
											T = I.length ? this.getChannel(I[0].id) : void 0;
										T && this.w.isViewVisible(r.$h8)
											? this.showChannel(T.id)
											: this.I(void 0);
									}
									m.$Io.as(r.$p8.OutputChannels).removeChannel(v);
								}),
							),
							S
						);
					}
					F(v) {
						const S = m.$Io.as(r.$p8.OutputChannels).getChannel(v);
						if (!S)
							throw (
								(this.s.error(`Channel '${v}' is not registered yet`),
								new Error(`Channel '${v}' is not registered yet`))
							);
						return this.r.createInstance(l, S);
					}
					G() {
						const v = this.c?.outputChannelDescriptor,
							S = v?.log ? this.t.getLogLevel(v.file) : void 0;
						this.m.set(S !== void 0 ? (0, h.$xk)(S) : "");
					}
					async H() {
						const v = this.c?.outputChannelDescriptor;
						if (v?.log) {
							const S = this.t.getLogLevel(v.file),
								I = await this.y.getDefaultLogLevel(v.extensionId);
							this.n.set(I === S);
						} else this.n.set(!1);
					}
					I(v) {
						this.c = v;
						const S = v?.outputChannelDescriptor;
						this.h.set(!!S?.file),
							this.j.set(S !== void 0 && f.$HMc.isLevelSettable(S)),
							this.H(),
							this.G(),
							this.c
								? this.q.store(
										s,
										this.c.id,
										d.StorageScope.WORKSPACE,
										d.StorageTarget.MACHINE,
									)
								: this.q.remove(s, d.StorageScope.WORKSPACE);
					}
				};
				(e.$bUc = y),
					(e.$bUc = y =
						Ne(
							[
								j(0, d.$lq),
								j(1, C.$Li),
								j(2, a.$MO),
								j(3, h.$ik),
								j(4, h.$jk),
								j(5, c.$n6),
								j(6, n.$HMb),
								j(7, o.$6j),
								j(8, b.$GMc),
							],
							y,
						));
			},
		)
