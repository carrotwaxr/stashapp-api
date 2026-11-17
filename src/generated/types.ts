export default {
    "scalars": [
        2,
        9,
        10,
        11,
        22,
        25,
        44,
        60,
        77,
        96,
        111,
        115,
        118,
        131,
        132,
        136,
        137,
        139,
        140,
        143,
        145,
        148,
        149,
        163,
        168,
        178,
        183,
        186,
        191,
        224,
        235,
        258,
        276,
        277,
        286,
        293,
        294,
        296
    ],
    "types": {
        "AddTempDLNAIPInput": {
            "address": [
                277
            ],
            "duration": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "AnonymiseDatabaseInput": {
            "download": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "Any": {},
        "AssignSceneFileInput": {
            "file_id": [
                115
            ],
            "scene_id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "AutoTagMetadataInput": {
            "paths": [
                277
            ],
            "performers": [
                277
            ],
            "studios": [
                277
            ],
            "tags": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "AutoTagMetadataOptions": {
            "performers": [
                277
            ],
            "studios": [
                277
            ],
            "tags": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "BackupDatabaseInput": {
            "download": [
                11
            ],
            "includeBlobs": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "BaseFile": {
            "basename": [
                277
            ],
            "created_at": [
                293
            ],
            "fingerprint": [
                277,
                {
                    "type": [
                        277,
                        "String!"
                    ]
                }
            ],
            "fingerprints": [
                75
            ],
            "id": [
                115
            ],
            "mod_time": [
                293
            ],
            "parent_folder": [
                79
            ],
            "parent_folder_id": [
                115
            ],
            "path": [
                277
            ],
            "size": [
                140
            ],
            "updated_at": [
                293
            ],
            "zip_file": [
                8
            ],
            "zip_file_id": [
                115
            ],
            "on_BasicFile": [
                8
            ],
            "on_GalleryFile": [
                88
            ],
            "on_ImageFile": [
                127
            ],
            "on_VideoFile": [
                299
            ],
            "__typename": [
                277
            ]
        },
        "BasicFile": {
            "basename": [
                277
            ],
            "created_at": [
                293
            ],
            "fingerprint": [
                277,
                {
                    "type": [
                        277,
                        "String!"
                    ]
                }
            ],
            "fingerprints": [
                75
            ],
            "id": [
                115
            ],
            "mod_time": [
                293
            ],
            "parent_folder": [
                79
            ],
            "parent_folder_id": [
                115
            ],
            "path": [
                277
            ],
            "size": [
                140
            ],
            "updated_at": [
                293
            ],
            "zip_file": [
                8
            ],
            "zip_file_id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "BlobsStorageType": {},
        "BoolMap": {},
        "Boolean": {},
        "BulkGalleryUpdateInput": {
            "clientMutationId": [
                277
            ],
            "code": [
                277
            ],
            "custom_fields": [
                46
            ],
            "date": [
                277
            ],
            "details": [
                277
            ],
            "ids": [
                115
            ],
            "organized": [
                11
            ],
            "performer_ids": [
                23
            ],
            "photographer": [
                277
            ],
            "rating100": [
                139
            ],
            "scene_ids": [
                23
            ],
            "studio_id": [
                115
            ],
            "tag_ids": [
                23
            ],
            "url": [
                277
            ],
            "urls": [
                24
            ],
            "__typename": [
                277
            ]
        },
        "BulkGroupUpdateInput": {
            "clientMutationId": [
                277
            ],
            "containing_groups": [
                21
            ],
            "custom_fields": [
                46
            ],
            "date": [
                277
            ],
            "director": [
                277
            ],
            "ids": [
                115
            ],
            "rating100": [
                139
            ],
            "studio_id": [
                115
            ],
            "sub_groups": [
                21
            ],
            "synopsis": [
                277
            ],
            "tag_ids": [
                23
            ],
            "urls": [
                24
            ],
            "__typename": [
                277
            ]
        },
        "BulkImageUpdateInput": {
            "clientMutationId": [
                277
            ],
            "code": [
                277
            ],
            "custom_fields": [
                46
            ],
            "date": [
                277
            ],
            "details": [
                277
            ],
            "gallery_ids": [
                23
            ],
            "ids": [
                115
            ],
            "organized": [
                11
            ],
            "performer_ids": [
                23
            ],
            "photographer": [
                277
            ],
            "rating100": [
                139
            ],
            "studio_id": [
                115
            ],
            "tag_ids": [
                23
            ],
            "title": [
                277
            ],
            "url": [
                277
            ],
            "urls": [
                24
            ],
            "__typename": [
                277
            ]
        },
        "BulkMovieUpdateInput": {
            "clientMutationId": [
                277
            ],
            "director": [
                277
            ],
            "ids": [
                115
            ],
            "rating100": [
                139
            ],
            "studio_id": [
                115
            ],
            "tag_ids": [
                23
            ],
            "urls": [
                24
            ],
            "__typename": [
                277
            ]
        },
        "BulkPerformerUpdateInput": {
            "alias_list": [
                24
            ],
            "birthdate": [
                277
            ],
            "career_end": [
                277
            ],
            "career_length": [
                277
            ],
            "career_start": [
                277
            ],
            "circumcised": [
                25
            ],
            "clientMutationId": [
                277
            ],
            "country": [
                277
            ],
            "custom_fields": [
                46
            ],
            "death_date": [
                277
            ],
            "details": [
                277
            ],
            "disambiguation": [
                277
            ],
            "ethnicity": [
                277
            ],
            "eye_color": [
                277
            ],
            "fake_tits": [
                277
            ],
            "favorite": [
                11
            ],
            "gender": [
                96
            ],
            "hair_color": [
                277
            ],
            "height_cm": [
                139
            ],
            "ids": [
                115
            ],
            "ignore_auto_tag": [
                11
            ],
            "instagram": [
                277
            ],
            "measurements": [
                277
            ],
            "penis_length": [
                77
            ],
            "piercings": [
                277
            ],
            "rating100": [
                139
            ],
            "tag_ids": [
                23
            ],
            "tattoos": [
                277
            ],
            "twitter": [
                277
            ],
            "url": [
                277
            ],
            "urls": [
                24
            ],
            "weight": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "BulkSceneMarkerUpdateInput": {
            "ids": [
                115
            ],
            "primary_tag_id": [
                115
            ],
            "tag_ids": [
                23
            ],
            "title": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "BulkSceneUpdateInput": {
            "clientMutationId": [
                277
            ],
            "code": [
                277
            ],
            "custom_fields": [
                46
            ],
            "date": [
                277
            ],
            "details": [
                277
            ],
            "director": [
                277
            ],
            "gallery_ids": [
                23
            ],
            "group_ids": [
                23
            ],
            "ids": [
                115
            ],
            "movie_ids": [
                23
            ],
            "organized": [
                11
            ],
            "performer_ids": [
                23
            ],
            "production_date": [
                277
            ],
            "rating100": [
                139
            ],
            "studio_id": [
                115
            ],
            "tag_ids": [
                23
            ],
            "title": [
                277
            ],
            "url": [
                277
            ],
            "urls": [
                24
            ],
            "__typename": [
                277
            ]
        },
        "BulkStudioUpdateInput": {
            "details": [
                277
            ],
            "favorite": [
                11
            ],
            "ids": [
                115
            ],
            "ignore_auto_tag": [
                11
            ],
            "organized": [
                11
            ],
            "parent_id": [
                115
            ],
            "rating100": [
                139
            ],
            "tag_ids": [
                23
            ],
            "url": [
                277
            ],
            "urls": [
                24
            ],
            "__typename": [
                277
            ]
        },
        "BulkTagUpdateInput": {
            "aliases": [
                24
            ],
            "child_ids": [
                23
            ],
            "description": [
                277
            ],
            "favorite": [
                11
            ],
            "ids": [
                115
            ],
            "ignore_auto_tag": [
                11
            ],
            "parent_ids": [
                23
            ],
            "__typename": [
                277
            ]
        },
        "BulkUpdateGroupDescriptionsInput": {
            "groups": [
                105
            ],
            "mode": [
                22
            ],
            "__typename": [
                277
            ]
        },
        "BulkUpdateIdMode": {},
        "BulkUpdateIds": {
            "ids": [
                115
            ],
            "mode": [
                22
            ],
            "__typename": [
                277
            ]
        },
        "BulkUpdateStrings": {
            "mode": [
                22
            ],
            "values": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "CircumcisedEnum": {},
        "CircumcisionCriterionInput": {
            "modifier": [
                44
            ],
            "value": [
                25
            ],
            "__typename": [
                277
            ]
        },
        "CleanGeneratedInput": {
            "blobFiles": [
                11
            ],
            "dryRun": [
                11
            ],
            "imageThumbnails": [
                11
            ],
            "markers": [
                11
            ],
            "screenshots": [
                11
            ],
            "sprites": [
                11
            ],
            "transcodes": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "CleanMetadataInput": {
            "dryRun": [
                11
            ],
            "ignoreZipFileContents": [
                11
            ],
            "paths": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ConfigDLNAInput": {
            "enabled": [
                11
            ],
            "interfaces": [
                277
            ],
            "port": [
                139
            ],
            "serverName": [
                277
            ],
            "videoSortOrder": [
                277
            ],
            "whitelistedIPs": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ConfigDLNAResult": {
            "enabled": [
                11
            ],
            "interfaces": [
                277
            ],
            "port": [
                139
            ],
            "serverName": [
                277
            ],
            "videoSortOrder": [
                277
            ],
            "whitelistedIPs": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ConfigDefaultSettingsInput": {
            "autoTag": [
                4
            ],
            "deleteFile": [
                11
            ],
            "deleteGenerated": [
                11
            ],
            "generate": [
                98
            ],
            "identify": [
                119
            ],
            "scan": [
                198
            ],
            "__typename": [
                277
            ]
        },
        "ConfigDefaultSettingsResult": {
            "autoTag": [
                5
            ],
            "deleteFile": [
                11
            ],
            "deleteGenerated": [
                11
            ],
            "generate": [
                99
            ],
            "identify": [
                122
            ],
            "scan": [
                199
            ],
            "__typename": [
                277
            ]
        },
        "ConfigDisableDropdownCreate": {
            "gallery": [
                11
            ],
            "movie": [
                11
            ],
            "performer": [
                11
            ],
            "studio": [
                11
            ],
            "tag": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "ConfigDisableDropdownCreateInput": {
            "gallery": [
                11
            ],
            "movie": [
                11
            ],
            "performer": [
                11
            ],
            "studio": [
                11
            ],
            "tag": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "ConfigGeneralInput": {
            "backupDirectoryPath": [
                277
            ],
            "blobsPath": [
                277
            ],
            "blobsStorage": [
                9
            ],
            "cachePath": [
                277
            ],
            "calculateMD5": [
                11
            ],
            "createGalleriesFromFolders": [
                11
            ],
            "createImageClipsFromVideos": [
                11
            ],
            "customPerformerImageLocation": [
                277
            ],
            "databasePath": [
                277
            ],
            "defaultMarkerPreviewDuration": [
                139
            ],
            "deleteTrashPath": [
                277
            ],
            "drawFunscriptHeatmapRange": [
                11
            ],
            "excludes": [
                277
            ],
            "ffmpegPath": [
                277
            ],
            "ffprobePath": [
                277
            ],
            "galleryCoverRegex": [
                277
            ],
            "galleryExtensions": [
                277
            ],
            "generatedPath": [
                277
            ],
            "imageExcludes": [
                277
            ],
            "imageExtensions": [
                277
            ],
            "liveTranscodeInputArgs": [
                277
            ],
            "liveTranscodeOutputArgs": [
                277
            ],
            "logAccess": [
                11
            ],
            "logFile": [
                277
            ],
            "logFileMaxSize": [
                139
            ],
            "logLevel": [
                277
            ],
            "logOut": [
                11
            ],
            "maxMarkerPreviewDuration": [
                139
            ],
            "maxSessionAge": [
                139
            ],
            "maxStreamingTranscodeSize": [
                276
            ],
            "maxTranscodeSize": [
                276
            ],
            "maximumSprites": [
                139
            ],
            "metadataPath": [
                277
            ],
            "minimumSprites": [
                139
            ],
            "parallelTasks": [
                139
            ],
            "password": [
                277
            ],
            "pluginPackageSources": [
                166
            ],
            "pluginsPath": [
                277
            ],
            "previewAudio": [
                11
            ],
            "previewExcludeEnd": [
                277
            ],
            "previewExcludeStart": [
                277
            ],
            "previewPreset": [
                186
            ],
            "previewSegmentDuration": [
                77
            ],
            "previewSegments": [
                139
            ],
            "pythonPath": [
                277
            ],
            "scraperPackageSources": [
                166
            ],
            "scrapersPath": [
                277
            ],
            "spriteInterval": [
                77
            ],
            "spriteScreenshotSize": [
                139
            ],
            "stashBoxes": [
                264
            ],
            "stashes": [
                270
            ],
            "transcodeHardwareAcceleration": [
                11
            ],
            "transcodeInputArgs": [
                277
            ],
            "transcodeOutputArgs": [
                277
            ],
            "useCustomSpriteInterval": [
                11
            ],
            "username": [
                277
            ],
            "videoExtensions": [
                277
            ],
            "videoFileNamingAlgorithm": [
                111
            ],
            "writeImageThumbnails": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "ConfigGeneralResult": {
            "apiKey": [
                277
            ],
            "backupDirectoryPath": [
                277
            ],
            "blobsPath": [
                277
            ],
            "blobsStorage": [
                9
            ],
            "cachePath": [
                277
            ],
            "calculateMD5": [
                11
            ],
            "configFilePath": [
                277
            ],
            "createGalleriesFromFolders": [
                11
            ],
            "createImageClipsFromVideos": [
                11
            ],
            "customPerformerImageLocation": [
                277
            ],
            "databasePath": [
                277
            ],
            "defaultMarkerPreviewDuration": [
                139
            ],
            "deleteTrashPath": [
                277
            ],
            "drawFunscriptHeatmapRange": [
                11
            ],
            "excludes": [
                277
            ],
            "ffmpegPath": [
                277
            ],
            "ffprobePath": [
                277
            ],
            "galleryCoverRegex": [
                277
            ],
            "galleryExtensions": [
                277
            ],
            "generatedPath": [
                277
            ],
            "imageExcludes": [
                277
            ],
            "imageExtensions": [
                277
            ],
            "liveTranscodeInputArgs": [
                277
            ],
            "liveTranscodeOutputArgs": [
                277
            ],
            "logAccess": [
                11
            ],
            "logFile": [
                277
            ],
            "logFileMaxSize": [
                139
            ],
            "logLevel": [
                277
            ],
            "logOut": [
                11
            ],
            "maxMarkerPreviewDuration": [
                139
            ],
            "maxSessionAge": [
                139
            ],
            "maxStreamingTranscodeSize": [
                276
            ],
            "maxTranscodeSize": [
                276
            ],
            "maximumSprites": [
                139
            ],
            "metadataPath": [
                277
            ],
            "minimumSprites": [
                139
            ],
            "parallelTasks": [
                139
            ],
            "password": [
                277
            ],
            "pluginPackageSources": [
                165
            ],
            "pluginsPath": [
                277
            ],
            "previewAudio": [
                11
            ],
            "previewExcludeEnd": [
                277
            ],
            "previewExcludeStart": [
                277
            ],
            "previewPreset": [
                186
            ],
            "previewSegmentDuration": [
                77
            ],
            "previewSegments": [
                139
            ],
            "pythonPath": [
                277
            ],
            "scraperPackageSources": [
                165
            ],
            "scrapersPath": [
                277
            ],
            "spriteInterval": [
                77
            ],
            "spriteScreenshotSize": [
                139
            ],
            "stashBoxes": [
                259
            ],
            "stashes": [
                269
            ],
            "transcodeHardwareAcceleration": [
                11
            ],
            "transcodeInputArgs": [
                277
            ],
            "transcodeOutputArgs": [
                277
            ],
            "useCustomSpriteInterval": [
                11
            ],
            "username": [
                277
            ],
            "videoExtensions": [
                277
            ],
            "videoFileNamingAlgorithm": [
                111
            ],
            "writeImageThumbnails": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "ConfigImageLightboxInput": {
            "disableAnimation": [
                11
            ],
            "displayMode": [
                131
            ],
            "resetZoomOnNav": [
                11
            ],
            "scaleUp": [
                11
            ],
            "scrollAttemptsBeforeChange": [
                139
            ],
            "scrollMode": [
                132
            ],
            "slideshowDelay": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "ConfigImageLightboxResult": {
            "disableAnimation": [
                11
            ],
            "displayMode": [
                131
            ],
            "resetZoomOnNav": [
                11
            ],
            "scaleUp": [
                11
            ],
            "scrollAttemptsBeforeChange": [
                139
            ],
            "scrollMode": [
                132
            ],
            "slideshowDelay": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "ConfigInterfaceInput": {
            "autostartVideo": [
                11
            ],
            "autostartVideoOnPlaySelected": [
                11
            ],
            "continuePlaylistDefault": [
                11
            ],
            "css": [
                277
            ],
            "cssEnabled": [
                11
            ],
            "customLocales": [
                277
            ],
            "customLocalesEnabled": [
                11
            ],
            "disableCustomizations": [
                11
            ],
            "disableDropdownCreate": [
                34
            ],
            "funscriptOffset": [
                139
            ],
            "handyKey": [
                277
            ],
            "imageLightbox": [
                37
            ],
            "javascript": [
                277
            ],
            "javascriptEnabled": [
                11
            ],
            "language": [
                277
            ],
            "maximumLoopDuration": [
                139
            ],
            "menuItems": [
                277
            ],
            "noBrowser": [
                11
            ],
            "notificationsEnabled": [
                11
            ],
            "sfwContentMode": [
                11
            ],
            "showScrubber": [
                11
            ],
            "showStudioAsText": [
                11
            ],
            "soundOnPreview": [
                11
            ],
            "useStashHostedFunscript": [
                11
            ],
            "wallPlayback": [
                277
            ],
            "wallShowTitle": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "ConfigInterfaceResult": {
            "autostartVideo": [
                11
            ],
            "autostartVideoOnPlaySelected": [
                11
            ],
            "continuePlaylistDefault": [
                11
            ],
            "css": [
                277
            ],
            "cssEnabled": [
                11
            ],
            "customLocales": [
                277
            ],
            "customLocalesEnabled": [
                11
            ],
            "disableCustomizations": [
                11
            ],
            "disableDropdownCreate": [
                33
            ],
            "funscriptOffset": [
                139
            ],
            "handyKey": [
                277
            ],
            "imageLightbox": [
                38
            ],
            "javascript": [
                277
            ],
            "javascriptEnabled": [
                11
            ],
            "language": [
                277
            ],
            "maximumLoopDuration": [
                139
            ],
            "menuItems": [
                277
            ],
            "noBrowser": [
                11
            ],
            "notificationsEnabled": [
                11
            ],
            "sfwContentMode": [
                11
            ],
            "showScrubber": [
                11
            ],
            "showStudioAsText": [
                11
            ],
            "soundOnPreview": [
                11
            ],
            "useStashHostedFunscript": [
                11
            ],
            "wallPlayback": [
                277
            ],
            "wallShowTitle": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "ConfigResult": {
            "defaults": [
                32
            ],
            "dlna": [
                30
            ],
            "general": [
                36
            ],
            "interface": [
                40
            ],
            "plugins": [
                178,
                {
                    "include": [
                        115,
                        "[ID!]"
                    ]
                }
            ],
            "scraping": [
                43
            ],
            "ui": [
                149
            ],
            "__typename": [
                277
            ]
        },
        "ConfigScrapingInput": {
            "excludeTagPatterns": [
                277
            ],
            "scraperCDPPath": [
                277
            ],
            "scraperCertCheck": [
                11
            ],
            "scraperUserAgent": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ConfigScrapingResult": {
            "excludeTagPatterns": [
                277
            ],
            "scraperCDPPath": [
                277
            ],
            "scraperCertCheck": [
                11
            ],
            "scraperUserAgent": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "CriterionModifier": {},
        "CustomFieldCriterionInput": {
            "field": [
                277
            ],
            "modifier": [
                44
            ],
            "value": [
                2
            ],
            "__typename": [
                277
            ]
        },
        "CustomFieldsInput": {
            "full": [
                149
            ],
            "partial": [
                149
            ],
            "remove": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "DLNAIP": {
            "ipAddress": [
                277
            ],
            "until": [
                293
            ],
            "__typename": [
                277
            ]
        },
        "DLNAStatus": {
            "allowedIPAddresses": [
                47
            ],
            "recentIPAddresses": [
                277
            ],
            "running": [
                11
            ],
            "until": [
                293
            ],
            "__typename": [
                277
            ]
        },
        "DateCriterionInput": {
            "modifier": [
                44
            ],
            "value": [
                277
            ],
            "value2": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "DestroyFilterInput": {
            "id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "Directory": {
            "directories": [
                277
            ],
            "parent": [
                277
            ],
            "path": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "DisableDLNAInput": {
            "duration": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "DuplicationCriterionInput": {
            "distance": [
                139
            ],
            "duplicated": [
                11
            ],
            "phash": [
                11
            ],
            "stash_id": [
                11
            ],
            "title": [
                11
            ],
            "url": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "EnableDLNAInput": {
            "duration": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "ExportObjectTypeInput": {
            "all": [
                11
            ],
            "ids": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ExportObjectsInput": {
            "galleries": [
                55
            ],
            "groups": [
                55
            ],
            "images": [
                55
            ],
            "includeDependencies": [
                11
            ],
            "movies": [
                55
            ],
            "performers": [
                55
            ],
            "scenes": [
                55
            ],
            "studios": [
                55
            ],
            "tags": [
                55
            ],
            "__typename": [
                277
            ]
        },
        "FileDuplicationCriterionInput": {
            "distance": [
                139
            ],
            "duplicated": [
                11
            ],
            "phash": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "FileFilterType": {
            "AND": [
                58
            ],
            "NOT": [
                58
            ],
            "OR": [
                58
            ],
            "basename": [
                278
            ],
            "created_at": [
                295
            ],
            "dir": [
                278
            ],
            "duplicated": [
                57
            ],
            "galleries_filter": [
                89
            ],
            "gallery_count": [
                141
            ],
            "hashes": [
                76
            ],
            "image_count": [
                141
            ],
            "image_file_filter": [
                128
            ],
            "images_filter": [
                130
            ],
            "mod_time": [
                295
            ],
            "parent_folder": [
                113
            ],
            "path": [
                278
            ],
            "scene_count": [
                141
            ],
            "scenes_filter": [
                204
            ],
            "updated_at": [
                295
            ],
            "video_file_filter": [
                300
            ],
            "zip_file": [
                160
            ],
            "__typename": [
                277
            ]
        },
        "FileSetFingerprintsInput": {
            "fingerprints": [
                256
            ],
            "id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "FilterMode": {},
        "FindFilesResultType": {
            "count": [
                139
            ],
            "duration": [
                77
            ],
            "files": [
                7
            ],
            "megapixels": [
                77
            ],
            "size": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "FindFilterType": {
            "direction": [
                258
            ],
            "page": [
                139
            ],
            "per_page": [
                139
            ],
            "q": [
                277
            ],
            "sort": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "FindFoldersResultType": {
            "count": [
                139
            ],
            "folders": [
                79
            ],
            "__typename": [
                277
            ]
        },
        "FindGalleriesResultType": {
            "count": [
                139
            ],
            "galleries": [
                81
            ],
            "__typename": [
                277
            ]
        },
        "FindGalleryChaptersResultType": {
            "chapters": [
                83
            ],
            "count": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "FindGroupsResultType": {
            "count": [
                139
            ],
            "groups": [
                102
            ],
            "__typename": [
                277
            ]
        },
        "FindImagesResultType": {
            "count": [
                139
            ],
            "filesize": [
                77
            ],
            "images": [
                125
            ],
            "megapixels": [
                77
            ],
            "__typename": [
                277
            ]
        },
        "FindJobInput": {
            "id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "FindMoviesResultType": {
            "count": [
                139
            ],
            "movies": [
                155
            ],
            "__typename": [
                277
            ]
        },
        "FindPerformersResultType": {
            "count": [
                139
            ],
            "performers": [
                169
            ],
            "__typename": [
                277
            ]
        },
        "FindSceneMarkersResultType": {
            "count": [
                139
            ],
            "scene_markers": [
                208
            ],
            "__typename": [
                277
            ]
        },
        "FindScenesResultType": {
            "count": [
                139
            ],
            "duration": [
                77
            ],
            "filesize": [
                77
            ],
            "scenes": [
                200
            ],
            "__typename": [
                277
            ]
        },
        "FindStudiosResultType": {
            "count": [
                139
            ],
            "studios": [
                279
            ],
            "__typename": [
                277
            ]
        },
        "FindTagsResultType": {
            "count": [
                139
            ],
            "tags": [
                287
            ],
            "__typename": [
                277
            ]
        },
        "Fingerprint": {
            "type": [
                277
            ],
            "value": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "FingerprintFilterInput": {
            "distance": [
                139
            ],
            "type": [
                277
            ],
            "value": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "Float": {},
        "FloatCriterionInput": {
            "modifier": [
                44
            ],
            "value": [
                77
            ],
            "value2": [
                77
            ],
            "__typename": [
                277
            ]
        },
        "Folder": {
            "basename": [
                277
            ],
            "created_at": [
                293
            ],
            "id": [
                115
            ],
            "mod_time": [
                293
            ],
            "parent_folder": [
                79
            ],
            "parent_folder_id": [
                115
            ],
            "parent_folders": [
                79
            ],
            "path": [
                277
            ],
            "sub_folders": [
                79
            ],
            "updated_at": [
                293
            ],
            "zip_file": [
                8
            ],
            "zip_file_id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "FolderFilterType": {
            "AND": [
                80
            ],
            "NOT": [
                80
            ],
            "OR": [
                80
            ],
            "basename": [
                278
            ],
            "created_at": [
                295
            ],
            "files_filter": [
                58
            ],
            "galleries_filter": [
                89
            ],
            "gallery_count": [
                141
            ],
            "mod_time": [
                295
            ],
            "parent_folder": [
                113
            ],
            "path": [
                278
            ],
            "updated_at": [
                295
            ],
            "zip_file": [
                160
            ],
            "__typename": [
                277
            ]
        },
        "Gallery": {
            "chapters": [
                83
            ],
            "code": [
                277
            ],
            "cover": [
                125
            ],
            "created_at": [
                293
            ],
            "custom_fields": [
                149
            ],
            "date": [
                277
            ],
            "details": [
                277
            ],
            "files": [
                88
            ],
            "folder": [
                79
            ],
            "id": [
                115
            ],
            "image": [
                125,
                {
                    "index": [
                        139,
                        "Int!"
                    ]
                }
            ],
            "image_count": [
                139
            ],
            "organized": [
                11
            ],
            "paths": [
                90
            ],
            "performers": [
                169
            ],
            "photographer": [
                277
            ],
            "rating100": [
                139
            ],
            "scenes": [
                200
            ],
            "studio": [
                279
            ],
            "tags": [
                287
            ],
            "title": [
                277
            ],
            "updated_at": [
                293
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "GalleryAddInput": {
            "gallery_id": [
                115
            ],
            "image_ids": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "GalleryChapter": {
            "created_at": [
                293
            ],
            "gallery": [
                81
            ],
            "id": [
                115
            ],
            "image_index": [
                139
            ],
            "title": [
                277
            ],
            "updated_at": [
                293
            ],
            "__typename": [
                277
            ]
        },
        "GalleryChapterCreateInput": {
            "gallery_id": [
                115
            ],
            "image_index": [
                139
            ],
            "title": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "GalleryChapterUpdateInput": {
            "gallery_id": [
                115
            ],
            "id": [
                115
            ],
            "image_index": [
                139
            ],
            "title": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "GalleryCreateInput": {
            "code": [
                277
            ],
            "custom_fields": [
                149
            ],
            "date": [
                277
            ],
            "details": [
                277
            ],
            "organized": [
                11
            ],
            "performer_ids": [
                115
            ],
            "photographer": [
                277
            ],
            "rating100": [
                139
            ],
            "scene_ids": [
                115
            ],
            "studio_id": [
                115
            ],
            "tag_ids": [
                115
            ],
            "title": [
                277
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "GalleryDestroyInput": {
            "delete_file": [
                11
            ],
            "delete_generated": [
                11
            ],
            "destroy_file_entry": [
                11
            ],
            "ids": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "GalleryFile": {
            "basename": [
                277
            ],
            "created_at": [
                293
            ],
            "fingerprint": [
                277,
                {
                    "type": [
                        277,
                        "String!"
                    ]
                }
            ],
            "fingerprints": [
                75
            ],
            "galleries": [
                81
            ],
            "id": [
                115
            ],
            "mod_time": [
                293
            ],
            "parent_folder": [
                79
            ],
            "parent_folder_id": [
                115
            ],
            "path": [
                277
            ],
            "size": [
                140
            ],
            "updated_at": [
                293
            ],
            "zip_file": [
                8
            ],
            "zip_file_id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "GalleryFilterType": {
            "AND": [
                89
            ],
            "NOT": [
                89
            ],
            "OR": [
                89
            ],
            "average_resolution": [
                190
            ],
            "checksum": [
                278
            ],
            "code": [
                278
            ],
            "created_at": [
                295
            ],
            "custom_fields": [
                45
            ],
            "date": [
                49
            ],
            "details": [
                278
            ],
            "file_count": [
                141
            ],
            "files_filter": [
                58
            ],
            "folders_filter": [
                80
            ],
            "has_chapters": [
                277
            ],
            "id": [
                141
            ],
            "image_count": [
                141
            ],
            "images_filter": [
                130
            ],
            "is_missing": [
                277
            ],
            "is_zip": [
                11
            ],
            "organized": [
                11
            ],
            "parent_folder": [
                113
            ],
            "path": [
                278
            ],
            "performer_age": [
                141
            ],
            "performer_count": [
                141
            ],
            "performer_favorite": [
                11
            ],
            "performer_tags": [
                113
            ],
            "performers": [
                160
            ],
            "performers_filter": [
                172
            ],
            "photographer": [
                278
            ],
            "rating100": [
                141
            ],
            "scenes": [
                160
            ],
            "scenes_filter": [
                204
            ],
            "studios": [
                113
            ],
            "studios_filter": [
                282
            ],
            "tag_count": [
                141
            ],
            "tags": [
                113
            ],
            "tags_filter": [
                290
            ],
            "title": [
                278
            ],
            "updated_at": [
                295
            ],
            "url": [
                278
            ],
            "__typename": [
                277
            ]
        },
        "GalleryPathsType": {
            "cover": [
                277
            ],
            "preview": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "GalleryRemoveInput": {
            "gallery_id": [
                115
            ],
            "image_ids": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "GalleryResetCoverInput": {
            "gallery_id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "GallerySetCoverInput": {
            "cover_image_id": [
                115
            ],
            "gallery_id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "GalleryUpdateInput": {
            "clientMutationId": [
                277
            ],
            "code": [
                277
            ],
            "custom_fields": [
                46
            ],
            "date": [
                277
            ],
            "details": [
                277
            ],
            "id": [
                115
            ],
            "organized": [
                11
            ],
            "performer_ids": [
                115
            ],
            "photographer": [
                277
            ],
            "primary_file_id": [
                115
            ],
            "rating100": [
                139
            ],
            "scene_ids": [
                115
            ],
            "studio_id": [
                115
            ],
            "tag_ids": [
                115
            ],
            "title": [
                277
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "GenderCriterionInput": {
            "modifier": [
                44
            ],
            "value": [
                96
            ],
            "value_list": [
                96
            ],
            "__typename": [
                277
            ]
        },
        "GenderEnum": {},
        "GenerateAPIKeyInput": {
            "clear": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "GenerateMetadataInput": {
            "clipPreviews": [
                11
            ],
            "covers": [
                11
            ],
            "forceTranscodes": [
                11
            ],
            "galleryIDs": [
                115
            ],
            "imageIDs": [
                115
            ],
            "imagePhashes": [
                11
            ],
            "imagePreviews": [
                11
            ],
            "imageThumbnails": [
                11
            ],
            "interactiveHeatmapsSpeeds": [
                11
            ],
            "markerIDs": [
                115
            ],
            "markerImagePreviews": [
                11
            ],
            "markerScreenshots": [
                11
            ],
            "markers": [
                11
            ],
            "overwrite": [
                11
            ],
            "paths": [
                277
            ],
            "phashes": [
                11
            ],
            "previewOptions": [
                101
            ],
            "previews": [
                11
            ],
            "sceneIDs": [
                115
            ],
            "sprites": [
                11
            ],
            "transcodes": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "GenerateMetadataOptions": {
            "clipPreviews": [
                11
            ],
            "covers": [
                11
            ],
            "imagePreviews": [
                11
            ],
            "imageThumbnails": [
                11
            ],
            "interactiveHeatmapsSpeeds": [
                11
            ],
            "markerImagePreviews": [
                11
            ],
            "markerScreenshots": [
                11
            ],
            "markers": [
                11
            ],
            "phashes": [
                11
            ],
            "previewOptions": [
                100
            ],
            "previews": [
                11
            ],
            "sprites": [
                11
            ],
            "transcodes": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "GeneratePreviewOptions": {
            "previewExcludeEnd": [
                277
            ],
            "previewExcludeStart": [
                277
            ],
            "previewPreset": [
                186
            ],
            "previewSegmentDuration": [
                77
            ],
            "previewSegments": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "GeneratePreviewOptionsInput": {
            "previewExcludeEnd": [
                277
            ],
            "previewExcludeStart": [
                277
            ],
            "previewPreset": [
                186
            ],
            "previewSegmentDuration": [
                77
            ],
            "previewSegments": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "Group": {
            "aliases": [
                277
            ],
            "back_image_path": [
                277
            ],
            "containing_groups": [
                104
            ],
            "created_at": [
                293
            ],
            "custom_fields": [
                149
            ],
            "date": [
                277
            ],
            "director": [
                277
            ],
            "duration": [
                139
            ],
            "front_image_path": [
                277
            ],
            "id": [
                115
            ],
            "name": [
                277
            ],
            "o_counter": [
                139
            ],
            "performer_count": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "rating100": [
                139
            ],
            "scene_count": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "scenes": [
                200
            ],
            "studio": [
                279
            ],
            "sub_group_count": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "sub_groups": [
                104
            ],
            "synopsis": [
                277
            ],
            "tags": [
                287
            ],
            "updated_at": [
                293
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "GroupCreateInput": {
            "aliases": [
                277
            ],
            "back_image": [
                277
            ],
            "containing_groups": [
                105
            ],
            "custom_fields": [
                149
            ],
            "date": [
                277
            ],
            "director": [
                277
            ],
            "duration": [
                139
            ],
            "front_image": [
                277
            ],
            "name": [
                277
            ],
            "rating100": [
                139
            ],
            "studio_id": [
                115
            ],
            "sub_groups": [
                105
            ],
            "synopsis": [
                277
            ],
            "tag_ids": [
                115
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "GroupDescription": {
            "description": [
                277
            ],
            "group": [
                102
            ],
            "__typename": [
                277
            ]
        },
        "GroupDescriptionInput": {
            "description": [
                277
            ],
            "group_id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "GroupDestroyInput": {
            "id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "GroupFilterType": {
            "AND": [
                107
            ],
            "NOT": [
                107
            ],
            "OR": [
                107
            ],
            "containing_group_count": [
                141
            ],
            "containing_groups": [
                113
            ],
            "created_at": [
                295
            ],
            "custom_fields": [
                45
            ],
            "date": [
                49
            ],
            "director": [
                278
            ],
            "duration": [
                141
            ],
            "is_missing": [
                277
            ],
            "name": [
                278
            ],
            "o_counter": [
                141
            ],
            "performers": [
                160
            ],
            "rating100": [
                141
            ],
            "scene_count": [
                141
            ],
            "scenes_filter": [
                204
            ],
            "studios": [
                113
            ],
            "studios_filter": [
                282
            ],
            "sub_group_count": [
                141
            ],
            "sub_groups": [
                113
            ],
            "synopsis": [
                278
            ],
            "tag_count": [
                141
            ],
            "tags": [
                113
            ],
            "updated_at": [
                295
            ],
            "url": [
                278
            ],
            "__typename": [
                277
            ]
        },
        "GroupSubGroupAddInput": {
            "containing_group_id": [
                115
            ],
            "insert_index": [
                139
            ],
            "sub_groups": [
                105
            ],
            "__typename": [
                277
            ]
        },
        "GroupSubGroupRemoveInput": {
            "containing_group_id": [
                115
            ],
            "sub_group_ids": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "GroupUpdateInput": {
            "aliases": [
                277
            ],
            "back_image": [
                277
            ],
            "containing_groups": [
                105
            ],
            "custom_fields": [
                46
            ],
            "date": [
                277
            ],
            "director": [
                277
            ],
            "duration": [
                139
            ],
            "front_image": [
                277
            ],
            "id": [
                115
            ],
            "name": [
                277
            ],
            "rating100": [
                139
            ],
            "studio_id": [
                115
            ],
            "sub_groups": [
                105
            ],
            "synopsis": [
                277
            ],
            "tag_ids": [
                115
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "HashAlgorithm": {},
        "HierarchicalCountInput": {
            "depth": [
                139
            ],
            "modifier": [
                44
            ],
            "value": [
                139
            ],
            "value2": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "HierarchicalMultiCriterionInput": {
            "depth": [
                139
            ],
            "excludes": [
                115
            ],
            "modifier": [
                44
            ],
            "value": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "HistoryMutationResult": {
            "count": [
                139
            ],
            "history": [
                293
            ],
            "__typename": [
                277
            ]
        },
        "ID": {},
        "IdentifyFieldOptions": {
            "createMissing": [
                11
            ],
            "field": [
                277
            ],
            "strategy": [
                118
            ],
            "__typename": [
                277
            ]
        },
        "IdentifyFieldOptionsInput": {
            "createMissing": [
                11
            ],
            "field": [
                277
            ],
            "strategy": [
                118
            ],
            "__typename": [
                277
            ]
        },
        "IdentifyFieldStrategy": {},
        "IdentifyMetadataInput": {
            "options": [
                121
            ],
            "paths": [
                277
            ],
            "sceneIDs": [
                115
            ],
            "sources": [
                124
            ],
            "__typename": [
                277
            ]
        },
        "IdentifyMetadataOptions": {
            "fieldOptions": [
                116
            ],
            "includeMalePerformers": [
                11
            ],
            "performerGenders": [
                96
            ],
            "setCoverImage": [
                11
            ],
            "setOrganized": [
                11
            ],
            "skipMultipleMatchTag": [
                277
            ],
            "skipMultipleMatches": [
                11
            ],
            "skipSingleNamePerformerTag": [
                277
            ],
            "skipSingleNamePerformers": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "IdentifyMetadataOptionsInput": {
            "fieldOptions": [
                117
            ],
            "includeMalePerformers": [
                11
            ],
            "performerGenders": [
                96
            ],
            "setCoverImage": [
                11
            ],
            "setOrganized": [
                11
            ],
            "skipMultipleMatchTag": [
                277
            ],
            "skipMultipleMatches": [
                11
            ],
            "skipSingleNamePerformerTag": [
                277
            ],
            "skipSingleNamePerformers": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "IdentifyMetadataTaskOptions": {
            "options": [
                120
            ],
            "sources": [
                123
            ],
            "__typename": [
                277
            ]
        },
        "IdentifySource": {
            "options": [
                120
            ],
            "source": [
                252
            ],
            "__typename": [
                277
            ]
        },
        "IdentifySourceInput": {
            "options": [
                121
            ],
            "source": [
                253
            ],
            "__typename": [
                277
            ]
        },
        "Image": {
            "code": [
                277
            ],
            "created_at": [
                293
            ],
            "custom_fields": [
                149
            ],
            "date": [
                277
            ],
            "details": [
                277
            ],
            "files": [
                127
            ],
            "galleries": [
                81
            ],
            "id": [
                115
            ],
            "o_counter": [
                139
            ],
            "organized": [
                11
            ],
            "paths": [
                133
            ],
            "performers": [
                169
            ],
            "photographer": [
                277
            ],
            "rating100": [
                139
            ],
            "studio": [
                279
            ],
            "tags": [
                287
            ],
            "title": [
                277
            ],
            "updated_at": [
                293
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "visual_files": [
                301
            ],
            "__typename": [
                277
            ]
        },
        "ImageDestroyInput": {
            "delete_file": [
                11
            ],
            "delete_generated": [
                11
            ],
            "destroy_file_entry": [
                11
            ],
            "id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "ImageFile": {
            "basename": [
                277
            ],
            "created_at": [
                293
            ],
            "fingerprint": [
                277,
                {
                    "type": [
                        277,
                        "String!"
                    ]
                }
            ],
            "fingerprints": [
                75
            ],
            "format": [
                277
            ],
            "height": [
                139
            ],
            "id": [
                115
            ],
            "images": [
                125
            ],
            "mod_time": [
                293
            ],
            "parent_folder": [
                79
            ],
            "parent_folder_id": [
                115
            ],
            "path": [
                277
            ],
            "size": [
                140
            ],
            "updated_at": [
                293
            ],
            "width": [
                139
            ],
            "zip_file": [
                8
            ],
            "zip_file_id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "ImageFileFilterInput": {
            "format": [
                278
            ],
            "orientation": [
                162
            ],
            "resolution": [
                190
            ],
            "__typename": [
                277
            ]
        },
        "ImageFileType": {
            "height": [
                139
            ],
            "mod_time": [
                293
            ],
            "size": [
                139
            ],
            "width": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "ImageFilterType": {
            "AND": [
                130
            ],
            "NOT": [
                130
            ],
            "OR": [
                130
            ],
            "checksum": [
                278
            ],
            "code": [
                278
            ],
            "created_at": [
                295
            ],
            "custom_fields": [
                45
            ],
            "date": [
                49
            ],
            "details": [
                278
            ],
            "file_count": [
                141
            ],
            "files_filter": [
                58
            ],
            "galleries": [
                160
            ],
            "galleries_filter": [
                89
            ],
            "id": [
                141
            ],
            "is_missing": [
                277
            ],
            "o_counter": [
                141
            ],
            "organized": [
                11
            ],
            "orientation": [
                162
            ],
            "path": [
                278
            ],
            "performer_age": [
                141
            ],
            "performer_count": [
                141
            ],
            "performer_favorite": [
                11
            ],
            "performer_tags": [
                113
            ],
            "performers": [
                160
            ],
            "performers_filter": [
                172
            ],
            "phash_distance": [
                175
            ],
            "photographer": [
                278
            ],
            "rating100": [
                141
            ],
            "resolution": [
                190
            ],
            "studios": [
                113
            ],
            "studios_filter": [
                282
            ],
            "tag_count": [
                141
            ],
            "tags": [
                113
            ],
            "tags_filter": [
                290
            ],
            "title": [
                278
            ],
            "updated_at": [
                295
            ],
            "url": [
                278
            ],
            "__typename": [
                277
            ]
        },
        "ImageLightboxDisplayMode": {},
        "ImageLightboxScrollMode": {},
        "ImagePathsType": {
            "image": [
                277
            ],
            "preview": [
                277
            ],
            "thumbnail": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ImageUpdateInput": {
            "clientMutationId": [
                277
            ],
            "code": [
                277
            ],
            "custom_fields": [
                46
            ],
            "date": [
                277
            ],
            "details": [
                277
            ],
            "gallery_ids": [
                115
            ],
            "id": [
                115
            ],
            "organized": [
                11
            ],
            "performer_ids": [
                115
            ],
            "photographer": [
                277
            ],
            "primary_file_id": [
                115
            ],
            "rating100": [
                139
            ],
            "studio_id": [
                115
            ],
            "tag_ids": [
                115
            ],
            "title": [
                277
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ImagesDestroyInput": {
            "delete_file": [
                11
            ],
            "delete_generated": [
                11
            ],
            "destroy_file_entry": [
                11
            ],
            "ids": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "ImportDuplicateEnum": {},
        "ImportMissingRefEnum": {},
        "ImportObjectsInput": {
            "duplicateBehaviour": [
                136
            ],
            "file": [
                296
            ],
            "missingRefBehaviour": [
                137
            ],
            "__typename": [
                277
            ]
        },
        "Int": {},
        "Int64": {},
        "IntCriterionInput": {
            "modifier": [
                44
            ],
            "value": [
                139
            ],
            "value2": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "Job": {
            "addTime": [
                293
            ],
            "description": [
                277
            ],
            "endTime": [
                293
            ],
            "error": [
                277
            ],
            "id": [
                115
            ],
            "progress": [
                77
            ],
            "startTime": [
                293
            ],
            "status": [
                143
            ],
            "subTasks": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "JobStatus": {},
        "JobStatusUpdate": {
            "job": [
                142
            ],
            "type": [
                145
            ],
            "__typename": [
                277
            ]
        },
        "JobStatusUpdateType": {},
        "LatestVersion": {
            "release_date": [
                277
            ],
            "shorthash": [
                277
            ],
            "url": [
                277
            ],
            "version": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "LogEntry": {
            "level": [
                148
            ],
            "message": [
                277
            ],
            "time": [
                293
            ],
            "__typename": [
                277
            ]
        },
        "LogLevel": {},
        "Map": {},
        "MarkerStringsResultType": {
            "count": [
                139
            ],
            "id": [
                115
            ],
            "title": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "MigrateBlobsInput": {
            "deleteOld": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "MigrateInput": {
            "backupPath": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "MigrateSceneScreenshotsInput": {
            "deleteFiles": [
                11
            ],
            "overwriteExisting": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "MoveFilesInput": {
            "destination_basename": [
                277
            ],
            "destination_folder": [
                277
            ],
            "destination_folder_id": [
                115
            ],
            "ids": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "Movie": {
            "aliases": [
                277
            ],
            "back_image_path": [
                277
            ],
            "created_at": [
                293
            ],
            "date": [
                277
            ],
            "director": [
                277
            ],
            "duration": [
                139
            ],
            "front_image_path": [
                277
            ],
            "id": [
                115
            ],
            "name": [
                277
            ],
            "rating100": [
                139
            ],
            "scene_count": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "scenes": [
                200
            ],
            "studio": [
                279
            ],
            "synopsis": [
                277
            ],
            "tags": [
                287
            ],
            "updated_at": [
                293
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "MovieCreateInput": {
            "aliases": [
                277
            ],
            "back_image": [
                277
            ],
            "date": [
                277
            ],
            "director": [
                277
            ],
            "duration": [
                139
            ],
            "front_image": [
                277
            ],
            "name": [
                277
            ],
            "rating100": [
                139
            ],
            "studio_id": [
                115
            ],
            "synopsis": [
                277
            ],
            "tag_ids": [
                115
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "MovieDestroyInput": {
            "id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "MovieFilterType": {
            "AND": [
                158
            ],
            "NOT": [
                158
            ],
            "OR": [
                158
            ],
            "created_at": [
                295
            ],
            "date": [
                49
            ],
            "director": [
                278
            ],
            "duration": [
                141
            ],
            "is_missing": [
                277
            ],
            "name": [
                278
            ],
            "performers": [
                160
            ],
            "rating100": [
                141
            ],
            "scenes_filter": [
                204
            ],
            "studios": [
                113
            ],
            "studios_filter": [
                282
            ],
            "synopsis": [
                278
            ],
            "tag_count": [
                141
            ],
            "tags": [
                113
            ],
            "updated_at": [
                295
            ],
            "url": [
                278
            ],
            "__typename": [
                277
            ]
        },
        "MovieUpdateInput": {
            "aliases": [
                277
            ],
            "back_image": [
                277
            ],
            "date": [
                277
            ],
            "director": [
                277
            ],
            "duration": [
                139
            ],
            "front_image": [
                277
            ],
            "id": [
                115
            ],
            "name": [
                277
            ],
            "rating100": [
                139
            ],
            "studio_id": [
                115
            ],
            "synopsis": [
                277
            ],
            "tag_ids": [
                115
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "MultiCriterionInput": {
            "excludes": [
                115
            ],
            "modifier": [
                44
            ],
            "value": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "Mutation": {
            "addGalleryImages": [
                11,
                {
                    "input": [
                        82,
                        "GalleryAddInput!"
                    ]
                }
            ],
            "addGroupSubGroups": [
                11,
                {
                    "input": [
                        108,
                        "GroupSubGroupAddInput!"
                    ]
                }
            ],
            "addTempDLNAIP": [
                11,
                {
                    "input": [
                        0,
                        "AddTempDLNAIPInput!"
                    ]
                }
            ],
            "anonymiseDatabase": [
                277,
                {
                    "input": [
                        1,
                        "AnonymiseDatabaseInput!"
                    ]
                }
            ],
            "backupDatabase": [
                277,
                {
                    "input": [
                        6,
                        "BackupDatabaseInput!"
                    ]
                }
            ],
            "bulkGalleryUpdate": [
                81,
                {
                    "input": [
                        12,
                        "BulkGalleryUpdateInput!"
                    ]
                }
            ],
            "bulkGroupUpdate": [
                102,
                {
                    "input": [
                        13,
                        "BulkGroupUpdateInput!"
                    ]
                }
            ],
            "bulkImageUpdate": [
                125,
                {
                    "input": [
                        14,
                        "BulkImageUpdateInput!"
                    ]
                }
            ],
            "bulkMovieUpdate": [
                155,
                {
                    "input": [
                        15,
                        "BulkMovieUpdateInput!"
                    ]
                }
            ],
            "bulkPerformerUpdate": [
                169,
                {
                    "input": [
                        16,
                        "BulkPerformerUpdateInput!"
                    ]
                }
            ],
            "bulkSceneMarkerUpdate": [
                208,
                {
                    "input": [
                        17,
                        "BulkSceneMarkerUpdateInput!"
                    ]
                }
            ],
            "bulkSceneUpdate": [
                200,
                {
                    "input": [
                        18,
                        "BulkSceneUpdateInput!"
                    ]
                }
            ],
            "bulkStudioUpdate": [
                279,
                {
                    "input": [
                        19,
                        "BulkStudioUpdateInput!"
                    ]
                }
            ],
            "bulkTagUpdate": [
                287,
                {
                    "input": [
                        20,
                        "BulkTagUpdateInput!"
                    ]
                }
            ],
            "configureDLNA": [
                30,
                {
                    "input": [
                        29,
                        "ConfigDLNAInput!"
                    ]
                }
            ],
            "configureDefaults": [
                32,
                {
                    "input": [
                        31,
                        "ConfigDefaultSettingsInput!"
                    ]
                }
            ],
            "configureGeneral": [
                36,
                {
                    "input": [
                        35,
                        "ConfigGeneralInput!"
                    ]
                }
            ],
            "configureInterface": [
                40,
                {
                    "input": [
                        39,
                        "ConfigInterfaceInput!"
                    ]
                }
            ],
            "configurePlugin": [
                149,
                {
                    "input": [
                        149,
                        "Map!"
                    ],
                    "plugin_id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "configureScraping": [
                43,
                {
                    "input": [
                        42,
                        "ConfigScrapingInput!"
                    ]
                }
            ],
            "configureUI": [
                149,
                {
                    "input": [
                        149
                    ],
                    "partial": [
                        149
                    ]
                }
            ],
            "configureUISetting": [
                149,
                {
                    "key": [
                        277,
                        "String!"
                    ],
                    "value": [
                        2
                    ]
                }
            ],
            "deleteFiles": [
                11,
                {
                    "ids": [
                        115,
                        "[ID!]!"
                    ]
                }
            ],
            "destroyFiles": [
                11,
                {
                    "ids": [
                        115,
                        "[ID!]!"
                    ]
                }
            ],
            "destroySavedFilter": [
                11,
                {
                    "input": [
                        50,
                        "DestroyFilterInput!"
                    ]
                }
            ],
            "disableDLNA": [
                11,
                {
                    "input": [
                        52,
                        "DisableDLNAInput!"
                    ]
                }
            ],
            "downloadFFMpeg": [
                115
            ],
            "enableDLNA": [
                11,
                {
                    "input": [
                        54,
                        "EnableDLNAInput!"
                    ]
                }
            ],
            "execSQL": [
                192,
                {
                    "args": [
                        2,
                        "[Any]"
                    ],
                    "sql": [
                        277,
                        "String!"
                    ]
                }
            ],
            "exportObjects": [
                277,
                {
                    "input": [
                        56,
                        "ExportObjectsInput!"
                    ]
                }
            ],
            "fileSetFingerprints": [
                11,
                {
                    "input": [
                        59,
                        "FileSetFingerprintsInput!"
                    ]
                }
            ],
            "galleriesUpdate": [
                81,
                {
                    "input": [
                        94,
                        "[GalleryUpdateInput!]!"
                    ]
                }
            ],
            "galleryChapterCreate": [
                83,
                {
                    "input": [
                        84,
                        "GalleryChapterCreateInput!"
                    ]
                }
            ],
            "galleryChapterDestroy": [
                11,
                {
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "galleryChapterUpdate": [
                83,
                {
                    "input": [
                        85,
                        "GalleryChapterUpdateInput!"
                    ]
                }
            ],
            "galleryCreate": [
                81,
                {
                    "input": [
                        86,
                        "GalleryCreateInput!"
                    ]
                }
            ],
            "galleryDestroy": [
                11,
                {
                    "input": [
                        87,
                        "GalleryDestroyInput!"
                    ]
                }
            ],
            "galleryUpdate": [
                81,
                {
                    "input": [
                        94,
                        "GalleryUpdateInput!"
                    ]
                }
            ],
            "generateAPIKey": [
                277,
                {
                    "input": [
                        97,
                        "GenerateAPIKeyInput!"
                    ]
                }
            ],
            "groupCreate": [
                102,
                {
                    "input": [
                        103,
                        "GroupCreateInput!"
                    ]
                }
            ],
            "groupDestroy": [
                11,
                {
                    "input": [
                        106,
                        "GroupDestroyInput!"
                    ]
                }
            ],
            "groupUpdate": [
                102,
                {
                    "input": [
                        110,
                        "GroupUpdateInput!"
                    ]
                }
            ],
            "groupsDestroy": [
                11,
                {
                    "ids": [
                        115,
                        "[ID!]!"
                    ]
                }
            ],
            "imageDecrementO": [
                139,
                {
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "imageDestroy": [
                11,
                {
                    "input": [
                        126,
                        "ImageDestroyInput!"
                    ]
                }
            ],
            "imageIncrementO": [
                139,
                {
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "imageResetO": [
                139,
                {
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "imageUpdate": [
                125,
                {
                    "input": [
                        134,
                        "ImageUpdateInput!"
                    ]
                }
            ],
            "imagesDestroy": [
                11,
                {
                    "input": [
                        135,
                        "ImagesDestroyInput!"
                    ]
                }
            ],
            "imagesUpdate": [
                125,
                {
                    "input": [
                        134,
                        "[ImageUpdateInput!]!"
                    ]
                }
            ],
            "importObjects": [
                115,
                {
                    "input": [
                        138,
                        "ImportObjectsInput!"
                    ]
                }
            ],
            "installPackages": [
                115,
                {
                    "packages": [
                        167,
                        "[PackageSpecInput!]!"
                    ],
                    "type": [
                        168,
                        "PackageType!"
                    ]
                }
            ],
            "metadataAutoTag": [
                115,
                {
                    "input": [
                        4,
                        "AutoTagMetadataInput!"
                    ]
                }
            ],
            "metadataClean": [
                115,
                {
                    "input": [
                        28,
                        "CleanMetadataInput!"
                    ]
                }
            ],
            "metadataCleanGenerated": [
                115,
                {
                    "input": [
                        27,
                        "CleanGeneratedInput!"
                    ]
                }
            ],
            "metadataExport": [
                115
            ],
            "metadataGenerate": [
                115,
                {
                    "input": [
                        98,
                        "GenerateMetadataInput!"
                    ]
                }
            ],
            "metadataIdentify": [
                115,
                {
                    "input": [
                        119,
                        "IdentifyMetadataInput!"
                    ]
                }
            ],
            "metadataImport": [
                115
            ],
            "metadataScan": [
                115,
                {
                    "input": [
                        198,
                        "ScanMetadataInput!"
                    ]
                }
            ],
            "migrate": [
                115,
                {
                    "input": [
                        152,
                        "MigrateInput!"
                    ]
                }
            ],
            "migrateBlobs": [
                115,
                {
                    "input": [
                        151,
                        "MigrateBlobsInput!"
                    ]
                }
            ],
            "migrateHashNaming": [
                115
            ],
            "migrateSceneScreenshots": [
                115,
                {
                    "input": [
                        153,
                        "MigrateSceneScreenshotsInput!"
                    ]
                }
            ],
            "moveFiles": [
                11,
                {
                    "input": [
                        154,
                        "MoveFilesInput!"
                    ]
                }
            ],
            "movieCreate": [
                155,
                {
                    "input": [
                        156,
                        "MovieCreateInput!"
                    ]
                }
            ],
            "movieDestroy": [
                11,
                {
                    "input": [
                        157,
                        "MovieDestroyInput!"
                    ]
                }
            ],
            "movieUpdate": [
                155,
                {
                    "input": [
                        159,
                        "MovieUpdateInput!"
                    ]
                }
            ],
            "moviesDestroy": [
                11,
                {
                    "ids": [
                        115,
                        "[ID!]!"
                    ]
                }
            ],
            "optimiseDatabase": [
                115
            ],
            "performerCreate": [
                169,
                {
                    "input": [
                        170,
                        "PerformerCreateInput!"
                    ]
                }
            ],
            "performerDestroy": [
                11,
                {
                    "input": [
                        171,
                        "PerformerDestroyInput!"
                    ]
                }
            ],
            "performerMerge": [
                169,
                {
                    "input": [
                        173,
                        "PerformerMergeInput!"
                    ]
                }
            ],
            "performerUpdate": [
                169,
                {
                    "input": [
                        174,
                        "PerformerUpdateInput!"
                    ]
                }
            ],
            "performersDestroy": [
                11,
                {
                    "ids": [
                        115,
                        "[ID!]!"
                    ]
                }
            ],
            "querySQL": [
                193,
                {
                    "args": [
                        2,
                        "[Any]"
                    ],
                    "sql": [
                        277,
                        "String!"
                    ]
                }
            ],
            "reloadPlugins": [
                11
            ],
            "reloadScrapers": [
                11
            ],
            "removeGalleryImages": [
                11,
                {
                    "input": [
                        91,
                        "GalleryRemoveInput!"
                    ]
                }
            ],
            "removeGroupSubGroups": [
                11,
                {
                    "input": [
                        109,
                        "GroupSubGroupRemoveInput!"
                    ]
                }
            ],
            "removeTempDLNAIP": [
                11,
                {
                    "input": [
                        188,
                        "RemoveTempDLNAIPInput!"
                    ]
                }
            ],
            "reorderSubGroups": [
                11,
                {
                    "input": [
                        189,
                        "ReorderSubGroupsInput!"
                    ]
                }
            ],
            "resetGalleryCover": [
                11,
                {
                    "input": [
                        92,
                        "GalleryResetCoverInput!"
                    ]
                }
            ],
            "revealFileInFileManager": [
                11,
                {
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "revealFolderInFileManager": [
                11,
                {
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "runPluginOperation": [
                2,
                {
                    "args": [
                        149
                    ],
                    "plugin_id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "runPluginTask": [
                115,
                {
                    "args": [
                        177,
                        "[PluginArgInput!]"
                    ],
                    "args_map": [
                        149
                    ],
                    "description": [
                        277
                    ],
                    "plugin_id": [
                        115,
                        "ID!"
                    ],
                    "task_name": [
                        277
                    ]
                }
            ],
            "saveFilter": [
                195,
                {
                    "input": [
                        194,
                        "SaveFilterInput!"
                    ]
                }
            ],
            "sceneAddO": [
                114,
                {
                    "id": [
                        115,
                        "ID!"
                    ],
                    "times": [
                        294,
                        "[Timestamp!]"
                    ]
                }
            ],
            "sceneAddPlay": [
                114,
                {
                    "id": [
                        115,
                        "ID!"
                    ],
                    "times": [
                        294,
                        "[Timestamp!]"
                    ]
                }
            ],
            "sceneAssignFile": [
                11,
                {
                    "input": [
                        3,
                        "AssignSceneFileInput!"
                    ]
                }
            ],
            "sceneCreate": [
                200,
                {
                    "input": [
                        201,
                        "SceneCreateInput!"
                    ]
                }
            ],
            "sceneDecrementO": [
                139,
                {
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "sceneDeleteO": [
                114,
                {
                    "id": [
                        115,
                        "ID!"
                    ],
                    "times": [
                        294,
                        "[Timestamp!]"
                    ]
                }
            ],
            "sceneDeletePlay": [
                114,
                {
                    "id": [
                        115,
                        "ID!"
                    ],
                    "times": [
                        294,
                        "[Timestamp!]"
                    ]
                }
            ],
            "sceneDestroy": [
                11,
                {
                    "input": [
                        202,
                        "SceneDestroyInput!"
                    ]
                }
            ],
            "sceneGenerateScreenshot": [
                115,
                {
                    "at": [
                        77
                    ],
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "sceneIncrementO": [
                139,
                {
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "sceneIncrementPlayCount": [
                139,
                {
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "sceneMarkerCreate": [
                208,
                {
                    "input": [
                        209,
                        "SceneMarkerCreateInput!"
                    ]
                }
            ],
            "sceneMarkerDestroy": [
                11,
                {
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "sceneMarkerUpdate": [
                208,
                {
                    "input": [
                        212,
                        "SceneMarkerUpdateInput!"
                    ]
                }
            ],
            "sceneMarkersDestroy": [
                11,
                {
                    "ids": [
                        115,
                        "[ID!]!"
                    ]
                }
            ],
            "sceneMerge": [
                200,
                {
                    "input": [
                        213,
                        "SceneMergeInput!"
                    ]
                }
            ],
            "sceneResetActivity": [
                11,
                {
                    "id": [
                        115,
                        "ID!"
                    ],
                    "reset_duration": [
                        11
                    ],
                    "reset_resume": [
                        11
                    ]
                }
            ],
            "sceneResetO": [
                139,
                {
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "sceneResetPlayCount": [
                139,
                {
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "sceneSaveActivity": [
                11,
                {
                    "id": [
                        115,
                        "ID!"
                    ],
                    "playDuration": [
                        77
                    ],
                    "resume_time": [
                        77
                    ]
                }
            ],
            "sceneUpdate": [
                200,
                {
                    "input": [
                        222,
                        "SceneUpdateInput!"
                    ]
                }
            ],
            "scenesDestroy": [
                11,
                {
                    "input": [
                        223,
                        "ScenesDestroyInput!"
                    ]
                }
            ],
            "scenesUpdate": [
                200,
                {
                    "input": [
                        222,
                        "[SceneUpdateInput!]!"
                    ]
                }
            ],
            "setDefaultFilter": [
                11,
                {
                    "input": [
                        255,
                        "SetDefaultFilterInput!"
                    ]
                }
            ],
            "setGalleryCover": [
                11,
                {
                    "input": [
                        93,
                        "GallerySetCoverInput!"
                    ]
                }
            ],
            "setPluginsEnabled": [
                11,
                {
                    "enabledMap": [
                        10,
                        "BoolMap!"
                    ]
                }
            ],
            "setup": [
                11,
                {
                    "input": [
                        257,
                        "SetupInput!"
                    ]
                }
            ],
            "stashBoxBatchPerformerTag": [
                277,
                {
                    "input": [
                        260,
                        "StashBoxBatchTagInput!"
                    ]
                }
            ],
            "stashBoxBatchStudioTag": [
                277,
                {
                    "input": [
                        260,
                        "StashBoxBatchTagInput!"
                    ]
                }
            ],
            "stashBoxBatchTagTag": [
                277,
                {
                    "input": [
                        260,
                        "StashBoxBatchTagInput!"
                    ]
                }
            ],
            "stopAllJobs": [
                11
            ],
            "stopJob": [
                11,
                {
                    "job_id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "studioCreate": [
                279,
                {
                    "input": [
                        280,
                        "StudioCreateInput!"
                    ]
                }
            ],
            "studioDestroy": [
                11,
                {
                    "input": [
                        281,
                        "StudioDestroyInput!"
                    ]
                }
            ],
            "studioUpdate": [
                279,
                {
                    "input": [
                        283,
                        "StudioUpdateInput!"
                    ]
                }
            ],
            "studiosDestroy": [
                11,
                {
                    "ids": [
                        115,
                        "[ID!]!"
                    ]
                }
            ],
            "submitStashBoxFingerprints": [
                11,
                {
                    "input": [
                        263,
                        "StashBoxFingerprintSubmissionInput!"
                    ]
                }
            ],
            "submitStashBoxPerformerDraft": [
                115,
                {
                    "input": [
                        261,
                        "StashBoxDraftSubmissionInput!"
                    ]
                }
            ],
            "submitStashBoxSceneDraft": [
                115,
                {
                    "input": [
                        261,
                        "StashBoxDraftSubmissionInput!"
                    ]
                }
            ],
            "tagCreate": [
                287,
                {
                    "input": [
                        288,
                        "TagCreateInput!"
                    ]
                }
            ],
            "tagDestroy": [
                11,
                {
                    "input": [
                        289,
                        "TagDestroyInput!"
                    ]
                }
            ],
            "tagUpdate": [
                287,
                {
                    "input": [
                        291,
                        "TagUpdateInput!"
                    ]
                }
            ],
            "tagsDestroy": [
                11,
                {
                    "ids": [
                        115,
                        "[ID!]!"
                    ]
                }
            ],
            "tagsMerge": [
                287,
                {
                    "input": [
                        292,
                        "TagsMergeInput!"
                    ]
                }
            ],
            "uninstallPackages": [
                115,
                {
                    "packages": [
                        167,
                        "[PackageSpecInput!]!"
                    ],
                    "type": [
                        168,
                        "PackageType!"
                    ]
                }
            ],
            "updatePackages": [
                115,
                {
                    "packages": [
                        167,
                        "[PackageSpecInput!]"
                    ],
                    "type": [
                        168,
                        "PackageType!"
                    ]
                }
            ],
            "__typename": [
                277
            ]
        },
        "OrientationCriterionInput": {
            "value": [
                163
            ],
            "__typename": [
                277
            ]
        },
        "OrientationEnum": {},
        "Package": {
            "date": [
                294
            ],
            "metadata": [
                149
            ],
            "name": [
                277
            ],
            "package_id": [
                277
            ],
            "requires": [
                164
            ],
            "sourceURL": [
                277
            ],
            "source_package": [
                164
            ],
            "version": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "PackageSource": {
            "local_path": [
                277
            ],
            "name": [
                277
            ],
            "url": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "PackageSourceInput": {
            "local_path": [
                277
            ],
            "name": [
                277
            ],
            "url": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "PackageSpecInput": {
            "id": [
                277
            ],
            "sourceURL": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "PackageType": {},
        "Performer": {
            "alias_list": [
                277
            ],
            "birthdate": [
                277
            ],
            "career_end": [
                277
            ],
            "career_length": [
                277
            ],
            "career_start": [
                277
            ],
            "circumcised": [
                25
            ],
            "country": [
                277
            ],
            "created_at": [
                293
            ],
            "custom_fields": [
                149
            ],
            "death_date": [
                277
            ],
            "details": [
                277
            ],
            "disambiguation": [
                277
            ],
            "ethnicity": [
                277
            ],
            "eye_color": [
                277
            ],
            "fake_tits": [
                277
            ],
            "favorite": [
                11
            ],
            "gallery_count": [
                139
            ],
            "gender": [
                96
            ],
            "group_count": [
                139
            ],
            "groups": [
                102
            ],
            "hair_color": [
                277
            ],
            "height_cm": [
                139
            ],
            "id": [
                115
            ],
            "ignore_auto_tag": [
                11
            ],
            "image_count": [
                139
            ],
            "image_path": [
                277
            ],
            "instagram": [
                277
            ],
            "measurements": [
                277
            ],
            "movie_count": [
                139
            ],
            "movies": [
                155
            ],
            "name": [
                277
            ],
            "o_counter": [
                139
            ],
            "penis_length": [
                77
            ],
            "performer_count": [
                139
            ],
            "piercings": [
                277
            ],
            "rating100": [
                139
            ],
            "scene_count": [
                139
            ],
            "scenes": [
                200
            ],
            "stash_ids": [
                271
            ],
            "tags": [
                287
            ],
            "tattoos": [
                277
            ],
            "twitter": [
                277
            ],
            "updated_at": [
                293
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "weight": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "PerformerCreateInput": {
            "alias_list": [
                277
            ],
            "birthdate": [
                277
            ],
            "career_end": [
                277
            ],
            "career_length": [
                277
            ],
            "career_start": [
                277
            ],
            "circumcised": [
                25
            ],
            "country": [
                277
            ],
            "custom_fields": [
                149
            ],
            "death_date": [
                277
            ],
            "details": [
                277
            ],
            "disambiguation": [
                277
            ],
            "ethnicity": [
                277
            ],
            "eye_color": [
                277
            ],
            "fake_tits": [
                277
            ],
            "favorite": [
                11
            ],
            "gender": [
                96
            ],
            "hair_color": [
                277
            ],
            "height_cm": [
                139
            ],
            "ignore_auto_tag": [
                11
            ],
            "image": [
                277
            ],
            "instagram": [
                277
            ],
            "measurements": [
                277
            ],
            "name": [
                277
            ],
            "penis_length": [
                77
            ],
            "piercings": [
                277
            ],
            "rating100": [
                139
            ],
            "stash_ids": [
                273
            ],
            "tag_ids": [
                115
            ],
            "tattoos": [
                277
            ],
            "twitter": [
                277
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "weight": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "PerformerDestroyInput": {
            "id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "PerformerFilterType": {
            "AND": [
                172
            ],
            "NOT": [
                172
            ],
            "OR": [
                172
            ],
            "age": [
                141
            ],
            "aliases": [
                278
            ],
            "birth_year": [
                141
            ],
            "birthdate": [
                49
            ],
            "career_end": [
                49
            ],
            "career_length": [
                278
            ],
            "career_start": [
                49
            ],
            "circumcised": [
                26
            ],
            "country": [
                278
            ],
            "created_at": [
                295
            ],
            "custom_fields": [
                45
            ],
            "death_date": [
                49
            ],
            "death_year": [
                141
            ],
            "details": [
                278
            ],
            "disambiguation": [
                278
            ],
            "ethnicity": [
                278
            ],
            "eye_color": [
                278
            ],
            "fake_tits": [
                278
            ],
            "filter_favorites": [
                11
            ],
            "galleries_filter": [
                89
            ],
            "gallery_count": [
                141
            ],
            "gender": [
                95
            ],
            "groups": [
                113
            ],
            "hair_color": [
                278
            ],
            "height_cm": [
                141
            ],
            "ignore_auto_tag": [
                11
            ],
            "image_count": [
                141
            ],
            "images_filter": [
                130
            ],
            "is_missing": [
                277
            ],
            "marker_count": [
                141
            ],
            "markers_filter": [
                210
            ],
            "measurements": [
                278
            ],
            "name": [
                278
            ],
            "o_counter": [
                141
            ],
            "penis_length": [
                78
            ],
            "performers": [
                160
            ],
            "piercings": [
                278
            ],
            "play_count": [
                141
            ],
            "rating100": [
                141
            ],
            "scene_count": [
                141
            ],
            "scenes_filter": [
                204
            ],
            "stash_id_endpoint": [
                272
            ],
            "stash_ids_endpoint": [
                274
            ],
            "studios": [
                113
            ],
            "tag_count": [
                141
            ],
            "tags": [
                113
            ],
            "tags_filter": [
                290
            ],
            "tattoos": [
                278
            ],
            "updated_at": [
                295
            ],
            "url": [
                278
            ],
            "weight": [
                141
            ],
            "__typename": [
                277
            ]
        },
        "PerformerMergeInput": {
            "destination": [
                115
            ],
            "source": [
                115
            ],
            "values": [
                174
            ],
            "__typename": [
                277
            ]
        },
        "PerformerUpdateInput": {
            "alias_list": [
                277
            ],
            "birthdate": [
                277
            ],
            "career_end": [
                277
            ],
            "career_length": [
                277
            ],
            "career_start": [
                277
            ],
            "circumcised": [
                25
            ],
            "country": [
                277
            ],
            "custom_fields": [
                46
            ],
            "death_date": [
                277
            ],
            "details": [
                277
            ],
            "disambiguation": [
                277
            ],
            "ethnicity": [
                277
            ],
            "eye_color": [
                277
            ],
            "fake_tits": [
                277
            ],
            "favorite": [
                11
            ],
            "gender": [
                96
            ],
            "hair_color": [
                277
            ],
            "height_cm": [
                139
            ],
            "id": [
                115
            ],
            "ignore_auto_tag": [
                11
            ],
            "image": [
                277
            ],
            "instagram": [
                277
            ],
            "measurements": [
                277
            ],
            "name": [
                277
            ],
            "penis_length": [
                77
            ],
            "piercings": [
                277
            ],
            "rating100": [
                139
            ],
            "stash_ids": [
                273
            ],
            "tag_ids": [
                115
            ],
            "tattoos": [
                277
            ],
            "twitter": [
                277
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "weight": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "PhashDistanceCriterionInput": {
            "distance": [
                139
            ],
            "modifier": [
                44
            ],
            "value": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "Plugin": {
            "description": [
                277
            ],
            "enabled": [
                11
            ],
            "hooks": [
                179
            ],
            "id": [
                115
            ],
            "name": [
                277
            ],
            "paths": [
                180
            ],
            "requires": [
                115
            ],
            "settings": [
                182
            ],
            "tasks": [
                184
            ],
            "url": [
                277
            ],
            "version": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "PluginArgInput": {
            "key": [
                277
            ],
            "value": [
                185
            ],
            "__typename": [
                277
            ]
        },
        "PluginConfigMap": {},
        "PluginHook": {
            "description": [
                277
            ],
            "hooks": [
                277
            ],
            "name": [
                277
            ],
            "plugin": [
                176
            ],
            "__typename": [
                277
            ]
        },
        "PluginPaths": {
            "css": [
                277
            ],
            "javascript": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "PluginResult": {
            "error": [
                277
            ],
            "result": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "PluginSetting": {
            "description": [
                277
            ],
            "display_name": [
                277
            ],
            "name": [
                277
            ],
            "type": [
                183
            ],
            "__typename": [
                277
            ]
        },
        "PluginSettingTypeEnum": {},
        "PluginTask": {
            "description": [
                277
            ],
            "name": [
                277
            ],
            "plugin": [
                176
            ],
            "__typename": [
                277
            ]
        },
        "PluginValueInput": {
            "a": [
                185
            ],
            "b": [
                11
            ],
            "f": [
                77
            ],
            "i": [
                139
            ],
            "o": [
                177
            ],
            "str": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "PreviewPreset": {},
        "Query": {
            "allGalleries": [
                81
            ],
            "allImages": [
                125
            ],
            "allMovies": [
                155
            ],
            "allPerformers": [
                169
            ],
            "allSceneMarkers": [
                208
            ],
            "allScenes": [
                200
            ],
            "allStudios": [
                279
            ],
            "allTags": [
                287
            ],
            "availablePackages": [
                164,
                {
                    "source": [
                        277,
                        "String!"
                    ],
                    "type": [
                        168,
                        "PackageType!"
                    ]
                }
            ],
            "configuration": [
                41
            ],
            "directory": [
                51,
                {
                    "locale": [
                        277
                    ],
                    "path": [
                        277
                    ]
                }
            ],
            "dlnaStatus": [
                48
            ],
            "findDefaultFilter": [
                195,
                {
                    "mode": [
                        60,
                        "FilterMode!"
                    ]
                }
            ],
            "findDuplicateScenes": [
                200,
                {
                    "distance": [
                        139
                    ],
                    "duration_diff": [
                        77
                    ],
                    "scene_filter": [
                        204
                    ]
                }
            ],
            "findFile": [
                7,
                {
                    "id": [
                        115
                    ],
                    "path": [
                        277
                    ]
                }
            ],
            "findFiles": [
                61,
                {
                    "file_filter": [
                        58
                    ],
                    "filter": [
                        62
                    ],
                    "ids": [
                        115,
                        "[ID!]"
                    ]
                }
            ],
            "findFolder": [
                79,
                {
                    "id": [
                        115
                    ],
                    "path": [
                        277
                    ]
                }
            ],
            "findFolders": [
                63,
                {
                    "filter": [
                        62
                    ],
                    "folder_filter": [
                        80
                    ],
                    "ids": [
                        115,
                        "[ID!]"
                    ]
                }
            ],
            "findGalleries": [
                64,
                {
                    "filter": [
                        62
                    ],
                    "gallery_filter": [
                        89
                    ],
                    "ids": [
                        115,
                        "[ID!]"
                    ]
                }
            ],
            "findGallery": [
                81,
                {
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "findGroup": [
                102,
                {
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "findGroups": [
                66,
                {
                    "filter": [
                        62
                    ],
                    "group_filter": [
                        107
                    ],
                    "ids": [
                        115,
                        "[ID!]"
                    ]
                }
            ],
            "findImage": [
                125,
                {
                    "checksum": [
                        277
                    ],
                    "id": [
                        115
                    ]
                }
            ],
            "findImages": [
                67,
                {
                    "filter": [
                        62
                    ],
                    "ids": [
                        115,
                        "[ID!]"
                    ],
                    "image_filter": [
                        130
                    ],
                    "image_ids": [
                        139,
                        "[Int!]"
                    ]
                }
            ],
            "findJob": [
                142,
                {
                    "input": [
                        68,
                        "FindJobInput!"
                    ]
                }
            ],
            "findMovie": [
                155,
                {
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "findMovies": [
                69,
                {
                    "filter": [
                        62
                    ],
                    "ids": [
                        115,
                        "[ID!]"
                    ],
                    "movie_filter": [
                        158
                    ]
                }
            ],
            "findPerformer": [
                169,
                {
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "findPerformers": [
                70,
                {
                    "filter": [
                        62
                    ],
                    "ids": [
                        115,
                        "[ID!]"
                    ],
                    "performer_filter": [
                        172
                    ],
                    "performer_ids": [
                        139,
                        "[Int!]"
                    ]
                }
            ],
            "findSavedFilter": [
                195,
                {
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "findSavedFilters": [
                195,
                {
                    "mode": [
                        60
                    ]
                }
            ],
            "findScene": [
                200,
                {
                    "checksum": [
                        277
                    ],
                    "id": [
                        115
                    ]
                }
            ],
            "findSceneByHash": [
                200,
                {
                    "input": [
                        207,
                        "SceneHashInput!"
                    ]
                }
            ],
            "findSceneMarkers": [
                71,
                {
                    "filter": [
                        62
                    ],
                    "ids": [
                        115,
                        "[ID!]"
                    ],
                    "scene_marker_filter": [
                        210
                    ]
                }
            ],
            "findScenes": [
                72,
                {
                    "filter": [
                        62
                    ],
                    "ids": [
                        115,
                        "[ID!]"
                    ],
                    "scene_filter": [
                        204
                    ],
                    "scene_ids": [
                        139,
                        "[Int!]"
                    ]
                }
            ],
            "findScenesByPathRegex": [
                72,
                {
                    "filter": [
                        62
                    ]
                }
            ],
            "findStudio": [
                279,
                {
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "findStudios": [
                73,
                {
                    "filter": [
                        62
                    ],
                    "ids": [
                        115,
                        "[ID!]"
                    ],
                    "studio_filter": [
                        282
                    ]
                }
            ],
            "findTag": [
                287,
                {
                    "id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "findTags": [
                74,
                {
                    "filter": [
                        62
                    ],
                    "ids": [
                        115,
                        "[ID!]"
                    ],
                    "tag_filter": [
                        290
                    ]
                }
            ],
            "installedPackages": [
                164,
                {
                    "type": [
                        168,
                        "PackageType!"
                    ]
                }
            ],
            "jobQueue": [
                142
            ],
            "latestversion": [
                146
            ],
            "listScrapers": [
                251,
                {
                    "types": [
                        224,
                        "[ScrapeContentType!]!"
                    ]
                }
            ],
            "logs": [
                147
            ],
            "markerStrings": [
                150,
                {
                    "q": [
                        277
                    ],
                    "sort": [
                        277
                    ]
                }
            ],
            "markerWall": [
                208,
                {
                    "q": [
                        277
                    ]
                }
            ],
            "parseSceneFilenames": [
                219,
                {
                    "config": [
                        217,
                        "SceneParserInput!"
                    ],
                    "filter": [
                        62
                    ]
                }
            ],
            "pluginTasks": [
                184
            ],
            "plugins": [
                176
            ],
            "sceneMarkerTags": [
                211,
                {
                    "scene_id": [
                        115,
                        "ID!"
                    ]
                }
            ],
            "sceneStreams": [
                221,
                {
                    "id": [
                        115
                    ]
                }
            ],
            "sceneWall": [
                200,
                {
                    "q": [
                        277
                    ]
                }
            ],
            "scrapeGalleryURL": [
                237,
                {
                    "url": [
                        277,
                        "String!"
                    ]
                }
            ],
            "scrapeGroupURL": [
                239,
                {
                    "url": [
                        277,
                        "String!"
                    ]
                }
            ],
            "scrapeImageURL": [
                241,
                {
                    "url": [
                        277,
                        "String!"
                    ]
                }
            ],
            "scrapeMovieURL": [
                243,
                {
                    "url": [
                        277,
                        "String!"
                    ]
                }
            ],
            "scrapeMultiPerformers": [
                245,
                {
                    "input": [
                        225,
                        "ScrapeMultiPerformersInput!"
                    ],
                    "source": [
                        253,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapeMultiScenes": [
                247,
                {
                    "input": [
                        226,
                        "ScrapeMultiScenesInput!"
                    ],
                    "source": [
                        253,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapePerformerURL": [
                245,
                {
                    "url": [
                        277,
                        "String!"
                    ]
                }
            ],
            "scrapeSceneURL": [
                247,
                {
                    "url": [
                        277,
                        "String!"
                    ]
                }
            ],
            "scrapeSingleGallery": [
                237,
                {
                    "input": [
                        227,
                        "ScrapeSingleGalleryInput!"
                    ],
                    "source": [
                        253,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapeSingleGroup": [
                239,
                {
                    "input": [
                        228,
                        "ScrapeSingleGroupInput!"
                    ],
                    "source": [
                        253,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapeSingleImage": [
                241,
                {
                    "input": [
                        229,
                        "ScrapeSingleImageInput!"
                    ],
                    "source": [
                        253,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapeSingleMovie": [
                243,
                {
                    "input": [
                        230,
                        "ScrapeSingleMovieInput!"
                    ],
                    "source": [
                        253,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapeSinglePerformer": [
                245,
                {
                    "input": [
                        231,
                        "ScrapeSinglePerformerInput!"
                    ],
                    "source": [
                        253,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapeSingleScene": [
                247,
                {
                    "input": [
                        232,
                        "ScrapeSingleSceneInput!"
                    ],
                    "source": [
                        253,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapeSingleStudio": [
                249,
                {
                    "input": [
                        233,
                        "ScrapeSingleStudioInput!"
                    ],
                    "source": [
                        253,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapeSingleTag": [
                250,
                {
                    "input": [
                        234,
                        "ScrapeSingleTagInput!"
                    ],
                    "source": [
                        253,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapeURL": [
                236,
                {
                    "ty": [
                        224,
                        "ScrapeContentType!"
                    ],
                    "url": [
                        277,
                        "String!"
                    ]
                }
            ],
            "stats": [
                275
            ],
            "systemStatus": [
                285
            ],
            "validateStashBoxCredentials": [
                268,
                {
                    "input": [
                        264,
                        "StashBoxInput!"
                    ]
                }
            ],
            "version": [
                297
            ],
            "__typename": [
                277
            ]
        },
        "RemoveTempDLNAIPInput": {
            "address": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ReorderSubGroupsInput": {
            "group_id": [
                115
            ],
            "insert_after": [
                11
            ],
            "insert_at_id": [
                115
            ],
            "sub_group_ids": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "ResolutionCriterionInput": {
            "modifier": [
                44
            ],
            "value": [
                191
            ],
            "__typename": [
                277
            ]
        },
        "ResolutionEnum": {},
        "SQLExecResult": {
            "last_insert_id": [
                140
            ],
            "rows_affected": [
                140
            ],
            "__typename": [
                277
            ]
        },
        "SQLQueryResult": {
            "columns": [
                277
            ],
            "rows": [
                2
            ],
            "__typename": [
                277
            ]
        },
        "SaveFilterInput": {
            "find_filter": [
                62
            ],
            "id": [
                115
            ],
            "mode": [
                60
            ],
            "name": [
                277
            ],
            "object_filter": [
                149
            ],
            "ui_options": [
                149
            ],
            "__typename": [
                277
            ]
        },
        "SavedFilter": {
            "filter": [
                277
            ],
            "find_filter": [
                196
            ],
            "id": [
                115
            ],
            "mode": [
                60
            ],
            "name": [
                277
            ],
            "object_filter": [
                149
            ],
            "ui_options": [
                149
            ],
            "__typename": [
                277
            ]
        },
        "SavedFindFilterType": {
            "direction": [
                258
            ],
            "page": [
                139
            ],
            "per_page": [
                139
            ],
            "q": [
                277
            ],
            "sort": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScanMetaDataFilterInput": {
            "minModTime": [
                294
            ],
            "__typename": [
                277
            ]
        },
        "ScanMetadataInput": {
            "filter": [
                197
            ],
            "paths": [
                277
            ],
            "rescan": [
                11
            ],
            "scanGenerateClipPreviews": [
                11
            ],
            "scanGenerateCovers": [
                11
            ],
            "scanGenerateImagePhashes": [
                11
            ],
            "scanGenerateImagePreviews": [
                11
            ],
            "scanGeneratePhashes": [
                11
            ],
            "scanGeneratePreviews": [
                11
            ],
            "scanGenerateSprites": [
                11
            ],
            "scanGenerateThumbnails": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "ScanMetadataOptions": {
            "rescan": [
                11
            ],
            "scanGenerateClipPreviews": [
                11
            ],
            "scanGenerateCovers": [
                11
            ],
            "scanGenerateImagePhashes": [
                11
            ],
            "scanGenerateImagePreviews": [
                11
            ],
            "scanGeneratePhashes": [
                11
            ],
            "scanGeneratePreviews": [
                11
            ],
            "scanGenerateSprites": [
                11
            ],
            "scanGenerateThumbnails": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "Scene": {
            "captions": [
                298
            ],
            "code": [
                277
            ],
            "created_at": [
                293
            ],
            "custom_fields": [
                149
            ],
            "date": [
                277
            ],
            "details": [
                277
            ],
            "director": [
                277
            ],
            "files": [
                299
            ],
            "galleries": [
                81
            ],
            "groups": [
                205
            ],
            "id": [
                115
            ],
            "interactive": [
                11
            ],
            "interactive_speed": [
                139
            ],
            "last_played_at": [
                293
            ],
            "movies": [
                214
            ],
            "o_counter": [
                139
            ],
            "o_history": [
                293
            ],
            "organized": [
                11
            ],
            "paths": [
                220
            ],
            "performers": [
                169
            ],
            "play_count": [
                139
            ],
            "play_duration": [
                77
            ],
            "play_history": [
                293
            ],
            "production_date": [
                277
            ],
            "rating100": [
                139
            ],
            "resume_time": [
                77
            ],
            "sceneStreams": [
                221
            ],
            "scene_markers": [
                208
            ],
            "stash_ids": [
                271
            ],
            "studio": [
                279
            ],
            "tags": [
                287
            ],
            "title": [
                277
            ],
            "updated_at": [
                293
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "SceneCreateInput": {
            "code": [
                277
            ],
            "cover_image": [
                277
            ],
            "custom_fields": [
                149
            ],
            "date": [
                277
            ],
            "details": [
                277
            ],
            "director": [
                277
            ],
            "file_ids": [
                115
            ],
            "gallery_ids": [
                115
            ],
            "groups": [
                206
            ],
            "movies": [
                216
            ],
            "organized": [
                11
            ],
            "performer_ids": [
                115
            ],
            "production_date": [
                277
            ],
            "rating100": [
                139
            ],
            "stash_ids": [
                273
            ],
            "studio_id": [
                115
            ],
            "tag_ids": [
                115
            ],
            "title": [
                277
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "SceneDestroyInput": {
            "delete_file": [
                11
            ],
            "delete_generated": [
                11
            ],
            "destroy_file_entry": [
                11
            ],
            "id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "SceneFileType": {
            "audio_codec": [
                277
            ],
            "bitrate": [
                139
            ],
            "duration": [
                77
            ],
            "framerate": [
                77
            ],
            "height": [
                139
            ],
            "size": [
                277
            ],
            "video_codec": [
                277
            ],
            "width": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "SceneFilterType": {
            "AND": [
                204
            ],
            "NOT": [
                204
            ],
            "OR": [
                204
            ],
            "audio_codec": [
                278
            ],
            "bitrate": [
                141
            ],
            "captions": [
                278
            ],
            "checksum": [
                278
            ],
            "code": [
                278
            ],
            "created_at": [
                295
            ],
            "custom_fields": [
                45
            ],
            "date": [
                49
            ],
            "details": [
                278
            ],
            "director": [
                278
            ],
            "duplicated": [
                53
            ],
            "duration": [
                141
            ],
            "file_count": [
                141
            ],
            "files_filter": [
                58
            ],
            "framerate": [
                141
            ],
            "galleries": [
                160
            ],
            "galleries_filter": [
                89
            ],
            "groups": [
                113
            ],
            "groups_filter": [
                107
            ],
            "has_markers": [
                277
            ],
            "id": [
                141
            ],
            "interactive": [
                11
            ],
            "interactive_speed": [
                141
            ],
            "is_missing": [
                277
            ],
            "last_played_at": [
                295
            ],
            "markers_filter": [
                210
            ],
            "movies": [
                160
            ],
            "movies_filter": [
                158
            ],
            "o_counter": [
                141
            ],
            "organized": [
                11
            ],
            "orientation": [
                162
            ],
            "oshash": [
                278
            ],
            "path": [
                278
            ],
            "performer_age": [
                141
            ],
            "performer_count": [
                141
            ],
            "performer_favorite": [
                11
            ],
            "performer_tags": [
                113
            ],
            "performers": [
                160
            ],
            "performers_filter": [
                172
            ],
            "phash": [
                278
            ],
            "phash_distance": [
                175
            ],
            "play_count": [
                141
            ],
            "play_duration": [
                141
            ],
            "production_date": [
                49
            ],
            "rating100": [
                141
            ],
            "resolution": [
                190
            ],
            "resume_time": [
                141
            ],
            "stash_id_count": [
                141
            ],
            "stash_id_endpoint": [
                272
            ],
            "stash_ids_endpoint": [
                274
            ],
            "studios": [
                113
            ],
            "studios_filter": [
                282
            ],
            "tag_count": [
                141
            ],
            "tags": [
                113
            ],
            "tags_filter": [
                290
            ],
            "title": [
                278
            ],
            "updated_at": [
                295
            ],
            "url": [
                278
            ],
            "video_codec": [
                278
            ],
            "__typename": [
                277
            ]
        },
        "SceneGroup": {
            "group": [
                102
            ],
            "scene_index": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "SceneGroupInput": {
            "group_id": [
                115
            ],
            "scene_index": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "SceneHashInput": {
            "checksum": [
                277
            ],
            "oshash": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "SceneMarker": {
            "created_at": [
                293
            ],
            "end_seconds": [
                77
            ],
            "id": [
                115
            ],
            "preview": [
                277
            ],
            "primary_tag": [
                287
            ],
            "scene": [
                200
            ],
            "screenshot": [
                277
            ],
            "seconds": [
                77
            ],
            "stream": [
                277
            ],
            "tags": [
                287
            ],
            "title": [
                277
            ],
            "updated_at": [
                293
            ],
            "__typename": [
                277
            ]
        },
        "SceneMarkerCreateInput": {
            "end_seconds": [
                77
            ],
            "primary_tag_id": [
                115
            ],
            "scene_id": [
                115
            ],
            "seconds": [
                77
            ],
            "tag_ids": [
                115
            ],
            "title": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "SceneMarkerFilterType": {
            "created_at": [
                295
            ],
            "duration": [
                78
            ],
            "performers": [
                160
            ],
            "scene_created_at": [
                295
            ],
            "scene_date": [
                49
            ],
            "scene_filter": [
                204
            ],
            "scene_tags": [
                113
            ],
            "scene_updated_at": [
                295
            ],
            "scenes": [
                160
            ],
            "tags": [
                113
            ],
            "updated_at": [
                295
            ],
            "__typename": [
                277
            ]
        },
        "SceneMarkerTag": {
            "scene_markers": [
                208
            ],
            "tag": [
                287
            ],
            "__typename": [
                277
            ]
        },
        "SceneMarkerUpdateInput": {
            "end_seconds": [
                77
            ],
            "id": [
                115
            ],
            "primary_tag_id": [
                115
            ],
            "scene_id": [
                115
            ],
            "seconds": [
                77
            ],
            "tag_ids": [
                115
            ],
            "title": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "SceneMergeInput": {
            "destination": [
                115
            ],
            "o_history": [
                11
            ],
            "play_history": [
                11
            ],
            "source": [
                115
            ],
            "values": [
                222
            ],
            "__typename": [
                277
            ]
        },
        "SceneMovie": {
            "movie": [
                155
            ],
            "scene_index": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "SceneMovieID": {
            "movie_id": [
                115
            ],
            "scene_index": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "SceneMovieInput": {
            "movie_id": [
                115
            ],
            "scene_index": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "SceneParserInput": {
            "capitalizeTitle": [
                11
            ],
            "ignoreOrganized": [
                11
            ],
            "ignoreWords": [
                277
            ],
            "whitespaceCharacters": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "SceneParserResult": {
            "code": [
                277
            ],
            "date": [
                277
            ],
            "details": [
                277
            ],
            "director": [
                277
            ],
            "gallery_ids": [
                115
            ],
            "movies": [
                215
            ],
            "performer_ids": [
                115
            ],
            "rating": [
                139
            ],
            "rating100": [
                139
            ],
            "scene": [
                200
            ],
            "studio_id": [
                115
            ],
            "tag_ids": [
                115
            ],
            "title": [
                277
            ],
            "url": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "SceneParserResultType": {
            "count": [
                139
            ],
            "results": [
                218
            ],
            "__typename": [
                277
            ]
        },
        "ScenePathsType": {
            "caption": [
                277
            ],
            "funscript": [
                277
            ],
            "interactive_heatmap": [
                277
            ],
            "preview": [
                277
            ],
            "screenshot": [
                277
            ],
            "sprite": [
                277
            ],
            "stream": [
                277
            ],
            "vtt": [
                277
            ],
            "webp": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "SceneStreamEndpoint": {
            "label": [
                277
            ],
            "mime_type": [
                277
            ],
            "url": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "SceneUpdateInput": {
            "clientMutationId": [
                277
            ],
            "code": [
                277
            ],
            "cover_image": [
                277
            ],
            "custom_fields": [
                46
            ],
            "date": [
                277
            ],
            "details": [
                277
            ],
            "director": [
                277
            ],
            "gallery_ids": [
                115
            ],
            "groups": [
                206
            ],
            "id": [
                115
            ],
            "movies": [
                216
            ],
            "o_counter": [
                139
            ],
            "organized": [
                11
            ],
            "performer_ids": [
                115
            ],
            "play_count": [
                139
            ],
            "play_duration": [
                77
            ],
            "primary_file_id": [
                115
            ],
            "production_date": [
                277
            ],
            "rating100": [
                139
            ],
            "resume_time": [
                77
            ],
            "stash_ids": [
                273
            ],
            "studio_id": [
                115
            ],
            "tag_ids": [
                115
            ],
            "title": [
                277
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScenesDestroyInput": {
            "delete_file": [
                11
            ],
            "delete_generated": [
                11
            ],
            "destroy_file_entry": [
                11
            ],
            "ids": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "ScrapeContentType": {},
        "ScrapeMultiPerformersInput": {
            "performer_ids": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "ScrapeMultiScenesInput": {
            "scene_ids": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "ScrapeSingleGalleryInput": {
            "gallery_id": [
                115
            ],
            "gallery_input": [
                238
            ],
            "query": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapeSingleGroupInput": {
            "group_id": [
                115
            ],
            "group_input": [
                240
            ],
            "query": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapeSingleImageInput": {
            "image_id": [
                115
            ],
            "image_input": [
                242
            ],
            "query": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapeSingleMovieInput": {
            "movie_id": [
                115
            ],
            "movie_input": [
                244
            ],
            "query": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapeSinglePerformerInput": {
            "performer_id": [
                115
            ],
            "performer_input": [
                246
            ],
            "query": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapeSingleSceneInput": {
            "query": [
                277
            ],
            "scene_id": [
                115
            ],
            "scene_input": [
                248
            ],
            "__typename": [
                277
            ]
        },
        "ScrapeSingleStudioInput": {
            "query": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapeSingleTagInput": {
            "query": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapeType": {},
        "ScrapedContent": {
            "on_ScrapedGallery": [
                237
            ],
            "on_ScrapedGroup": [
                239
            ],
            "on_ScrapedImage": [
                241
            ],
            "on_ScrapedMovie": [
                243
            ],
            "on_ScrapedPerformer": [
                245
            ],
            "on_ScrapedScene": [
                247
            ],
            "on_ScrapedStudio": [
                249
            ],
            "on_ScrapedTag": [
                250
            ],
            "__typename": [
                277
            ]
        },
        "ScrapedGallery": {
            "code": [
                277
            ],
            "date": [
                277
            ],
            "details": [
                277
            ],
            "performers": [
                245
            ],
            "photographer": [
                277
            ],
            "studio": [
                249
            ],
            "tags": [
                250
            ],
            "title": [
                277
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapedGalleryInput": {
            "code": [
                277
            ],
            "date": [
                277
            ],
            "details": [
                277
            ],
            "photographer": [
                277
            ],
            "title": [
                277
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapedGroup": {
            "aliases": [
                277
            ],
            "back_image": [
                277
            ],
            "date": [
                277
            ],
            "director": [
                277
            ],
            "duration": [
                277
            ],
            "front_image": [
                277
            ],
            "name": [
                277
            ],
            "rating": [
                277
            ],
            "stored_id": [
                115
            ],
            "studio": [
                249
            ],
            "synopsis": [
                277
            ],
            "tags": [
                250
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapedGroupInput": {
            "aliases": [
                277
            ],
            "date": [
                277
            ],
            "director": [
                277
            ],
            "duration": [
                277
            ],
            "name": [
                277
            ],
            "rating": [
                277
            ],
            "synopsis": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapedImage": {
            "code": [
                277
            ],
            "date": [
                277
            ],
            "details": [
                277
            ],
            "performers": [
                245
            ],
            "photographer": [
                277
            ],
            "studio": [
                249
            ],
            "tags": [
                250
            ],
            "title": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapedImageInput": {
            "code": [
                277
            ],
            "date": [
                277
            ],
            "details": [
                277
            ],
            "title": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapedMovie": {
            "aliases": [
                277
            ],
            "back_image": [
                277
            ],
            "date": [
                277
            ],
            "director": [
                277
            ],
            "duration": [
                277
            ],
            "front_image": [
                277
            ],
            "name": [
                277
            ],
            "rating": [
                277
            ],
            "stored_id": [
                115
            ],
            "studio": [
                249
            ],
            "synopsis": [
                277
            ],
            "tags": [
                250
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapedMovieInput": {
            "aliases": [
                277
            ],
            "date": [
                277
            ],
            "director": [
                277
            ],
            "duration": [
                277
            ],
            "name": [
                277
            ],
            "rating": [
                277
            ],
            "synopsis": [
                277
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapedPerformer": {
            "aliases": [
                277
            ],
            "birthdate": [
                277
            ],
            "career_end": [
                277
            ],
            "career_length": [
                277
            ],
            "career_start": [
                277
            ],
            "circumcised": [
                277
            ],
            "country": [
                277
            ],
            "death_date": [
                277
            ],
            "details": [
                277
            ],
            "disambiguation": [
                277
            ],
            "ethnicity": [
                277
            ],
            "eye_color": [
                277
            ],
            "fake_tits": [
                277
            ],
            "gender": [
                277
            ],
            "hair_color": [
                277
            ],
            "height": [
                277
            ],
            "image": [
                277
            ],
            "images": [
                277
            ],
            "instagram": [
                277
            ],
            "measurements": [
                277
            ],
            "name": [
                277
            ],
            "penis_length": [
                277
            ],
            "piercings": [
                277
            ],
            "remote_site_id": [
                277
            ],
            "stored_id": [
                115
            ],
            "tags": [
                250
            ],
            "tattoos": [
                277
            ],
            "twitter": [
                277
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "weight": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapedPerformerInput": {
            "aliases": [
                277
            ],
            "birthdate": [
                277
            ],
            "career_end": [
                277
            ],
            "career_length": [
                277
            ],
            "career_start": [
                277
            ],
            "circumcised": [
                277
            ],
            "country": [
                277
            ],
            "death_date": [
                277
            ],
            "details": [
                277
            ],
            "disambiguation": [
                277
            ],
            "ethnicity": [
                277
            ],
            "eye_color": [
                277
            ],
            "fake_tits": [
                277
            ],
            "gender": [
                277
            ],
            "hair_color": [
                277
            ],
            "height": [
                277
            ],
            "instagram": [
                277
            ],
            "measurements": [
                277
            ],
            "name": [
                277
            ],
            "penis_length": [
                277
            ],
            "piercings": [
                277
            ],
            "remote_site_id": [
                277
            ],
            "stored_id": [
                115
            ],
            "tattoos": [
                277
            ],
            "twitter": [
                277
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "weight": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapedScene": {
            "code": [
                277
            ],
            "date": [
                277
            ],
            "details": [
                277
            ],
            "director": [
                277
            ],
            "duration": [
                139
            ],
            "file": [
                203
            ],
            "fingerprints": [
                262
            ],
            "groups": [
                239
            ],
            "image": [
                277
            ],
            "movies": [
                243
            ],
            "performers": [
                245
            ],
            "production_date": [
                277
            ],
            "remote_site_id": [
                277
            ],
            "studio": [
                249
            ],
            "tags": [
                250
            ],
            "title": [
                277
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapedSceneInput": {
            "code": [
                277
            ],
            "date": [
                277
            ],
            "details": [
                277
            ],
            "director": [
                277
            ],
            "production_date": [
                277
            ],
            "remote_site_id": [
                277
            ],
            "title": [
                277
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapedStudio": {
            "aliases": [
                277
            ],
            "details": [
                277
            ],
            "image": [
                277
            ],
            "name": [
                277
            ],
            "parent": [
                249
            ],
            "remote_site_id": [
                277
            ],
            "stored_id": [
                115
            ],
            "tags": [
                250
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "ScrapedTag": {
            "alias_list": [
                277
            ],
            "description": [
                277
            ],
            "name": [
                277
            ],
            "parent": [
                250
            ],
            "remote_site_id": [
                277
            ],
            "stored_id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "Scraper": {
            "gallery": [
                254
            ],
            "group": [
                254
            ],
            "id": [
                115
            ],
            "image": [
                254
            ],
            "movie": [
                254
            ],
            "name": [
                277
            ],
            "performer": [
                254
            ],
            "scene": [
                254
            ],
            "__typename": [
                277
            ]
        },
        "ScraperSource": {
            "scraper_id": [
                115
            ],
            "stash_box_endpoint": [
                277
            ],
            "stash_box_index": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "ScraperSourceInput": {
            "scraper_id": [
                115
            ],
            "stash_box_endpoint": [
                277
            ],
            "stash_box_index": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "ScraperSpec": {
            "supported_scrapes": [
                235
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "SetDefaultFilterInput": {
            "find_filter": [
                62
            ],
            "mode": [
                60
            ],
            "object_filter": [
                149
            ],
            "ui_options": [
                149
            ],
            "__typename": [
                277
            ]
        },
        "SetFingerprintsInput": {
            "type": [
                277
            ],
            "value": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "SetupInput": {
            "blobsLocation": [
                277
            ],
            "cacheLocation": [
                277
            ],
            "configLocation": [
                277
            ],
            "databaseFile": [
                277
            ],
            "generatedLocation": [
                277
            ],
            "initialPassword": [
                277
            ],
            "initialUsername": [
                277
            ],
            "sfwContentMode": [
                11
            ],
            "stashes": [
                270
            ],
            "storeBlobsInDatabase": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "SortDirectionEnum": {},
        "StashBox": {
            "api_key": [
                277
            ],
            "endpoint": [
                277
            ],
            "max_requests_per_minute": [
                139
            ],
            "name": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "StashBoxBatchTagInput": {
            "createParent": [
                11
            ],
            "endpoint": [
                139
            ],
            "exclude_fields": [
                277
            ],
            "ids": [
                115
            ],
            "merge_fields": [
                277
            ],
            "names": [
                277
            ],
            "performer_ids": [
                115
            ],
            "performer_names": [
                277
            ],
            "refresh": [
                11
            ],
            "stash_box_endpoint": [
                277
            ],
            "stash_ids": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "StashBoxDraftSubmissionInput": {
            "id": [
                277
            ],
            "stash_box_endpoint": [
                277
            ],
            "stash_box_index": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "StashBoxFingerprint": {
            "algorithm": [
                277
            ],
            "duration": [
                139
            ],
            "hash": [
                277
            ],
            "submissions": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "StashBoxFingerprintSubmissionInput": {
            "scene_ids": [
                277
            ],
            "stash_box_endpoint": [
                277
            ],
            "stash_box_index": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "StashBoxInput": {
            "api_key": [
                277
            ],
            "endpoint": [
                277
            ],
            "max_requests_per_minute": [
                139
            ],
            "name": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "StashBoxPerformerQueryInput": {
            "performer_ids": [
                115
            ],
            "q": [
                277
            ],
            "stash_box_endpoint": [
                277
            ],
            "stash_box_index": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "StashBoxPerformerQueryResult": {
            "query": [
                277
            ],
            "results": [
                245
            ],
            "__typename": [
                277
            ]
        },
        "StashBoxSceneQueryInput": {
            "q": [
                277
            ],
            "scene_ids": [
                115
            ],
            "stash_box_endpoint": [
                277
            ],
            "stash_box_index": [
                139
            ],
            "__typename": [
                277
            ]
        },
        "StashBoxValidationResult": {
            "status": [
                277
            ],
            "valid": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "StashConfig": {
            "excludeImage": [
                11
            ],
            "excludeVideo": [
                11
            ],
            "path": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "StashConfigInput": {
            "excludeImage": [
                11
            ],
            "excludeVideo": [
                11
            ],
            "path": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "StashID": {
            "endpoint": [
                277
            ],
            "stash_id": [
                277
            ],
            "updated_at": [
                293
            ],
            "__typename": [
                277
            ]
        },
        "StashIDCriterionInput": {
            "endpoint": [
                277
            ],
            "modifier": [
                44
            ],
            "stash_id": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "StashIDInput": {
            "endpoint": [
                277
            ],
            "stash_id": [
                277
            ],
            "updated_at": [
                293
            ],
            "__typename": [
                277
            ]
        },
        "StashIDsCriterionInput": {
            "endpoint": [
                277
            ],
            "modifier": [
                44
            ],
            "stash_ids": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "StatsResultType": {
            "gallery_count": [
                139
            ],
            "group_count": [
                139
            ],
            "image_count": [
                139
            ],
            "images_size": [
                77
            ],
            "movie_count": [
                139
            ],
            "performer_count": [
                139
            ],
            "scene_count": [
                139
            ],
            "scenes_duration": [
                77
            ],
            "scenes_played": [
                139
            ],
            "scenes_size": [
                77
            ],
            "studio_count": [
                139
            ],
            "tag_count": [
                139
            ],
            "total_o_count": [
                139
            ],
            "total_play_count": [
                139
            ],
            "total_play_duration": [
                77
            ],
            "__typename": [
                277
            ]
        },
        "StreamingResolutionEnum": {},
        "String": {},
        "StringCriterionInput": {
            "modifier": [
                44
            ],
            "value": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "Studio": {
            "aliases": [
                277
            ],
            "child_studios": [
                279
            ],
            "created_at": [
                293
            ],
            "custom_fields": [
                149
            ],
            "details": [
                277
            ],
            "favorite": [
                11
            ],
            "gallery_count": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "group_count": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "groups": [
                102
            ],
            "id": [
                115
            ],
            "ignore_auto_tag": [
                11
            ],
            "image_count": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "image_path": [
                277
            ],
            "movie_count": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "movies": [
                155
            ],
            "name": [
                277
            ],
            "o_counter": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "organized": [
                11
            ],
            "parent_studio": [
                279
            ],
            "performer_count": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "rating100": [
                139
            ],
            "scene_count": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "scene_marker_count": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "stash_ids": [
                271
            ],
            "tags": [
                287
            ],
            "updated_at": [
                293
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "StudioCreateInput": {
            "aliases": [
                277
            ],
            "child_ids": [
                115
            ],
            "custom_fields": [
                149
            ],
            "details": [
                277
            ],
            "favorite": [
                11
            ],
            "ignore_auto_tag": [
                11
            ],
            "image": [
                277
            ],
            "name": [
                277
            ],
            "organized": [
                11
            ],
            "parent_id": [
                115
            ],
            "rating100": [
                139
            ],
            "stash_ids": [
                273
            ],
            "tag_ids": [
                115
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "StudioDestroyInput": {
            "id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "StudioFilterType": {
            "AND": [
                282
            ],
            "NOT": [
                282
            ],
            "OR": [
                282
            ],
            "aliases": [
                278
            ],
            "child_count": [
                141
            ],
            "created_at": [
                295
            ],
            "custom_fields": [
                45
            ],
            "details": [
                278
            ],
            "favorite": [
                11
            ],
            "galleries_filter": [
                89
            ],
            "gallery_count": [
                141
            ],
            "group_count": [
                141
            ],
            "groups_filter": [
                107
            ],
            "ignore_auto_tag": [
                11
            ],
            "image_count": [
                141
            ],
            "images_filter": [
                130
            ],
            "is_missing": [
                277
            ],
            "name": [
                278
            ],
            "organized": [
                11
            ],
            "parents": [
                160
            ],
            "rating100": [
                141
            ],
            "scene_count": [
                141
            ],
            "scenes_filter": [
                204
            ],
            "stash_id_endpoint": [
                272
            ],
            "stash_ids_endpoint": [
                274
            ],
            "tag_count": [
                141
            ],
            "tags": [
                113
            ],
            "updated_at": [
                295
            ],
            "url": [
                278
            ],
            "__typename": [
                277
            ]
        },
        "StudioUpdateInput": {
            "aliases": [
                277
            ],
            "child_ids": [
                115
            ],
            "custom_fields": [
                46
            ],
            "details": [
                277
            ],
            "favorite": [
                11
            ],
            "id": [
                115
            ],
            "ignore_auto_tag": [
                11
            ],
            "image": [
                277
            ],
            "name": [
                277
            ],
            "organized": [
                11
            ],
            "parent_id": [
                115
            ],
            "rating100": [
                139
            ],
            "stash_ids": [
                273
            ],
            "tag_ids": [
                115
            ],
            "url": [
                277
            ],
            "urls": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "Subscription": {
            "jobsSubscribe": [
                144
            ],
            "loggingSubscribe": [
                147
            ],
            "scanCompleteSubscribe": [
                11
            ],
            "__typename": [
                277
            ]
        },
        "SystemStatus": {
            "appSchema": [
                139
            ],
            "configPath": [
                277
            ],
            "databasePath": [
                277
            ],
            "databaseSchema": [
                139
            ],
            "ffmpegPath": [
                277
            ],
            "ffprobePath": [
                277
            ],
            "homeDir": [
                277
            ],
            "os": [
                277
            ],
            "status": [
                286
            ],
            "workingDir": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "SystemStatusEnum": {},
        "Tag": {
            "aliases": [
                277
            ],
            "child_count": [
                139
            ],
            "children": [
                287
            ],
            "created_at": [
                293
            ],
            "custom_fields": [
                149
            ],
            "description": [
                277
            ],
            "favorite": [
                11
            ],
            "gallery_count": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "group_count": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "id": [
                115
            ],
            "ignore_auto_tag": [
                11
            ],
            "image_count": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "image_path": [
                277
            ],
            "movie_count": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "name": [
                277
            ],
            "parent_count": [
                139
            ],
            "parents": [
                287
            ],
            "performer_count": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "scene_count": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "scene_marker_count": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "sort_name": [
                277
            ],
            "stash_ids": [
                271
            ],
            "studio_count": [
                139,
                {
                    "depth": [
                        139
                    ]
                }
            ],
            "updated_at": [
                293
            ],
            "__typename": [
                277
            ]
        },
        "TagCreateInput": {
            "aliases": [
                277
            ],
            "child_ids": [
                115
            ],
            "custom_fields": [
                149
            ],
            "description": [
                277
            ],
            "favorite": [
                11
            ],
            "ignore_auto_tag": [
                11
            ],
            "image": [
                277
            ],
            "name": [
                277
            ],
            "parent_ids": [
                115
            ],
            "sort_name": [
                277
            ],
            "stash_ids": [
                273
            ],
            "__typename": [
                277
            ]
        },
        "TagDestroyInput": {
            "id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "TagFilterType": {
            "AND": [
                290
            ],
            "NOT": [
                290
            ],
            "OR": [
                290
            ],
            "aliases": [
                278
            ],
            "child_count": [
                141
            ],
            "children": [
                113
            ],
            "created_at": [
                295
            ],
            "custom_fields": [
                45
            ],
            "description": [
                278
            ],
            "favorite": [
                11
            ],
            "galleries_filter": [
                89
            ],
            "gallery_count": [
                112
            ],
            "group_count": [
                112
            ],
            "groups_filter": [
                107
            ],
            "ignore_auto_tag": [
                11
            ],
            "image_count": [
                112
            ],
            "images_filter": [
                130
            ],
            "is_missing": [
                277
            ],
            "marker_count": [
                112
            ],
            "markers_filter": [
                210
            ],
            "movie_count": [
                112
            ],
            "name": [
                278
            ],
            "parent_count": [
                141
            ],
            "parents": [
                113
            ],
            "performer_count": [
                112
            ],
            "performers_filter": [
                172
            ],
            "scene_count": [
                112
            ],
            "scenes_filter": [
                204
            ],
            "sort_name": [
                278
            ],
            "stash_id_endpoint": [
                272
            ],
            "stash_ids_endpoint": [
                274
            ],
            "studio_count": [
                112
            ],
            "studios_filter": [
                282
            ],
            "updated_at": [
                295
            ],
            "__typename": [
                277
            ]
        },
        "TagUpdateInput": {
            "aliases": [
                277
            ],
            "child_ids": [
                115
            ],
            "custom_fields": [
                46
            ],
            "description": [
                277
            ],
            "favorite": [
                11
            ],
            "id": [
                115
            ],
            "ignore_auto_tag": [
                11
            ],
            "image": [
                277
            ],
            "name": [
                277
            ],
            "parent_ids": [
                115
            ],
            "sort_name": [
                277
            ],
            "stash_ids": [
                273
            ],
            "__typename": [
                277
            ]
        },
        "TagsMergeInput": {
            "destination": [
                115
            ],
            "source": [
                115
            ],
            "values": [
                291
            ],
            "__typename": [
                277
            ]
        },
        "Time": {},
        "Timestamp": {},
        "TimestampCriterionInput": {
            "modifier": [
                44
            ],
            "value": [
                277
            ],
            "value2": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "Upload": {},
        "Version": {
            "build_time": [
                277
            ],
            "hash": [
                277
            ],
            "version": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "VideoCaption": {
            "caption_type": [
                277
            ],
            "language_code": [
                277
            ],
            "__typename": [
                277
            ]
        },
        "VideoFile": {
            "audio_codec": [
                277
            ],
            "basename": [
                277
            ],
            "bit_rate": [
                139
            ],
            "created_at": [
                293
            ],
            "duration": [
                77
            ],
            "fingerprint": [
                277,
                {
                    "type": [
                        277,
                        "String!"
                    ]
                }
            ],
            "fingerprints": [
                75
            ],
            "format": [
                277
            ],
            "frame_rate": [
                77
            ],
            "height": [
                139
            ],
            "id": [
                115
            ],
            "mod_time": [
                293
            ],
            "parent_folder": [
                79
            ],
            "parent_folder_id": [
                115
            ],
            "path": [
                277
            ],
            "scenes": [
                200
            ],
            "size": [
                140
            ],
            "updated_at": [
                293
            ],
            "video_codec": [
                277
            ],
            "width": [
                139
            ],
            "zip_file": [
                8
            ],
            "zip_file_id": [
                115
            ],
            "__typename": [
                277
            ]
        },
        "VideoFileFilterInput": {
            "audio_codec": [
                278
            ],
            "bitrate": [
                141
            ],
            "captions": [
                278
            ],
            "duration": [
                141
            ],
            "format": [
                278
            ],
            "framerate": [
                141
            ],
            "interactive": [
                11
            ],
            "interactive_speed": [
                141
            ],
            "orientation": [
                162
            ],
            "resolution": [
                190
            ],
            "video_codec": [
                278
            ],
            "__typename": [
                277
            ]
        },
        "VisualFile": {
            "on_ImageFile": [
                127
            ],
            "on_VideoFile": [
                299
            ],
            "on_BaseFile": [
                7
            ],
            "__typename": [
                277
            ]
        }
    }
}