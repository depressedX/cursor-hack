import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/actions.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../base/common/uri.js';
import '../../../../platform/files/common/files.js';
import '../../../services/environment/common/environmentService.js';
import '../../../../base/common/resources.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/output/common/output.js';
import '../../../../platform/telemetry/common/telemetryUtils.js';
import './defaultLogLevels.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/lifecycle.js';
define(
			de[1852],
			he([1, 0, 4, 50, 34, 63, 9, 22, 78, 19, 18, 297, 269, 1019, 14, 26, 3]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*actions*/,
 w /*log*/,
 E /*quickInput*/,
 C /*uri*/,
 d /*files*/,
 m /*environmentService*/,
 r /*resources*/,
 u /*editorService*/,
 a /*output*/,
 h /*telemetryUtils*/,
 c /*defaultLogLevels*/,
 n /*codicons*/,
 g /*themables*/,
 p /*lifecycle*/) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$IMc = e.$HMc = void 0),
					(t = mt(t));
				let f = class extends i.$rj {
					static {
						o = this;
					}
					static {
						this.ID = "workbench.action.setLogLevel";
					}
					static {
						this.TITLE = t.localize2(7435, "Set Log Level...");
					}
					constructor(l, y, $, v, S, I) {
						super(l, y), (this.c = $), (this.f = v), (this.g = S), (this.h = I);
					}
					async run() {
						const l = await this.r();
						l !== null &&
							((0, w.$kk)(l) ? this.f.setLogLevel(l) : await this.t(l));
					}
					async r() {
						const l = await this.h.getDefaultLogLevels(),
							y = [],
							$ = [],
							v = this.f.getLogLevel();
						for (const I of this.g.getChannelDescriptors()) {
							if (!o.isLevelSettable(I) || !I.file) continue;
							const T = this.f.getLogLevel(I.file) ?? v,
								P = {
									id: I.id,
									resource: I.file,
									label: I.label,
									description: T !== v ? this.L(T) : void 0,
									extensionId: I.extensionId,
								};
							I.extensionId ? y.push(P) : $.push(P);
						}
						const S = [];
						return (
							S.push({ type: "separator", label: t.localize(7424, null) }),
							S.push(...this.y(l.default, this.f.getLogLevel(), !0)),
							y.length &&
								(S.push({ type: "separator", label: t.localize(7425, null) }),
								S.push(...y.sort((I, T) => I.label.localeCompare(T.label)))),
							S.push({ type: "separator", label: t.localize(7426, null) }),
							S.push(...$.sort((I, T) => I.label.localeCompare(T.label))),
							new Promise((I, T) => {
								const P = new p.$Zc(),
									k = P.add(this.c.createQuickPick({ useSeparators: !0 }));
								(k.placeholder = t.localize(7427, null)), (k.items = S);
								let L;
								P.add(
									k.onDidTriggerItemButton((D) => {
										k.hide(), this.h.setDefaultLogLevel(D.item.level);
									}),
								),
									P.add(
										k.onDidAccept((D) => {
											(L = k.selectedItems[0]), k.hide();
										}),
									),
									P.add(
										k.onDidHide(() => {
											const D = L ? (L.level ?? L) : null;
											P.dispose(), I(D);
										}),
									),
									k.show();
							})
						);
					}
					static isLevelSettable(l) {
						return (
							l.log && l.file !== void 0 && l.id !== h.$Up && l.id !== h.$Vp
						);
					}
					async t(l) {
						const y = await this.h.getDefaultLogLevels(),
							$ =
								y.extensions.find(
									(I) => I[0] === l.extensionId?.toLowerCase(),
								)?.[1] ?? y.default,
							v = this.f.getLogLevel(l.resource) ?? $,
							S = this.y($, v, !!l.extensionId);
						return new Promise((I, T) => {
							const P = new p.$Zc(),
								k = P.add(this.c.createQuickPick());
							(k.placeholder = l
								? t.localize(7428, null, l?.label)
								: t.localize(7429, null)),
								(k.items = S),
								(k.activeItems = S.filter(
									(D) => D.level === this.f.getLogLevel(),
								));
							let L;
							P.add(
								k.onDidTriggerItemButton((D) => {
									k.hide(),
										this.h.setDefaultLogLevel(D.item.level, l.extensionId);
								}),
							),
								P.add(
									k.onDidAccept((D) => {
										(L = k.selectedItems[0]), k.hide();
									}),
								),
								P.add(
									k.onDidHide(() => {
										L && this.f.setLogLevel(l.resource, L.level),
											P.dispose(),
											I();
									}),
								),
								k.show();
						});
					}
					y(l, y, $) {
						const v = $
							? {
									iconClass: g.ThemeIcon.asClassName(n.$ak.checkAll),
									tooltip: t.localize(7430, null),
								}
							: void 0;
						return [
							{
								label: this.L(w.LogLevel.Trace, y),
								level: w.LogLevel.Trace,
								description: this.M(w.LogLevel.Trace, l),
								buttons: v && l !== w.LogLevel.Trace ? [v] : void 0,
							},
							{
								label: this.L(w.LogLevel.Debug, y),
								level: w.LogLevel.Debug,
								description: this.M(w.LogLevel.Debug, l),
								buttons: v && l !== w.LogLevel.Debug ? [v] : void 0,
							},
							{
								label: this.L(w.LogLevel.Info, y),
								level: w.LogLevel.Info,
								description: this.M(w.LogLevel.Info, l),
								buttons: v && l !== w.LogLevel.Info ? [v] : void 0,
							},
							{
								label: this.L(w.LogLevel.Warning, y),
								level: w.LogLevel.Warning,
								description: this.M(w.LogLevel.Warning, l),
								buttons: v && l !== w.LogLevel.Warning ? [v] : void 0,
							},
							{
								label: this.L(w.LogLevel.Error, y),
								level: w.LogLevel.Error,
								description: this.M(w.LogLevel.Error, l),
								buttons: v && l !== w.LogLevel.Error ? [v] : void 0,
							},
							{
								label: this.L(w.LogLevel.Off, y),
								level: w.LogLevel.Off,
								description: this.M(w.LogLevel.Off, l),
								buttons: v && l !== w.LogLevel.Off ? [v] : void 0,
							},
						];
					}
					L(l, y) {
						const $ = (0, w.$yk)(l).value;
						return l === y ? `$(check) ${$}` : $;
					}
					M(l, y) {
						return y === l ? t.localize(7431, null) : void 0;
					}
				};
				(e.$HMc = f),
					(e.$HMc =
						f =
						o =
							Ne([j(2, E.$DJ), j(3, w.$jk), j(4, a.$o8), j(5, c.$GMc)], f));
				let b = class extends i.$rj {
					static {
						this.ID = "workbench.action.openSessionLogFile";
					}
					static {
						this.TITLE = t.localize2(7436, "Open Window Log File (Session)...");
					}
					constructor(l, y, $, v, S, I) {
						super(l, y), (this.c = $), (this.f = v), (this.g = S), (this.h = I);
					}
					async run() {
						const l = await this.g.pick(
							this.r().then((y) =>
								y.map(($, v) => ({
									id: $.toString(),
									label: (0, r.$kh)($),
									description: v === 0 ? t.localize(7432, null) : void 0,
								})),
							),
							{ canPickMany: !1, placeHolder: t.localize(7433, null) },
						);
						if (l) {
							const y = await this.g.pick(
								this.t(C.URI.parse(l.id)).then(($) =>
									$.map((v) => ({ id: v.toString(), label: (0, r.$kh)(v) })),
								),
								{ canPickMany: !1, placeHolder: t.localize(7434, null) },
							);
							if (y)
								return this.h
									.openEditor({
										resource: C.URI.parse(y.id),
										options: { pinned: !0 },
									})
									.then(() => {});
						}
					}
					async r() {
						const l = this.c.logsHome.with({ scheme: this.c.logFile.scheme }),
							y = [l],
							$ = await this.f.resolve((0, r.$mh)(l));
						return (
							$.children &&
								y.push(
									...$.children
										.filter(
											(v) =>
												!(0, r.$gh)(v.resource, l) &&
												v.isDirectory &&
												/^\d{8}T\d{6}$/.test(v.name),
										)
										.sort()
										.reverse()
										.map((v) => v.resource),
								),
							y
						);
					}
					async t(l) {
						const y = await this.f.resolve(l);
						return y.children
							? y.children.filter(($) => !$.isDirectory).map(($) => $.resource)
							: [];
					}
				};
				(e.$IMc = b),
					(e.$IMc = b =
						Ne([j(2, m.$r8), j(3, d.$ll), j(4, E.$DJ), j(5, u.$IY)], b));
			},
		)
