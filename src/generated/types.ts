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
        114,
        117,
        130,
        131,
        135,
        136,
        138,
        139,
        142,
        144,
        147,
        148,
        162,
        167,
        177,
        182,
        185,
        190,
        223,
        234,
        257,
        275,
        276,
        285,
        292,
        293,
        295
    ],
    "types": {
        "AddTempDLNAIPInput": {
            "address": [
                276
            ],
            "duration": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "AnonymiseDatabaseInput": {
            "download": [
                11
            ],
            "__typename": [
                276
            ]
        },
        "Any": {},
        "AssignSceneFileInput": {
            "file_id": [
                114
            ],
            "scene_id": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "AutoTagMetadataInput": {
            "paths": [
                276
            ],
            "performers": [
                276
            ],
            "studios": [
                276
            ],
            "tags": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "AutoTagMetadataOptions": {
            "performers": [
                276
            ],
            "studios": [
                276
            ],
            "tags": [
                276
            ],
            "__typename": [
                276
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
                276
            ]
        },
        "BaseFile": {
            "basename": [
                276
            ],
            "created_at": [
                292
            ],
            "fingerprint": [
                276,
                {
                    "type": [
                        276,
                        "String!"
                    ]
                }
            ],
            "fingerprints": [
                75
            ],
            "id": [
                114
            ],
            "mod_time": [
                292
            ],
            "parent_folder": [
                79
            ],
            "parent_folder_id": [
                114
            ],
            "path": [
                276
            ],
            "size": [
                139
            ],
            "updated_at": [
                292
            ],
            "zip_file": [
                8
            ],
            "zip_file_id": [
                114
            ],
            "on_BasicFile": [
                8
            ],
            "on_GalleryFile": [
                88
            ],
            "on_ImageFile": [
                126
            ],
            "on_VideoFile": [
                298
            ],
            "__typename": [
                276
            ]
        },
        "BasicFile": {
            "basename": [
                276
            ],
            "created_at": [
                292
            ],
            "fingerprint": [
                276,
                {
                    "type": [
                        276,
                        "String!"
                    ]
                }
            ],
            "fingerprints": [
                75
            ],
            "id": [
                114
            ],
            "mod_time": [
                292
            ],
            "parent_folder": [
                79
            ],
            "parent_folder_id": [
                114
            ],
            "path": [
                276
            ],
            "size": [
                139
            ],
            "updated_at": [
                292
            ],
            "zip_file": [
                8
            ],
            "zip_file_id": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "BlobsStorageType": {},
        "BoolMap": {},
        "Boolean": {},
        "BulkGalleryUpdateInput": {
            "clientMutationId": [
                276
            ],
            "code": [
                276
            ],
            "custom_fields": [
                46
            ],
            "date": [
                276
            ],
            "details": [
                276
            ],
            "ids": [
                114
            ],
            "organized": [
                11
            ],
            "performer_ids": [
                23
            ],
            "photographer": [
                276
            ],
            "rating100": [
                138
            ],
            "scene_ids": [
                23
            ],
            "studio_id": [
                114
            ],
            "tag_ids": [
                23
            ],
            "url": [
                276
            ],
            "urls": [
                24
            ],
            "__typename": [
                276
            ]
        },
        "BulkGroupUpdateInput": {
            "clientMutationId": [
                276
            ],
            "containing_groups": [
                21
            ],
            "custom_fields": [
                46
            ],
            "date": [
                276
            ],
            "director": [
                276
            ],
            "ids": [
                114
            ],
            "rating100": [
                138
            ],
            "studio_id": [
                114
            ],
            "sub_groups": [
                21
            ],
            "synopsis": [
                276
            ],
            "tag_ids": [
                23
            ],
            "urls": [
                24
            ],
            "__typename": [
                276
            ]
        },
        "BulkImageUpdateInput": {
            "clientMutationId": [
                276
            ],
            "code": [
                276
            ],
            "custom_fields": [
                46
            ],
            "date": [
                276
            ],
            "details": [
                276
            ],
            "gallery_ids": [
                23
            ],
            "ids": [
                114
            ],
            "organized": [
                11
            ],
            "performer_ids": [
                23
            ],
            "photographer": [
                276
            ],
            "rating100": [
                138
            ],
            "studio_id": [
                114
            ],
            "tag_ids": [
                23
            ],
            "title": [
                276
            ],
            "url": [
                276
            ],
            "urls": [
                24
            ],
            "__typename": [
                276
            ]
        },
        "BulkMovieUpdateInput": {
            "clientMutationId": [
                276
            ],
            "director": [
                276
            ],
            "ids": [
                114
            ],
            "rating100": [
                138
            ],
            "studio_id": [
                114
            ],
            "tag_ids": [
                23
            ],
            "urls": [
                24
            ],
            "__typename": [
                276
            ]
        },
        "BulkPerformerUpdateInput": {
            "alias_list": [
                24
            ],
            "birthdate": [
                276
            ],
            "career_end": [
                276
            ],
            "career_length": [
                276
            ],
            "career_start": [
                276
            ],
            "circumcised": [
                25
            ],
            "clientMutationId": [
                276
            ],
            "country": [
                276
            ],
            "custom_fields": [
                46
            ],
            "death_date": [
                276
            ],
            "details": [
                276
            ],
            "disambiguation": [
                276
            ],
            "ethnicity": [
                276
            ],
            "eye_color": [
                276
            ],
            "fake_tits": [
                276
            ],
            "favorite": [
                11
            ],
            "gender": [
                96
            ],
            "hair_color": [
                276
            ],
            "height_cm": [
                138
            ],
            "ids": [
                114
            ],
            "ignore_auto_tag": [
                11
            ],
            "instagram": [
                276
            ],
            "measurements": [
                276
            ],
            "penis_length": [
                77
            ],
            "piercings": [
                276
            ],
            "rating100": [
                138
            ],
            "tag_ids": [
                23
            ],
            "tattoos": [
                276
            ],
            "twitter": [
                276
            ],
            "url": [
                276
            ],
            "urls": [
                24
            ],
            "weight": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "BulkSceneMarkerUpdateInput": {
            "ids": [
                114
            ],
            "primary_tag_id": [
                114
            ],
            "tag_ids": [
                23
            ],
            "title": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "BulkSceneUpdateInput": {
            "clientMutationId": [
                276
            ],
            "code": [
                276
            ],
            "custom_fields": [
                46
            ],
            "date": [
                276
            ],
            "details": [
                276
            ],
            "director": [
                276
            ],
            "gallery_ids": [
                23
            ],
            "group_ids": [
                23
            ],
            "ids": [
                114
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
            "rating100": [
                138
            ],
            "studio_id": [
                114
            ],
            "tag_ids": [
                23
            ],
            "title": [
                276
            ],
            "url": [
                276
            ],
            "urls": [
                24
            ],
            "__typename": [
                276
            ]
        },
        "BulkStudioUpdateInput": {
            "details": [
                276
            ],
            "favorite": [
                11
            ],
            "ids": [
                114
            ],
            "ignore_auto_tag": [
                11
            ],
            "organized": [
                11
            ],
            "parent_id": [
                114
            ],
            "rating100": [
                138
            ],
            "tag_ids": [
                23
            ],
            "url": [
                276
            ],
            "urls": [
                24
            ],
            "__typename": [
                276
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
                276
            ],
            "favorite": [
                11
            ],
            "ids": [
                114
            ],
            "ignore_auto_tag": [
                11
            ],
            "parent_ids": [
                23
            ],
            "__typename": [
                276
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
                276
            ]
        },
        "BulkUpdateIdMode": {},
        "BulkUpdateIds": {
            "ids": [
                114
            ],
            "mode": [
                22
            ],
            "__typename": [
                276
            ]
        },
        "BulkUpdateStrings": {
            "mode": [
                22
            ],
            "values": [
                276
            ],
            "__typename": [
                276
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
                276
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
                276
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
                276
            ],
            "__typename": [
                276
            ]
        },
        "ConfigDLNAInput": {
            "enabled": [
                11
            ],
            "interfaces": [
                276
            ],
            "port": [
                138
            ],
            "serverName": [
                276
            ],
            "videoSortOrder": [
                276
            ],
            "whitelistedIPs": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ConfigDLNAResult": {
            "enabled": [
                11
            ],
            "interfaces": [
                276
            ],
            "port": [
                138
            ],
            "serverName": [
                276
            ],
            "videoSortOrder": [
                276
            ],
            "whitelistedIPs": [
                276
            ],
            "__typename": [
                276
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
                118
            ],
            "scan": [
                197
            ],
            "__typename": [
                276
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
                121
            ],
            "scan": [
                198
            ],
            "__typename": [
                276
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
                276
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
                276
            ]
        },
        "ConfigGeneralInput": {
            "backupDirectoryPath": [
                276
            ],
            "blobsPath": [
                276
            ],
            "blobsStorage": [
                9
            ],
            "cachePath": [
                276
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
                276
            ],
            "databasePath": [
                276
            ],
            "deleteTrashPath": [
                276
            ],
            "drawFunscriptHeatmapRange": [
                11
            ],
            "excludes": [
                276
            ],
            "ffmpegPath": [
                276
            ],
            "ffprobePath": [
                276
            ],
            "galleryCoverRegex": [
                276
            ],
            "galleryExtensions": [
                276
            ],
            "generatedPath": [
                276
            ],
            "imageExcludes": [
                276
            ],
            "imageExtensions": [
                276
            ],
            "liveTranscodeInputArgs": [
                276
            ],
            "liveTranscodeOutputArgs": [
                276
            ],
            "logAccess": [
                11
            ],
            "logFile": [
                276
            ],
            "logFileMaxSize": [
                138
            ],
            "logLevel": [
                276
            ],
            "logOut": [
                11
            ],
            "maxSessionAge": [
                138
            ],
            "maxStreamingTranscodeSize": [
                275
            ],
            "maxTranscodeSize": [
                275
            ],
            "maximumSprites": [
                138
            ],
            "metadataPath": [
                276
            ],
            "minimumSprites": [
                138
            ],
            "parallelTasks": [
                138
            ],
            "password": [
                276
            ],
            "pluginPackageSources": [
                165
            ],
            "pluginsPath": [
                276
            ],
            "previewAudio": [
                11
            ],
            "previewExcludeEnd": [
                276
            ],
            "previewExcludeStart": [
                276
            ],
            "previewPreset": [
                185
            ],
            "previewSegmentDuration": [
                77
            ],
            "previewSegments": [
                138
            ],
            "pythonPath": [
                276
            ],
            "scraperPackageSources": [
                165
            ],
            "scrapersPath": [
                276
            ],
            "spriteInterval": [
                77
            ],
            "spriteScreenshotSize": [
                138
            ],
            "stashBoxes": [
                263
            ],
            "stashes": [
                269
            ],
            "transcodeHardwareAcceleration": [
                11
            ],
            "transcodeInputArgs": [
                276
            ],
            "transcodeOutputArgs": [
                276
            ],
            "useCustomSpriteInterval": [
                11
            ],
            "username": [
                276
            ],
            "videoExtensions": [
                276
            ],
            "videoFileNamingAlgorithm": [
                111
            ],
            "writeImageThumbnails": [
                11
            ],
            "__typename": [
                276
            ]
        },
        "ConfigGeneralResult": {
            "apiKey": [
                276
            ],
            "backupDirectoryPath": [
                276
            ],
            "blobsPath": [
                276
            ],
            "blobsStorage": [
                9
            ],
            "cachePath": [
                276
            ],
            "calculateMD5": [
                11
            ],
            "configFilePath": [
                276
            ],
            "createGalleriesFromFolders": [
                11
            ],
            "createImageClipsFromVideos": [
                11
            ],
            "customPerformerImageLocation": [
                276
            ],
            "databasePath": [
                276
            ],
            "deleteTrashPath": [
                276
            ],
            "drawFunscriptHeatmapRange": [
                11
            ],
            "excludes": [
                276
            ],
            "ffmpegPath": [
                276
            ],
            "ffprobePath": [
                276
            ],
            "galleryCoverRegex": [
                276
            ],
            "galleryExtensions": [
                276
            ],
            "generatedPath": [
                276
            ],
            "imageExcludes": [
                276
            ],
            "imageExtensions": [
                276
            ],
            "liveTranscodeInputArgs": [
                276
            ],
            "liveTranscodeOutputArgs": [
                276
            ],
            "logAccess": [
                11
            ],
            "logFile": [
                276
            ],
            "logFileMaxSize": [
                138
            ],
            "logLevel": [
                276
            ],
            "logOut": [
                11
            ],
            "maxSessionAge": [
                138
            ],
            "maxStreamingTranscodeSize": [
                275
            ],
            "maxTranscodeSize": [
                275
            ],
            "maximumSprites": [
                138
            ],
            "metadataPath": [
                276
            ],
            "minimumSprites": [
                138
            ],
            "parallelTasks": [
                138
            ],
            "password": [
                276
            ],
            "pluginPackageSources": [
                164
            ],
            "pluginsPath": [
                276
            ],
            "previewAudio": [
                11
            ],
            "previewExcludeEnd": [
                276
            ],
            "previewExcludeStart": [
                276
            ],
            "previewPreset": [
                185
            ],
            "previewSegmentDuration": [
                77
            ],
            "previewSegments": [
                138
            ],
            "pythonPath": [
                276
            ],
            "scraperPackageSources": [
                164
            ],
            "scrapersPath": [
                276
            ],
            "spriteInterval": [
                77
            ],
            "spriteScreenshotSize": [
                138
            ],
            "stashBoxes": [
                258
            ],
            "stashes": [
                268
            ],
            "transcodeHardwareAcceleration": [
                11
            ],
            "transcodeInputArgs": [
                276
            ],
            "transcodeOutputArgs": [
                276
            ],
            "useCustomSpriteInterval": [
                11
            ],
            "username": [
                276
            ],
            "videoExtensions": [
                276
            ],
            "videoFileNamingAlgorithm": [
                111
            ],
            "writeImageThumbnails": [
                11
            ],
            "__typename": [
                276
            ]
        },
        "ConfigImageLightboxInput": {
            "disableAnimation": [
                11
            ],
            "displayMode": [
                130
            ],
            "resetZoomOnNav": [
                11
            ],
            "scaleUp": [
                11
            ],
            "scrollAttemptsBeforeChange": [
                138
            ],
            "scrollMode": [
                131
            ],
            "slideshowDelay": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "ConfigImageLightboxResult": {
            "disableAnimation": [
                11
            ],
            "displayMode": [
                130
            ],
            "resetZoomOnNav": [
                11
            ],
            "scaleUp": [
                11
            ],
            "scrollAttemptsBeforeChange": [
                138
            ],
            "scrollMode": [
                131
            ],
            "slideshowDelay": [
                138
            ],
            "__typename": [
                276
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
                276
            ],
            "cssEnabled": [
                11
            ],
            "customLocales": [
                276
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
                138
            ],
            "handyKey": [
                276
            ],
            "imageLightbox": [
                37
            ],
            "javascript": [
                276
            ],
            "javascriptEnabled": [
                11
            ],
            "language": [
                276
            ],
            "maximumLoopDuration": [
                138
            ],
            "menuItems": [
                276
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
                276
            ],
            "wallShowTitle": [
                11
            ],
            "__typename": [
                276
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
                276
            ],
            "cssEnabled": [
                11
            ],
            "customLocales": [
                276
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
                138
            ],
            "handyKey": [
                276
            ],
            "imageLightbox": [
                38
            ],
            "javascript": [
                276
            ],
            "javascriptEnabled": [
                11
            ],
            "language": [
                276
            ],
            "maximumLoopDuration": [
                138
            ],
            "menuItems": [
                276
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
                276
            ],
            "wallShowTitle": [
                11
            ],
            "__typename": [
                276
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
                177,
                {
                    "include": [
                        114,
                        "[ID!]"
                    ]
                }
            ],
            "scraping": [
                43
            ],
            "ui": [
                148
            ],
            "__typename": [
                276
            ]
        },
        "ConfigScrapingInput": {
            "excludeTagPatterns": [
                276
            ],
            "scraperCDPPath": [
                276
            ],
            "scraperCertCheck": [
                11
            ],
            "scraperUserAgent": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ConfigScrapingResult": {
            "excludeTagPatterns": [
                276
            ],
            "scraperCDPPath": [
                276
            ],
            "scraperCertCheck": [
                11
            ],
            "scraperUserAgent": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "CriterionModifier": {},
        "CustomFieldCriterionInput": {
            "field": [
                276
            ],
            "modifier": [
                44
            ],
            "value": [
                2
            ],
            "__typename": [
                276
            ]
        },
        "CustomFieldsInput": {
            "full": [
                148
            ],
            "partial": [
                148
            ],
            "remove": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "DLNAIP": {
            "ipAddress": [
                276
            ],
            "until": [
                292
            ],
            "__typename": [
                276
            ]
        },
        "DLNAStatus": {
            "allowedIPAddresses": [
                47
            ],
            "recentIPAddresses": [
                276
            ],
            "running": [
                11
            ],
            "until": [
                292
            ],
            "__typename": [
                276
            ]
        },
        "DateCriterionInput": {
            "modifier": [
                44
            ],
            "value": [
                276
            ],
            "value2": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "DestroyFilterInput": {
            "id": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "Directory": {
            "directories": [
                276
            ],
            "parent": [
                276
            ],
            "path": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "DisableDLNAInput": {
            "duration": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "DuplicationCriterionInput": {
            "distance": [
                138
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
                276
            ]
        },
        "EnableDLNAInput": {
            "duration": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "ExportObjectTypeInput": {
            "all": [
                11
            ],
            "ids": [
                276
            ],
            "__typename": [
                276
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
                276
            ]
        },
        "FileDuplicationCriterionInput": {
            "distance": [
                138
            ],
            "duplicated": [
                11
            ],
            "phash": [
                11
            ],
            "__typename": [
                276
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
                277
            ],
            "created_at": [
                294
            ],
            "dir": [
                277
            ],
            "duplicated": [
                57
            ],
            "galleries_filter": [
                89
            ],
            "gallery_count": [
                140
            ],
            "hashes": [
                76
            ],
            "image_count": [
                140
            ],
            "image_file_filter": [
                127
            ],
            "images_filter": [
                129
            ],
            "mod_time": [
                294
            ],
            "parent_folder": [
                112
            ],
            "path": [
                277
            ],
            "scene_count": [
                140
            ],
            "scenes_filter": [
                203
            ],
            "updated_at": [
                294
            ],
            "video_file_filter": [
                299
            ],
            "zip_file": [
                159
            ],
            "__typename": [
                276
            ]
        },
        "FileSetFingerprintsInput": {
            "fingerprints": [
                255
            ],
            "id": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "FilterMode": {},
        "FindFilesResultType": {
            "count": [
                138
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
                138
            ],
            "__typename": [
                276
            ]
        },
        "FindFilterType": {
            "direction": [
                257
            ],
            "page": [
                138
            ],
            "per_page": [
                138
            ],
            "q": [
                276
            ],
            "sort": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "FindFoldersResultType": {
            "count": [
                138
            ],
            "folders": [
                79
            ],
            "__typename": [
                276
            ]
        },
        "FindGalleriesResultType": {
            "count": [
                138
            ],
            "galleries": [
                81
            ],
            "__typename": [
                276
            ]
        },
        "FindGalleryChaptersResultType": {
            "chapters": [
                83
            ],
            "count": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "FindGroupsResultType": {
            "count": [
                138
            ],
            "groups": [
                102
            ],
            "__typename": [
                276
            ]
        },
        "FindImagesResultType": {
            "count": [
                138
            ],
            "filesize": [
                77
            ],
            "images": [
                124
            ],
            "megapixels": [
                77
            ],
            "__typename": [
                276
            ]
        },
        "FindJobInput": {
            "id": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "FindMoviesResultType": {
            "count": [
                138
            ],
            "movies": [
                154
            ],
            "__typename": [
                276
            ]
        },
        "FindPerformersResultType": {
            "count": [
                138
            ],
            "performers": [
                168
            ],
            "__typename": [
                276
            ]
        },
        "FindSceneMarkersResultType": {
            "count": [
                138
            ],
            "scene_markers": [
                207
            ],
            "__typename": [
                276
            ]
        },
        "FindScenesResultType": {
            "count": [
                138
            ],
            "duration": [
                77
            ],
            "filesize": [
                77
            ],
            "scenes": [
                199
            ],
            "__typename": [
                276
            ]
        },
        "FindStudiosResultType": {
            "count": [
                138
            ],
            "studios": [
                278
            ],
            "__typename": [
                276
            ]
        },
        "FindTagsResultType": {
            "count": [
                138
            ],
            "tags": [
                286
            ],
            "__typename": [
                276
            ]
        },
        "Fingerprint": {
            "type": [
                276
            ],
            "value": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "FingerprintFilterInput": {
            "distance": [
                138
            ],
            "type": [
                276
            ],
            "value": [
                276
            ],
            "__typename": [
                276
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
                276
            ]
        },
        "Folder": {
            "basename": [
                276
            ],
            "created_at": [
                292
            ],
            "id": [
                114
            ],
            "mod_time": [
                292
            ],
            "parent_folder": [
                79
            ],
            "parent_folder_id": [
                114
            ],
            "parent_folders": [
                79
            ],
            "path": [
                276
            ],
            "sub_folders": [
                79
            ],
            "updated_at": [
                292
            ],
            "zip_file": [
                8
            ],
            "zip_file_id": [
                114
            ],
            "__typename": [
                276
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
                277
            ],
            "created_at": [
                294
            ],
            "files_filter": [
                58
            ],
            "galleries_filter": [
                89
            ],
            "gallery_count": [
                140
            ],
            "mod_time": [
                294
            ],
            "parent_folder": [
                112
            ],
            "path": [
                277
            ],
            "updated_at": [
                294
            ],
            "zip_file": [
                159
            ],
            "__typename": [
                276
            ]
        },
        "Gallery": {
            "chapters": [
                83
            ],
            "code": [
                276
            ],
            "cover": [
                124
            ],
            "created_at": [
                292
            ],
            "custom_fields": [
                148
            ],
            "date": [
                276
            ],
            "details": [
                276
            ],
            "files": [
                88
            ],
            "folder": [
                79
            ],
            "id": [
                114
            ],
            "image": [
                124,
                {
                    "index": [
                        138,
                        "Int!"
                    ]
                }
            ],
            "image_count": [
                138
            ],
            "organized": [
                11
            ],
            "paths": [
                90
            ],
            "performers": [
                168
            ],
            "photographer": [
                276
            ],
            "rating100": [
                138
            ],
            "scenes": [
                199
            ],
            "studio": [
                278
            ],
            "tags": [
                286
            ],
            "title": [
                276
            ],
            "updated_at": [
                292
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "GalleryAddInput": {
            "gallery_id": [
                114
            ],
            "image_ids": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "GalleryChapter": {
            "created_at": [
                292
            ],
            "gallery": [
                81
            ],
            "id": [
                114
            ],
            "image_index": [
                138
            ],
            "title": [
                276
            ],
            "updated_at": [
                292
            ],
            "__typename": [
                276
            ]
        },
        "GalleryChapterCreateInput": {
            "gallery_id": [
                114
            ],
            "image_index": [
                138
            ],
            "title": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "GalleryChapterUpdateInput": {
            "gallery_id": [
                114
            ],
            "id": [
                114
            ],
            "image_index": [
                138
            ],
            "title": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "GalleryCreateInput": {
            "code": [
                276
            ],
            "custom_fields": [
                148
            ],
            "date": [
                276
            ],
            "details": [
                276
            ],
            "organized": [
                11
            ],
            "performer_ids": [
                114
            ],
            "photographer": [
                276
            ],
            "rating100": [
                138
            ],
            "scene_ids": [
                114
            ],
            "studio_id": [
                114
            ],
            "tag_ids": [
                114
            ],
            "title": [
                276
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
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
                114
            ],
            "__typename": [
                276
            ]
        },
        "GalleryFile": {
            "basename": [
                276
            ],
            "created_at": [
                292
            ],
            "fingerprint": [
                276,
                {
                    "type": [
                        276,
                        "String!"
                    ]
                }
            ],
            "fingerprints": [
                75
            ],
            "id": [
                114
            ],
            "mod_time": [
                292
            ],
            "parent_folder": [
                79
            ],
            "parent_folder_id": [
                114
            ],
            "path": [
                276
            ],
            "size": [
                139
            ],
            "updated_at": [
                292
            ],
            "zip_file": [
                8
            ],
            "zip_file_id": [
                114
            ],
            "__typename": [
                276
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
                189
            ],
            "checksum": [
                277
            ],
            "code": [
                277
            ],
            "created_at": [
                294
            ],
            "custom_fields": [
                45
            ],
            "date": [
                49
            ],
            "details": [
                277
            ],
            "file_count": [
                140
            ],
            "files_filter": [
                58
            ],
            "folders_filter": [
                80
            ],
            "has_chapters": [
                276
            ],
            "id": [
                140
            ],
            "image_count": [
                140
            ],
            "images_filter": [
                129
            ],
            "is_missing": [
                276
            ],
            "is_zip": [
                11
            ],
            "organized": [
                11
            ],
            "parent_folder": [
                112
            ],
            "path": [
                277
            ],
            "performer_age": [
                140
            ],
            "performer_count": [
                140
            ],
            "performer_favorite": [
                11
            ],
            "performer_tags": [
                112
            ],
            "performers": [
                159
            ],
            "performers_filter": [
                171
            ],
            "photographer": [
                277
            ],
            "rating100": [
                140
            ],
            "scenes": [
                159
            ],
            "scenes_filter": [
                203
            ],
            "studios": [
                112
            ],
            "studios_filter": [
                281
            ],
            "tag_count": [
                140
            ],
            "tags": [
                112
            ],
            "tags_filter": [
                289
            ],
            "title": [
                277
            ],
            "updated_at": [
                294
            ],
            "url": [
                277
            ],
            "__typename": [
                276
            ]
        },
        "GalleryPathsType": {
            "cover": [
                276
            ],
            "preview": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "GalleryRemoveInput": {
            "gallery_id": [
                114
            ],
            "image_ids": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "GalleryResetCoverInput": {
            "gallery_id": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "GallerySetCoverInput": {
            "cover_image_id": [
                114
            ],
            "gallery_id": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "GalleryUpdateInput": {
            "clientMutationId": [
                276
            ],
            "code": [
                276
            ],
            "custom_fields": [
                46
            ],
            "date": [
                276
            ],
            "details": [
                276
            ],
            "id": [
                114
            ],
            "organized": [
                11
            ],
            "performer_ids": [
                114
            ],
            "photographer": [
                276
            ],
            "primary_file_id": [
                114
            ],
            "rating100": [
                138
            ],
            "scene_ids": [
                114
            ],
            "studio_id": [
                114
            ],
            "tag_ids": [
                114
            ],
            "title": [
                276
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
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
                276
            ]
        },
        "GenderEnum": {},
        "GenerateAPIKeyInput": {
            "clear": [
                11
            ],
            "__typename": [
                276
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
                114
            ],
            "imageIDs": [
                114
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
                114
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
                276
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
                114
            ],
            "sprites": [
                11
            ],
            "transcodes": [
                11
            ],
            "__typename": [
                276
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
                276
            ]
        },
        "GeneratePreviewOptions": {
            "previewExcludeEnd": [
                276
            ],
            "previewExcludeStart": [
                276
            ],
            "previewPreset": [
                185
            ],
            "previewSegmentDuration": [
                77
            ],
            "previewSegments": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "GeneratePreviewOptionsInput": {
            "previewExcludeEnd": [
                276
            ],
            "previewExcludeStart": [
                276
            ],
            "previewPreset": [
                185
            ],
            "previewSegmentDuration": [
                77
            ],
            "previewSegments": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "Group": {
            "aliases": [
                276
            ],
            "back_image_path": [
                276
            ],
            "containing_groups": [
                104
            ],
            "created_at": [
                292
            ],
            "custom_fields": [
                148
            ],
            "date": [
                276
            ],
            "director": [
                276
            ],
            "duration": [
                138
            ],
            "front_image_path": [
                276
            ],
            "id": [
                114
            ],
            "name": [
                276
            ],
            "o_counter": [
                138
            ],
            "performer_count": [
                138,
                {
                    "depth": [
                        138
                    ]
                }
            ],
            "rating100": [
                138
            ],
            "scene_count": [
                138,
                {
                    "depth": [
                        138
                    ]
                }
            ],
            "scenes": [
                199
            ],
            "studio": [
                278
            ],
            "sub_group_count": [
                138,
                {
                    "depth": [
                        138
                    ]
                }
            ],
            "sub_groups": [
                104
            ],
            "synopsis": [
                276
            ],
            "tags": [
                286
            ],
            "updated_at": [
                292
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "GroupCreateInput": {
            "aliases": [
                276
            ],
            "back_image": [
                276
            ],
            "containing_groups": [
                105
            ],
            "custom_fields": [
                148
            ],
            "date": [
                276
            ],
            "director": [
                276
            ],
            "duration": [
                138
            ],
            "front_image": [
                276
            ],
            "name": [
                276
            ],
            "rating100": [
                138
            ],
            "studio_id": [
                114
            ],
            "sub_groups": [
                105
            ],
            "synopsis": [
                276
            ],
            "tag_ids": [
                114
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "GroupDescription": {
            "description": [
                276
            ],
            "group": [
                102
            ],
            "__typename": [
                276
            ]
        },
        "GroupDescriptionInput": {
            "description": [
                276
            ],
            "group_id": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "GroupDestroyInput": {
            "id": [
                114
            ],
            "__typename": [
                276
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
                140
            ],
            "containing_groups": [
                112
            ],
            "created_at": [
                294
            ],
            "custom_fields": [
                45
            ],
            "date": [
                49
            ],
            "director": [
                277
            ],
            "duration": [
                140
            ],
            "is_missing": [
                276
            ],
            "name": [
                277
            ],
            "o_counter": [
                140
            ],
            "performers": [
                159
            ],
            "rating100": [
                140
            ],
            "scene_count": [
                140
            ],
            "scenes_filter": [
                203
            ],
            "studios": [
                112
            ],
            "studios_filter": [
                281
            ],
            "sub_group_count": [
                140
            ],
            "sub_groups": [
                112
            ],
            "synopsis": [
                277
            ],
            "tag_count": [
                140
            ],
            "tags": [
                112
            ],
            "updated_at": [
                294
            ],
            "url": [
                277
            ],
            "__typename": [
                276
            ]
        },
        "GroupSubGroupAddInput": {
            "containing_group_id": [
                114
            ],
            "insert_index": [
                138
            ],
            "sub_groups": [
                105
            ],
            "__typename": [
                276
            ]
        },
        "GroupSubGroupRemoveInput": {
            "containing_group_id": [
                114
            ],
            "sub_group_ids": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "GroupUpdateInput": {
            "aliases": [
                276
            ],
            "back_image": [
                276
            ],
            "containing_groups": [
                105
            ],
            "custom_fields": [
                46
            ],
            "date": [
                276
            ],
            "director": [
                276
            ],
            "duration": [
                138
            ],
            "front_image": [
                276
            ],
            "id": [
                114
            ],
            "name": [
                276
            ],
            "rating100": [
                138
            ],
            "studio_id": [
                114
            ],
            "sub_groups": [
                105
            ],
            "synopsis": [
                276
            ],
            "tag_ids": [
                114
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "HashAlgorithm": {},
        "HierarchicalMultiCriterionInput": {
            "depth": [
                138
            ],
            "excludes": [
                114
            ],
            "modifier": [
                44
            ],
            "value": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "HistoryMutationResult": {
            "count": [
                138
            ],
            "history": [
                292
            ],
            "__typename": [
                276
            ]
        },
        "ID": {},
        "IdentifyFieldOptions": {
            "createMissing": [
                11
            ],
            "field": [
                276
            ],
            "strategy": [
                117
            ],
            "__typename": [
                276
            ]
        },
        "IdentifyFieldOptionsInput": {
            "createMissing": [
                11
            ],
            "field": [
                276
            ],
            "strategy": [
                117
            ],
            "__typename": [
                276
            ]
        },
        "IdentifyFieldStrategy": {},
        "IdentifyMetadataInput": {
            "options": [
                120
            ],
            "paths": [
                276
            ],
            "sceneIDs": [
                114
            ],
            "sources": [
                123
            ],
            "__typename": [
                276
            ]
        },
        "IdentifyMetadataOptions": {
            "fieldOptions": [
                115
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
                276
            ],
            "skipMultipleMatches": [
                11
            ],
            "skipSingleNamePerformerTag": [
                276
            ],
            "skipSingleNamePerformers": [
                11
            ],
            "__typename": [
                276
            ]
        },
        "IdentifyMetadataOptionsInput": {
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
                276
            ],
            "skipMultipleMatches": [
                11
            ],
            "skipSingleNamePerformerTag": [
                276
            ],
            "skipSingleNamePerformers": [
                11
            ],
            "__typename": [
                276
            ]
        },
        "IdentifyMetadataTaskOptions": {
            "options": [
                119
            ],
            "sources": [
                122
            ],
            "__typename": [
                276
            ]
        },
        "IdentifySource": {
            "options": [
                119
            ],
            "source": [
                251
            ],
            "__typename": [
                276
            ]
        },
        "IdentifySourceInput": {
            "options": [
                120
            ],
            "source": [
                252
            ],
            "__typename": [
                276
            ]
        },
        "Image": {
            "code": [
                276
            ],
            "created_at": [
                292
            ],
            "custom_fields": [
                148
            ],
            "date": [
                276
            ],
            "details": [
                276
            ],
            "files": [
                126
            ],
            "galleries": [
                81
            ],
            "id": [
                114
            ],
            "o_counter": [
                138
            ],
            "organized": [
                11
            ],
            "paths": [
                132
            ],
            "performers": [
                168
            ],
            "photographer": [
                276
            ],
            "rating100": [
                138
            ],
            "studio": [
                278
            ],
            "tags": [
                286
            ],
            "title": [
                276
            ],
            "updated_at": [
                292
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "visual_files": [
                300
            ],
            "__typename": [
                276
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
                114
            ],
            "__typename": [
                276
            ]
        },
        "ImageFile": {
            "basename": [
                276
            ],
            "created_at": [
                292
            ],
            "fingerprint": [
                276,
                {
                    "type": [
                        276,
                        "String!"
                    ]
                }
            ],
            "fingerprints": [
                75
            ],
            "format": [
                276
            ],
            "height": [
                138
            ],
            "id": [
                114
            ],
            "mod_time": [
                292
            ],
            "parent_folder": [
                79
            ],
            "parent_folder_id": [
                114
            ],
            "path": [
                276
            ],
            "size": [
                139
            ],
            "updated_at": [
                292
            ],
            "width": [
                138
            ],
            "zip_file": [
                8
            ],
            "zip_file_id": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "ImageFileFilterInput": {
            "format": [
                277
            ],
            "orientation": [
                161
            ],
            "resolution": [
                189
            ],
            "__typename": [
                276
            ]
        },
        "ImageFileType": {
            "height": [
                138
            ],
            "mod_time": [
                292
            ],
            "size": [
                138
            ],
            "width": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "ImageFilterType": {
            "AND": [
                129
            ],
            "NOT": [
                129
            ],
            "OR": [
                129
            ],
            "checksum": [
                277
            ],
            "code": [
                277
            ],
            "created_at": [
                294
            ],
            "custom_fields": [
                45
            ],
            "date": [
                49
            ],
            "details": [
                277
            ],
            "file_count": [
                140
            ],
            "files_filter": [
                58
            ],
            "galleries": [
                159
            ],
            "galleries_filter": [
                89
            ],
            "id": [
                140
            ],
            "is_missing": [
                276
            ],
            "o_counter": [
                140
            ],
            "organized": [
                11
            ],
            "orientation": [
                161
            ],
            "path": [
                277
            ],
            "performer_age": [
                140
            ],
            "performer_count": [
                140
            ],
            "performer_favorite": [
                11
            ],
            "performer_tags": [
                112
            ],
            "performers": [
                159
            ],
            "performers_filter": [
                171
            ],
            "phash_distance": [
                174
            ],
            "photographer": [
                277
            ],
            "rating100": [
                140
            ],
            "resolution": [
                189
            ],
            "studios": [
                112
            ],
            "studios_filter": [
                281
            ],
            "tag_count": [
                140
            ],
            "tags": [
                112
            ],
            "tags_filter": [
                289
            ],
            "title": [
                277
            ],
            "updated_at": [
                294
            ],
            "url": [
                277
            ],
            "__typename": [
                276
            ]
        },
        "ImageLightboxDisplayMode": {},
        "ImageLightboxScrollMode": {},
        "ImagePathsType": {
            "image": [
                276
            ],
            "preview": [
                276
            ],
            "thumbnail": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ImageUpdateInput": {
            "clientMutationId": [
                276
            ],
            "code": [
                276
            ],
            "custom_fields": [
                46
            ],
            "date": [
                276
            ],
            "details": [
                276
            ],
            "gallery_ids": [
                114
            ],
            "id": [
                114
            ],
            "organized": [
                11
            ],
            "performer_ids": [
                114
            ],
            "photographer": [
                276
            ],
            "primary_file_id": [
                114
            ],
            "rating100": [
                138
            ],
            "studio_id": [
                114
            ],
            "tag_ids": [
                114
            ],
            "title": [
                276
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
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
                114
            ],
            "__typename": [
                276
            ]
        },
        "ImportDuplicateEnum": {},
        "ImportMissingRefEnum": {},
        "ImportObjectsInput": {
            "duplicateBehaviour": [
                135
            ],
            "file": [
                295
            ],
            "missingRefBehaviour": [
                136
            ],
            "__typename": [
                276
            ]
        },
        "Int": {},
        "Int64": {},
        "IntCriterionInput": {
            "modifier": [
                44
            ],
            "value": [
                138
            ],
            "value2": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "Job": {
            "addTime": [
                292
            ],
            "description": [
                276
            ],
            "endTime": [
                292
            ],
            "error": [
                276
            ],
            "id": [
                114
            ],
            "progress": [
                77
            ],
            "startTime": [
                292
            ],
            "status": [
                142
            ],
            "subTasks": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "JobStatus": {},
        "JobStatusUpdate": {
            "job": [
                141
            ],
            "type": [
                144
            ],
            "__typename": [
                276
            ]
        },
        "JobStatusUpdateType": {},
        "LatestVersion": {
            "release_date": [
                276
            ],
            "shorthash": [
                276
            ],
            "url": [
                276
            ],
            "version": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "LogEntry": {
            "level": [
                147
            ],
            "message": [
                276
            ],
            "time": [
                292
            ],
            "__typename": [
                276
            ]
        },
        "LogLevel": {},
        "Map": {},
        "MarkerStringsResultType": {
            "count": [
                138
            ],
            "id": [
                114
            ],
            "title": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "MigrateBlobsInput": {
            "deleteOld": [
                11
            ],
            "__typename": [
                276
            ]
        },
        "MigrateInput": {
            "backupPath": [
                276
            ],
            "__typename": [
                276
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
                276
            ]
        },
        "MoveFilesInput": {
            "destination_basename": [
                276
            ],
            "destination_folder": [
                276
            ],
            "destination_folder_id": [
                114
            ],
            "ids": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "Movie": {
            "aliases": [
                276
            ],
            "back_image_path": [
                276
            ],
            "created_at": [
                292
            ],
            "date": [
                276
            ],
            "director": [
                276
            ],
            "duration": [
                138
            ],
            "front_image_path": [
                276
            ],
            "id": [
                114
            ],
            "name": [
                276
            ],
            "rating100": [
                138
            ],
            "scene_count": [
                138,
                {
                    "depth": [
                        138
                    ]
                }
            ],
            "scenes": [
                199
            ],
            "studio": [
                278
            ],
            "synopsis": [
                276
            ],
            "tags": [
                286
            ],
            "updated_at": [
                292
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "MovieCreateInput": {
            "aliases": [
                276
            ],
            "back_image": [
                276
            ],
            "date": [
                276
            ],
            "director": [
                276
            ],
            "duration": [
                138
            ],
            "front_image": [
                276
            ],
            "name": [
                276
            ],
            "rating100": [
                138
            ],
            "studio_id": [
                114
            ],
            "synopsis": [
                276
            ],
            "tag_ids": [
                114
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "MovieDestroyInput": {
            "id": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "MovieFilterType": {
            "AND": [
                157
            ],
            "NOT": [
                157
            ],
            "OR": [
                157
            ],
            "created_at": [
                294
            ],
            "date": [
                49
            ],
            "director": [
                277
            ],
            "duration": [
                140
            ],
            "is_missing": [
                276
            ],
            "name": [
                277
            ],
            "performers": [
                159
            ],
            "rating100": [
                140
            ],
            "scenes_filter": [
                203
            ],
            "studios": [
                112
            ],
            "studios_filter": [
                281
            ],
            "synopsis": [
                277
            ],
            "tag_count": [
                140
            ],
            "tags": [
                112
            ],
            "updated_at": [
                294
            ],
            "url": [
                277
            ],
            "__typename": [
                276
            ]
        },
        "MovieUpdateInput": {
            "aliases": [
                276
            ],
            "back_image": [
                276
            ],
            "date": [
                276
            ],
            "director": [
                276
            ],
            "duration": [
                138
            ],
            "front_image": [
                276
            ],
            "id": [
                114
            ],
            "name": [
                276
            ],
            "rating100": [
                138
            ],
            "studio_id": [
                114
            ],
            "synopsis": [
                276
            ],
            "tag_ids": [
                114
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "MultiCriterionInput": {
            "excludes": [
                114
            ],
            "modifier": [
                44
            ],
            "value": [
                114
            ],
            "__typename": [
                276
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
                276,
                {
                    "input": [
                        1,
                        "AnonymiseDatabaseInput!"
                    ]
                }
            ],
            "backupDatabase": [
                276,
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
                124,
                {
                    "input": [
                        14,
                        "BulkImageUpdateInput!"
                    ]
                }
            ],
            "bulkMovieUpdate": [
                154,
                {
                    "input": [
                        15,
                        "BulkMovieUpdateInput!"
                    ]
                }
            ],
            "bulkPerformerUpdate": [
                168,
                {
                    "input": [
                        16,
                        "BulkPerformerUpdateInput!"
                    ]
                }
            ],
            "bulkSceneMarkerUpdate": [
                207,
                {
                    "input": [
                        17,
                        "BulkSceneMarkerUpdateInput!"
                    ]
                }
            ],
            "bulkSceneUpdate": [
                199,
                {
                    "input": [
                        18,
                        "BulkSceneUpdateInput!"
                    ]
                }
            ],
            "bulkStudioUpdate": [
                278,
                {
                    "input": [
                        19,
                        "BulkStudioUpdateInput!"
                    ]
                }
            ],
            "bulkTagUpdate": [
                286,
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
                148,
                {
                    "input": [
                        148,
                        "Map!"
                    ],
                    "plugin_id": [
                        114,
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
                148,
                {
                    "input": [
                        148
                    ],
                    "partial": [
                        148
                    ]
                }
            ],
            "configureUISetting": [
                148,
                {
                    "key": [
                        276,
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
                        114,
                        "[ID!]!"
                    ]
                }
            ],
            "destroyFiles": [
                11,
                {
                    "ids": [
                        114,
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
                114
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
                191,
                {
                    "args": [
                        2,
                        "[Any]"
                    ],
                    "sql": [
                        276,
                        "String!"
                    ]
                }
            ],
            "exportObjects": [
                276,
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
                        114,
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
                276,
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
                        114,
                        "[ID!]!"
                    ]
                }
            ],
            "imageDecrementO": [
                138,
                {
                    "id": [
                        114,
                        "ID!"
                    ]
                }
            ],
            "imageDestroy": [
                11,
                {
                    "input": [
                        125,
                        "ImageDestroyInput!"
                    ]
                }
            ],
            "imageIncrementO": [
                138,
                {
                    "id": [
                        114,
                        "ID!"
                    ]
                }
            ],
            "imageResetO": [
                138,
                {
                    "id": [
                        114,
                        "ID!"
                    ]
                }
            ],
            "imageUpdate": [
                124,
                {
                    "input": [
                        133,
                        "ImageUpdateInput!"
                    ]
                }
            ],
            "imagesDestroy": [
                11,
                {
                    "input": [
                        134,
                        "ImagesDestroyInput!"
                    ]
                }
            ],
            "imagesUpdate": [
                124,
                {
                    "input": [
                        133,
                        "[ImageUpdateInput!]!"
                    ]
                }
            ],
            "importObjects": [
                114,
                {
                    "input": [
                        137,
                        "ImportObjectsInput!"
                    ]
                }
            ],
            "installPackages": [
                114,
                {
                    "packages": [
                        166,
                        "[PackageSpecInput!]!"
                    ],
                    "type": [
                        167,
                        "PackageType!"
                    ]
                }
            ],
            "metadataAutoTag": [
                114,
                {
                    "input": [
                        4,
                        "AutoTagMetadataInput!"
                    ]
                }
            ],
            "metadataClean": [
                114,
                {
                    "input": [
                        28,
                        "CleanMetadataInput!"
                    ]
                }
            ],
            "metadataCleanGenerated": [
                114,
                {
                    "input": [
                        27,
                        "CleanGeneratedInput!"
                    ]
                }
            ],
            "metadataExport": [
                114
            ],
            "metadataGenerate": [
                114,
                {
                    "input": [
                        98,
                        "GenerateMetadataInput!"
                    ]
                }
            ],
            "metadataIdentify": [
                114,
                {
                    "input": [
                        118,
                        "IdentifyMetadataInput!"
                    ]
                }
            ],
            "metadataImport": [
                114
            ],
            "metadataScan": [
                114,
                {
                    "input": [
                        197,
                        "ScanMetadataInput!"
                    ]
                }
            ],
            "migrate": [
                114,
                {
                    "input": [
                        151,
                        "MigrateInput!"
                    ]
                }
            ],
            "migrateBlobs": [
                114,
                {
                    "input": [
                        150,
                        "MigrateBlobsInput!"
                    ]
                }
            ],
            "migrateHashNaming": [
                114
            ],
            "migrateSceneScreenshots": [
                114,
                {
                    "input": [
                        152,
                        "MigrateSceneScreenshotsInput!"
                    ]
                }
            ],
            "moveFiles": [
                11,
                {
                    "input": [
                        153,
                        "MoveFilesInput!"
                    ]
                }
            ],
            "movieCreate": [
                154,
                {
                    "input": [
                        155,
                        "MovieCreateInput!"
                    ]
                }
            ],
            "movieDestroy": [
                11,
                {
                    "input": [
                        156,
                        "MovieDestroyInput!"
                    ]
                }
            ],
            "movieUpdate": [
                154,
                {
                    "input": [
                        158,
                        "MovieUpdateInput!"
                    ]
                }
            ],
            "moviesDestroy": [
                11,
                {
                    "ids": [
                        114,
                        "[ID!]!"
                    ]
                }
            ],
            "optimiseDatabase": [
                114
            ],
            "performerCreate": [
                168,
                {
                    "input": [
                        169,
                        "PerformerCreateInput!"
                    ]
                }
            ],
            "performerDestroy": [
                11,
                {
                    "input": [
                        170,
                        "PerformerDestroyInput!"
                    ]
                }
            ],
            "performerMerge": [
                168,
                {
                    "input": [
                        172,
                        "PerformerMergeInput!"
                    ]
                }
            ],
            "performerUpdate": [
                168,
                {
                    "input": [
                        173,
                        "PerformerUpdateInput!"
                    ]
                }
            ],
            "performersDestroy": [
                11,
                {
                    "ids": [
                        114,
                        "[ID!]!"
                    ]
                }
            ],
            "querySQL": [
                192,
                {
                    "args": [
                        2,
                        "[Any]"
                    ],
                    "sql": [
                        276,
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
                        187,
                        "RemoveTempDLNAIPInput!"
                    ]
                }
            ],
            "reorderSubGroups": [
                11,
                {
                    "input": [
                        188,
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
                        114,
                        "ID!"
                    ]
                }
            ],
            "revealFolderInFileManager": [
                11,
                {
                    "id": [
                        114,
                        "ID!"
                    ]
                }
            ],
            "runPluginOperation": [
                2,
                {
                    "args": [
                        148
                    ],
                    "plugin_id": [
                        114,
                        "ID!"
                    ]
                }
            ],
            "runPluginTask": [
                114,
                {
                    "args": [
                        176,
                        "[PluginArgInput!]"
                    ],
                    "args_map": [
                        148
                    ],
                    "description": [
                        276
                    ],
                    "plugin_id": [
                        114,
                        "ID!"
                    ],
                    "task_name": [
                        276
                    ]
                }
            ],
            "saveFilter": [
                194,
                {
                    "input": [
                        193,
                        "SaveFilterInput!"
                    ]
                }
            ],
            "sceneAddO": [
                113,
                {
                    "id": [
                        114,
                        "ID!"
                    ],
                    "times": [
                        293,
                        "[Timestamp!]"
                    ]
                }
            ],
            "sceneAddPlay": [
                113,
                {
                    "id": [
                        114,
                        "ID!"
                    ],
                    "times": [
                        293,
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
                199,
                {
                    "input": [
                        200,
                        "SceneCreateInput!"
                    ]
                }
            ],
            "sceneDecrementO": [
                138,
                {
                    "id": [
                        114,
                        "ID!"
                    ]
                }
            ],
            "sceneDeleteO": [
                113,
                {
                    "id": [
                        114,
                        "ID!"
                    ],
                    "times": [
                        293,
                        "[Timestamp!]"
                    ]
                }
            ],
            "sceneDeletePlay": [
                113,
                {
                    "id": [
                        114,
                        "ID!"
                    ],
                    "times": [
                        293,
                        "[Timestamp!]"
                    ]
                }
            ],
            "sceneDestroy": [
                11,
                {
                    "input": [
                        201,
                        "SceneDestroyInput!"
                    ]
                }
            ],
            "sceneGenerateScreenshot": [
                276,
                {
                    "at": [
                        77
                    ],
                    "id": [
                        114,
                        "ID!"
                    ]
                }
            ],
            "sceneIncrementO": [
                138,
                {
                    "id": [
                        114,
                        "ID!"
                    ]
                }
            ],
            "sceneIncrementPlayCount": [
                138,
                {
                    "id": [
                        114,
                        "ID!"
                    ]
                }
            ],
            "sceneMarkerCreate": [
                207,
                {
                    "input": [
                        208,
                        "SceneMarkerCreateInput!"
                    ]
                }
            ],
            "sceneMarkerDestroy": [
                11,
                {
                    "id": [
                        114,
                        "ID!"
                    ]
                }
            ],
            "sceneMarkerUpdate": [
                207,
                {
                    "input": [
                        211,
                        "SceneMarkerUpdateInput!"
                    ]
                }
            ],
            "sceneMarkersDestroy": [
                11,
                {
                    "ids": [
                        114,
                        "[ID!]!"
                    ]
                }
            ],
            "sceneMerge": [
                199,
                {
                    "input": [
                        212,
                        "SceneMergeInput!"
                    ]
                }
            ],
            "sceneResetActivity": [
                11,
                {
                    "id": [
                        114,
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
                138,
                {
                    "id": [
                        114,
                        "ID!"
                    ]
                }
            ],
            "sceneResetPlayCount": [
                138,
                {
                    "id": [
                        114,
                        "ID!"
                    ]
                }
            ],
            "sceneSaveActivity": [
                11,
                {
                    "id": [
                        114,
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
                199,
                {
                    "input": [
                        221,
                        "SceneUpdateInput!"
                    ]
                }
            ],
            "scenesDestroy": [
                11,
                {
                    "input": [
                        222,
                        "ScenesDestroyInput!"
                    ]
                }
            ],
            "scenesUpdate": [
                199,
                {
                    "input": [
                        221,
                        "[SceneUpdateInput!]!"
                    ]
                }
            ],
            "setDefaultFilter": [
                11,
                {
                    "input": [
                        254,
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
                        256,
                        "SetupInput!"
                    ]
                }
            ],
            "stashBoxBatchPerformerTag": [
                276,
                {
                    "input": [
                        259,
                        "StashBoxBatchTagInput!"
                    ]
                }
            ],
            "stashBoxBatchStudioTag": [
                276,
                {
                    "input": [
                        259,
                        "StashBoxBatchTagInput!"
                    ]
                }
            ],
            "stashBoxBatchTagTag": [
                276,
                {
                    "input": [
                        259,
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
                        114,
                        "ID!"
                    ]
                }
            ],
            "studioCreate": [
                278,
                {
                    "input": [
                        279,
                        "StudioCreateInput!"
                    ]
                }
            ],
            "studioDestroy": [
                11,
                {
                    "input": [
                        280,
                        "StudioDestroyInput!"
                    ]
                }
            ],
            "studioUpdate": [
                278,
                {
                    "input": [
                        282,
                        "StudioUpdateInput!"
                    ]
                }
            ],
            "studiosDestroy": [
                11,
                {
                    "ids": [
                        114,
                        "[ID!]!"
                    ]
                }
            ],
            "submitStashBoxFingerprints": [
                11,
                {
                    "input": [
                        262,
                        "StashBoxFingerprintSubmissionInput!"
                    ]
                }
            ],
            "submitStashBoxPerformerDraft": [
                114,
                {
                    "input": [
                        260,
                        "StashBoxDraftSubmissionInput!"
                    ]
                }
            ],
            "submitStashBoxSceneDraft": [
                114,
                {
                    "input": [
                        260,
                        "StashBoxDraftSubmissionInput!"
                    ]
                }
            ],
            "tagCreate": [
                286,
                {
                    "input": [
                        287,
                        "TagCreateInput!"
                    ]
                }
            ],
            "tagDestroy": [
                11,
                {
                    "input": [
                        288,
                        "TagDestroyInput!"
                    ]
                }
            ],
            "tagUpdate": [
                286,
                {
                    "input": [
                        290,
                        "TagUpdateInput!"
                    ]
                }
            ],
            "tagsDestroy": [
                11,
                {
                    "ids": [
                        114,
                        "[ID!]!"
                    ]
                }
            ],
            "tagsMerge": [
                286,
                {
                    "input": [
                        291,
                        "TagsMergeInput!"
                    ]
                }
            ],
            "uninstallPackages": [
                114,
                {
                    "packages": [
                        166,
                        "[PackageSpecInput!]!"
                    ],
                    "type": [
                        167,
                        "PackageType!"
                    ]
                }
            ],
            "updatePackages": [
                114,
                {
                    "packages": [
                        166,
                        "[PackageSpecInput!]"
                    ],
                    "type": [
                        167,
                        "PackageType!"
                    ]
                }
            ],
            "__typename": [
                276
            ]
        },
        "OrientationCriterionInput": {
            "value": [
                162
            ],
            "__typename": [
                276
            ]
        },
        "OrientationEnum": {},
        "Package": {
            "date": [
                293
            ],
            "metadata": [
                148
            ],
            "name": [
                276
            ],
            "package_id": [
                276
            ],
            "requires": [
                163
            ],
            "sourceURL": [
                276
            ],
            "source_package": [
                163
            ],
            "version": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "PackageSource": {
            "local_path": [
                276
            ],
            "name": [
                276
            ],
            "url": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "PackageSourceInput": {
            "local_path": [
                276
            ],
            "name": [
                276
            ],
            "url": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "PackageSpecInput": {
            "id": [
                276
            ],
            "sourceURL": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "PackageType": {},
        "Performer": {
            "alias_list": [
                276
            ],
            "birthdate": [
                276
            ],
            "career_end": [
                276
            ],
            "career_length": [
                276
            ],
            "career_start": [
                276
            ],
            "circumcised": [
                25
            ],
            "country": [
                276
            ],
            "created_at": [
                292
            ],
            "custom_fields": [
                148
            ],
            "death_date": [
                276
            ],
            "details": [
                276
            ],
            "disambiguation": [
                276
            ],
            "ethnicity": [
                276
            ],
            "eye_color": [
                276
            ],
            "fake_tits": [
                276
            ],
            "favorite": [
                11
            ],
            "gallery_count": [
                138
            ],
            "gender": [
                96
            ],
            "group_count": [
                138
            ],
            "groups": [
                102
            ],
            "hair_color": [
                276
            ],
            "height_cm": [
                138
            ],
            "id": [
                114
            ],
            "ignore_auto_tag": [
                11
            ],
            "image_count": [
                138
            ],
            "image_path": [
                276
            ],
            "instagram": [
                276
            ],
            "measurements": [
                276
            ],
            "movie_count": [
                138
            ],
            "movies": [
                154
            ],
            "name": [
                276
            ],
            "o_counter": [
                138
            ],
            "penis_length": [
                77
            ],
            "performer_count": [
                138
            ],
            "piercings": [
                276
            ],
            "rating100": [
                138
            ],
            "scene_count": [
                138
            ],
            "scenes": [
                199
            ],
            "stash_ids": [
                270
            ],
            "tags": [
                286
            ],
            "tattoos": [
                276
            ],
            "twitter": [
                276
            ],
            "updated_at": [
                292
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "weight": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "PerformerCreateInput": {
            "alias_list": [
                276
            ],
            "birthdate": [
                276
            ],
            "career_end": [
                276
            ],
            "career_length": [
                276
            ],
            "career_start": [
                276
            ],
            "circumcised": [
                25
            ],
            "country": [
                276
            ],
            "custom_fields": [
                148
            ],
            "death_date": [
                276
            ],
            "details": [
                276
            ],
            "disambiguation": [
                276
            ],
            "ethnicity": [
                276
            ],
            "eye_color": [
                276
            ],
            "fake_tits": [
                276
            ],
            "favorite": [
                11
            ],
            "gender": [
                96
            ],
            "hair_color": [
                276
            ],
            "height_cm": [
                138
            ],
            "ignore_auto_tag": [
                11
            ],
            "image": [
                276
            ],
            "instagram": [
                276
            ],
            "measurements": [
                276
            ],
            "name": [
                276
            ],
            "penis_length": [
                77
            ],
            "piercings": [
                276
            ],
            "rating100": [
                138
            ],
            "stash_ids": [
                272
            ],
            "tag_ids": [
                114
            ],
            "tattoos": [
                276
            ],
            "twitter": [
                276
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "weight": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "PerformerDestroyInput": {
            "id": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "PerformerFilterType": {
            "AND": [
                171
            ],
            "NOT": [
                171
            ],
            "OR": [
                171
            ],
            "age": [
                140
            ],
            "aliases": [
                277
            ],
            "birth_year": [
                140
            ],
            "birthdate": [
                49
            ],
            "career_end": [
                49
            ],
            "career_length": [
                277
            ],
            "career_start": [
                49
            ],
            "circumcised": [
                26
            ],
            "country": [
                277
            ],
            "created_at": [
                294
            ],
            "custom_fields": [
                45
            ],
            "death_date": [
                49
            ],
            "death_year": [
                140
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
            "filter_favorites": [
                11
            ],
            "galleries_filter": [
                89
            ],
            "gallery_count": [
                140
            ],
            "gender": [
                95
            ],
            "groups": [
                112
            ],
            "hair_color": [
                277
            ],
            "height_cm": [
                140
            ],
            "ignore_auto_tag": [
                11
            ],
            "image_count": [
                140
            ],
            "images_filter": [
                129
            ],
            "is_missing": [
                276
            ],
            "marker_count": [
                140
            ],
            "markers_filter": [
                209
            ],
            "measurements": [
                277
            ],
            "name": [
                277
            ],
            "o_counter": [
                140
            ],
            "penis_length": [
                78
            ],
            "performers": [
                159
            ],
            "piercings": [
                277
            ],
            "play_count": [
                140
            ],
            "rating100": [
                140
            ],
            "scene_count": [
                140
            ],
            "scenes_filter": [
                203
            ],
            "stash_id_endpoint": [
                271
            ],
            "stash_ids_endpoint": [
                273
            ],
            "studios": [
                112
            ],
            "tag_count": [
                140
            ],
            "tags": [
                112
            ],
            "tags_filter": [
                289
            ],
            "tattoos": [
                277
            ],
            "updated_at": [
                294
            ],
            "url": [
                277
            ],
            "weight": [
                140
            ],
            "__typename": [
                276
            ]
        },
        "PerformerMergeInput": {
            "destination": [
                114
            ],
            "source": [
                114
            ],
            "values": [
                173
            ],
            "__typename": [
                276
            ]
        },
        "PerformerUpdateInput": {
            "alias_list": [
                276
            ],
            "birthdate": [
                276
            ],
            "career_end": [
                276
            ],
            "career_length": [
                276
            ],
            "career_start": [
                276
            ],
            "circumcised": [
                25
            ],
            "country": [
                276
            ],
            "custom_fields": [
                46
            ],
            "death_date": [
                276
            ],
            "details": [
                276
            ],
            "disambiguation": [
                276
            ],
            "ethnicity": [
                276
            ],
            "eye_color": [
                276
            ],
            "fake_tits": [
                276
            ],
            "favorite": [
                11
            ],
            "gender": [
                96
            ],
            "hair_color": [
                276
            ],
            "height_cm": [
                138
            ],
            "id": [
                114
            ],
            "ignore_auto_tag": [
                11
            ],
            "image": [
                276
            ],
            "instagram": [
                276
            ],
            "measurements": [
                276
            ],
            "name": [
                276
            ],
            "penis_length": [
                77
            ],
            "piercings": [
                276
            ],
            "rating100": [
                138
            ],
            "stash_ids": [
                272
            ],
            "tag_ids": [
                114
            ],
            "tattoos": [
                276
            ],
            "twitter": [
                276
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "weight": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "PhashDistanceCriterionInput": {
            "distance": [
                138
            ],
            "modifier": [
                44
            ],
            "value": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "Plugin": {
            "description": [
                276
            ],
            "enabled": [
                11
            ],
            "hooks": [
                178
            ],
            "id": [
                114
            ],
            "name": [
                276
            ],
            "paths": [
                179
            ],
            "requires": [
                114
            ],
            "settings": [
                181
            ],
            "tasks": [
                183
            ],
            "url": [
                276
            ],
            "version": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "PluginArgInput": {
            "key": [
                276
            ],
            "value": [
                184
            ],
            "__typename": [
                276
            ]
        },
        "PluginConfigMap": {},
        "PluginHook": {
            "description": [
                276
            ],
            "hooks": [
                276
            ],
            "name": [
                276
            ],
            "plugin": [
                175
            ],
            "__typename": [
                276
            ]
        },
        "PluginPaths": {
            "css": [
                276
            ],
            "javascript": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "PluginResult": {
            "error": [
                276
            ],
            "result": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "PluginSetting": {
            "description": [
                276
            ],
            "display_name": [
                276
            ],
            "name": [
                276
            ],
            "type": [
                182
            ],
            "__typename": [
                276
            ]
        },
        "PluginSettingTypeEnum": {},
        "PluginTask": {
            "description": [
                276
            ],
            "name": [
                276
            ],
            "plugin": [
                175
            ],
            "__typename": [
                276
            ]
        },
        "PluginValueInput": {
            "a": [
                184
            ],
            "b": [
                11
            ],
            "f": [
                77
            ],
            "i": [
                138
            ],
            "o": [
                176
            ],
            "str": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "PreviewPreset": {},
        "Query": {
            "allGalleries": [
                81
            ],
            "allImages": [
                124
            ],
            "allMovies": [
                154
            ],
            "allPerformers": [
                168
            ],
            "allSceneMarkers": [
                207
            ],
            "allScenes": [
                199
            ],
            "allStudios": [
                278
            ],
            "allTags": [
                286
            ],
            "availablePackages": [
                163,
                {
                    "source": [
                        276,
                        "String!"
                    ],
                    "type": [
                        167,
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
                        276
                    ],
                    "path": [
                        276
                    ]
                }
            ],
            "dlnaStatus": [
                48
            ],
            "findDefaultFilter": [
                194,
                {
                    "mode": [
                        60,
                        "FilterMode!"
                    ]
                }
            ],
            "findDuplicateScenes": [
                199,
                {
                    "distance": [
                        138
                    ],
                    "duration_diff": [
                        77
                    ]
                }
            ],
            "findFile": [
                7,
                {
                    "id": [
                        114
                    ],
                    "path": [
                        276
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
                        114,
                        "[ID!]"
                    ]
                }
            ],
            "findFolder": [
                79,
                {
                    "id": [
                        114
                    ],
                    "path": [
                        276
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
                        114,
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
                        114,
                        "[ID!]"
                    ]
                }
            ],
            "findGallery": [
                81,
                {
                    "id": [
                        114,
                        "ID!"
                    ]
                }
            ],
            "findGroup": [
                102,
                {
                    "id": [
                        114,
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
                        114,
                        "[ID!]"
                    ]
                }
            ],
            "findImage": [
                124,
                {
                    "checksum": [
                        276
                    ],
                    "id": [
                        114
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
                        114,
                        "[ID!]"
                    ],
                    "image_filter": [
                        129
                    ],
                    "image_ids": [
                        138,
                        "[Int!]"
                    ]
                }
            ],
            "findJob": [
                141,
                {
                    "input": [
                        68,
                        "FindJobInput!"
                    ]
                }
            ],
            "findMovie": [
                154,
                {
                    "id": [
                        114,
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
                        114,
                        "[ID!]"
                    ],
                    "movie_filter": [
                        157
                    ]
                }
            ],
            "findPerformer": [
                168,
                {
                    "id": [
                        114,
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
                        114,
                        "[ID!]"
                    ],
                    "performer_filter": [
                        171
                    ],
                    "performer_ids": [
                        138,
                        "[Int!]"
                    ]
                }
            ],
            "findSavedFilter": [
                194,
                {
                    "id": [
                        114,
                        "ID!"
                    ]
                }
            ],
            "findSavedFilters": [
                194,
                {
                    "mode": [
                        60
                    ]
                }
            ],
            "findScene": [
                199,
                {
                    "checksum": [
                        276
                    ],
                    "id": [
                        114
                    ]
                }
            ],
            "findSceneByHash": [
                199,
                {
                    "input": [
                        206,
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
                        114,
                        "[ID!]"
                    ],
                    "scene_marker_filter": [
                        209
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
                        114,
                        "[ID!]"
                    ],
                    "scene_filter": [
                        203
                    ],
                    "scene_ids": [
                        138,
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
                278,
                {
                    "id": [
                        114,
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
                        114,
                        "[ID!]"
                    ],
                    "studio_filter": [
                        281
                    ]
                }
            ],
            "findTag": [
                286,
                {
                    "id": [
                        114,
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
                        114,
                        "[ID!]"
                    ],
                    "tag_filter": [
                        289
                    ]
                }
            ],
            "installedPackages": [
                163,
                {
                    "type": [
                        167,
                        "PackageType!"
                    ]
                }
            ],
            "jobQueue": [
                141
            ],
            "latestversion": [
                145
            ],
            "listScrapers": [
                250,
                {
                    "types": [
                        223,
                        "[ScrapeContentType!]!"
                    ]
                }
            ],
            "logs": [
                146
            ],
            "markerStrings": [
                149,
                {
                    "q": [
                        276
                    ],
                    "sort": [
                        276
                    ]
                }
            ],
            "markerWall": [
                207,
                {
                    "q": [
                        276
                    ]
                }
            ],
            "parseSceneFilenames": [
                218,
                {
                    "config": [
                        216,
                        "SceneParserInput!"
                    ],
                    "filter": [
                        62
                    ]
                }
            ],
            "pluginTasks": [
                183
            ],
            "plugins": [
                175
            ],
            "sceneMarkerTags": [
                210,
                {
                    "scene_id": [
                        114,
                        "ID!"
                    ]
                }
            ],
            "sceneStreams": [
                220,
                {
                    "id": [
                        114
                    ]
                }
            ],
            "sceneWall": [
                199,
                {
                    "q": [
                        276
                    ]
                }
            ],
            "scrapeGalleryURL": [
                236,
                {
                    "url": [
                        276,
                        "String!"
                    ]
                }
            ],
            "scrapeGroupURL": [
                238,
                {
                    "url": [
                        276,
                        "String!"
                    ]
                }
            ],
            "scrapeImageURL": [
                240,
                {
                    "url": [
                        276,
                        "String!"
                    ]
                }
            ],
            "scrapeMovieURL": [
                242,
                {
                    "url": [
                        276,
                        "String!"
                    ]
                }
            ],
            "scrapeMultiPerformers": [
                244,
                {
                    "input": [
                        224,
                        "ScrapeMultiPerformersInput!"
                    ],
                    "source": [
                        252,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapeMultiScenes": [
                246,
                {
                    "input": [
                        225,
                        "ScrapeMultiScenesInput!"
                    ],
                    "source": [
                        252,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapePerformerURL": [
                244,
                {
                    "url": [
                        276,
                        "String!"
                    ]
                }
            ],
            "scrapeSceneURL": [
                246,
                {
                    "url": [
                        276,
                        "String!"
                    ]
                }
            ],
            "scrapeSingleGallery": [
                236,
                {
                    "input": [
                        226,
                        "ScrapeSingleGalleryInput!"
                    ],
                    "source": [
                        252,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapeSingleGroup": [
                238,
                {
                    "input": [
                        227,
                        "ScrapeSingleGroupInput!"
                    ],
                    "source": [
                        252,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapeSingleImage": [
                240,
                {
                    "input": [
                        228,
                        "ScrapeSingleImageInput!"
                    ],
                    "source": [
                        252,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapeSingleMovie": [
                242,
                {
                    "input": [
                        229,
                        "ScrapeSingleMovieInput!"
                    ],
                    "source": [
                        252,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapeSinglePerformer": [
                244,
                {
                    "input": [
                        230,
                        "ScrapeSinglePerformerInput!"
                    ],
                    "source": [
                        252,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapeSingleScene": [
                246,
                {
                    "input": [
                        231,
                        "ScrapeSingleSceneInput!"
                    ],
                    "source": [
                        252,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapeSingleStudio": [
                248,
                {
                    "input": [
                        232,
                        "ScrapeSingleStudioInput!"
                    ],
                    "source": [
                        252,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapeSingleTag": [
                249,
                {
                    "input": [
                        233,
                        "ScrapeSingleTagInput!"
                    ],
                    "source": [
                        252,
                        "ScraperSourceInput!"
                    ]
                }
            ],
            "scrapeURL": [
                235,
                {
                    "ty": [
                        223,
                        "ScrapeContentType!"
                    ],
                    "url": [
                        276,
                        "String!"
                    ]
                }
            ],
            "stats": [
                274
            ],
            "systemStatus": [
                284
            ],
            "validateStashBoxCredentials": [
                267,
                {
                    "input": [
                        263,
                        "StashBoxInput!"
                    ]
                }
            ],
            "version": [
                296
            ],
            "__typename": [
                276
            ]
        },
        "RemoveTempDLNAIPInput": {
            "address": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ReorderSubGroupsInput": {
            "group_id": [
                114
            ],
            "insert_after": [
                11
            ],
            "insert_at_id": [
                114
            ],
            "sub_group_ids": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "ResolutionCriterionInput": {
            "modifier": [
                44
            ],
            "value": [
                190
            ],
            "__typename": [
                276
            ]
        },
        "ResolutionEnum": {},
        "SQLExecResult": {
            "last_insert_id": [
                139
            ],
            "rows_affected": [
                139
            ],
            "__typename": [
                276
            ]
        },
        "SQLQueryResult": {
            "columns": [
                276
            ],
            "rows": [
                2
            ],
            "__typename": [
                276
            ]
        },
        "SaveFilterInput": {
            "find_filter": [
                62
            ],
            "id": [
                114
            ],
            "mode": [
                60
            ],
            "name": [
                276
            ],
            "object_filter": [
                148
            ],
            "ui_options": [
                148
            ],
            "__typename": [
                276
            ]
        },
        "SavedFilter": {
            "filter": [
                276
            ],
            "find_filter": [
                195
            ],
            "id": [
                114
            ],
            "mode": [
                60
            ],
            "name": [
                276
            ],
            "object_filter": [
                148
            ],
            "ui_options": [
                148
            ],
            "__typename": [
                276
            ]
        },
        "SavedFindFilterType": {
            "direction": [
                257
            ],
            "page": [
                138
            ],
            "per_page": [
                138
            ],
            "q": [
                276
            ],
            "sort": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScanMetaDataFilterInput": {
            "minModTime": [
                293
            ],
            "__typename": [
                276
            ]
        },
        "ScanMetadataInput": {
            "filter": [
                196
            ],
            "paths": [
                276
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
                276
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
                276
            ]
        },
        "Scene": {
            "captions": [
                297
            ],
            "code": [
                276
            ],
            "created_at": [
                292
            ],
            "custom_fields": [
                148
            ],
            "date": [
                276
            ],
            "details": [
                276
            ],
            "director": [
                276
            ],
            "files": [
                298
            ],
            "galleries": [
                81
            ],
            "groups": [
                204
            ],
            "id": [
                114
            ],
            "interactive": [
                11
            ],
            "interactive_speed": [
                138
            ],
            "last_played_at": [
                292
            ],
            "movies": [
                213
            ],
            "o_counter": [
                138
            ],
            "o_history": [
                292
            ],
            "organized": [
                11
            ],
            "paths": [
                219
            ],
            "performers": [
                168
            ],
            "play_count": [
                138
            ],
            "play_duration": [
                77
            ],
            "play_history": [
                292
            ],
            "rating100": [
                138
            ],
            "resume_time": [
                77
            ],
            "sceneStreams": [
                220
            ],
            "scene_markers": [
                207
            ],
            "stash_ids": [
                270
            ],
            "studio": [
                278
            ],
            "tags": [
                286
            ],
            "title": [
                276
            ],
            "updated_at": [
                292
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "SceneCreateInput": {
            "code": [
                276
            ],
            "cover_image": [
                276
            ],
            "custom_fields": [
                148
            ],
            "date": [
                276
            ],
            "details": [
                276
            ],
            "director": [
                276
            ],
            "file_ids": [
                114
            ],
            "gallery_ids": [
                114
            ],
            "groups": [
                205
            ],
            "movies": [
                215
            ],
            "organized": [
                11
            ],
            "performer_ids": [
                114
            ],
            "rating100": [
                138
            ],
            "stash_ids": [
                272
            ],
            "studio_id": [
                114
            ],
            "tag_ids": [
                114
            ],
            "title": [
                276
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
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
                114
            ],
            "__typename": [
                276
            ]
        },
        "SceneFileType": {
            "audio_codec": [
                276
            ],
            "bitrate": [
                138
            ],
            "duration": [
                77
            ],
            "framerate": [
                77
            ],
            "height": [
                138
            ],
            "size": [
                276
            ],
            "video_codec": [
                276
            ],
            "width": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "SceneFilterType": {
            "AND": [
                203
            ],
            "NOT": [
                203
            ],
            "OR": [
                203
            ],
            "audio_codec": [
                277
            ],
            "bitrate": [
                140
            ],
            "captions": [
                277
            ],
            "checksum": [
                277
            ],
            "code": [
                277
            ],
            "created_at": [
                294
            ],
            "custom_fields": [
                45
            ],
            "date": [
                49
            ],
            "details": [
                277
            ],
            "director": [
                277
            ],
            "duplicated": [
                53
            ],
            "duration": [
                140
            ],
            "file_count": [
                140
            ],
            "files_filter": [
                58
            ],
            "framerate": [
                140
            ],
            "galleries": [
                159
            ],
            "galleries_filter": [
                89
            ],
            "groups": [
                112
            ],
            "groups_filter": [
                107
            ],
            "has_markers": [
                276
            ],
            "id": [
                140
            ],
            "interactive": [
                11
            ],
            "interactive_speed": [
                140
            ],
            "is_missing": [
                276
            ],
            "last_played_at": [
                294
            ],
            "markers_filter": [
                209
            ],
            "movies": [
                159
            ],
            "movies_filter": [
                157
            ],
            "o_counter": [
                140
            ],
            "organized": [
                11
            ],
            "orientation": [
                161
            ],
            "oshash": [
                277
            ],
            "path": [
                277
            ],
            "performer_age": [
                140
            ],
            "performer_count": [
                140
            ],
            "performer_favorite": [
                11
            ],
            "performer_tags": [
                112
            ],
            "performers": [
                159
            ],
            "performers_filter": [
                171
            ],
            "phash": [
                277
            ],
            "phash_distance": [
                174
            ],
            "play_count": [
                140
            ],
            "play_duration": [
                140
            ],
            "rating100": [
                140
            ],
            "resolution": [
                189
            ],
            "resume_time": [
                140
            ],
            "stash_id_count": [
                140
            ],
            "stash_id_endpoint": [
                271
            ],
            "stash_ids_endpoint": [
                273
            ],
            "studios": [
                112
            ],
            "studios_filter": [
                281
            ],
            "tag_count": [
                140
            ],
            "tags": [
                112
            ],
            "tags_filter": [
                289
            ],
            "title": [
                277
            ],
            "updated_at": [
                294
            ],
            "url": [
                277
            ],
            "video_codec": [
                277
            ],
            "__typename": [
                276
            ]
        },
        "SceneGroup": {
            "group": [
                102
            ],
            "scene_index": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "SceneGroupInput": {
            "group_id": [
                114
            ],
            "scene_index": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "SceneHashInput": {
            "checksum": [
                276
            ],
            "oshash": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "SceneMarker": {
            "created_at": [
                292
            ],
            "end_seconds": [
                77
            ],
            "id": [
                114
            ],
            "preview": [
                276
            ],
            "primary_tag": [
                286
            ],
            "scene": [
                199
            ],
            "screenshot": [
                276
            ],
            "seconds": [
                77
            ],
            "stream": [
                276
            ],
            "tags": [
                286
            ],
            "title": [
                276
            ],
            "updated_at": [
                292
            ],
            "__typename": [
                276
            ]
        },
        "SceneMarkerCreateInput": {
            "end_seconds": [
                77
            ],
            "primary_tag_id": [
                114
            ],
            "scene_id": [
                114
            ],
            "seconds": [
                77
            ],
            "tag_ids": [
                114
            ],
            "title": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "SceneMarkerFilterType": {
            "created_at": [
                294
            ],
            "duration": [
                78
            ],
            "performers": [
                159
            ],
            "scene_created_at": [
                294
            ],
            "scene_date": [
                49
            ],
            "scene_filter": [
                203
            ],
            "scene_tags": [
                112
            ],
            "scene_updated_at": [
                294
            ],
            "scenes": [
                159
            ],
            "tags": [
                112
            ],
            "updated_at": [
                294
            ],
            "__typename": [
                276
            ]
        },
        "SceneMarkerTag": {
            "scene_markers": [
                207
            ],
            "tag": [
                286
            ],
            "__typename": [
                276
            ]
        },
        "SceneMarkerUpdateInput": {
            "end_seconds": [
                77
            ],
            "id": [
                114
            ],
            "primary_tag_id": [
                114
            ],
            "scene_id": [
                114
            ],
            "seconds": [
                77
            ],
            "tag_ids": [
                114
            ],
            "title": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "SceneMergeInput": {
            "destination": [
                114
            ],
            "o_history": [
                11
            ],
            "play_history": [
                11
            ],
            "source": [
                114
            ],
            "values": [
                221
            ],
            "__typename": [
                276
            ]
        },
        "SceneMovie": {
            "movie": [
                154
            ],
            "scene_index": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "SceneMovieID": {
            "movie_id": [
                114
            ],
            "scene_index": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "SceneMovieInput": {
            "movie_id": [
                114
            ],
            "scene_index": [
                138
            ],
            "__typename": [
                276
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
                276
            ],
            "whitespaceCharacters": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "SceneParserResult": {
            "code": [
                276
            ],
            "date": [
                276
            ],
            "details": [
                276
            ],
            "director": [
                276
            ],
            "gallery_ids": [
                114
            ],
            "movies": [
                214
            ],
            "performer_ids": [
                114
            ],
            "rating": [
                138
            ],
            "rating100": [
                138
            ],
            "scene": [
                199
            ],
            "studio_id": [
                114
            ],
            "tag_ids": [
                114
            ],
            "title": [
                276
            ],
            "url": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "SceneParserResultType": {
            "count": [
                138
            ],
            "results": [
                217
            ],
            "__typename": [
                276
            ]
        },
        "ScenePathsType": {
            "caption": [
                276
            ],
            "funscript": [
                276
            ],
            "interactive_heatmap": [
                276
            ],
            "preview": [
                276
            ],
            "screenshot": [
                276
            ],
            "sprite": [
                276
            ],
            "stream": [
                276
            ],
            "vtt": [
                276
            ],
            "webp": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "SceneStreamEndpoint": {
            "label": [
                276
            ],
            "mime_type": [
                276
            ],
            "url": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "SceneUpdateInput": {
            "clientMutationId": [
                276
            ],
            "code": [
                276
            ],
            "cover_image": [
                276
            ],
            "custom_fields": [
                46
            ],
            "date": [
                276
            ],
            "details": [
                276
            ],
            "director": [
                276
            ],
            "gallery_ids": [
                114
            ],
            "groups": [
                205
            ],
            "id": [
                114
            ],
            "movies": [
                215
            ],
            "o_counter": [
                138
            ],
            "organized": [
                11
            ],
            "performer_ids": [
                114
            ],
            "play_count": [
                138
            ],
            "play_duration": [
                77
            ],
            "primary_file_id": [
                114
            ],
            "rating100": [
                138
            ],
            "resume_time": [
                77
            ],
            "stash_ids": [
                272
            ],
            "studio_id": [
                114
            ],
            "tag_ids": [
                114
            ],
            "title": [
                276
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
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
                114
            ],
            "__typename": [
                276
            ]
        },
        "ScrapeContentType": {},
        "ScrapeMultiPerformersInput": {
            "performer_ids": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "ScrapeMultiScenesInput": {
            "scene_ids": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "ScrapeSingleGalleryInput": {
            "gallery_id": [
                114
            ],
            "gallery_input": [
                237
            ],
            "query": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapeSingleGroupInput": {
            "group_id": [
                114
            ],
            "group_input": [
                239
            ],
            "query": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapeSingleImageInput": {
            "image_id": [
                114
            ],
            "image_input": [
                241
            ],
            "query": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapeSingleMovieInput": {
            "movie_id": [
                114
            ],
            "movie_input": [
                243
            ],
            "query": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapeSinglePerformerInput": {
            "performer_id": [
                114
            ],
            "performer_input": [
                245
            ],
            "query": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapeSingleSceneInput": {
            "query": [
                276
            ],
            "scene_id": [
                114
            ],
            "scene_input": [
                247
            ],
            "__typename": [
                276
            ]
        },
        "ScrapeSingleStudioInput": {
            "query": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapeSingleTagInput": {
            "query": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapeType": {},
        "ScrapedContent": {
            "on_ScrapedGallery": [
                236
            ],
            "on_ScrapedGroup": [
                238
            ],
            "on_ScrapedImage": [
                240
            ],
            "on_ScrapedMovie": [
                242
            ],
            "on_ScrapedPerformer": [
                244
            ],
            "on_ScrapedScene": [
                246
            ],
            "on_ScrapedStudio": [
                248
            ],
            "on_ScrapedTag": [
                249
            ],
            "__typename": [
                276
            ]
        },
        "ScrapedGallery": {
            "code": [
                276
            ],
            "date": [
                276
            ],
            "details": [
                276
            ],
            "performers": [
                244
            ],
            "photographer": [
                276
            ],
            "studio": [
                248
            ],
            "tags": [
                249
            ],
            "title": [
                276
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapedGalleryInput": {
            "code": [
                276
            ],
            "date": [
                276
            ],
            "details": [
                276
            ],
            "photographer": [
                276
            ],
            "title": [
                276
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapedGroup": {
            "aliases": [
                276
            ],
            "back_image": [
                276
            ],
            "date": [
                276
            ],
            "director": [
                276
            ],
            "duration": [
                276
            ],
            "front_image": [
                276
            ],
            "name": [
                276
            ],
            "rating": [
                276
            ],
            "stored_id": [
                114
            ],
            "studio": [
                248
            ],
            "synopsis": [
                276
            ],
            "tags": [
                249
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapedGroupInput": {
            "aliases": [
                276
            ],
            "date": [
                276
            ],
            "director": [
                276
            ],
            "duration": [
                276
            ],
            "name": [
                276
            ],
            "rating": [
                276
            ],
            "synopsis": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapedImage": {
            "code": [
                276
            ],
            "date": [
                276
            ],
            "details": [
                276
            ],
            "performers": [
                244
            ],
            "photographer": [
                276
            ],
            "studio": [
                248
            ],
            "tags": [
                249
            ],
            "title": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapedImageInput": {
            "code": [
                276
            ],
            "date": [
                276
            ],
            "details": [
                276
            ],
            "title": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapedMovie": {
            "aliases": [
                276
            ],
            "back_image": [
                276
            ],
            "date": [
                276
            ],
            "director": [
                276
            ],
            "duration": [
                276
            ],
            "front_image": [
                276
            ],
            "name": [
                276
            ],
            "rating": [
                276
            ],
            "stored_id": [
                114
            ],
            "studio": [
                248
            ],
            "synopsis": [
                276
            ],
            "tags": [
                249
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapedMovieInput": {
            "aliases": [
                276
            ],
            "date": [
                276
            ],
            "director": [
                276
            ],
            "duration": [
                276
            ],
            "name": [
                276
            ],
            "rating": [
                276
            ],
            "synopsis": [
                276
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapedPerformer": {
            "aliases": [
                276
            ],
            "birthdate": [
                276
            ],
            "career_end": [
                276
            ],
            "career_length": [
                276
            ],
            "career_start": [
                276
            ],
            "circumcised": [
                276
            ],
            "country": [
                276
            ],
            "death_date": [
                276
            ],
            "details": [
                276
            ],
            "disambiguation": [
                276
            ],
            "ethnicity": [
                276
            ],
            "eye_color": [
                276
            ],
            "fake_tits": [
                276
            ],
            "gender": [
                276
            ],
            "hair_color": [
                276
            ],
            "height": [
                276
            ],
            "image": [
                276
            ],
            "images": [
                276
            ],
            "instagram": [
                276
            ],
            "measurements": [
                276
            ],
            "name": [
                276
            ],
            "penis_length": [
                276
            ],
            "piercings": [
                276
            ],
            "remote_site_id": [
                276
            ],
            "stored_id": [
                114
            ],
            "tags": [
                249
            ],
            "tattoos": [
                276
            ],
            "twitter": [
                276
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "weight": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapedPerformerInput": {
            "aliases": [
                276
            ],
            "birthdate": [
                276
            ],
            "career_end": [
                276
            ],
            "career_length": [
                276
            ],
            "career_start": [
                276
            ],
            "circumcised": [
                276
            ],
            "country": [
                276
            ],
            "death_date": [
                276
            ],
            "details": [
                276
            ],
            "disambiguation": [
                276
            ],
            "ethnicity": [
                276
            ],
            "eye_color": [
                276
            ],
            "fake_tits": [
                276
            ],
            "gender": [
                276
            ],
            "hair_color": [
                276
            ],
            "height": [
                276
            ],
            "instagram": [
                276
            ],
            "measurements": [
                276
            ],
            "name": [
                276
            ],
            "penis_length": [
                276
            ],
            "piercings": [
                276
            ],
            "remote_site_id": [
                276
            ],
            "stored_id": [
                114
            ],
            "tattoos": [
                276
            ],
            "twitter": [
                276
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "weight": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapedScene": {
            "code": [
                276
            ],
            "date": [
                276
            ],
            "details": [
                276
            ],
            "director": [
                276
            ],
            "duration": [
                138
            ],
            "file": [
                202
            ],
            "fingerprints": [
                261
            ],
            "groups": [
                238
            ],
            "image": [
                276
            ],
            "movies": [
                242
            ],
            "performers": [
                244
            ],
            "remote_site_id": [
                276
            ],
            "studio": [
                248
            ],
            "tags": [
                249
            ],
            "title": [
                276
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapedSceneInput": {
            "code": [
                276
            ],
            "date": [
                276
            ],
            "details": [
                276
            ],
            "director": [
                276
            ],
            "remote_site_id": [
                276
            ],
            "title": [
                276
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapedStudio": {
            "aliases": [
                276
            ],
            "details": [
                276
            ],
            "image": [
                276
            ],
            "name": [
                276
            ],
            "parent": [
                248
            ],
            "remote_site_id": [
                276
            ],
            "stored_id": [
                114
            ],
            "tags": [
                249
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "ScrapedTag": {
            "alias_list": [
                276
            ],
            "description": [
                276
            ],
            "name": [
                276
            ],
            "parent": [
                249
            ],
            "remote_site_id": [
                276
            ],
            "stored_id": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "Scraper": {
            "gallery": [
                253
            ],
            "group": [
                253
            ],
            "id": [
                114
            ],
            "image": [
                253
            ],
            "movie": [
                253
            ],
            "name": [
                276
            ],
            "performer": [
                253
            ],
            "scene": [
                253
            ],
            "__typename": [
                276
            ]
        },
        "ScraperSource": {
            "scraper_id": [
                114
            ],
            "stash_box_endpoint": [
                276
            ],
            "stash_box_index": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "ScraperSourceInput": {
            "scraper_id": [
                114
            ],
            "stash_box_endpoint": [
                276
            ],
            "stash_box_index": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "ScraperSpec": {
            "supported_scrapes": [
                234
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
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
                148
            ],
            "ui_options": [
                148
            ],
            "__typename": [
                276
            ]
        },
        "SetFingerprintsInput": {
            "type": [
                276
            ],
            "value": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "SetupInput": {
            "blobsLocation": [
                276
            ],
            "cacheLocation": [
                276
            ],
            "configLocation": [
                276
            ],
            "databaseFile": [
                276
            ],
            "generatedLocation": [
                276
            ],
            "sfwContentMode": [
                11
            ],
            "stashes": [
                269
            ],
            "storeBlobsInDatabase": [
                11
            ],
            "__typename": [
                276
            ]
        },
        "SortDirectionEnum": {},
        "StashBox": {
            "api_key": [
                276
            ],
            "endpoint": [
                276
            ],
            "max_requests_per_minute": [
                138
            ],
            "name": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "StashBoxBatchTagInput": {
            "createParent": [
                11
            ],
            "endpoint": [
                138
            ],
            "exclude_fields": [
                276
            ],
            "ids": [
                114
            ],
            "names": [
                276
            ],
            "performer_ids": [
                114
            ],
            "performer_names": [
                276
            ],
            "refresh": [
                11
            ],
            "stash_box_endpoint": [
                276
            ],
            "stash_ids": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "StashBoxDraftSubmissionInput": {
            "id": [
                276
            ],
            "stash_box_endpoint": [
                276
            ],
            "stash_box_index": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "StashBoxFingerprint": {
            "algorithm": [
                276
            ],
            "duration": [
                138
            ],
            "hash": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "StashBoxFingerprintSubmissionInput": {
            "scene_ids": [
                276
            ],
            "stash_box_endpoint": [
                276
            ],
            "stash_box_index": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "StashBoxInput": {
            "api_key": [
                276
            ],
            "endpoint": [
                276
            ],
            "max_requests_per_minute": [
                138
            ],
            "name": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "StashBoxPerformerQueryInput": {
            "performer_ids": [
                114
            ],
            "q": [
                276
            ],
            "stash_box_endpoint": [
                276
            ],
            "stash_box_index": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "StashBoxPerformerQueryResult": {
            "query": [
                276
            ],
            "results": [
                244
            ],
            "__typename": [
                276
            ]
        },
        "StashBoxSceneQueryInput": {
            "q": [
                276
            ],
            "scene_ids": [
                114
            ],
            "stash_box_endpoint": [
                276
            ],
            "stash_box_index": [
                138
            ],
            "__typename": [
                276
            ]
        },
        "StashBoxValidationResult": {
            "status": [
                276
            ],
            "valid": [
                11
            ],
            "__typename": [
                276
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
                276
            ],
            "__typename": [
                276
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
                276
            ],
            "__typename": [
                276
            ]
        },
        "StashID": {
            "endpoint": [
                276
            ],
            "stash_id": [
                276
            ],
            "updated_at": [
                292
            ],
            "__typename": [
                276
            ]
        },
        "StashIDCriterionInput": {
            "endpoint": [
                276
            ],
            "modifier": [
                44
            ],
            "stash_id": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "StashIDInput": {
            "endpoint": [
                276
            ],
            "stash_id": [
                276
            ],
            "updated_at": [
                292
            ],
            "__typename": [
                276
            ]
        },
        "StashIDsCriterionInput": {
            "endpoint": [
                276
            ],
            "modifier": [
                44
            ],
            "stash_ids": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "StatsResultType": {
            "gallery_count": [
                138
            ],
            "group_count": [
                138
            ],
            "image_count": [
                138
            ],
            "images_size": [
                77
            ],
            "movie_count": [
                138
            ],
            "performer_count": [
                138
            ],
            "scene_count": [
                138
            ],
            "scenes_duration": [
                77
            ],
            "scenes_played": [
                138
            ],
            "scenes_size": [
                77
            ],
            "studio_count": [
                138
            ],
            "tag_count": [
                138
            ],
            "total_o_count": [
                138
            ],
            "total_play_count": [
                138
            ],
            "total_play_duration": [
                77
            ],
            "__typename": [
                276
            ]
        },
        "StreamingResolutionEnum": {},
        "String": {},
        "StringCriterionInput": {
            "modifier": [
                44
            ],
            "value": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "Studio": {
            "aliases": [
                276
            ],
            "child_studios": [
                278
            ],
            "created_at": [
                292
            ],
            "custom_fields": [
                148
            ],
            "details": [
                276
            ],
            "favorite": [
                11
            ],
            "gallery_count": [
                138,
                {
                    "depth": [
                        138
                    ]
                }
            ],
            "group_count": [
                138,
                {
                    "depth": [
                        138
                    ]
                }
            ],
            "groups": [
                102
            ],
            "id": [
                114
            ],
            "ignore_auto_tag": [
                11
            ],
            "image_count": [
                138,
                {
                    "depth": [
                        138
                    ]
                }
            ],
            "image_path": [
                276
            ],
            "movie_count": [
                138,
                {
                    "depth": [
                        138
                    ]
                }
            ],
            "movies": [
                154
            ],
            "name": [
                276
            ],
            "o_counter": [
                138
            ],
            "organized": [
                11
            ],
            "parent_studio": [
                278
            ],
            "performer_count": [
                138,
                {
                    "depth": [
                        138
                    ]
                }
            ],
            "rating100": [
                138
            ],
            "scene_count": [
                138,
                {
                    "depth": [
                        138
                    ]
                }
            ],
            "stash_ids": [
                270
            ],
            "tags": [
                286
            ],
            "updated_at": [
                292
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "StudioCreateInput": {
            "aliases": [
                276
            ],
            "custom_fields": [
                148
            ],
            "details": [
                276
            ],
            "favorite": [
                11
            ],
            "ignore_auto_tag": [
                11
            ],
            "image": [
                276
            ],
            "name": [
                276
            ],
            "organized": [
                11
            ],
            "parent_id": [
                114
            ],
            "rating100": [
                138
            ],
            "stash_ids": [
                272
            ],
            "tag_ids": [
                114
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "StudioDestroyInput": {
            "id": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "StudioFilterType": {
            "AND": [
                281
            ],
            "NOT": [
                281
            ],
            "OR": [
                281
            ],
            "aliases": [
                277
            ],
            "child_count": [
                140
            ],
            "created_at": [
                294
            ],
            "custom_fields": [
                45
            ],
            "details": [
                277
            ],
            "favorite": [
                11
            ],
            "galleries_filter": [
                89
            ],
            "gallery_count": [
                140
            ],
            "group_count": [
                140
            ],
            "groups_filter": [
                107
            ],
            "ignore_auto_tag": [
                11
            ],
            "image_count": [
                140
            ],
            "images_filter": [
                129
            ],
            "is_missing": [
                276
            ],
            "name": [
                277
            ],
            "organized": [
                11
            ],
            "parents": [
                159
            ],
            "rating100": [
                140
            ],
            "scene_count": [
                140
            ],
            "scenes_filter": [
                203
            ],
            "stash_id_endpoint": [
                271
            ],
            "stash_ids_endpoint": [
                273
            ],
            "tag_count": [
                140
            ],
            "tags": [
                112
            ],
            "updated_at": [
                294
            ],
            "url": [
                277
            ],
            "__typename": [
                276
            ]
        },
        "StudioUpdateInput": {
            "aliases": [
                276
            ],
            "custom_fields": [
                46
            ],
            "details": [
                276
            ],
            "favorite": [
                11
            ],
            "id": [
                114
            ],
            "ignore_auto_tag": [
                11
            ],
            "image": [
                276
            ],
            "name": [
                276
            ],
            "organized": [
                11
            ],
            "parent_id": [
                114
            ],
            "rating100": [
                138
            ],
            "stash_ids": [
                272
            ],
            "tag_ids": [
                114
            ],
            "url": [
                276
            ],
            "urls": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "Subscription": {
            "jobsSubscribe": [
                143
            ],
            "loggingSubscribe": [
                146
            ],
            "scanCompleteSubscribe": [
                11
            ],
            "__typename": [
                276
            ]
        },
        "SystemStatus": {
            "appSchema": [
                138
            ],
            "configPath": [
                276
            ],
            "databasePath": [
                276
            ],
            "databaseSchema": [
                138
            ],
            "ffmpegPath": [
                276
            ],
            "ffprobePath": [
                276
            ],
            "homeDir": [
                276
            ],
            "os": [
                276
            ],
            "status": [
                285
            ],
            "workingDir": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "SystemStatusEnum": {},
        "Tag": {
            "aliases": [
                276
            ],
            "child_count": [
                138
            ],
            "children": [
                286
            ],
            "created_at": [
                292
            ],
            "custom_fields": [
                148
            ],
            "description": [
                276
            ],
            "favorite": [
                11
            ],
            "gallery_count": [
                138,
                {
                    "depth": [
                        138
                    ]
                }
            ],
            "group_count": [
                138,
                {
                    "depth": [
                        138
                    ]
                }
            ],
            "id": [
                114
            ],
            "ignore_auto_tag": [
                11
            ],
            "image_count": [
                138,
                {
                    "depth": [
                        138
                    ]
                }
            ],
            "image_path": [
                276
            ],
            "movie_count": [
                138,
                {
                    "depth": [
                        138
                    ]
                }
            ],
            "name": [
                276
            ],
            "parent_count": [
                138
            ],
            "parents": [
                286
            ],
            "performer_count": [
                138,
                {
                    "depth": [
                        138
                    ]
                }
            ],
            "scene_count": [
                138,
                {
                    "depth": [
                        138
                    ]
                }
            ],
            "scene_marker_count": [
                138,
                {
                    "depth": [
                        138
                    ]
                }
            ],
            "sort_name": [
                276
            ],
            "stash_ids": [
                270
            ],
            "studio_count": [
                138,
                {
                    "depth": [
                        138
                    ]
                }
            ],
            "updated_at": [
                292
            ],
            "__typename": [
                276
            ]
        },
        "TagCreateInput": {
            "aliases": [
                276
            ],
            "child_ids": [
                114
            ],
            "custom_fields": [
                148
            ],
            "description": [
                276
            ],
            "favorite": [
                11
            ],
            "ignore_auto_tag": [
                11
            ],
            "image": [
                276
            ],
            "name": [
                276
            ],
            "parent_ids": [
                114
            ],
            "sort_name": [
                276
            ],
            "stash_ids": [
                272
            ],
            "__typename": [
                276
            ]
        },
        "TagDestroyInput": {
            "id": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "TagFilterType": {
            "AND": [
                289
            ],
            "NOT": [
                289
            ],
            "OR": [
                289
            ],
            "aliases": [
                277
            ],
            "child_count": [
                140
            ],
            "children": [
                112
            ],
            "created_at": [
                294
            ],
            "custom_fields": [
                45
            ],
            "description": [
                277
            ],
            "favorite": [
                11
            ],
            "galleries_filter": [
                89
            ],
            "gallery_count": [
                140
            ],
            "group_count": [
                140
            ],
            "groups_filter": [
                107
            ],
            "ignore_auto_tag": [
                11
            ],
            "image_count": [
                140
            ],
            "images_filter": [
                129
            ],
            "is_missing": [
                276
            ],
            "marker_count": [
                140
            ],
            "markers_filter": [
                209
            ],
            "movie_count": [
                140
            ],
            "name": [
                277
            ],
            "parent_count": [
                140
            ],
            "parents": [
                112
            ],
            "performer_count": [
                140
            ],
            "performers_filter": [
                171
            ],
            "scene_count": [
                140
            ],
            "scenes_filter": [
                203
            ],
            "sort_name": [
                277
            ],
            "stash_id_endpoint": [
                271
            ],
            "stash_ids_endpoint": [
                273
            ],
            "studio_count": [
                140
            ],
            "studios_filter": [
                281
            ],
            "updated_at": [
                294
            ],
            "__typename": [
                276
            ]
        },
        "TagUpdateInput": {
            "aliases": [
                276
            ],
            "child_ids": [
                114
            ],
            "custom_fields": [
                46
            ],
            "description": [
                276
            ],
            "favorite": [
                11
            ],
            "id": [
                114
            ],
            "ignore_auto_tag": [
                11
            ],
            "image": [
                276
            ],
            "name": [
                276
            ],
            "parent_ids": [
                114
            ],
            "sort_name": [
                276
            ],
            "stash_ids": [
                272
            ],
            "__typename": [
                276
            ]
        },
        "TagsMergeInput": {
            "destination": [
                114
            ],
            "source": [
                114
            ],
            "values": [
                290
            ],
            "__typename": [
                276
            ]
        },
        "Time": {},
        "Timestamp": {},
        "TimestampCriterionInput": {
            "modifier": [
                44
            ],
            "value": [
                276
            ],
            "value2": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "Upload": {},
        "Version": {
            "build_time": [
                276
            ],
            "hash": [
                276
            ],
            "version": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "VideoCaption": {
            "caption_type": [
                276
            ],
            "language_code": [
                276
            ],
            "__typename": [
                276
            ]
        },
        "VideoFile": {
            "audio_codec": [
                276
            ],
            "basename": [
                276
            ],
            "bit_rate": [
                138
            ],
            "created_at": [
                292
            ],
            "duration": [
                77
            ],
            "fingerprint": [
                276,
                {
                    "type": [
                        276,
                        "String!"
                    ]
                }
            ],
            "fingerprints": [
                75
            ],
            "format": [
                276
            ],
            "frame_rate": [
                77
            ],
            "height": [
                138
            ],
            "id": [
                114
            ],
            "mod_time": [
                292
            ],
            "parent_folder": [
                79
            ],
            "parent_folder_id": [
                114
            ],
            "path": [
                276
            ],
            "size": [
                139
            ],
            "updated_at": [
                292
            ],
            "video_codec": [
                276
            ],
            "width": [
                138
            ],
            "zip_file": [
                8
            ],
            "zip_file_id": [
                114
            ],
            "__typename": [
                276
            ]
        },
        "VideoFileFilterInput": {
            "audio_codec": [
                277
            ],
            "bitrate": [
                140
            ],
            "captions": [
                277
            ],
            "duration": [
                140
            ],
            "format": [
                277
            ],
            "framerate": [
                140
            ],
            "interactive": [
                11
            ],
            "interactive_speed": [
                140
            ],
            "orientation": [
                161
            ],
            "resolution": [
                189
            ],
            "video_codec": [
                277
            ],
            "__typename": [
                276
            ]
        },
        "VisualFile": {
            "on_ImageFile": [
                126
            ],
            "on_VideoFile": [
                298
            ],
            "on_BaseFile": [
                7
            ],
            "__typename": [
                276
            ]
        }
    }
}