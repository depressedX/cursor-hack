import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/async.js';
import '../../../../base/common/decorators.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../../platform/terminal/common/terminalPlatformConfiguration.js';
import '../../../../platform/terminal/common/terminalProfiles.js';
import './terminal.js';
import './terminalActions.js';
import '../common/terminalContextKey.js';
import '../common/terminalExtensionPoints.js';
import '../../../services/environment/common/environmentService.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/remote/common/remoteAgentService.js';
define(
			de[4036],
			he([
				1, 0, 24, 82, 15, 138, 6, 3, 12, 10, 8, 117, 1201, 955, 107, 363, 237,
				1818, 78, 53, 143,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*arrays*/,
				i /*objects*/,
				w /*async*/,
				E /*decorators*/,
				C /*event*/,
				d /*lifecycle*/,
				m /*platform*/,
				r /*configuration*/,
				u /*contextkey*/,
				a /*terminal*/,
				h /*terminalPlatformConfiguration*/,
				c /*terminalProfiles*/,
				n /*terminal*/,
				g /*terminalActions*/,
				p /*terminalContextKey*/,
				o /*terminalExtensionPoints*/,
				f /*environmentService*/,
				b /*extensions*/,
				s /*remoteAgentService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wVc = void 0),
					(t = mt(t)),
					(i = mt(i));
				let l = class extends d.$1c {
					get onDidChangeAvailableProfiles() {
						return this.r.event;
					}
					get profilesReady() {
						return this.c;
					}
					get availableProfiles() {
						return this.m || this.refreshAvailableProfiles(), this.f || [];
					}
					get contributedProfiles() {
						const S = this.f?.map((I) => I.profileName) || [];
						return this.h?.filter((I) => !S.includes(I.title)) || [];
					}
					constructor(S, I, T, P, k, L, D) {
						super(),
							(this.s = S),
							(this.t = I),
							(this.u = T),
							(this.w = P),
							(this.y = k),
							(this.z = L),
							(this.C = D),
							(this.h = []),
							(this.m = !1),
							(this.n = this.D(new d.$2c())),
							(this.q = new Map()),
							(this.r = this.D(new C.$re())),
							this.D(
								this.w.onDidChangeExtensions(() =>
									this.refreshAvailableProfiles(),
								),
							),
							(this.a =
								p.TerminalContextKeys.webExtensionContributedProfile.bindTo(
									this.s,
								)),
							this.L(),
							(this.c = this.y
								.getEnvironment()
								.then(
									() => (
										(this.b = new w.$Mh(2e4)), this.b.wait().then(() => {})
									),
								)),
							this.refreshAvailableProfiles(),
							this.F();
					}
					async F() {
						const S = await this.getPlatformKey();
						this.D(
							this.t.onDidChangeConfiguration(async (I) => {
								(I.affectsConfiguration(
									a.TerminalSettingPrefix.AutomationProfile + S,
								) ||
									I.affectsConfiguration(
										a.TerminalSettingPrefix.DefaultProfile + S,
									) ||
									I.affectsConfiguration(
										a.TerminalSettingPrefix.Profiles + S,
									) ||
									I.affectsConfiguration(a.TerminalSettingId.UseWslProfiles)) &&
									(I.source !== r.ConfigurationTarget.DEFAULT
										? (this.refreshAvailableProfiles(), (this.m = !1))
										: (this.m = !0));
							}),
						);
					}
					getDefaultProfileName() {
						return this.j;
					}
					getDefaultProfile(S) {
						let I;
						if (S) {
							if (
								((I = this.t.getValue(
									`${a.TerminalSettingPrefix.DefaultProfile}${this.G(S)}`,
								)),
								!I || typeof I != "string")
							)
								return;
						} else I = this.j;
						if (I)
							return this.availableProfiles.find(
								(T) => T.profileName === I && !T.isAutoDetected,
							);
					}
					G(S) {
						switch (S) {
							case m.OperatingSystem.Linux:
								return "linux";
							case m.OperatingSystem.Macintosh:
								return "osx";
							case m.OperatingSystem.Windows:
								return "windows";
						}
					}
					refreshAvailableProfiles() {
						this.H();
					}
					async H() {
						const S = await this.J(!0),
							I = !t.$yb(S, this.f, y),
							T = await this.I(),
							P = await this.getPlatformKey(),
							k = this.t.getValue(
								`${a.TerminalSettingPrefix.AutomationProfile}${P}`,
							),
							L = !i.$zo(k, this.g);
						(I || T || L) &&
							((this.f = S),
							(this.g = k),
							this.r.fire(this.f),
							this.b.open(),
							this.L(),
							await this.M(this.f));
					}
					async I() {
						const S = await this.getPlatformKey(),
							I = [],
							T = this.t.getValue(a.TerminalSettingPrefix.Profiles + S);
						for (const [L, D] of Object.entries(T)) D === null && I.push(L);
						const P = Array.from(
								this.u.terminalProfiles.filter((L) => !I.includes(L.title)),
							),
							k = !t.$yb(P, this.h, $);
						return (this.h = P), k;
					}
					getContributedProfileProvider(S, I) {
						return this.q.get(S)?.get(I);
					}
					async J(S) {
						const I = await this.C.getBackend(this.z.remoteAuthority);
						if (!I) return this.f || [];
						const T = await this.getPlatformKey();
						return (
							(this.j =
								this.t.getValue(
									`${a.TerminalSettingPrefix.DefaultProfile}${T}`,
								) ?? void 0),
							I.getProfiles(
								this.t.getValue(`${a.TerminalSettingPrefix.Profiles}${T}`),
								this.j,
								S,
							)
						);
					}
					L() {
						this.a.set(m.$r && this.h.length > 0);
					}
					async M(S) {
						const I = await this.y.getEnvironment();
						(0, h.$$J)({ os: I?.os || m.OS, profiles: S }, this.h),
							(this.n.value = (0, g.$KUc)(S));
					}
					async getPlatformKey() {
						const S = await this.y.getEnvironment();
						return S
							? S.os === m.OperatingSystem.Windows
								? "windows"
								: S.os === m.OperatingSystem.Macintosh
									? "osx"
									: "linux"
							: m.$l
								? "windows"
								: m.$m
									? "osx"
									: "linux";
					}
					registerTerminalProfileProvider(S, I, T) {
						let P = this.q.get(S);
						return (
							P || ((P = new Map()), this.q.set(S, P)),
							P.set(I, T),
							(0, d.$Yc)(() => this.q.delete(I))
						);
					}
					async registerContributedProfile(S) {
						const I = await this.getPlatformKey(),
							T = await this.t.getValue(
								`${a.TerminalSettingPrefix.Profiles}${I}`,
							);
						if (typeof T == "object") {
							const P = {
								extensionIdentifier: S.extensionIdentifier,
								icon: S.options.icon,
								id: S.id,
								title: S.title,
								color: S.options.color,
							};
							T[S.title] = P;
						}
						await this.t.updateValue(
							`${a.TerminalSettingPrefix.Profiles}${I}`,
							T,
							r.ConfigurationTarget.USER,
						);
					}
					async getContributedDefaultProfile(S) {
						if (S && !S.extHostTerminalId && !("executable" in S)) {
							const I = await this.getPlatformKey(),
								T = this.t.getValue(
									`${a.TerminalSettingPrefix.DefaultProfile}${I}`,
								);
							return this.contributedProfiles.find((k) => k.title === T);
						}
					}
				};
				(e.$wVc = l),
					Ne([(0, E.$gi)(2e3)], l.prototype, "refreshAvailableProfiles", null),
					(e.$wVc = l =
						Ne(
							[
								j(0, u.$6j),
								j(1, r.$gj),
								j(2, o.$uVc),
								j(3, b.$q2),
								j(4, s.$$m),
								j(5, f.$r8),
								j(6, n.$mIb),
							],
							l,
						));
				function y(v, S) {
					return (
						v.profileName === S.profileName &&
						(0, c.$5J)(v.args, S.args) &&
						v.color === S.color &&
						(0, c.$6J)(v.icon, S.icon) &&
						v.isAutoDetected === S.isAutoDetected &&
						v.isDefault === S.isDefault &&
						v.overrideName === S.overrideName &&
						v.path === S.path
					);
				}
				function $(v, S) {
					return (
						v.extensionIdentifier === S.extensionIdentifier &&
						v.color === S.color &&
						v.icon === S.icon &&
						v.id === S.id &&
						v.title === S.title
					);
				}
			},
		),
		