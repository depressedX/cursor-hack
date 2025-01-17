import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/registry/common/platform.js';
import './configuration.js';
import './externalUriOpenerService.js';
define(
			de[3556],
			he([1, 0, 81, 20, 30, 1033, 1034]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, i.$lK)(
						C.IExternalUriOpenerService,
						C.ExternalUriOpenerService,
						i.InstantiationType.Delayed,
					),
					w.$Io
						.as(t.$No.Configuration)
						.registerConfiguration(E.externalUriOpenersConfigurationNode);
			},
		),
		