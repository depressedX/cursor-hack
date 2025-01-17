import '../../../../require.js';
import '../../../../exports.js';
import '../../instantiation/common/instantiation.js';
define(de[415], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$_rb =
					e.$$rb =
					e.DisablementReason =
					e.UpdateType =
					e.StateType =
						void 0);
			var i;
			(function (C) {
				(C.Uninitialized = "uninitialized"),
					(C.Idle = "idle"),
					(C.Disabled = "disabled"),
					(C.CheckingForUpdates = "checking for updates"),
					(C.AvailableForDownload = "available for download"),
					(C.Downloading = "downloading"),
					(C.Downloaded = "downloaded"),
					(C.Updating = "updating"),
					(C.Ready = "ready");
			})(i || (e.StateType = i = {}));
			var w;
			(function (C) {
				(C[(C.Setup = 0)] = "Setup"),
					(C[(C.Archive = 1)] = "Archive"),
					(C[(C.Snap = 2)] = "Snap");
			})(w || (e.UpdateType = w = {}));
			var E;
			(function (C) {
				(C[(C.NotBuilt = 0)] = "NotBuilt"),
					(C[(C.DisabledByEnvironment = 1)] = "DisabledByEnvironment"),
					(C[(C.ManuallyDisabled = 2)] = "ManuallyDisabled"),
					(C[(C.MissingConfiguration = 3)] = "MissingConfiguration"),
					(C[(C.InvalidConfiguration = 4)] = "InvalidConfiguration"),
					(C[(C.RunningAsAdmin = 5)] = "RunningAsAdmin");
			})(E || (e.DisablementReason = E = {})),
				(e.$$rb = {
					Uninitialized: { type: i.Uninitialized },
					Disabled: (C) => ({ type: i.Disabled, reason: C }),
					Idle: (C, d) => ({ type: i.Idle, updateType: C, error: d }),
					CheckingForUpdates: (C) => ({
						type: i.CheckingForUpdates,
						explicit: C,
					}),
					AvailableForDownload: (C) => ({
						type: i.AvailableForDownload,
						update: C,
					}),
					Downloading: { type: i.Downloading },
					Downloaded: (C) => ({ type: i.Downloaded, update: C }),
					Updating: (C) => ({ type: i.Updating, update: C }),
					Ready: (C) => ({ type: i.Ready, update: C }),
				}),
				(e.$_rb = (0, t.$Mi)("updateService"));
		}),
		