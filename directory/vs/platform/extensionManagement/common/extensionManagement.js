import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/platform.js';
import '../../../nls.js';
import '../../extensions/common/extensions.js';
import '../../instantiation/common/instantiation.js';
define(de[119], he([1, 0, 12, 4, 109, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*platform*/,
 i /*nls*/,
 w /*extensions*/,
 E /*instantiation*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Np =
					e.$Mp =
					e.$Lp =
					e.$Kp =
					e.$Jp =
					e.$Ip =
					e.$Hp =
					e.$Gp =
					e.ExtensionManagementErrorCode =
					e.$Fp =
					e.ExtensionGalleryErrorCode =
					e.$Ep =
					e.InstallOperation =
					e.StatisticType =
					e.SortOrder =
					e.SortBy =
					e.ExtensionInstallSource =
					e.$xp =
					e.$wp =
					e.$vp =
					e.$up =
					e.$tp =
					e.$sp =
					e.$rp =
						void 0),
				(e.$yp = d),
				(e.$zp = m),
				(e.$Ap = r),
				(e.$Bp = u),
				(e.$Cp = a),
				(e.$Dp = h),
				(e.$rp = "^([a-z0-9A-Z][a-z0-9-A-Z]*)\\.([a-z0-9A-Z][a-z0-9-A-Z]*)$"),
				(e.$sp = new RegExp(e.$rp)),
				(e.$tp = "__web_extension"),
				(e.$up = "skipWalkthrough"),
				(e.$vp = "extensionInstallSource"),
				(e.$wp = "dependecyOrPackExtensionInstall"),
				(e.$xp = "clientTargetPlatform");
			var C;
			(function (l) {
				(l.COMMAND = "command"), (l.SETTINGS_SYNC = "settingsSync");
			})(C || (e.ExtensionInstallSource = C = {}));
			function d(l) {
				switch (l) {
					case w.TargetPlatform.WIN32_X64:
						return "Windows 64 bit";
					case w.TargetPlatform.WIN32_ARM64:
						return "Windows ARM";
					case w.TargetPlatform.LINUX_X64:
						return "Linux 64 bit";
					case w.TargetPlatform.LINUX_ARM64:
						return "Linux ARM 64";
					case w.TargetPlatform.LINUX_ARMHF:
						return "Linux ARM";
					case w.TargetPlatform.ALPINE_X64:
						return "Alpine Linux 64 bit";
					case w.TargetPlatform.ALPINE_ARM64:
						return "Alpine ARM 64";
					case w.TargetPlatform.DARWIN_X64:
						return "Mac";
					case w.TargetPlatform.DARWIN_ARM64:
						return "Mac Silicon";
					case w.TargetPlatform.WEB:
						return "Web";
					case w.TargetPlatform.UNIVERSAL:
						return w.TargetPlatform.UNIVERSAL;
					case w.TargetPlatform.UNKNOWN:
						return w.TargetPlatform.UNKNOWN;
					case w.TargetPlatform.UNDEFINED:
						return w.TargetPlatform.UNDEFINED;
				}
			}
			function m(l) {
				switch (l) {
					case w.TargetPlatform.WIN32_X64:
						return w.TargetPlatform.WIN32_X64;
					case w.TargetPlatform.WIN32_ARM64:
						return w.TargetPlatform.WIN32_ARM64;
					case w.TargetPlatform.LINUX_X64:
						return w.TargetPlatform.LINUX_X64;
					case w.TargetPlatform.LINUX_ARM64:
						return w.TargetPlatform.LINUX_ARM64;
					case w.TargetPlatform.LINUX_ARMHF:
						return w.TargetPlatform.LINUX_ARMHF;
					case w.TargetPlatform.ALPINE_X64:
						return w.TargetPlatform.ALPINE_X64;
					case w.TargetPlatform.ALPINE_ARM64:
						return w.TargetPlatform.ALPINE_ARM64;
					case w.TargetPlatform.DARWIN_X64:
						return w.TargetPlatform.DARWIN_X64;
					case w.TargetPlatform.DARWIN_ARM64:
						return w.TargetPlatform.DARWIN_ARM64;
					case w.TargetPlatform.WEB:
						return w.TargetPlatform.WEB;
					case w.TargetPlatform.UNIVERSAL:
						return w.TargetPlatform.UNIVERSAL;
					default:
						return w.TargetPlatform.UNKNOWN;
				}
			}
			function r(l, y) {
				switch (l) {
					case t.Platform.Windows:
						return y === "x64"
							? w.TargetPlatform.WIN32_X64
							: y === "arm64"
								? w.TargetPlatform.WIN32_ARM64
								: w.TargetPlatform.UNKNOWN;
					case t.Platform.Linux:
						return y === "x64"
							? w.TargetPlatform.LINUX_X64
							: y === "arm64"
								? w.TargetPlatform.LINUX_ARM64
								: y === "arm"
									? w.TargetPlatform.LINUX_ARMHF
									: w.TargetPlatform.UNKNOWN;
					case "alpine":
						return y === "x64"
							? w.TargetPlatform.ALPINE_X64
							: y === "arm64"
								? w.TargetPlatform.ALPINE_ARM64
								: w.TargetPlatform.UNKNOWN;
					case t.Platform.Mac:
						return y === "x64"
							? w.TargetPlatform.DARWIN_X64
							: y === "arm64"
								? w.TargetPlatform.DARWIN_ARM64
								: w.TargetPlatform.UNKNOWN;
					case t.Platform.Web:
						return w.TargetPlatform.WEB;
				}
			}
			function u(l, y) {
				return y === w.TargetPlatform.WEB && !l.includes(w.TargetPlatform.WEB);
			}
			function a(l, y, $) {
				return u(y, $)
					? !1
					: l === w.TargetPlatform.UNDEFINED || l === w.TargetPlatform.UNIVERSAL
						? !0
						: l === w.TargetPlatform.UNKNOWN
							? !1
							: l === $;
			}
			function h(l) {
				return (
					l &&
					typeof l == "object" &&
					typeof l.id == "string" &&
					(!l.uuid || typeof l.uuid == "string")
				);
			}
			var c;
			(function (l) {
				(l[(l.NoneOrRelevance = 0)] = "NoneOrRelevance"),
					(l[(l.LastUpdatedDate = 1)] = "LastUpdatedDate"),
					(l[(l.Title = 2)] = "Title"),
					(l[(l.PublisherName = 3)] = "PublisherName"),
					(l[(l.InstallCount = 4)] = "InstallCount"),
					(l[(l.PublishedDate = 10)] = "PublishedDate"),
					(l[(l.AverageRating = 6)] = "AverageRating"),
					(l[(l.WeightedRating = 12)] = "WeightedRating");
			})(c || (e.SortBy = c = {}));
			var n;
			(function (l) {
				(l[(l.Default = 0)] = "Default"),
					(l[(l.Ascending = 1)] = "Ascending"),
					(l[(l.Descending = 2)] = "Descending");
			})(n || (e.SortOrder = n = {}));
			var g;
			(function (l) {
				(l.Install = "install"), (l.Uninstall = "uninstall");
			})(g || (e.StatisticType = g = {}));
			var p;
			(function (l) {
				(l[(l.None = 1)] = "None"),
					(l[(l.Install = 2)] = "Install"),
					(l[(l.Update = 3)] = "Update"),
					(l[(l.Migrate = 4)] = "Migrate");
			})(p || (e.InstallOperation = p = {})),
				(e.$Ep = (0, E.$Mi)("extensionGalleryService"));
			var o;
			(function (l) {
				(l.Timeout = "Timeout"),
					(l.Cancelled = "Cancelled"),
					(l.Failed = "Failed"),
					(l.DownloadFailedWriting = "DownloadFailedWriting"),
					(l.Offline = "Offline");
			})(o || (e.ExtensionGalleryErrorCode = o = {}));
			class f extends Error {
				constructor(y, $) {
					super(y), (this.code = $), (this.name = $);
				}
			}
			e.$Fp = f;
			var b;
			(function (l) {
				(l.Unsupported = "Unsupported"),
					(l.Deprecated = "Deprecated"),
					(l.Malicious = "Malicious"),
					(l.Incompatible = "Incompatible"),
					(l.IncompatibleApi = "IncompatibleApi"),
					(l.IncompatibleTargetPlatform = "IncompatibleTargetPlatform"),
					(l.ReleaseVersionNotFound = "ReleaseVersionNotFound"),
					(l.Invalid = "Invalid"),
					(l.Download = "Download"),
					(l.DownloadSignature = "DownloadSignature"),
					(l.DownloadFailedWriting = "DownloadFailedWriting"),
					(l.UpdateMetadata = "UpdateMetadata"),
					(l.Extract = "Extract"),
					(l.Scanning = "Scanning"),
					(l.ScanningExtension = "ScanningExtension"),
					(l.ReadUninstalled = "ReadUninstalled"),
					(l.UnsetUninstalled = "UnsetUninstalled"),
					(l.Delete = "Delete"),
					(l.Rename = "Rename"),
					(l.IntializeDefaultProfile = "IntializeDefaultProfile"),
					(l.AddToProfile = "AddToProfile"),
					(l.InstalledExtensionNotFound = "InstalledExtensionNotFound"),
					(l.PostInstall = "PostInstall"),
					(l.CorruptZip = "CorruptZip"),
					(l.IncompleteZip = "IncompleteZip"),
					(l.Signature = "Signature"),
					(l.NotAllowed = "NotAllowed"),
					(l.Gallery = "Gallery"),
					(l.Cancelled = "Cancelled"),
					(l.Unknown = "Unknown"),
					(l.Internal = "Internal");
			})(b || (e.ExtensionManagementErrorCode = b = {}));
			class s extends Error {
				constructor(y, $) {
					super(y), (this.code = $), (this.name = $);
				}
			}
			(e.$Gp = s),
				(e.$Hp = (0, E.$Mi)("extensionManagementService")),
				(e.$Ip = "extensionsIdentifiers/disabled"),
				(e.$Jp = "extensionsIdentifiers/enabled"),
				(e.$Kp = (0, E.$Mi)("IGlobalExtensionEnablementService")),
				(e.$Lp = (0, E.$Mi)("IExtensionTipsService")),
				(e.$Mp = (0, i.localize2)(1792, "Extensions")),
				(e.$Np = (0, i.localize2)(1793, "Preferences"));
		}),
		