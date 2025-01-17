import '../../../require.js';
import '../../../exports.js';
import '../../nls.js';
import '../../platform/product/common/product.js';
import '../browser/workbench.js';
import './window.js';
import '../../base/browser/browser.js';
import '../../base/browser/dom.js';
import '../../base/common/errors.js';
import '../../base/common/uri.js';
import '../services/configuration/browser/configurationService.js';
import '../services/environment/electron-sandbox/environmentService.js';
import '../../platform/instantiation/common/serviceCollection.js';
import '../../platform/log/common/log.js';
import '../services/storage/electron-sandbox/storageService.js';
import '../../platform/workspace/common/workspace.js';
import '../services/configuration/common/configuration.js';
import '../../platform/storage/common/storage.js';
import '../../base/common/lifecycle.js';
import '../../platform/ipc/electron-sandbox/services.js';
import '../../platform/ipc/common/mainProcessService.js';
import '../services/sharedProcess/electron-sandbox/sharedProcessService.js';
import '../../platform/remote/electron-sandbox/remoteAuthorityResolverService.js';
import '../../platform/remote/common/remoteAuthorityResolver.js';
import '../services/remote/electron-sandbox/remoteAgentService.js';
import '../services/remote/common/remoteAgentService.js';
import '../../platform/files/common/fileService.js';
import '../../platform/files/common/files.js';
import '../services/remote/common/remoteFileSystemProviderClient.js';
import '../services/configuration/common/configurationCache.js';
import '../../platform/sign/common/sign.js';
import '../../platform/product/common/productService.js';
import '../../platform/uriIdentity/common/uriIdentity.js';
import '../../platform/uriIdentity/common/uriIdentityService.js';
import '../services/keybinding/electron-sandbox/nativeKeyboardLayoutService.js';
import '../../platform/ipc/electron-sandbox/mainProcessService.js';
import '../../platform/log/common/logIpc.js';
import '../../base/parts/ipc/common/ipc.js';
import '../services/log/electron-sandbox/logService.js';
import '../services/workspaces/common/workspaceTrust.js';
import '../../platform/workspace/common/workspaceTrust.js';
import '../../base/common/objects.js';
import '../services/utilityProcess/electron-sandbox/utilityProcessWorkerWorkbenchService.js';
import '../../base/common/platform.js';
import '../../base/common/network.js';
import '../services/files/electron-sandbox/diskFileSystemProvider.js';
import '../../platform/userData/common/fileUserDataProvider.js';
import '../../platform/userDataProfile/common/userDataProfile.js';
import '../../platform/userDataProfile/common/userDataProfileIpc.js';
import '../../platform/policy/common/policyIpc.js';
import '../../platform/policy/common/policy.js';
import '../services/userDataProfile/common/userDataProfileService.js';
import '../services/userDataProfile/common/userDataProfile.js';
import '../../platform/remote/browser/browserSocketFactory.js';
import '../../platform/remote/common/remoteSocketFactoryService.js';
import '../../platform/remote/electron-sandbox/electronRemoteResourceLoader.js';
import '../../platform/window/electron-sandbox/window.js';
import '../../base/browser/window.js';
define(
		de[1953],
		he([
			1, 0, 4, 372, 4017, 1951, 139, 7, 29, 9, 3780, 151, 128, 34, 3650, 25,
			261, 21, 3, 230, 371, 3621, 2788, 211, 3787, 143, 2742, 22, 3588, 3250,
			952, 62, 68, 2880, 1826, 2732, 1620, 305, 3461, 1059, 174, 82, 1904, 12,
			23, 3384, 2883, 129, 1696, 2746, 940, 3791, 133, 2785, 773, 2787, 676, 75,
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
			M,
			N,
			A,
			R,
			O,
			B,
			U,
			z,
			F,
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
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Xcd = void 0),
				(e.main = re),
				(i = xi(i));
			class se extends f.$1c {
				constructor(oe) {
					super(), (this.a = oe), this.b();
				}
				b() {
					this.c(), (0, C.$Lfb)(!!this.a.fullscreen, Z.$Bfb);
				}
				c() {
					const oe = (0, g.$3i)(this.a.workspace);
					((0, g.$2i)(oe) || (0, g.$Wi)(oe)) && (this.a.workspace = oe);
					const ae = this.a.filesToWait,
						pe = ae?.paths;
					for (const $e of [
						pe,
						this.a.filesToOpenOrCreate,
						this.a.filesToDiff,
						this.a.filesToMerge,
					])
						if (Array.isArray($e))
							for (const ye of $e)
								ye.fileUri && (ye.fileUri = r.URI.revive(ye.fileUri));
					ae && (ae.waitMarkerFileUri = r.URI.revive(ae.waitMarkerFileUri));
				}
				async open() {
					const [oe] = await Promise.all([this.j(), (0, d.$phb)(Z.$Bfb)]);
					this.f(oe.configurationService);
					const ae = new w.$q3c(
						Z.$Bfb.document.body,
						{ extraClasses: this.g() },
						oe.serviceCollection,
						oe.logService,
					);
					this.h(ae, oe.storageService);
					const pe = ae.startup();
					this.D(pe.createInstance(E.$Ocd));
				}
				f(oe) {
					let ae;
					if (this.a.isCustomZoomLevel && typeof this.a.zoomLevel == "number")
						ae = this.a.zoomLevel;
					else {
						const pe = oe.getValue();
						ae =
							typeof pe.window?.zoomLevel == "number" ? pe.window.zoomLevel : 0;
					}
					(0, Q.$28c)(ae, Z.$Bfb);
				}
				g() {
					return q.$m && (0, q.$M)(this.a.os.release)
						? ["macos-bigsur-or-newer"]
						: [];
				}
				h(oe, ae) {
					this.D(
						oe.onWillShutdown((pe) =>
							pe.join(ae.close(), {
								id: "join.closeStorage",
								label: (0, t.localize)(11899, null),
							}),
						),
					),
						this.D(oe.onDidShutdown(() => this.dispose()));
				}
				async j() {
					const oe = new h.$Ki(),
						ae = this.D(new R.$X8c(this.a.windowId));
					oe.set(s.$V8c, ae);
					const pe = this.a.policiesData
						? new X.$l8c(this.a.policiesData, ae.getChannel("policy"))
						: new Y.$Mo();
					oe.set(Y.$Ko, pe);
					const $e = { _serviceBrand: void 0, ...i.default };
					oe.set(D.$Bk, $e);
					const ye = new a.$vcd(this.a, $e);
					oe.set(a.$ucd, ye);
					const ue = [
							...this.a.loggers.global.map((ke) => ({
								...ke,
								resource: r.URI.revive(ke.resource),
							})),
							...this.a.loggers.window.map((ke) => ({
								...ke,
								resource: r.URI.revive(ke.resource),
								hidden: !0,
							})),
						],
						fe = new O.$ZJ(
							this.a.windowId,
							this.a.logLevel,
							ye.windowLogsPath,
							ue,
							ae.getChannel("logger"),
						);
					oe.set(c.$jk, fe);
					const me = this.D(new U.$Ucd(fe, ye));
					oe.set(c.$ik, me),
						q.$w && me.info("workbench#open()"),
						me.getLevel() === c.LogLevel.Trace &&
							me.trace(
								"workbench#open(): with configuration",
								(0, x.$Ao)({ ...this.a, nls: void 0 }),
							);
					const ve = new l.$Qcd(this.a.windowId, me);
					oe.set(b.$Vbd, ve);
					const ge = new H.$xcd(this.a.windowId, me, ae);
					oe.set(H.$wcd, ge);
					const be = B.ProxyChannel.toService(ae.getChannel("sign"));
					oe.set(L.$$l, be);
					const Ce = this.D(new I.$sr(me));
					oe.set(T.$ll, Ce);
					const Le = new y.$dcd($e, new te.$ccd(ye.window.id, ae, Ce));
					oe.set($.$3l, Le);
					const Fe = this.D(new G.$Wcd(ae, ge, me, fe));
					Ce.registerProvider(V.Schemas.file, Fe);
					const Oe = new N.$oK(Ce);
					oe.set(M.$Vl, Oe);
					const xe = new W.$gfb(
						this.a.profiles.all,
						r.URI.revive(this.a.profiles.home).with({
							scheme: ye.userRoamingDataHome.scheme,
						}),
						ae.getChannel("userDataProfiles"),
					);
					oe.set(J.$Xl, xe);
					const He = new ie.$R3c(
						(0, J.$Yl)(this.a.profiles.profile, xe.profilesHome.scheme),
					);
					oe.set(ne.$P8, He),
						Ce.registerProvider(
							V.Schemas.vscodeUserData,
							this.D(
								new K.$T8c(
									V.Schemas.file,
									Fe,
									V.Schemas.vscodeUserData,
									xe,
									Oe,
									me,
								),
							),
						);
					const Ke = new _.$9l();
					Ke.register($.RemoteConnectionType.WebSocket, new ee.$1rb(null)),
						oe.set(_.$8l, Ke);
					const Je = this.D(new v.$Rcd(Ke, He, ye, $e, Le, be, me));
					oe.set(S.$$m, Je), this.D(P.$Web.register(Je, Ce, me));
					const Te = this.m(ye),
						[Ee, Ie] = await Promise.all([
							this.n(Te, ye, He, xe, Ce, Je, Oe, me, pe).then(
								(ke) => (oe.set(g.$Vi, ke), oe.set(p.$RZ, ke), ke),
							),
							this.q(Te, ye, He, xe, ae).then((ke) => (oe.set(o.$lq, ke), ke)),
							this.r(ae).then((ke) => (oe.set(A.$Scd, ke), ke)),
						]),
						Be = new z.$GSb(Ee, ye);
					oe.set(F.$oO, Be);
					const Se = new z.$HSb(Ee, Le, Ie, Oe, ye, Ee, Be, Ce);
					return (
						oe.set(F.$pO, Se),
						Ee.updateWorkspaceTrust(Se.isWorkspaceTrusted()),
						this.D(
							Se.onDidChangeTrust(() =>
								Ee.updateWorkspaceTrust(Se.isWorkspaceTrusted()),
							),
						),
						{
							serviceCollection: oe,
							logService: me,
							storageService: Ie,
							configurationService: Ee,
						}
					);
				}
				m(oe) {
					return this.a.workspace
						? this.a.workspace
						: (0, g.$1i)(this.a.backupPath, oe.isExtensionDevelopment);
				}
				async n(oe, ae, pe, $e, ye, ue, fe, me, ve) {
					const ge = new k.$G3c(
							[V.Schemas.file, V.Schemas.vscodeUserData],
							ae,
							ye,
						),
						be = new u.$F3c(
							{ remoteAuthority: ae.remoteAuthority, configurationCache: ge },
							ae,
							pe,
							$e,
							ye,
							ue,
							fe,
							me,
							ve,
						);
					try {
						return await be.initialize(oe), be;
					} catch (Ce) {
						return (0, m.$4)(Ce), be;
					}
				}
				async q(oe, ae, pe, $e, ye) {
					const ue = new n.$Pcd(oe, pe, $e, ye, ae);
					try {
						return await ue.initialize(), ue;
					} catch (fe) {
						return (0, m.$4)(fe), ue;
					}
				}
				async r(oe) {
					const ae = new A.$Tcd(oe);
					try {
						return await ae.initialize(), ae;
					} catch (pe) {
						return (0, m.$4)(pe), ae;
					}
				}
			}
			e.$Xcd = se;
			function re(le) {
				return new se(le).open();
			}
		},
	),
		