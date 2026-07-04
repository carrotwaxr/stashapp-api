// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Any: any,
    BoolMap: Record<string, boolean>,
    Boolean: boolean,
    Float: number,
    ID: string,
    Int: number,
    Int64: string,
    Map: Record<string, unknown>,
    PluginConfigMap: Record<string, unknown>,
    String: string,
    Time: string,
    Timestamp: string,
    Upload: File,
}

export interface AutoTagMetadataOptions {
    /** IDs of performers to tag files with, or "*" for all */
    performers: (Scalars['String'][] | null)
    /** IDs of studios to tag files with, or "*" for all */
    studios: (Scalars['String'][] | null)
    /** IDs of tags to tag files with, or "*" for all */
    tags: (Scalars['String'][] | null)
    __typename: 'AutoTagMetadataOptions'
}

export type BaseFile = (BasicFile | GalleryFile | ImageFile | VideoFile) & { __isUnion?: true }

export interface BasicFile {
    basename: Scalars['String']
    created_at: Scalars['Time']
    fingerprint: (Scalars['String'] | null)
    fingerprints: Fingerprint[]
    id: Scalars['ID']
    mod_time: Scalars['Time']
    parent_folder: Folder
    /** @deprecated Use parent_folder instead */
    parent_folder_id: Scalars['ID']
    path: Scalars['String']
    size: Scalars['Int64']
    updated_at: Scalars['Time']
    zip_file: (BasicFile | null)
    /** @deprecated Use zip_file instead */
    zip_file_id: (Scalars['ID'] | null)
    __typename: 'BasicFile'
}

export type BlobsStorageType = 'DATABASE' | 'FILESYSTEM'

export type BulkUpdateIdMode = 'ADD' | 'REMOVE' | 'SET'

export type CircumisedEnum = 'CUT' | 'UNCUT'

export interface ConfigDLNAResult {
    /** True if DLNA service should be enabled by default */
    enabled: Scalars['Boolean']
    /** List of interfaces to run DLNA on. Empty for all */
    interfaces: Scalars['String'][]
    /** Defaults to 1338 */
    port: Scalars['Int']
    serverName: Scalars['String']
    /** Order to sort videos */
    videoSortOrder: Scalars['String']
    /** List of IPs whitelisted for DLNA service */
    whitelistedIPs: Scalars['String'][]
    __typename: 'ConfigDLNAResult'
}

export interface ConfigDefaultSettingsResult {
    autoTag: (AutoTagMetadataOptions | null)
    /** If true, delete file checkbox will be checked by default */
    deleteFile: (Scalars['Boolean'] | null)
    /** If true, delete generated supporting files checkbox will be checked by default */
    deleteGenerated: (Scalars['Boolean'] | null)
    generate: (GenerateMetadataOptions | null)
    identify: (IdentifyMetadataTaskOptions | null)
    scan: (ScanMetadataOptions | null)
    __typename: 'ConfigDefaultSettingsResult'
}

export interface ConfigDisableDropdownCreate {
    gallery: Scalars['Boolean']
    movie: Scalars['Boolean']
    performer: Scalars['Boolean']
    studio: Scalars['Boolean']
    tag: Scalars['Boolean']
    __typename: 'ConfigDisableDropdownCreate'
}

export interface ConfigGeneralResult {
    /** API Key */
    apiKey: Scalars['String']
    /** Path to backup directory */
    backupDirectoryPath: Scalars['String']
    /** Path to blobs - required for filesystem blob storage */
    blobsPath: Scalars['String']
    /** Where to store blobs */
    blobsStorage: BlobsStorageType
    /** Path to cache */
    cachePath: Scalars['String']
    /** Whether to calculate MD5 checksums for scene video files */
    calculateMD5: Scalars['Boolean']
    /** Path to the config file used */
    configFilePath: Scalars['String']
    /** True if galleries should be created from folders with images */
    createGalleriesFromFolders: Scalars['Boolean']
    /** Create Image Clips from Video extensions when Videos are disabled in Library */
    createImageClipsFromVideos: Scalars['Boolean']
    /** Custom Performer Image Location */
    customPerformerImageLocation: (Scalars['String'] | null)
    /** Path to the SQLite database */
    databasePath: Scalars['String']
    /** Path to trash directory - if set, deleted files will be moved here instead of being permanently deleted */
    deleteTrashPath: Scalars['String']
    /** whether to include range in generated funscript heatmaps */
    drawFunscriptHeatmapRange: Scalars['Boolean']
    /** Array of file regexp to exclude from Video Scans */
    excludes: Scalars['String'][]
    /** Path to the ffmpeg binary. If empty, stash will attempt to find it in the path or config directory */
    ffmpegPath: Scalars['String']
    /** Path to the ffprobe binary. If empty, stash will attempt to find it in the path or config directory */
    ffprobePath: Scalars['String']
    /** Regex used to identify images as gallery covers */
    galleryCoverRegex: Scalars['String']
    /** Array of gallery zip file extensions */
    galleryExtensions: Scalars['String'][]
    /** Path to generated files */
    generatedPath: Scalars['String']
    /** Array of file regexp to exclude from Image Scans */
    imageExcludes: Scalars['String'][]
    /** Array of image file extensions */
    imageExtensions: Scalars['String'][]
    /**
     * ffmpeg stream input args - injected before input file
     * These are applied when live transcoding
     */
    liveTranscodeInputArgs: Scalars['String'][]
    /**
     * ffmpeg stream output args - injected before output file
     * These are applied when live transcoding
     */
    liveTranscodeOutputArgs: Scalars['String'][]
    /** Whether to log http access */
    logAccess: Scalars['Boolean']
    /** Name of the log file */
    logFile: (Scalars['String'] | null)
    /** Maximum log size */
    logFileMaxSize: Scalars['Int']
    /** Minimum log level */
    logLevel: Scalars['String']
    /** Whether to also output to stderr */
    logOut: Scalars['Boolean']
    /** Maximum session cookie age */
    maxSessionAge: Scalars['Int']
    /** Max streaming transcode size */
    maxStreamingTranscodeSize: (StreamingResolutionEnum | null)
    /** Max generated transcode size */
    maxTranscodeSize: (StreamingResolutionEnum | null)
    /** Path to import/export files */
    metadataPath: Scalars['String']
    /** Number of parallel tasks to start during scan/generate */
    parallelTasks: Scalars['Int']
    /** Password */
    password: Scalars['String']
    /** Source of plugin packages */
    pluginPackageSources: PackageSource[]
    /** Path to plugins */
    pluginsPath: Scalars['String']
    /** Include audio stream in previews */
    previewAudio: Scalars['Boolean']
    /** Duration of end of video to exclude when generating previews */
    previewExcludeEnd: Scalars['String']
    /** Duration of start of video to exclude when generating previews */
    previewExcludeStart: Scalars['String']
    /** Preset when generating preview */
    previewPreset: PreviewPreset
    /** Preview segment duration, in seconds */
    previewSegmentDuration: Scalars['Float']
    /** Number of segments in a preview file */
    previewSegments: Scalars['Int']
    /** Python path - resolved using path if unset */
    pythonPath: Scalars['String']
    /** Source of scraper packages */
    scraperPackageSources: PackageSource[]
    /** Path to scrapers */
    scrapersPath: Scalars['String']
    /** Stash-box instances used for tagging */
    stashBoxes: StashBox[]
    /** Array of file paths to content */
    stashes: StashConfig[]
    /** Transcode Hardware Acceleration */
    transcodeHardwareAcceleration: Scalars['Boolean']
    /**
     * ffmpeg transcode input args - injected before input file
     * These are applied to generated transcodes (previews and transcodes)
     */
    transcodeInputArgs: Scalars['String'][]
    /**
     * ffmpeg transcode output args - injected before output file
     * These are applied to generated transcodes (previews and transcodes)
     */
    transcodeOutputArgs: Scalars['String'][]
    /** Username */
    username: Scalars['String']
    /** Array of video file extensions */
    videoExtensions: Scalars['String'][]
    /** Hash algorithm to use for generated file naming */
    videoFileNamingAlgorithm: HashAlgorithm
    /** Write image thumbnails to disk when generating on the fly */
    writeImageThumbnails: Scalars['Boolean']
    __typename: 'ConfigGeneralResult'
}

export interface ConfigImageLightboxResult {
    disableAnimation: (Scalars['Boolean'] | null)
    displayMode: (ImageLightboxDisplayMode | null)
    resetZoomOnNav: (Scalars['Boolean'] | null)
    scaleUp: (Scalars['Boolean'] | null)
    scrollAttemptsBeforeChange: Scalars['Int']
    scrollMode: (ImageLightboxScrollMode | null)
    slideshowDelay: (Scalars['Int'] | null)
    __typename: 'ConfigImageLightboxResult'
}

export interface ConfigInterfaceResult {
    /** If true, video will autostart on load in the scene player */
    autostartVideo: (Scalars['Boolean'] | null)
    /** If true, video will autostart when loading from play random or play selected */
    autostartVideoOnPlaySelected: (Scalars['Boolean'] | null)
    /** If true, next scene in playlist will be played at video end by default */
    continuePlaylistDefault: (Scalars['Boolean'] | null)
    /** Custom CSS */
    css: (Scalars['String'] | null)
    cssEnabled: (Scalars['Boolean'] | null)
    /** Custom Locales */
    customLocales: (Scalars['String'] | null)
    customLocalesEnabled: (Scalars['Boolean'] | null)
    /** Fields are true if creating via dropdown menus are disabled */
    disableDropdownCreate: ConfigDisableDropdownCreate
    /** Funscript Time Offset */
    funscriptOffset: (Scalars['Int'] | null)
    /** Handy Connection Key */
    handyKey: (Scalars['String'] | null)
    imageLightbox: ConfigImageLightboxResult
    /** Custom Javascript */
    javascript: (Scalars['String'] | null)
    javascriptEnabled: (Scalars['Boolean'] | null)
    /** Interface language */
    language: (Scalars['String'] | null)
    /** Maximum duration (in seconds) in which a scene video will loop in the scene player */
    maximumLoopDuration: (Scalars['Int'] | null)
    /** Ordered list of items that should be shown in the menu */
    menuItems: (Scalars['String'][] | null)
    /** True if we should not auto-open a browser window on startup */
    noBrowser: (Scalars['Boolean'] | null)
    /** True if we should send desktop notifications */
    notificationsEnabled: (Scalars['Boolean'] | null)
    /** True if SFW content mode is enabled */
    sfwContentMode: Scalars['Boolean']
    /** Show scene scrubber by default */
    showScrubber: (Scalars['Boolean'] | null)
    /** If true, studio overlays will be shown as text instead of logo images */
    showStudioAsText: (Scalars['Boolean'] | null)
    /** Enable sound on mouseover previews */
    soundOnPreview: (Scalars['Boolean'] | null)
    /** Whether to use Stash Hosted Funscript */
    useStashHostedFunscript: (Scalars['Boolean'] | null)
    /** Wall playback type */
    wallPlayback: (Scalars['String'] | null)
    /** Show title and tags in wall view */
    wallShowTitle: (Scalars['Boolean'] | null)
    __typename: 'ConfigInterfaceResult'
}


/** All configuration settings */
export interface ConfigResult {
    defaults: ConfigDefaultSettingsResult
    dlna: ConfigDLNAResult
    general: ConfigGeneralResult
    interface: ConfigInterfaceResult
    plugins: Scalars['PluginConfigMap']
    scraping: ConfigScrapingResult
    ui: Scalars['Map']
    __typename: 'ConfigResult'
}

export interface ConfigScrapingResult {
    /** Tags blacklist during scraping */
    excludeTagPatterns: Scalars['String'][]
    /** Scraper CDP path. Path to chrome executable or remote address */
    scraperCDPPath: (Scalars['String'] | null)
    /** Whether the scraper should check for invalid certificates */
    scraperCertCheck: Scalars['Boolean']
    /** Scraper user agent string */
    scraperUserAgent: (Scalars['String'] | null)
    __typename: 'ConfigScrapingResult'
}

export type CriterionModifier = 'BETWEEN' | 'EQUALS' | 'EXCLUDES' | 'GREATER_THAN' | 'INCLUDES' | 'INCLUDES_ALL' | 'IS_NULL' | 'LESS_THAN' | 'MATCHES_REGEX' | 'NOT_BETWEEN' | 'NOT_EQUALS' | 'NOT_MATCHES_REGEX' | 'NOT_NULL'

export interface DLNAIP {
    ipAddress: Scalars['String']
    /** Time until IP will be no longer allowed/disallowed */
    until: (Scalars['Time'] | null)
    __typename: 'DLNAIP'
}

export interface DLNAStatus {
    allowedIPAddresses: DLNAIP[]
    recentIPAddresses: Scalars['String'][]
    running: Scalars['Boolean']
    /** If not currently running, time until it will be started. If running, time until it will be stopped */
    until: (Scalars['Time'] | null)
    __typename: 'DLNAStatus'
}


/** Directory structure of a path */
export interface Directory {
    directories: Scalars['String'][]
    parent: (Scalars['String'] | null)
    path: Scalars['String']
    __typename: 'Directory'
}

export type FilterMode = 'GALLERIES' | 'GROUPS' | 'IMAGES' | 'MOVIES' | 'PERFORMERS' | 'SCENES' | 'SCENE_MARKERS' | 'STUDIOS' | 'TAGS'

export interface FindFilesResultType {
    count: Scalars['Int']
    /** Total duration in seconds of any video files */
    duration: Scalars['Float']
    files: BaseFile[]
    /** Total megapixels of any image files */
    megapixels: Scalars['Float']
    /** Total file size in bytes */
    size: Scalars['Int']
    __typename: 'FindFilesResultType'
}

export interface FindFoldersResultType {
    count: Scalars['Int']
    folders: Folder[]
    __typename: 'FindFoldersResultType'
}

export interface FindGalleriesResultType {
    count: Scalars['Int']
    galleries: Gallery[]
    __typename: 'FindGalleriesResultType'
}

export interface FindGalleryChaptersResultType {
    chapters: GalleryChapter[]
    count: Scalars['Int']
    __typename: 'FindGalleryChaptersResultType'
}

export interface FindGroupsResultType {
    count: Scalars['Int']
    groups: Group[]
    __typename: 'FindGroupsResultType'
}

export interface FindImagesResultType {
    count: Scalars['Int']
    /** Total file size in bytes */
    filesize: Scalars['Float']
    images: Image[]
    /** Total megapixels of the images */
    megapixels: Scalars['Float']
    __typename: 'FindImagesResultType'
}

export interface FindMoviesResultType {
    count: Scalars['Int']
    movies: Movie[]
    __typename: 'FindMoviesResultType'
}

export interface FindPerformersResultType {
    count: Scalars['Int']
    performers: Performer[]
    __typename: 'FindPerformersResultType'
}

export interface FindSceneMarkersResultType {
    count: Scalars['Int']
    scene_markers: SceneMarker[]
    __typename: 'FindSceneMarkersResultType'
}

export interface FindScenesResultType {
    count: Scalars['Int']
    /** Total duration in seconds */
    duration: Scalars['Float']
    /** Total file size in bytes */
    filesize: Scalars['Float']
    scenes: Scene[]
    __typename: 'FindScenesResultType'
}

export interface FindStudiosResultType {
    count: Scalars['Int']
    studios: Studio[]
    __typename: 'FindStudiosResultType'
}

export interface FindTagsResultType {
    count: Scalars['Int']
    tags: Tag[]
    __typename: 'FindTagsResultType'
}

export interface Fingerprint {
    type: Scalars['String']
    value: Scalars['String']
    __typename: 'Fingerprint'
}

export interface Folder {
    created_at: Scalars['Time']
    id: Scalars['ID']
    mod_time: Scalars['Time']
    parent_folder: (Folder | null)
    /** @deprecated Use parent_folder instead */
    parent_folder_id: (Scalars['ID'] | null)
    path: Scalars['String']
    updated_at: Scalars['Time']
    zip_file: (BasicFile | null)
    /** @deprecated Use zip_file instead */
    zip_file_id: (Scalars['ID'] | null)
    __typename: 'Folder'
}


/** Gallery type */
export interface Gallery {
    chapters: GalleryChapter[]
    code: (Scalars['String'] | null)
    cover: (Image | null)
    created_at: Scalars['Time']
    date: (Scalars['String'] | null)
    details: (Scalars['String'] | null)
    files: GalleryFile[]
    folder: (Folder | null)
    id: Scalars['ID']
    image: Image
    image_count: Scalars['Int']
    organized: Scalars['Boolean']
    paths: GalleryPathsType
    performers: Performer[]
    photographer: (Scalars['String'] | null)
    rating100: (Scalars['Int'] | null)
    scenes: Scene[]
    studio: (Studio | null)
    tags: Tag[]
    title: (Scalars['String'] | null)
    updated_at: Scalars['Time']
    /** @deprecated Use urls */
    url: (Scalars['String'] | null)
    urls: Scalars['String'][]
    __typename: 'Gallery'
}

export interface GalleryChapter {
    created_at: Scalars['Time']
    gallery: Gallery
    id: Scalars['ID']
    image_index: Scalars['Int']
    title: Scalars['String']
    updated_at: Scalars['Time']
    __typename: 'GalleryChapter'
}

export interface GalleryFile {
    basename: Scalars['String']
    created_at: Scalars['Time']
    fingerprint: (Scalars['String'] | null)
    fingerprints: Fingerprint[]
    id: Scalars['ID']
    mod_time: Scalars['Time']
    parent_folder: Folder
    /** @deprecated Use parent_folder instead */
    parent_folder_id: Scalars['ID']
    path: Scalars['String']
    size: Scalars['Int64']
    updated_at: Scalars['Time']
    zip_file: (BasicFile | null)
    /** @deprecated Use zip_file instead */
    zip_file_id: (Scalars['ID'] | null)
    __typename: 'GalleryFile'
}

export interface GalleryPathsType {
    cover: Scalars['String']
    preview: Scalars['String']
    __typename: 'GalleryPathsType'
}

export type GenderEnum = 'FEMALE' | 'INTERSEX' | 'MALE' | 'NON_BINARY' | 'TRANSGENDER_FEMALE' | 'TRANSGENDER_MALE'

export interface GenerateMetadataOptions {
    clipPreviews: (Scalars['Boolean'] | null)
    covers: (Scalars['Boolean'] | null)
    imagePreviews: (Scalars['Boolean'] | null)
    imageThumbnails: (Scalars['Boolean'] | null)
    interactiveHeatmapsSpeeds: (Scalars['Boolean'] | null)
    markerImagePreviews: (Scalars['Boolean'] | null)
    markerScreenshots: (Scalars['Boolean'] | null)
    markers: (Scalars['Boolean'] | null)
    phashes: (Scalars['Boolean'] | null)
    previewOptions: (GeneratePreviewOptions | null)
    previews: (Scalars['Boolean'] | null)
    sprites: (Scalars['Boolean'] | null)
    transcodes: (Scalars['Boolean'] | null)
    __typename: 'GenerateMetadataOptions'
}

export interface GeneratePreviewOptions {
    /** Duration of end of video to exclude when generating previews */
    previewExcludeEnd: (Scalars['String'] | null)
    /** Duration of start of video to exclude when generating previews */
    previewExcludeStart: (Scalars['String'] | null)
    /** Preset when generating preview */
    previewPreset: (PreviewPreset | null)
    /** Preview segment duration, in seconds */
    previewSegmentDuration: (Scalars['Float'] | null)
    /** Number of segments in a preview file */
    previewSegments: (Scalars['Int'] | null)
    __typename: 'GeneratePreviewOptions'
}

export interface Group {
    aliases: (Scalars['String'] | null)
    back_image_path: (Scalars['String'] | null)
    containing_groups: GroupDescription[]
    created_at: Scalars['Time']
    date: (Scalars['String'] | null)
    director: (Scalars['String'] | null)
    /** Duration in seconds */
    duration: (Scalars['Int'] | null)
    front_image_path: (Scalars['String'] | null)
    id: Scalars['ID']
    name: Scalars['String']
    o_counter: (Scalars['Int'] | null)
    performer_count: Scalars['Int']
    rating100: (Scalars['Int'] | null)
    scene_count: Scalars['Int']
    scenes: Scene[]
    studio: (Studio | null)
    sub_group_count: Scalars['Int']
    sub_groups: GroupDescription[]
    synopsis: (Scalars['String'] | null)
    tags: Tag[]
    updated_at: Scalars['Time']
    urls: Scalars['String'][]
    __typename: 'Group'
}


/** GroupDescription represents a relationship to a group with a description of the relationship */
export interface GroupDescription {
    description: (Scalars['String'] | null)
    group: Group
    __typename: 'GroupDescription'
}

export type HashAlgorithm = 'MD5' | 'OSHASH'

export interface HistoryMutationResult {
    count: Scalars['Int']
    history: Scalars['Time'][]
    __typename: 'HistoryMutationResult'
}

export interface IdentifyFieldOptions {
    /** creates missing objects if needed - only applicable for performers, tags and studios */
    createMissing: (Scalars['Boolean'] | null)
    field: Scalars['String']
    strategy: IdentifyFieldStrategy
    __typename: 'IdentifyFieldOptions'
}

export type IdentifyFieldStrategy = 'IGNORE' | 'MERGE' | 'OVERWRITE'

export interface IdentifyMetadataOptions {
    /** any fields missing from here are defaulted to MERGE and createMissing false */
    fieldOptions: (IdentifyFieldOptions[] | null)
    /** defaults to true if not provided */
    includeMalePerformers: (Scalars['Boolean'] | null)
    /** defaults to true if not provided */
    setCoverImage: (Scalars['Boolean'] | null)
    setOrganized: (Scalars['Boolean'] | null)
    /** tag to tag skipped multiple matches with */
    skipMultipleMatchTag: (Scalars['String'] | null)
    /** defaults to true if not provided */
    skipMultipleMatches: (Scalars['Boolean'] | null)
    /** tag to tag skipped single name performers with */
    skipSingleNamePerformerTag: (Scalars['String'] | null)
    /** defaults to true if not provided */
    skipSingleNamePerformers: (Scalars['Boolean'] | null)
    __typename: 'IdentifyMetadataOptions'
}

export interface IdentifyMetadataTaskOptions {
    /** Options defined here override the configured defaults */
    options: (IdentifyMetadataOptions | null)
    /** An ordered list of sources to identify items with. Only the first source that finds a match is used. */
    sources: IdentifySource[]
    __typename: 'IdentifyMetadataTaskOptions'
}

export interface IdentifySource {
    /** Options defined for a source override the defaults */
    options: (IdentifyMetadataOptions | null)
    source: ScraperSource
    __typename: 'IdentifySource'
}

export interface Image {
    code: (Scalars['String'] | null)
    created_at: Scalars['Time']
    date: (Scalars['String'] | null)
    details: (Scalars['String'] | null)
    /** @deprecated Use visual_files */
    files: ImageFile[]
    galleries: Gallery[]
    id: Scalars['ID']
    o_counter: (Scalars['Int'] | null)
    organized: Scalars['Boolean']
    paths: ImagePathsType
    performers: Performer[]
    photographer: (Scalars['String'] | null)
    rating100: (Scalars['Int'] | null)
    studio: (Studio | null)
    tags: Tag[]
    title: (Scalars['String'] | null)
    updated_at: Scalars['Time']
    /** @deprecated Use urls */
    url: (Scalars['String'] | null)
    urls: Scalars['String'][]
    visual_files: VisualFile[]
    __typename: 'Image'
}

export interface ImageFile {
    basename: Scalars['String']
    created_at: Scalars['Time']
    fingerprint: (Scalars['String'] | null)
    fingerprints: Fingerprint[]
    format: Scalars['String']
    height: Scalars['Int']
    id: Scalars['ID']
    mod_time: Scalars['Time']
    parent_folder: Folder
    /** @deprecated Use parent_folder instead */
    parent_folder_id: Scalars['ID']
    path: Scalars['String']
    size: Scalars['Int64']
    updated_at: Scalars['Time']
    width: Scalars['Int']
    zip_file: (BasicFile | null)
    /** @deprecated Use zip_file instead */
    zip_file_id: (Scalars['ID'] | null)
    __typename: 'ImageFile'
}

export interface ImageFileType {
    height: Scalars['Int']
    mod_time: Scalars['Time']
    size: Scalars['Int']
    width: Scalars['Int']
    __typename: 'ImageFileType'
}

export type ImageLightboxDisplayMode = 'FIT_X' | 'FIT_XY' | 'ORIGINAL'

export type ImageLightboxScrollMode = 'PAN_Y' | 'ZOOM'

export interface ImagePathsType {
    image: (Scalars['String'] | null)
    preview: (Scalars['String'] | null)
    thumbnail: (Scalars['String'] | null)
    __typename: 'ImagePathsType'
}

export type ImportDuplicateEnum = 'FAIL' | 'IGNORE' | 'OVERWRITE'

export type ImportMissingRefEnum = 'CREATE' | 'FAIL' | 'IGNORE'

export interface Job {
    addTime: Scalars['Time']
    description: Scalars['String']
    endTime: (Scalars['Time'] | null)
    error: (Scalars['String'] | null)
    id: Scalars['ID']
    progress: (Scalars['Float'] | null)
    startTime: (Scalars['Time'] | null)
    status: JobStatus
    subTasks: (Scalars['String'][] | null)
    __typename: 'Job'
}

export type JobStatus = 'CANCELLED' | 'FAILED' | 'FINISHED' | 'READY' | 'RUNNING' | 'STOPPING'

export interface JobStatusUpdate {
    job: Job
    type: JobStatusUpdateType
    __typename: 'JobStatusUpdate'
}

export type JobStatusUpdateType = 'ADD' | 'REMOVE' | 'UPDATE'

export interface LatestVersion {
    release_date: Scalars['String']
    shorthash: Scalars['String']
    url: Scalars['String']
    version: Scalars['String']
    __typename: 'LatestVersion'
}

export interface LogEntry {
    level: LogLevel
    message: Scalars['String']
    time: Scalars['Time']
    __typename: 'LogEntry'
}

export type LogLevel = 'Debug' | 'Error' | 'Info' | 'Progress' | 'Trace' | 'Warning'

export interface MarkerStringsResultType {
    count: Scalars['Int']
    id: Scalars['ID']
    title: Scalars['String']
    __typename: 'MarkerStringsResultType'
}

export interface Movie {
    aliases: (Scalars['String'] | null)
    back_image_path: (Scalars['String'] | null)
    created_at: Scalars['Time']
    date: (Scalars['String'] | null)
    director: (Scalars['String'] | null)
    /** Duration in seconds */
    duration: (Scalars['Int'] | null)
    front_image_path: (Scalars['String'] | null)
    id: Scalars['ID']
    name: Scalars['String']
    rating100: (Scalars['Int'] | null)
    scene_count: Scalars['Int']
    scenes: Scene[]
    studio: (Studio | null)
    synopsis: (Scalars['String'] | null)
    tags: Tag[]
    updated_at: Scalars['Time']
    /** @deprecated Use urls */
    url: (Scalars['String'] | null)
    urls: Scalars['String'][]
    __typename: 'Movie'
}

export interface Mutation {
    addGalleryImages: Scalars['Boolean']
    addGroupSubGroups: Scalars['Boolean']
    /** Enables an IP address for DLNA for an optional duration */
    addTempDLNAIP: Scalars['Boolean']
    /** Anonymise the database in a separate file. Optionally returns a link to download the database file */
    anonymiseDatabase: (Scalars['String'] | null)
    /** Backup the database. Optionally returns a link to download the database file */
    backupDatabase: (Scalars['String'] | null)
    bulkGalleryUpdate: (Gallery[] | null)
    bulkGroupUpdate: (Group[] | null)
    bulkImageUpdate: (Image[] | null)
    /** @deprecated Use bulkGroupUpdate instead */
    bulkMovieUpdate: (Movie[] | null)
    bulkPerformerUpdate: (Performer[] | null)
    bulkSceneMarkerUpdate: (SceneMarker[] | null)
    bulkSceneUpdate: (Scene[] | null)
    bulkStudioUpdate: (Studio[] | null)
    bulkTagUpdate: (Tag[] | null)
    configureDLNA: ConfigDLNAResult
    configureDefaults: ConfigDefaultSettingsResult
    /** Change general configuration options */
    configureGeneral: ConfigGeneralResult
    configureInterface: ConfigInterfaceResult
    /** overwrites the entire plugin configuration for the given plugin */
    configurePlugin: Scalars['Map']
    configureScraping: ConfigScrapingResult
    /**
     * overwrites the UI configuration
     * if input is provided, then the entire UI configuration is replaced
     * if partial is provided, then the partial UI configuration is merged into the existing UI configuration
     */
    configureUI: Scalars['Map']
    /**
     * sets a single UI key value
     * key is a dot separated path to the value
     */
    configureUISetting: Scalars['Map']
    deleteFiles: Scalars['Boolean']
    destroySavedFilter: Scalars['Boolean']
    /** Disables DLNA for an optional duration. Has no effect if DLNA is disabled by default */
    disableDLNA: Scalars['Boolean']
    /** Downloads and installs ffmpeg and ffprobe binaries into the configuration directory. Returns the job ID. */
    downloadFFMpeg: Scalars['ID']
    /** Enables DLNA for an optional duration. Has no effect if DLNA is enabled by default */
    enableDLNA: Scalars['Boolean']
    /** DANGEROUS: Execute an arbitrary SQL statement without returning any rows. */
    execSQL: SQLExecResult
    /** Returns a link to download the result */
    exportObjects: (Scalars['String'] | null)
    fileSetFingerprints: Scalars['Boolean']
    galleriesUpdate: ((Gallery | null)[] | null)
    galleryChapterCreate: (GalleryChapter | null)
    galleryChapterDestroy: Scalars['Boolean']
    galleryChapterUpdate: (GalleryChapter | null)
    galleryCreate: (Gallery | null)
    galleryDestroy: Scalars['Boolean']
    galleryUpdate: (Gallery | null)
    /** Generate and set (or clear) API key */
    generateAPIKey: Scalars['String']
    groupCreate: (Group | null)
    groupDestroy: Scalars['Boolean']
    groupUpdate: (Group | null)
    groupsDestroy: Scalars['Boolean']
    /** Decrements the o-counter for an image. Returns the new value */
    imageDecrementO: Scalars['Int']
    imageDestroy: Scalars['Boolean']
    /** Increments the o-counter for an image. Returns the new value */
    imageIncrementO: Scalars['Int']
    /** Resets the o-counter for a image to 0. Returns the new value */
    imageResetO: Scalars['Int']
    imageUpdate: (Image | null)
    imagesDestroy: Scalars['Boolean']
    imagesUpdate: ((Image | null)[] | null)
    /** Performs an incremental import. Returns the job ID */
    importObjects: Scalars['ID']
    /**
     * Installs the given packages.
     * If a package is already installed, it will be updated if needed..
     * If an error occurs when installing a package, the job will continue to install the remaining packages.
     * Returns the job ID
     */
    installPackages: Scalars['ID']
    /** Start auto-tagging. Returns the job ID */
    metadataAutoTag: Scalars['ID']
    /** Clean metadata. Returns the job ID */
    metadataClean: Scalars['ID']
    /** Clean generated files. Returns the job ID */
    metadataCleanGenerated: Scalars['ID']
    /** Start a full export. Outputs to the metadata directory. Returns the job ID */
    metadataExport: Scalars['ID']
    /** Start generating content. Returns the job ID */
    metadataGenerate: Scalars['ID']
    /** Identifies scenes using scrapers. Returns the job ID */
    metadataIdentify: Scalars['ID']
    /** Start an full import. Completely wipes the database and imports from the metadata directory. Returns the job ID */
    metadataImport: Scalars['ID']
    /** Start a scan. Returns the job ID */
    metadataScan: Scalars['ID']
    /** Migrates the schema to the required version. Returns the job ID */
    migrate: Scalars['ID']
    /** Migrates blobs from the old storage system to the current one */
    migrateBlobs: Scalars['ID']
    /** Migrate generated files for the current hash naming */
    migrateHashNaming: Scalars['ID']
    /** Migrates legacy scene screenshot files into the blob storage */
    migrateSceneScreenshots: Scalars['ID']
    /**
     * Moves the given files to the given destination. Returns true if successful.
     * Either the destination_folder or destination_folder_id must be provided.
     * If both are provided, the destination_folder_id takes precedence.
     * Destination folder must be a subfolder of one of the stash library paths.
     * If provided, destination_basename must be a valid filename with an extension that
     * matches one of the media extensions.
     * Creates folder hierarchy if needed.
     */
    moveFiles: Scalars['Boolean']
    /** @deprecated Use groupCreate instead */
    movieCreate: (Movie | null)
    /** @deprecated Use groupDestroy instead */
    movieDestroy: Scalars['Boolean']
    /** @deprecated Use groupUpdate instead */
    movieUpdate: (Movie | null)
    /** @deprecated Use groupsDestroy instead */
    moviesDestroy: Scalars['Boolean']
    /** Optimises the database. Returns the job ID */
    optimiseDatabase: Scalars['ID']
    performerCreate: (Performer | null)
    performerDestroy: Scalars['Boolean']
    performerUpdate: (Performer | null)
    performersDestroy: Scalars['Boolean']
    /** DANGEROUS: Execute an arbitrary SQL statement that returns rows. */
    querySQL: SQLQueryResult
    reloadPlugins: Scalars['Boolean']
    /** Reload scrapers */
    reloadScrapers: Scalars['Boolean']
    removeGalleryImages: Scalars['Boolean']
    removeGroupSubGroups: Scalars['Boolean']
    /** Removes an IP address from the temporary DLNA whitelist */
    removeTempDLNAIP: Scalars['Boolean']
    /** Reorder sub groups within a group. Returns true if successful. */
    reorderSubGroups: Scalars['Boolean']
    resetGalleryCover: Scalars['Boolean']
    /**
     * Runs a plugin operation. The operation is run immediately and does not use the job queue.
     * Returns a map of the result.
     */
    runPluginOperation: (Scalars['Any'] | null)
    /**
     * Run a plugin task.
     * If task_name is provided, then the task must exist in the plugin config and the tasks configuration
     * will be used to run the plugin.
     * If no task_name is provided, then the plugin will be executed with the arguments provided only.
     * Returns the job ID
     */
    runPluginTask: Scalars['ID']
    saveFilter: SavedFilter
    /** Increments the o-counter for a scene. Uses the current time if none provided. */
    sceneAddO: HistoryMutationResult
    /** Increments the play count for the scene. Uses the current time if none provided. */
    sceneAddPlay: HistoryMutationResult
    sceneAssignFile: Scalars['Boolean']
    sceneCreate: (Scene | null)
    /**
     * @deprecated Use sceneRemoveO instead
     * Decrements the o-counter for a scene. Returns the new value
     */
    sceneDecrementO: Scalars['Int']
    /** Decrements the o-counter for a scene, removing the last recorded time if specific time not provided. Returns the new value */
    sceneDeleteO: HistoryMutationResult
    /** Decrements the play count for the scene, removing the specific times or the last recorded time if not provided. */
    sceneDeletePlay: HistoryMutationResult
    sceneDestroy: Scalars['Boolean']
    /** Generates screenshot at specified time in seconds. Leave empty to generate default screenshot */
    sceneGenerateScreenshot: Scalars['String']
    /**
     * @deprecated Use sceneAddO instead
     * Increments the o-counter for a scene. Returns the new value
     */
    sceneIncrementO: Scalars['Int']
    /**
     * @deprecated Use sceneAddPlay instead
     * Increments the play count for the scene. Returns the new play count value.
     */
    sceneIncrementPlayCount: Scalars['Int']
    sceneMarkerCreate: (SceneMarker | null)
    sceneMarkerDestroy: Scalars['Boolean']
    sceneMarkerUpdate: (SceneMarker | null)
    sceneMarkersDestroy: Scalars['Boolean']
    sceneMerge: (Scene | null)
    /** Resets the resume time point and play duration */
    sceneResetActivity: Scalars['Boolean']
    /** Resets the o-counter for a scene to 0. Returns the new value */
    sceneResetO: Scalars['Int']
    /** Resets the play count for a scene to 0. Returns the new play count value. */
    sceneResetPlayCount: Scalars['Int']
    /** Sets the resume time point (if provided) and adds the provided duration to the scene's play duration */
    sceneSaveActivity: Scalars['Boolean']
    sceneUpdate: (Scene | null)
    scenesDestroy: Scalars['Boolean']
    scenesUpdate: ((Scene | null)[] | null)
    /** @deprecated now uses UI config */
    setDefaultFilter: Scalars['Boolean']
    setGalleryCover: Scalars['Boolean']
    /**
     * Enable/disable plugins - enabledMap is a map of plugin IDs to enabled booleans.
     * Plugins not in the map are not affected.
     */
    setPluginsEnabled: Scalars['Boolean']
    setup: Scalars['Boolean']
    /** Run batch performer tag task. Returns the job ID. */
    stashBoxBatchPerformerTag: Scalars['String']
    /** Run batch studio tag task. Returns the job ID. */
    stashBoxBatchStudioTag: Scalars['String']
    stopAllJobs: Scalars['Boolean']
    stopJob: Scalars['Boolean']
    studioCreate: (Studio | null)
    studioDestroy: Scalars['Boolean']
    studioUpdate: (Studio | null)
    studiosDestroy: Scalars['Boolean']
    /** Submit fingerprints to stash-box instance */
    submitStashBoxFingerprints: Scalars['Boolean']
    /** Submit performer as draft to stash-box instance */
    submitStashBoxPerformerDraft: (Scalars['ID'] | null)
    /** Submit scene as draft to stash-box instance */
    submitStashBoxSceneDraft: (Scalars['ID'] | null)
    tagCreate: (Tag | null)
    tagDestroy: Scalars['Boolean']
    tagUpdate: (Tag | null)
    tagsDestroy: Scalars['Boolean']
    tagsMerge: (Tag | null)
    /**
     * Uninstalls the given packages.
     * If an error occurs when uninstalling a package, the job will continue to uninstall the remaining packages.
     * Returns the job ID
     */
    uninstallPackages: Scalars['ID']
    /**
     * Updates the given packages.
     * If a package is not installed, it will not be installed.
     * If a package does not need to be updated, it will not be updated.
     * If no packages are provided, all packages of the given type will be updated.
     * If an error occurs when updating a package, the job will continue to update the remaining packages.
     * Returns the job ID.
     */
    updatePackages: Scalars['ID']
    __typename: 'Mutation'
}

export type OrientationEnum = 'LANDSCAPE' | 'PORTRAIT' | 'SQUARE'

export interface Package {
    date: (Scalars['Timestamp'] | null)
    metadata: Scalars['Map']
    name: Scalars['String']
    package_id: Scalars['String']
    requires: Package[]
    sourceURL: Scalars['String']
    /** The version of this package currently available from the remote source */
    source_package: (Package | null)
    version: (Scalars['String'] | null)
    __typename: 'Package'
}

export interface PackageSource {
    local_path: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    url: Scalars['String']
    __typename: 'PackageSource'
}

export type PackageType = 'Plugin' | 'Scraper'

export interface Performer {
    alias_list: Scalars['String'][]
    birthdate: (Scalars['String'] | null)
    career_length: (Scalars['String'] | null)
    circumcised: (CircumisedEnum | null)
    country: (Scalars['String'] | null)
    created_at: Scalars['Time']
    custom_fields: Scalars['Map']
    death_date: (Scalars['String'] | null)
    details: (Scalars['String'] | null)
    disambiguation: (Scalars['String'] | null)
    ethnicity: (Scalars['String'] | null)
    eye_color: (Scalars['String'] | null)
    fake_tits: (Scalars['String'] | null)
    favorite: Scalars['Boolean']
    gallery_count: Scalars['Int']
    gender: (GenderEnum | null)
    group_count: Scalars['Int']
    groups: Group[]
    hair_color: (Scalars['String'] | null)
    height_cm: (Scalars['Int'] | null)
    id: Scalars['ID']
    ignore_auto_tag: Scalars['Boolean']
    image_count: Scalars['Int']
    image_path: (Scalars['String'] | null)
    /** @deprecated Use urls */
    instagram: (Scalars['String'] | null)
    measurements: (Scalars['String'] | null)
    /** @deprecated use group_count instead */
    movie_count: Scalars['Int']
    /** @deprecated use groups instead */
    movies: Movie[]
    name: Scalars['String']
    o_counter: (Scalars['Int'] | null)
    penis_length: (Scalars['Float'] | null)
    performer_count: Scalars['Int']
    piercings: (Scalars['String'] | null)
    rating100: (Scalars['Int'] | null)
    scene_count: Scalars['Int']
    scenes: Scene[]
    stash_ids: StashID[]
    tags: Tag[]
    tattoos: (Scalars['String'] | null)
    /** @deprecated Use urls */
    twitter: (Scalars['String'] | null)
    updated_at: Scalars['Time']
    /** @deprecated Use urls */
    url: (Scalars['String'] | null)
    urls: (Scalars['String'][] | null)
    weight: (Scalars['Int'] | null)
    __typename: 'Performer'
}

export interface Plugin {
    description: (Scalars['String'] | null)
    enabled: Scalars['Boolean']
    hooks: (PluginHook[] | null)
    id: Scalars['ID']
    name: Scalars['String']
    paths: PluginPaths
    /**
     * Plugin IDs of plugins that this plugin depends on.
     * Applies only for UI plugins to indicate css/javascript load order.
     */
    requires: (Scalars['ID'][] | null)
    settings: (PluginSetting[] | null)
    tasks: (PluginTask[] | null)
    url: (Scalars['String'] | null)
    version: (Scalars['String'] | null)
    __typename: 'Plugin'
}

export interface PluginHook {
    description: (Scalars['String'] | null)
    hooks: (Scalars['String'][] | null)
    name: Scalars['String']
    plugin: Plugin
    __typename: 'PluginHook'
}

export interface PluginPaths {
    css: (Scalars['String'][] | null)
    javascript: (Scalars['String'][] | null)
    __typename: 'PluginPaths'
}

export interface PluginResult {
    error: (Scalars['String'] | null)
    result: (Scalars['String'] | null)
    __typename: 'PluginResult'
}

export interface PluginSetting {
    description: (Scalars['String'] | null)
    display_name: (Scalars['String'] | null)
    name: Scalars['String']
    type: PluginSettingTypeEnum
    __typename: 'PluginSetting'
}

export type PluginSettingTypeEnum = 'BOOLEAN' | 'NUMBER' | 'STRING'

export interface PluginTask {
    description: (Scalars['String'] | null)
    name: Scalars['String']
    plugin: Plugin
    __typename: 'PluginTask'
}

export type PreviewPreset = 'fast' | 'medium' | 'slow' | 'slower' | 'ultrafast' | 'veryfast' | 'veryslow'


/** The query root for this schema */
export interface Query {
    /** @deprecated Use findGalleries instead */
    allGalleries: Gallery[]
    /** @deprecated Use findImages instead */
    allImages: Image[]
    /** @deprecated Use findGroups instead */
    allMovies: Movie[]
    allPerformers: Performer[]
    /** @deprecated Use findSceneMarkers instead */
    allSceneMarkers: SceneMarker[]
    /** @deprecated Use findScenes instead */
    allScenes: Scene[]
    /** @deprecated Use findStudios instead */
    allStudios: Studio[]
    /** @deprecated Use findTags instead */
    allTags: Tag[]
    /** List available packages */
    availablePackages: Package[]
    /** Returns the current, complete configuration */
    configuration: ConfigResult
    /** Returns an array of paths for the given path */
    directory: Directory
    dlnaStatus: DLNAStatus
    /** @deprecated default filter now stored in UI config */
    findDefaultFilter: (SavedFilter | null)
    /**
     * Returns any groups of scenes that are perceptual duplicates within the queried distance
     * and the difference between their duration is smaller than durationDiff
     */
    findDuplicateScenes: Scene[][]
    /** Find a file by its id or path */
    findFile: BaseFile
    /** Queries for Files */
    findFiles: FindFilesResultType
    /** Find a file by its id or path */
    findFolder: Folder
    /** Queries for Files */
    findFolders: FindFoldersResultType
    findGalleries: FindGalleriesResultType
    findGallery: (Gallery | null)
    /** Find a group by ID */
    findGroup: (Group | null)
    /** A function which queries Group objects */
    findGroups: FindGroupsResultType
    findImage: (Image | null)
    /** A function which queries Scene objects */
    findImages: FindImagesResultType
    findJob: (Job | null)
    /**
     * @deprecated Use findGroup instead
     * Find a movie by ID
     */
    findMovie: (Movie | null)
    /**
     * @deprecated Use findGroups instead
     * A function which queries Movie objects
     */
    findMovies: FindMoviesResultType
    /** Find a performer by ID */
    findPerformer: (Performer | null)
    /** A function which queries Performer objects */
    findPerformers: FindPerformersResultType
    findSavedFilter: (SavedFilter | null)
    findSavedFilters: SavedFilter[]
    /** Find a scene by ID or Checksum */
    findScene: (Scene | null)
    findSceneByHash: (Scene | null)
    /** A function which queries SceneMarker objects */
    findSceneMarkers: FindSceneMarkersResultType
    /** A function which queries Scene objects */
    findScenes: FindScenesResultType
    findScenesByPathRegex: FindScenesResultType
    /** Find a studio by ID */
    findStudio: (Studio | null)
    /** A function which queries Studio objects */
    findStudios: FindStudiosResultType
    findTag: (Tag | null)
    findTags: FindTagsResultType
    /** List installed packages */
    installedPackages: Package[]
    jobQueue: (Job[] | null)
    latestversion: LatestVersion
    /** List available scrapers */
    listScrapers: Scraper[]
    logs: LogEntry[]
    /** Get marker strings */
    markerStrings: (MarkerStringsResultType | null)[]
    /** Retrieve random scene markers for the wall */
    markerWall: SceneMarker[]
    parseSceneFilenames: SceneParserResultType
    /** List available plugin operations */
    pluginTasks: (PluginTask[] | null)
    /** List loaded plugins */
    plugins: (Plugin[] | null)
    /** Organize scene markers by tag for a given scene ID */
    sceneMarkerTags: SceneMarkerTag[]
    /** Return valid stream paths */
    sceneStreams: SceneStreamEndpoint[]
    /** Retrieve random scenes for the wall */
    sceneWall: Scene[]
    /** Scrapes a complete gallery record based on a URL */
    scrapeGalleryURL: (ScrapedGallery | null)
    /** Scrapes a complete group record based on a URL */
    scrapeGroupURL: (ScrapedGroup | null)
    /** Scrapes a complete image record based on a URL */
    scrapeImageURL: (ScrapedImage | null)
    /**
     * @deprecated Use scrapeGroupURL instead
     * Scrapes a complete movie record based on a URL
     */
    scrapeMovieURL: (ScrapedMovie | null)
    /** Scrape for multiple performers */
    scrapeMultiPerformers: ScrapedPerformer[][]
    /** Scrape for multiple scenes */
    scrapeMultiScenes: ScrapedScene[][]
    /** Scrapes a complete performer record based on a URL */
    scrapePerformerURL: (ScrapedPerformer | null)
    /** Scrapes a complete scene record based on a URL */
    scrapeSceneURL: (ScrapedScene | null)
    /** Scrape for a single gallery */
    scrapeSingleGallery: ScrapedGallery[]
    /** Scrape for a single group */
    scrapeSingleGroup: ScrapedGroup[]
    /** Scrape for a single image */
    scrapeSingleImage: ScrapedImage[]
    /**
     * @deprecated Use scrapeSingleGroup instead
     * Scrape for a single movie
     */
    scrapeSingleMovie: ScrapedMovie[]
    /** Scrape for a single performer */
    scrapeSinglePerformer: ScrapedPerformer[]
    /** Scrape for a single scene */
    scrapeSingleScene: ScrapedScene[]
    /** Scrape for a single studio */
    scrapeSingleStudio: ScrapedStudio[]
    /** Scrape for a single tag */
    scrapeSingleTag: ScrapedTag[]
    /** Scrapes content based on a URL */
    scrapeURL: (ScrapedContent | null)
    /** Get stats */
    stats: StatsResultType
    systemStatus: SystemStatus
    validateStashBoxCredentials: StashBoxValidationResult
    version: Version
    __typename: 'Query'
}

export type ResolutionEnum = 'EIGHT_K' | 'FIVE_K' | 'FOUR_K' | 'FULL_HD' | 'HUGE' | 'LOW' | 'QUAD_HD' | 'R360P' | 'SEVEN_K' | 'SIX_K' | 'STANDARD' | 'STANDARD_HD' | 'VERY_LOW' | 'VR_HD' | 'WEB_HD'

export interface SQLExecResult {
    /**
     * The integer generated by the database in response to a command.
     * Typically this will be from an "auto increment" column when inserting a new row.
     * Not all databases support this feature, and the syntax of such statements varies.
     */
    last_insert_id: (Scalars['Int64'] | null)
    /**
     * The number of rows affected by the query, usually an UPDATE, INSERT, or DELETE.
     * Not all queries or databases support this feature.
     */
    rows_affected: (Scalars['Int64'] | null)
    __typename: 'SQLExecResult'
}

export interface SQLQueryResult {
    /** The column names, in the order they appear in the result set. */
    columns: Scalars['String'][]
    /** The returned rows. */
    rows: (Scalars['Any'] | null)[][]
    __typename: 'SQLQueryResult'
}

export interface SavedFilter {
    /**
     * @deprecated use find_filter and object_filter instead
     * JSON-encoded filter string
     */
    filter: Scalars['String']
    find_filter: (SavedFindFilterType | null)
    id: Scalars['ID']
    mode: FilterMode
    name: Scalars['String']
    object_filter: (Scalars['Map'] | null)
    ui_options: (Scalars['Map'] | null)
    __typename: 'SavedFilter'
}

export interface SavedFindFilterType {
    direction: (SortDirectionEnum | null)
    page: (Scalars['Int'] | null)
    /** use per_page = -1 to indicate all results. Defaults to 25. */
    per_page: (Scalars['Int'] | null)
    q: (Scalars['String'] | null)
    sort: (Scalars['String'] | null)
    __typename: 'SavedFindFilterType'
}

export interface ScanMetadataOptions {
    /** Forces a rescan on files even if modification time is unchanged */
    rescan: Scalars['Boolean']
    /** Generate image clip previews during scan */
    scanGenerateClipPreviews: Scalars['Boolean']
    /** Generate covers during scan */
    scanGenerateCovers: Scalars['Boolean']
    /** Generate image previews during scan */
    scanGenerateImagePreviews: Scalars['Boolean']
    /** Generate phashes during scan */
    scanGeneratePhashes: Scalars['Boolean']
    /** Generate previews during scan */
    scanGeneratePreviews: Scalars['Boolean']
    /** Generate sprites during scan */
    scanGenerateSprites: Scalars['Boolean']
    /** Generate image thumbnails during scan */
    scanGenerateThumbnails: Scalars['Boolean']
    __typename: 'ScanMetadataOptions'
}

export interface Scene {
    captions: (VideoCaption[] | null)
    code: (Scalars['String'] | null)
    created_at: Scalars['Time']
    date: (Scalars['String'] | null)
    details: (Scalars['String'] | null)
    director: (Scalars['String'] | null)
    files: VideoFile[]
    galleries: Gallery[]
    groups: SceneGroup[]
    id: Scalars['ID']
    interactive: Scalars['Boolean']
    interactive_speed: (Scalars['Int'] | null)
    /** The last time play count was updated */
    last_played_at: (Scalars['Time'] | null)
    /** @deprecated Use groups */
    movies: SceneMovie[]
    o_counter: (Scalars['Int'] | null)
    /** Times the o counter was incremented */
    o_history: Scalars['Time'][]
    organized: Scalars['Boolean']
    paths: ScenePathsType
    performers: Performer[]
    /** The number ot times a scene has been played */
    play_count: (Scalars['Int'] | null)
    /** The total time a scene has spent playing */
    play_duration: (Scalars['Float'] | null)
    /** Times a scene was played */
    play_history: Scalars['Time'][]
    rating100: (Scalars['Int'] | null)
    /** The time index a scene was left at */
    resume_time: (Scalars['Float'] | null)
    /** Return valid stream paths */
    sceneStreams: SceneStreamEndpoint[]
    scene_markers: SceneMarker[]
    stash_ids: StashID[]
    studio: (Studio | null)
    tags: Tag[]
    title: (Scalars['String'] | null)
    updated_at: Scalars['Time']
    /** @deprecated Use urls */
    url: (Scalars['String'] | null)
    urls: Scalars['String'][]
    __typename: 'Scene'
}

export interface SceneFileType {
    audio_codec: (Scalars['String'] | null)
    bitrate: (Scalars['Int'] | null)
    duration: (Scalars['Float'] | null)
    framerate: (Scalars['Float'] | null)
    height: (Scalars['Int'] | null)
    size: (Scalars['String'] | null)
    video_codec: (Scalars['String'] | null)
    width: (Scalars['Int'] | null)
    __typename: 'SceneFileType'
}

export interface SceneGroup {
    group: Group
    scene_index: (Scalars['Int'] | null)
    __typename: 'SceneGroup'
}

export interface SceneMarker {
    created_at: Scalars['Time']
    /** The optional end time of the marker (in seconds). Supports decimals. */
    end_seconds: (Scalars['Float'] | null)
    id: Scalars['ID']
    /** The path to the preview image for this marker */
    preview: Scalars['String']
    primary_tag: Tag
    scene: Scene
    /** The path to the screenshot image for this marker */
    screenshot: Scalars['String']
    /** The required start time of the marker (in seconds). Supports decimals. */
    seconds: Scalars['Float']
    /** The path to stream this marker */
    stream: Scalars['String']
    tags: Tag[]
    title: Scalars['String']
    updated_at: Scalars['Time']
    __typename: 'SceneMarker'
}

export interface SceneMarkerTag {
    scene_markers: SceneMarker[]
    tag: Tag
    __typename: 'SceneMarkerTag'
}

export interface SceneMovie {
    movie: Movie
    scene_index: (Scalars['Int'] | null)
    __typename: 'SceneMovie'
}

export interface SceneMovieID {
    movie_id: Scalars['ID']
    scene_index: (Scalars['String'] | null)
    __typename: 'SceneMovieID'
}

export interface SceneParserResult {
    code: (Scalars['String'] | null)
    date: (Scalars['String'] | null)
    details: (Scalars['String'] | null)
    director: (Scalars['String'] | null)
    gallery_ids: (Scalars['ID'][] | null)
    movies: (SceneMovieID[] | null)
    performer_ids: (Scalars['ID'][] | null)
    /** @deprecated Use 1-100 range with rating100 */
    rating: (Scalars['Int'] | null)
    rating100: (Scalars['Int'] | null)
    scene: Scene
    studio_id: (Scalars['ID'] | null)
    tag_ids: (Scalars['ID'][] | null)
    title: (Scalars['String'] | null)
    url: (Scalars['String'] | null)
    __typename: 'SceneParserResult'
}

export interface SceneParserResultType {
    count: Scalars['Int']
    results: SceneParserResult[]
    __typename: 'SceneParserResultType'
}

export interface ScenePathsType {
    caption: (Scalars['String'] | null)
    funscript: (Scalars['String'] | null)
    interactive_heatmap: (Scalars['String'] | null)
    preview: (Scalars['String'] | null)
    screenshot: (Scalars['String'] | null)
    sprite: (Scalars['String'] | null)
    stream: (Scalars['String'] | null)
    vtt: (Scalars['String'] | null)
    webp: (Scalars['String'] | null)
    __typename: 'ScenePathsType'
}

export interface SceneStreamEndpoint {
    label: (Scalars['String'] | null)
    mime_type: (Scalars['String'] | null)
    url: Scalars['String']
    __typename: 'SceneStreamEndpoint'
}


/** Type of the content a scraper generates */
export type ScrapeContentType = 'GALLERY' | 'GROUP' | 'IMAGE' | 'MOVIE' | 'PERFORMER' | 'SCENE'

export type ScrapeType = 'FRAGMENT' | 'NAME' | 'URL'


/** Scraped Content is the forming union over the different scrapers */
export type ScrapedContent = (ScrapedGallery | ScrapedGroup | ScrapedImage | ScrapedMovie | ScrapedPerformer | ScrapedScene | ScrapedStudio | ScrapedTag) & { __isUnion?: true }

export interface ScrapedGallery {
    code: (Scalars['String'] | null)
    date: (Scalars['String'] | null)
    details: (Scalars['String'] | null)
    performers: (ScrapedPerformer[] | null)
    photographer: (Scalars['String'] | null)
    studio: (ScrapedStudio | null)
    tags: (ScrapedTag[] | null)
    title: (Scalars['String'] | null)
    /** @deprecated use urls */
    url: (Scalars['String'] | null)
    urls: (Scalars['String'][] | null)
    __typename: 'ScrapedGallery'
}


/** A group from a scraping operation... */
export interface ScrapedGroup {
    aliases: (Scalars['String'] | null)
    /** This should be a base64 encoded data URL */
    back_image: (Scalars['String'] | null)
    date: (Scalars['String'] | null)
    director: (Scalars['String'] | null)
    duration: (Scalars['String'] | null)
    /** This should be a base64 encoded data URL */
    front_image: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    rating: (Scalars['String'] | null)
    stored_id: (Scalars['ID'] | null)
    studio: (ScrapedStudio | null)
    synopsis: (Scalars['String'] | null)
    tags: (ScrapedTag[] | null)
    urls: (Scalars['String'][] | null)
    __typename: 'ScrapedGroup'
}

export interface ScrapedImage {
    code: (Scalars['String'] | null)
    date: (Scalars['String'] | null)
    details: (Scalars['String'] | null)
    performers: (ScrapedPerformer[] | null)
    photographer: (Scalars['String'] | null)
    studio: (ScrapedStudio | null)
    tags: (ScrapedTag[] | null)
    title: (Scalars['String'] | null)
    urls: (Scalars['String'][] | null)
    __typename: 'ScrapedImage'
}


/** A movie from a scraping operation... */
export interface ScrapedMovie {
    aliases: (Scalars['String'] | null)
    /** This should be a base64 encoded data URL */
    back_image: (Scalars['String'] | null)
    date: (Scalars['String'] | null)
    director: (Scalars['String'] | null)
    duration: (Scalars['String'] | null)
    /** This should be a base64 encoded data URL */
    front_image: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    rating: (Scalars['String'] | null)
    stored_id: (Scalars['ID'] | null)
    studio: (ScrapedStudio | null)
    synopsis: (Scalars['String'] | null)
    tags: (ScrapedTag[] | null)
    /** @deprecated use urls */
    url: (Scalars['String'] | null)
    urls: (Scalars['String'][] | null)
    __typename: 'ScrapedMovie'
}


/** A performer from a scraping operation... */
export interface ScrapedPerformer {
    aliases: (Scalars['String'] | null)
    birthdate: (Scalars['String'] | null)
    career_length: (Scalars['String'] | null)
    circumcised: (Scalars['String'] | null)
    country: (Scalars['String'] | null)
    death_date: (Scalars['String'] | null)
    details: (Scalars['String'] | null)
    disambiguation: (Scalars['String'] | null)
    ethnicity: (Scalars['String'] | null)
    eye_color: (Scalars['String'] | null)
    fake_tits: (Scalars['String'] | null)
    gender: (Scalars['String'] | null)
    hair_color: (Scalars['String'] | null)
    height: (Scalars['String'] | null)
    /**
     * @deprecated use images instead
     * This should be a base64 encoded data URL
     */
    image: (Scalars['String'] | null)
    images: (Scalars['String'][] | null)
    /** @deprecated use urls */
    instagram: (Scalars['String'] | null)
    measurements: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    penis_length: (Scalars['String'] | null)
    piercings: (Scalars['String'] | null)
    remote_site_id: (Scalars['String'] | null)
    /** Set if performer matched */
    stored_id: (Scalars['ID'] | null)
    tags: (ScrapedTag[] | null)
    tattoos: (Scalars['String'] | null)
    /** @deprecated use urls */
    twitter: (Scalars['String'] | null)
    /** @deprecated use urls */
    url: (Scalars['String'] | null)
    urls: (Scalars['String'][] | null)
    weight: (Scalars['String'] | null)
    __typename: 'ScrapedPerformer'
}

export interface ScrapedScene {
    code: (Scalars['String'] | null)
    date: (Scalars['String'] | null)
    details: (Scalars['String'] | null)
    director: (Scalars['String'] | null)
    duration: (Scalars['Int'] | null)
    file: (SceneFileType | null)
    fingerprints: (StashBoxFingerprint[] | null)
    groups: (ScrapedGroup[] | null)
    /** This should be a base64 encoded data URL */
    image: (Scalars['String'] | null)
    /** @deprecated use groups */
    movies: (ScrapedMovie[] | null)
    performers: (ScrapedPerformer[] | null)
    remote_site_id: (Scalars['String'] | null)
    studio: (ScrapedStudio | null)
    tags: (ScrapedTag[] | null)
    title: (Scalars['String'] | null)
    /** @deprecated use urls */
    url: (Scalars['String'] | null)
    urls: (Scalars['String'][] | null)
    __typename: 'ScrapedScene'
}

export interface ScrapedStudio {
    /** Aliases must be comma-delimited to be parsed correctly */
    aliases: (Scalars['String'] | null)
    details: (Scalars['String'] | null)
    image: (Scalars['String'] | null)
    name: Scalars['String']
    parent: (ScrapedStudio | null)
    remote_site_id: (Scalars['String'] | null)
    /** Set if studio matched */
    stored_id: (Scalars['ID'] | null)
    tags: (ScrapedTag[] | null)
    /** @deprecated use urls */
    url: (Scalars['String'] | null)
    urls: (Scalars['String'][] | null)
    __typename: 'ScrapedStudio'
}

export interface ScrapedTag {
    name: Scalars['String']
    /** Remote site ID, if applicable */
    remote_site_id: (Scalars['String'] | null)
    /** Set if tag matched */
    stored_id: (Scalars['ID'] | null)
    __typename: 'ScrapedTag'
}

export interface Scraper {
    /** Details for gallery scraper */
    gallery: (ScraperSpec | null)
    /** Details for group scraper */
    group: (ScraperSpec | null)
    id: Scalars['ID']
    /** Details for image scraper */
    image: (ScraperSpec | null)
    /**
     * @deprecated use group
     * Details for movie scraper
     */
    movie: (ScraperSpec | null)
    name: Scalars['String']
    /** Details for performer scraper */
    performer: (ScraperSpec | null)
    /** Details for scene scraper */
    scene: (ScraperSpec | null)
    __typename: 'Scraper'
}

export interface ScraperSource {
    /** Scraper ID to scrape with. Should be unset if stash_box_endpoint/stash_box_index is set */
    scraper_id: (Scalars['ID'] | null)
    /** Stash-box endpoint */
    stash_box_endpoint: (Scalars['String'] | null)
    /**
     * @deprecated use stash_box_endpoint
     * Index of the configured stash-box instance to use. Should be unset if scraper_id is set
     */
    stash_box_index: (Scalars['Int'] | null)
    __typename: 'ScraperSource'
}

export interface ScraperSpec {
    supported_scrapes: ScrapeType[]
    /** URLs matching these can be scraped with */
    urls: (Scalars['String'][] | null)
    __typename: 'ScraperSpec'
}

export type SortDirectionEnum = 'ASC' | 'DESC'

export interface StashBox {
    api_key: Scalars['String']
    endpoint: Scalars['String']
    max_requests_per_minute: Scalars['Int']
    name: Scalars['String']
    __typename: 'StashBox'
}

export interface StashBoxFingerprint {
    algorithm: Scalars['String']
    duration: Scalars['Int']
    hash: Scalars['String']
    __typename: 'StashBoxFingerprint'
}

export interface StashBoxPerformerQueryResult {
    query: Scalars['String']
    results: ScrapedPerformer[]
    __typename: 'StashBoxPerformerQueryResult'
}

export interface StashBoxValidationResult {
    status: Scalars['String']
    valid: Scalars['Boolean']
    __typename: 'StashBoxValidationResult'
}

export interface StashConfig {
    excludeImage: Scalars['Boolean']
    excludeVideo: Scalars['Boolean']
    path: Scalars['String']
    __typename: 'StashConfig'
}

export interface StashID {
    endpoint: Scalars['String']
    stash_id: Scalars['String']
    updated_at: Scalars['Time']
    __typename: 'StashID'
}

export interface StatsResultType {
    gallery_count: Scalars['Int']
    group_count: Scalars['Int']
    image_count: Scalars['Int']
    images_size: Scalars['Float']
    /** @deprecated use group_count instead */
    movie_count: Scalars['Int']
    performer_count: Scalars['Int']
    scene_count: Scalars['Int']
    scenes_duration: Scalars['Float']
    scenes_played: Scalars['Int']
    scenes_size: Scalars['Float']
    studio_count: Scalars['Int']
    tag_count: Scalars['Int']
    total_o_count: Scalars['Int']
    total_play_count: Scalars['Int']
    total_play_duration: Scalars['Float']
    __typename: 'StatsResultType'
}

export type StreamingResolutionEnum = 'FOUR_K' | 'FULL_HD' | 'LOW' | 'ORIGINAL' | 'STANDARD' | 'STANDARD_HD'

export interface Studio {
    aliases: Scalars['String'][]
    child_studios: Studio[]
    created_at: Scalars['Time']
    details: (Scalars['String'] | null)
    favorite: Scalars['Boolean']
    gallery_count: Scalars['Int']
    group_count: Scalars['Int']
    groups: Group[]
    id: Scalars['ID']
    ignore_auto_tag: Scalars['Boolean']
    image_count: Scalars['Int']
    image_path: (Scalars['String'] | null)
    /** @deprecated use group_count instead */
    movie_count: Scalars['Int']
    /** @deprecated use groups instead */
    movies: Movie[]
    name: Scalars['String']
    o_counter: (Scalars['Int'] | null)
    parent_studio: (Studio | null)
    performer_count: Scalars['Int']
    rating100: (Scalars['Int'] | null)
    scene_count: Scalars['Int']
    stash_ids: StashID[]
    tags: Tag[]
    updated_at: Scalars['Time']
    /** @deprecated Use urls */
    url: (Scalars['String'] | null)
    urls: Scalars['String'][]
    __typename: 'Studio'
}

export interface Subscription {
    /** Update from the metadata manager */
    jobsSubscribe: JobStatusUpdate
    loggingSubscribe: LogEntry[]
    scanCompleteSubscribe: Scalars['Boolean']
    __typename: 'Subscription'
}

export interface SystemStatus {
    appSchema: Scalars['Int']
    configPath: (Scalars['String'] | null)
    databasePath: (Scalars['String'] | null)
    databaseSchema: (Scalars['Int'] | null)
    ffmpegPath: (Scalars['String'] | null)
    ffprobePath: (Scalars['String'] | null)
    homeDir: Scalars['String']
    os: Scalars['String']
    status: SystemStatusEnum
    workingDir: Scalars['String']
    __typename: 'SystemStatus'
}

export type SystemStatusEnum = 'NEEDS_MIGRATION' | 'OK' | 'SETUP'

export interface Tag {
    aliases: Scalars['String'][]
    child_count: Scalars['Int']
    children: Tag[]
    created_at: Scalars['Time']
    description: (Scalars['String'] | null)
    favorite: Scalars['Boolean']
    gallery_count: Scalars['Int']
    group_count: Scalars['Int']
    id: Scalars['ID']
    ignore_auto_tag: Scalars['Boolean']
    image_count: Scalars['Int']
    image_path: (Scalars['String'] | null)
    /** @deprecated use group_count instead */
    movie_count: Scalars['Int']
    name: Scalars['String']
    parent_count: Scalars['Int']
    parents: Tag[]
    performer_count: Scalars['Int']
    scene_count: Scalars['Int']
    scene_marker_count: Scalars['Int']
    /** Value that does not appear in the UI but overrides name for sorting */
    sort_name: (Scalars['String'] | null)
    stash_ids: StashID[]
    studio_count: Scalars['Int']
    updated_at: Scalars['Time']
    __typename: 'Tag'
}

export interface Version {
    build_time: Scalars['String']
    hash: Scalars['String']
    version: (Scalars['String'] | null)
    __typename: 'Version'
}

export interface VideoCaption {
    caption_type: Scalars['String']
    language_code: Scalars['String']
    __typename: 'VideoCaption'
}

export interface VideoFile {
    audio_codec: Scalars['String']
    basename: Scalars['String']
    bit_rate: Scalars['Int']
    created_at: Scalars['Time']
    duration: Scalars['Float']
    fingerprint: (Scalars['String'] | null)
    fingerprints: Fingerprint[]
    format: Scalars['String']
    frame_rate: Scalars['Float']
    height: Scalars['Int']
    id: Scalars['ID']
    mod_time: Scalars['Time']
    parent_folder: Folder
    /** @deprecated Use parent_folder instead */
    parent_folder_id: Scalars['ID']
    path: Scalars['String']
    size: Scalars['Int64']
    updated_at: Scalars['Time']
    video_codec: Scalars['String']
    width: Scalars['Int']
    zip_file: (BasicFile | null)
    /** @deprecated Use zip_file instead */
    zip_file_id: (Scalars['ID'] | null)
    __typename: 'VideoFile'
}

export type VisualFile = (ImageFile | VideoFile) & { __isUnion?: true }

export interface AddTempDLNAIPInput {address: Scalars['String'],
/** Duration to enable, in minutes. 0 or null for indefinite. */
duration?: (Scalars['Int'] | null)}

export interface AnonymiseDatabaseInput {download?: (Scalars['Boolean'] | null)}

export interface AssignSceneFileInput {file_id: Scalars['ID'],scene_id: Scalars['ID']}

export interface AutoTagMetadataInput {
/** Paths to tag, null for all files */
paths?: (Scalars['String'][] | null),
/** IDs of performers to tag files with, or "*" for all */
performers?: (Scalars['String'][] | null),
/** IDs of studios to tag files with, or "*" for all */
studios?: (Scalars['String'][] | null),
/** IDs of tags to tag files with, or "*" for all */
tags?: (Scalars['String'][] | null)}

export interface AutoTagMetadataOptionsGenqlSelection{
    /** IDs of performers to tag files with, or "*" for all */
    performers?: boolean | number
    /** IDs of studios to tag files with, or "*" for all */
    studios?: boolean | number
    /** IDs of tags to tag files with, or "*" for all */
    tags?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BackupDatabaseInput {download?: (Scalars['Boolean'] | null)}

export interface BaseFileGenqlSelection{
    basename?: boolean | number
    created_at?: boolean | number
    fingerprint?: { __args: {type: Scalars['String']} }
    fingerprints?: FingerprintGenqlSelection
    id?: boolean | number
    mod_time?: boolean | number
    parent_folder?: FolderGenqlSelection
    /** @deprecated Use parent_folder instead */
    parent_folder_id?: boolean | number
    path?: boolean | number
    size?: boolean | number
    updated_at?: boolean | number
    zip_file?: BasicFileGenqlSelection
    /** @deprecated Use zip_file instead */
    zip_file_id?: boolean | number
    on_BasicFile?: BasicFileGenqlSelection
    on_GalleryFile?: GalleryFileGenqlSelection
    on_ImageFile?: ImageFileGenqlSelection
    on_VideoFile?: VideoFileGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BasicFileGenqlSelection{
    basename?: boolean | number
    created_at?: boolean | number
    fingerprint?: { __args: {type: Scalars['String']} }
    fingerprints?: FingerprintGenqlSelection
    id?: boolean | number
    mod_time?: boolean | number
    parent_folder?: FolderGenqlSelection
    /** @deprecated Use parent_folder instead */
    parent_folder_id?: boolean | number
    path?: boolean | number
    size?: boolean | number
    updated_at?: boolean | number
    zip_file?: BasicFileGenqlSelection
    /** @deprecated Use zip_file instead */
    zip_file_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BulkGalleryUpdateInput {clientMutationId?: (Scalars['String'] | null),code?: (Scalars['String'] | null),date?: (Scalars['String'] | null),details?: (Scalars['String'] | null),ids?: (Scalars['ID'][] | null),organized?: (Scalars['Boolean'] | null),performer_ids?: (BulkUpdateIds | null),photographer?: (Scalars['String'] | null),rating100?: (Scalars['Int'] | null),scene_ids?: (BulkUpdateIds | null),studio_id?: (Scalars['ID'] | null),tag_ids?: (BulkUpdateIds | null),url?: (Scalars['String'] | null),urls?: (BulkUpdateStrings | null)}

export interface BulkGroupUpdateInput {clientMutationId?: (Scalars['String'] | null),containing_groups?: (BulkUpdateGroupDescriptionsInput | null),director?: (Scalars['String'] | null),ids?: (Scalars['ID'][] | null),rating100?: (Scalars['Int'] | null),studio_id?: (Scalars['ID'] | null),sub_groups?: (BulkUpdateGroupDescriptionsInput | null),tag_ids?: (BulkUpdateIds | null),urls?: (BulkUpdateStrings | null)}

export interface BulkImageUpdateInput {clientMutationId?: (Scalars['String'] | null),code?: (Scalars['String'] | null),date?: (Scalars['String'] | null),details?: (Scalars['String'] | null),gallery_ids?: (BulkUpdateIds | null),ids?: (Scalars['ID'][] | null),organized?: (Scalars['Boolean'] | null),performer_ids?: (BulkUpdateIds | null),photographer?: (Scalars['String'] | null),rating100?: (Scalars['Int'] | null),studio_id?: (Scalars['ID'] | null),tag_ids?: (BulkUpdateIds | null),title?: (Scalars['String'] | null),url?: (Scalars['String'] | null),urls?: (BulkUpdateStrings | null)}

export interface BulkMovieUpdateInput {clientMutationId?: (Scalars['String'] | null),director?: (Scalars['String'] | null),ids?: (Scalars['ID'][] | null),rating100?: (Scalars['Int'] | null),studio_id?: (Scalars['ID'] | null),tag_ids?: (BulkUpdateIds | null),urls?: (BulkUpdateStrings | null)}

export interface BulkPerformerUpdateInput {alias_list?: (BulkUpdateStrings | null),birthdate?: (Scalars['String'] | null),career_length?: (Scalars['String'] | null),circumcised?: (CircumisedEnum | null),clientMutationId?: (Scalars['String'] | null),country?: (Scalars['String'] | null),custom_fields?: (CustomFieldsInput | null),death_date?: (Scalars['String'] | null),details?: (Scalars['String'] | null),disambiguation?: (Scalars['String'] | null),ethnicity?: (Scalars['String'] | null),eye_color?: (Scalars['String'] | null),fake_tits?: (Scalars['String'] | null),favorite?: (Scalars['Boolean'] | null),gender?: (GenderEnum | null),hair_color?: (Scalars['String'] | null),height_cm?: (Scalars['Int'] | null),ids?: (Scalars['ID'][] | null),ignore_auto_tag?: (Scalars['Boolean'] | null),instagram?: (Scalars['String'] | null),measurements?: (Scalars['String'] | null),penis_length?: (Scalars['Float'] | null),piercings?: (Scalars['String'] | null),rating100?: (Scalars['Int'] | null),tag_ids?: (BulkUpdateIds | null),tattoos?: (Scalars['String'] | null),twitter?: (Scalars['String'] | null),url?: (Scalars['String'] | null),urls?: (BulkUpdateStrings | null),weight?: (Scalars['Int'] | null)}

export interface BulkSceneMarkerUpdateInput {ids?: (Scalars['ID'][] | null),primary_tag_id?: (Scalars['ID'] | null),tag_ids?: (BulkUpdateIds | null),title?: (Scalars['String'] | null)}

export interface BulkSceneUpdateInput {clientMutationId?: (Scalars['String'] | null),code?: (Scalars['String'] | null),date?: (Scalars['String'] | null),details?: (Scalars['String'] | null),director?: (Scalars['String'] | null),gallery_ids?: (BulkUpdateIds | null),group_ids?: (BulkUpdateIds | null),ids?: (Scalars['ID'][] | null),movie_ids?: (BulkUpdateIds | null),organized?: (Scalars['Boolean'] | null),performer_ids?: (BulkUpdateIds | null),rating100?: (Scalars['Int'] | null),studio_id?: (Scalars['ID'] | null),tag_ids?: (BulkUpdateIds | null),title?: (Scalars['String'] | null),url?: (Scalars['String'] | null),urls?: (BulkUpdateStrings | null)}

export interface BulkStudioUpdateInput {details?: (Scalars['String'] | null),favorite?: (Scalars['Boolean'] | null),ids: Scalars['ID'][],ignore_auto_tag?: (Scalars['Boolean'] | null),parent_id?: (Scalars['ID'] | null),rating100?: (Scalars['Int'] | null),tag_ids?: (BulkUpdateIds | null),url?: (Scalars['String'] | null),urls?: (BulkUpdateStrings | null)}

export interface BulkTagUpdateInput {aliases?: (BulkUpdateStrings | null),child_ids?: (BulkUpdateIds | null),description?: (Scalars['String'] | null),favorite?: (Scalars['Boolean'] | null),ids?: (Scalars['ID'][] | null),ignore_auto_tag?: (Scalars['Boolean'] | null),parent_ids?: (BulkUpdateIds | null)}

export interface BulkUpdateGroupDescriptionsInput {groups: GroupDescriptionInput[],mode: BulkUpdateIdMode}

export interface BulkUpdateIds {ids?: (Scalars['ID'][] | null),mode: BulkUpdateIdMode}

export interface BulkUpdateStrings {mode: BulkUpdateIdMode,values?: (Scalars['String'][] | null)}

export interface CircumcisionCriterionInput {modifier: CriterionModifier,value?: (CircumisedEnum[] | null)}

export interface CleanGeneratedInput {
/** Clean blob files without blob entries */
blobFiles?: (Scalars['Boolean'] | null),
/** Do a dry run. Don't delete any files */
dryRun?: (Scalars['Boolean'] | null),
/** Clean image thumbnails/clips without image entries */
imageThumbnails?: (Scalars['Boolean'] | null),
/** Clean marker files without marker entries */
markers?: (Scalars['Boolean'] | null),
/** Clean preview files without scene entries */
screenshots?: (Scalars['Boolean'] | null),
/** Clean sprite and vtt files without scene entries */
sprites?: (Scalars['Boolean'] | null),
/** Clean scene transcodes without scene entries */
transcodes?: (Scalars['Boolean'] | null)}

export interface CleanMetadataInput {
/** Do a dry run. Don't delete any files */
dryRun: Scalars['Boolean'],paths?: (Scalars['String'][] | null)}

export interface ConfigDLNAInput {
/** True if DLNA service should be enabled by default */
enabled?: (Scalars['Boolean'] | null),
/** List of interfaces to run DLNA on. Empty for all */
interfaces?: (Scalars['String'][] | null),
/** Defaults to 1338 */
port?: (Scalars['Int'] | null),serverName?: (Scalars['String'] | null),
/** Order to sort videos */
videoSortOrder?: (Scalars['String'] | null),
/** List of IPs whitelisted for DLNA service */
whitelistedIPs?: (Scalars['String'][] | null)}

export interface ConfigDLNAResultGenqlSelection{
    /** True if DLNA service should be enabled by default */
    enabled?: boolean | number
    /** List of interfaces to run DLNA on. Empty for all */
    interfaces?: boolean | number
    /** Defaults to 1338 */
    port?: boolean | number
    serverName?: boolean | number
    /** Order to sort videos */
    videoSortOrder?: boolean | number
    /** List of IPs whitelisted for DLNA service */
    whitelistedIPs?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ConfigDefaultSettingsInput {autoTag?: (AutoTagMetadataInput | null),
/** If true, delete file checkbox will be checked by default */
deleteFile?: (Scalars['Boolean'] | null),
/** If true, delete generated files checkbox will be checked by default */
deleteGenerated?: (Scalars['Boolean'] | null),generate?: (GenerateMetadataInput | null),identify?: (IdentifyMetadataInput | null),scan?: (ScanMetadataInput | null)}

export interface ConfigDefaultSettingsResultGenqlSelection{
    autoTag?: AutoTagMetadataOptionsGenqlSelection
    /** If true, delete file checkbox will be checked by default */
    deleteFile?: boolean | number
    /** If true, delete generated supporting files checkbox will be checked by default */
    deleteGenerated?: boolean | number
    generate?: GenerateMetadataOptionsGenqlSelection
    identify?: IdentifyMetadataTaskOptionsGenqlSelection
    scan?: ScanMetadataOptionsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ConfigDisableDropdownCreateGenqlSelection{
    gallery?: boolean | number
    movie?: boolean | number
    performer?: boolean | number
    studio?: boolean | number
    tag?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ConfigDisableDropdownCreateInput {gallery?: (Scalars['Boolean'] | null),movie?: (Scalars['Boolean'] | null),performer?: (Scalars['Boolean'] | null),studio?: (Scalars['Boolean'] | null),tag?: (Scalars['Boolean'] | null)}

export interface ConfigGeneralInput {
/** Path to backup directory */
backupDirectoryPath?: (Scalars['String'] | null),
/** Path to blobs - required for filesystem blob storage */
blobsPath?: (Scalars['String'] | null),
/** Where to store blobs */
blobsStorage?: (BlobsStorageType | null),
/** Path to cache */
cachePath?: (Scalars['String'] | null),
/** Whether to calculate MD5 checksums for scene video files */
calculateMD5?: (Scalars['Boolean'] | null),
/** True if galleries should be created from folders with images */
createGalleriesFromFolders?: (Scalars['Boolean'] | null),
/** Create Image Clips from Video extensions when Videos are disabled in Library */
createImageClipsFromVideos?: (Scalars['Boolean'] | null),
/** Custom Performer Image Location */
customPerformerImageLocation?: (Scalars['String'] | null),
/** Path to the SQLite database */
databasePath?: (Scalars['String'] | null),
/** Path to trash directory - if set, deleted files will be moved here instead of being permanently deleted */
deleteTrashPath?: (Scalars['String'] | null),
/** whether to include range in generated funscript heatmaps */
drawFunscriptHeatmapRange?: (Scalars['Boolean'] | null),
/** Array of file regexp to exclude from Video Scans */
excludes?: (Scalars['String'][] | null),
/** Path to the ffmpeg binary. If empty, stash will attempt to find it in the path or config directory */
ffmpegPath?: (Scalars['String'] | null),
/** Path to the ffprobe binary. If empty, stash will attempt to find it in the path or config directory */
ffprobePath?: (Scalars['String'] | null),
/** Regex used to identify images as gallery covers */
galleryCoverRegex?: (Scalars['String'] | null),
/** Array of gallery zip file extensions */
galleryExtensions?: (Scalars['String'][] | null),
/** Path to generated files */
generatedPath?: (Scalars['String'] | null),
/** Array of file regexp to exclude from Image Scans */
imageExcludes?: (Scalars['String'][] | null),
/** Array of image file extensions */
imageExtensions?: (Scalars['String'][] | null),
/**
 * ffmpeg stream input args - injected before input file
 * These are applied when live transcoding
 */
liveTranscodeInputArgs?: (Scalars['String'][] | null),
/**
 * ffmpeg stream output args - injected before output file
 * These are applied when live transcoding
 */
liveTranscodeOutputArgs?: (Scalars['String'][] | null),
/** Whether to log http access */
logAccess?: (Scalars['Boolean'] | null),
/** Name of the log file */
logFile?: (Scalars['String'] | null),
/** Maximum log size */
logFileMaxSize?: (Scalars['Int'] | null),
/** Minimum log level */
logLevel?: (Scalars['String'] | null),
/** Whether to also output to stderr */
logOut?: (Scalars['Boolean'] | null),
/** Maximum session cookie age */
maxSessionAge?: (Scalars['Int'] | null),
/** Max streaming transcode size */
maxStreamingTranscodeSize?: (StreamingResolutionEnum | null),
/** Max generated transcode size */
maxTranscodeSize?: (StreamingResolutionEnum | null),
/** Path to import/export files */
metadataPath?: (Scalars['String'] | null),
/** Number of parallel tasks to start during scan/generate */
parallelTasks?: (Scalars['Int'] | null),
/** Password */
password?: (Scalars['String'] | null),
/** Source of plugin packages */
pluginPackageSources?: (PackageSourceInput[] | null),
/** Path to plugins */
pluginsPath?: (Scalars['String'] | null),
/** Include audio stream in previews */
previewAudio?: (Scalars['Boolean'] | null),
/** Duration of end of video to exclude when generating previews */
previewExcludeEnd?: (Scalars['String'] | null),
/** Duration of start of video to exclude when generating previews */
previewExcludeStart?: (Scalars['String'] | null),
/** Preset when generating preview */
previewPreset?: (PreviewPreset | null),
/** Preview segment duration, in seconds */
previewSegmentDuration?: (Scalars['Float'] | null),
/** Number of segments in a preview file */
previewSegments?: (Scalars['Int'] | null),
/** Python path - resolved using path if unset */
pythonPath?: (Scalars['String'] | null),
/** Source of scraper packages */
scraperPackageSources?: (PackageSourceInput[] | null),
/** Path to scrapers */
scrapersPath?: (Scalars['String'] | null),
/** Stash-box instances used for tagging */
stashBoxes?: (StashBoxInput[] | null),
/** Array of file paths to content */
stashes?: (StashConfigInput[] | null),
/** Transcode Hardware Acceleration */
transcodeHardwareAcceleration?: (Scalars['Boolean'] | null),
/**
 * ffmpeg transcode input args - injected before input file
 * These are applied to generated transcodes (previews and transcodes)
 */
transcodeInputArgs?: (Scalars['String'][] | null),
/**
 * ffmpeg transcode output args - injected before output file
 * These are applied to generated transcodes (previews and transcodes)
 */
transcodeOutputArgs?: (Scalars['String'][] | null),
/** Username */
username?: (Scalars['String'] | null),
/** Array of video file extensions */
videoExtensions?: (Scalars['String'][] | null),
/** Hash algorithm to use for generated file naming */
videoFileNamingAlgorithm?: (HashAlgorithm | null),
/** Write image thumbnails to disk when generating on the fly */
writeImageThumbnails?: (Scalars['Boolean'] | null)}

export interface ConfigGeneralResultGenqlSelection{
    /** API Key */
    apiKey?: boolean | number
    /** Path to backup directory */
    backupDirectoryPath?: boolean | number
    /** Path to blobs - required for filesystem blob storage */
    blobsPath?: boolean | number
    /** Where to store blobs */
    blobsStorage?: boolean | number
    /** Path to cache */
    cachePath?: boolean | number
    /** Whether to calculate MD5 checksums for scene video files */
    calculateMD5?: boolean | number
    /** Path to the config file used */
    configFilePath?: boolean | number
    /** True if galleries should be created from folders with images */
    createGalleriesFromFolders?: boolean | number
    /** Create Image Clips from Video extensions when Videos are disabled in Library */
    createImageClipsFromVideos?: boolean | number
    /** Custom Performer Image Location */
    customPerformerImageLocation?: boolean | number
    /** Path to the SQLite database */
    databasePath?: boolean | number
    /** Path to trash directory - if set, deleted files will be moved here instead of being permanently deleted */
    deleteTrashPath?: boolean | number
    /** whether to include range in generated funscript heatmaps */
    drawFunscriptHeatmapRange?: boolean | number
    /** Array of file regexp to exclude from Video Scans */
    excludes?: boolean | number
    /** Path to the ffmpeg binary. If empty, stash will attempt to find it in the path or config directory */
    ffmpegPath?: boolean | number
    /** Path to the ffprobe binary. If empty, stash will attempt to find it in the path or config directory */
    ffprobePath?: boolean | number
    /** Regex used to identify images as gallery covers */
    galleryCoverRegex?: boolean | number
    /** Array of gallery zip file extensions */
    galleryExtensions?: boolean | number
    /** Path to generated files */
    generatedPath?: boolean | number
    /** Array of file regexp to exclude from Image Scans */
    imageExcludes?: boolean | number
    /** Array of image file extensions */
    imageExtensions?: boolean | number
    /**
     * ffmpeg stream input args - injected before input file
     * These are applied when live transcoding
     */
    liveTranscodeInputArgs?: boolean | number
    /**
     * ffmpeg stream output args - injected before output file
     * These are applied when live transcoding
     */
    liveTranscodeOutputArgs?: boolean | number
    /** Whether to log http access */
    logAccess?: boolean | number
    /** Name of the log file */
    logFile?: boolean | number
    /** Maximum log size */
    logFileMaxSize?: boolean | number
    /** Minimum log level */
    logLevel?: boolean | number
    /** Whether to also output to stderr */
    logOut?: boolean | number
    /** Maximum session cookie age */
    maxSessionAge?: boolean | number
    /** Max streaming transcode size */
    maxStreamingTranscodeSize?: boolean | number
    /** Max generated transcode size */
    maxTranscodeSize?: boolean | number
    /** Path to import/export files */
    metadataPath?: boolean | number
    /** Number of parallel tasks to start during scan/generate */
    parallelTasks?: boolean | number
    /** Password */
    password?: boolean | number
    /** Source of plugin packages */
    pluginPackageSources?: PackageSourceGenqlSelection
    /** Path to plugins */
    pluginsPath?: boolean | number
    /** Include audio stream in previews */
    previewAudio?: boolean | number
    /** Duration of end of video to exclude when generating previews */
    previewExcludeEnd?: boolean | number
    /** Duration of start of video to exclude when generating previews */
    previewExcludeStart?: boolean | number
    /** Preset when generating preview */
    previewPreset?: boolean | number
    /** Preview segment duration, in seconds */
    previewSegmentDuration?: boolean | number
    /** Number of segments in a preview file */
    previewSegments?: boolean | number
    /** Python path - resolved using path if unset */
    pythonPath?: boolean | number
    /** Source of scraper packages */
    scraperPackageSources?: PackageSourceGenqlSelection
    /** Path to scrapers */
    scrapersPath?: boolean | number
    /** Stash-box instances used for tagging */
    stashBoxes?: StashBoxGenqlSelection
    /** Array of file paths to content */
    stashes?: StashConfigGenqlSelection
    /** Transcode Hardware Acceleration */
    transcodeHardwareAcceleration?: boolean | number
    /**
     * ffmpeg transcode input args - injected before input file
     * These are applied to generated transcodes (previews and transcodes)
     */
    transcodeInputArgs?: boolean | number
    /**
     * ffmpeg transcode output args - injected before output file
     * These are applied to generated transcodes (previews and transcodes)
     */
    transcodeOutputArgs?: boolean | number
    /** Username */
    username?: boolean | number
    /** Array of video file extensions */
    videoExtensions?: boolean | number
    /** Hash algorithm to use for generated file naming */
    videoFileNamingAlgorithm?: boolean | number
    /** Write image thumbnails to disk when generating on the fly */
    writeImageThumbnails?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ConfigImageLightboxInput {disableAnimation?: (Scalars['Boolean'] | null),displayMode?: (ImageLightboxDisplayMode | null),resetZoomOnNav?: (Scalars['Boolean'] | null),scaleUp?: (Scalars['Boolean'] | null),scrollAttemptsBeforeChange?: (Scalars['Int'] | null),scrollMode?: (ImageLightboxScrollMode | null),slideshowDelay?: (Scalars['Int'] | null)}

export interface ConfigImageLightboxResultGenqlSelection{
    disableAnimation?: boolean | number
    displayMode?: boolean | number
    resetZoomOnNav?: boolean | number
    scaleUp?: boolean | number
    scrollAttemptsBeforeChange?: boolean | number
    scrollMode?: boolean | number
    slideshowDelay?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ConfigInterfaceInput {
/** If true, video will autostart on load in the scene player */
autostartVideo?: (Scalars['Boolean'] | null),
/** If true, video will autostart when loading from play random or play selected */
autostartVideoOnPlaySelected?: (Scalars['Boolean'] | null),
/** If true, next scene in playlist will be played at video end by default */
continuePlaylistDefault?: (Scalars['Boolean'] | null),
/** Custom CSS */
css?: (Scalars['String'] | null),cssEnabled?: (Scalars['Boolean'] | null),
/** Custom Locales */
customLocales?: (Scalars['String'] | null),customLocalesEnabled?: (Scalars['Boolean'] | null),
/** Set to true to disable creating new objects via the dropdown menus */
disableDropdownCreate?: (ConfigDisableDropdownCreateInput | null),
/** Funscript Time Offset */
funscriptOffset?: (Scalars['Int'] | null),
/** Handy Connection Key */
handyKey?: (Scalars['String'] | null),imageLightbox?: (ConfigImageLightboxInput | null),
/** Custom Javascript */
javascript?: (Scalars['String'] | null),javascriptEnabled?: (Scalars['Boolean'] | null),
/** Interface language */
language?: (Scalars['String'] | null),
/** Maximum duration (in seconds) in which a scene video will loop in the scene player */
maximumLoopDuration?: (Scalars['Int'] | null),
/** Ordered list of items that should be shown in the menu */
menuItems?: (Scalars['String'][] | null),
/** True if we should not auto-open a browser window on startup */
noBrowser?: (Scalars['Boolean'] | null),
/** True if we should send notifications to the desktop */
notificationsEnabled?: (Scalars['Boolean'] | null),
/** True if SFW content mode is enabled */
sfwContentMode?: (Scalars['Boolean'] | null),
/** Show scene scrubber by default */
showScrubber?: (Scalars['Boolean'] | null),
/** If true, studio overlays will be shown as text instead of logo images */
showStudioAsText?: (Scalars['Boolean'] | null),
/** Enable sound on mouseover previews */
soundOnPreview?: (Scalars['Boolean'] | null),
/** Whether to use Stash Hosted Funscript */
useStashHostedFunscript?: (Scalars['Boolean'] | null),
/** Wall playback type */
wallPlayback?: (Scalars['String'] | null),
/** Show title and tags in wall view */
wallShowTitle?: (Scalars['Boolean'] | null)}

export interface ConfigInterfaceResultGenqlSelection{
    /** If true, video will autostart on load in the scene player */
    autostartVideo?: boolean | number
    /** If true, video will autostart when loading from play random or play selected */
    autostartVideoOnPlaySelected?: boolean | number
    /** If true, next scene in playlist will be played at video end by default */
    continuePlaylistDefault?: boolean | number
    /** Custom CSS */
    css?: boolean | number
    cssEnabled?: boolean | number
    /** Custom Locales */
    customLocales?: boolean | number
    customLocalesEnabled?: boolean | number
    /** Fields are true if creating via dropdown menus are disabled */
    disableDropdownCreate?: ConfigDisableDropdownCreateGenqlSelection
    /** Funscript Time Offset */
    funscriptOffset?: boolean | number
    /** Handy Connection Key */
    handyKey?: boolean | number
    imageLightbox?: ConfigImageLightboxResultGenqlSelection
    /** Custom Javascript */
    javascript?: boolean | number
    javascriptEnabled?: boolean | number
    /** Interface language */
    language?: boolean | number
    /** Maximum duration (in seconds) in which a scene video will loop in the scene player */
    maximumLoopDuration?: boolean | number
    /** Ordered list of items that should be shown in the menu */
    menuItems?: boolean | number
    /** True if we should not auto-open a browser window on startup */
    noBrowser?: boolean | number
    /** True if we should send desktop notifications */
    notificationsEnabled?: boolean | number
    /** True if SFW content mode is enabled */
    sfwContentMode?: boolean | number
    /** Show scene scrubber by default */
    showScrubber?: boolean | number
    /** If true, studio overlays will be shown as text instead of logo images */
    showStudioAsText?: boolean | number
    /** Enable sound on mouseover previews */
    soundOnPreview?: boolean | number
    /** Whether to use Stash Hosted Funscript */
    useStashHostedFunscript?: boolean | number
    /** Wall playback type */
    wallPlayback?: boolean | number
    /** Show title and tags in wall view */
    wallShowTitle?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** All configuration settings */
export interface ConfigResultGenqlSelection{
    defaults?: ConfigDefaultSettingsResultGenqlSelection
    dlna?: ConfigDLNAResultGenqlSelection
    general?: ConfigGeneralResultGenqlSelection
    interface?: ConfigInterfaceResultGenqlSelection
    plugins?: { __args: {include?: (Scalars['ID'][] | null)} } | boolean | number
    scraping?: ConfigScrapingResultGenqlSelection
    ui?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ConfigScrapingInput {
/** Tags blacklist during scraping */
excludeTagPatterns?: (Scalars['String'][] | null),
/** Scraper CDP path. Path to chrome executable or remote address */
scraperCDPPath?: (Scalars['String'] | null),
/** Whether the scraper should check for invalid certificates */
scraperCertCheck?: (Scalars['Boolean'] | null),
/** Scraper user agent string */
scraperUserAgent?: (Scalars['String'] | null)}

export interface ConfigScrapingResultGenqlSelection{
    /** Tags blacklist during scraping */
    excludeTagPatterns?: boolean | number
    /** Scraper CDP path. Path to chrome executable or remote address */
    scraperCDPPath?: boolean | number
    /** Whether the scraper should check for invalid certificates */
    scraperCertCheck?: boolean | number
    /** Scraper user agent string */
    scraperUserAgent?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomFieldCriterionInput {field: Scalars['String'],modifier: CriterionModifier,value?: (Scalars['Any'][] | null)}

export interface CustomFieldsInput {
/** If populated, the entire custom fields map will be replaced with this value */
full?: (Scalars['Map'] | null),
/** If populated, only the keys in this map will be updated */
partial?: (Scalars['Map'] | null),
/** Remove any keys in this list */
remove?: (Scalars['String'][] | null)}

export interface DLNAIPGenqlSelection{
    ipAddress?: boolean | number
    /** Time until IP will be no longer allowed/disallowed */
    until?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DLNAStatusGenqlSelection{
    allowedIPAddresses?: DLNAIPGenqlSelection
    recentIPAddresses?: boolean | number
    running?: boolean | number
    /** If not currently running, time until it will be started. If running, time until it will be stopped */
    until?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DateCriterionInput {modifier: CriterionModifier,value: Scalars['String'],value2?: (Scalars['String'] | null)}

export interface DestroyFilterInput {id: Scalars['ID']}


/** Directory structure of a path */
export interface DirectoryGenqlSelection{
    directories?: boolean | number
    parent?: boolean | number
    path?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DisableDLNAInput {
/** Duration to enable, in minutes. 0 or null for indefinite. */
duration?: (Scalars['Int'] | null)}

export interface EnableDLNAInput {
/** Duration to enable, in minutes. 0 or null for indefinite. */
duration?: (Scalars['Int'] | null)}

export interface ExportObjectTypeInput {all?: (Scalars['Boolean'] | null),ids?: (Scalars['String'][] | null)}

export interface ExportObjectsInput {galleries?: (ExportObjectTypeInput | null),groups?: (ExportObjectTypeInput | null),images?: (ExportObjectTypeInput | null),includeDependencies?: (Scalars['Boolean'] | null),movies?: (ExportObjectTypeInput | null),performers?: (ExportObjectTypeInput | null),scenes?: (ExportObjectTypeInput | null),studios?: (ExportObjectTypeInput | null),tags?: (ExportObjectTypeInput | null)}

export interface FileFilterType {AND?: (FileFilterType | null),NOT?: (FileFilterType | null),OR?: (FileFilterType | null),basename?: (StringCriterionInput | null),
/** Filter by creation time */
created_at?: (TimestampCriterionInput | null),dir?: (StringCriterionInput | null),
/** Filter files that have an exact match available */
duplicated?: (PHashDuplicationCriterionInput | null),
/** Filter by related galleries that meet this criteria */
galleries_filter?: (GalleryFilterType | null),gallery_count?: (IntCriterionInput | null),
/** find files based on hash */
hashes?: (FingerprintFilterInput[] | null),image_count?: (IntCriterionInput | null),image_file_filter?: (ImageFileFilterInput | null),
/** Filter by related images that meet this criteria */
images_filter?: (ImageFilterType | null),
/** Filter by modification time */
mod_time?: (TimestampCriterionInput | null),parent_folder?: (HierarchicalMultiCriterionInput | null),path?: (StringCriterionInput | null),scene_count?: (IntCriterionInput | null),
/** Filter by related scenes that meet this criteria */
scenes_filter?: (SceneFilterType | null),
/** Filter by last update time */
updated_at?: (TimestampCriterionInput | null),video_file_filter?: (VideoFileFilterInput | null),zip_file?: (MultiCriterionInput | null)}

export interface FileSetFingerprintsInput {
/** only supplied fingerprint types will be modified */
fingerprints: SetFingerprintsInput[],id: Scalars['ID']}

export interface FindFilesResultTypeGenqlSelection{
    count?: boolean | number
    /** Total duration in seconds of any video files */
    duration?: boolean | number
    files?: BaseFileGenqlSelection
    /** Total megapixels of any image files */
    megapixels?: boolean | number
    /** Total file size in bytes */
    size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FindFilterType {direction?: (SortDirectionEnum | null),page?: (Scalars['Int'] | null),
/** use per_page = -1 to indicate all results. Defaults to 25. */
per_page?: (Scalars['Int'] | null),q?: (Scalars['String'] | null),sort?: (Scalars['String'] | null)}

export interface FindFoldersResultTypeGenqlSelection{
    count?: boolean | number
    folders?: FolderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FindGalleriesResultTypeGenqlSelection{
    count?: boolean | number
    galleries?: GalleryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FindGalleryChaptersResultTypeGenqlSelection{
    chapters?: GalleryChapterGenqlSelection
    count?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FindGroupsResultTypeGenqlSelection{
    count?: boolean | number
    groups?: GroupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FindImagesResultTypeGenqlSelection{
    count?: boolean | number
    /** Total file size in bytes */
    filesize?: boolean | number
    images?: ImageGenqlSelection
    /** Total megapixels of the images */
    megapixels?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FindJobInput {id: Scalars['ID']}

export interface FindMoviesResultTypeGenqlSelection{
    count?: boolean | number
    movies?: MovieGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FindPerformersResultTypeGenqlSelection{
    count?: boolean | number
    performers?: PerformerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FindSceneMarkersResultTypeGenqlSelection{
    count?: boolean | number
    scene_markers?: SceneMarkerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FindScenesResultTypeGenqlSelection{
    count?: boolean | number
    /** Total duration in seconds */
    duration?: boolean | number
    /** Total file size in bytes */
    filesize?: boolean | number
    scenes?: SceneGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FindStudiosResultTypeGenqlSelection{
    count?: boolean | number
    studios?: StudioGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FindTagsResultTypeGenqlSelection{
    count?: boolean | number
    tags?: TagGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FingerprintGenqlSelection{
    type?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FingerprintFilterInput {
/** Hamming distance - defaults to 0 */
distance?: (Scalars['Int'] | null),type: Scalars['String'],value: Scalars['String']}

export interface FloatCriterionInput {modifier: CriterionModifier,value: Scalars['Float'],value2?: (Scalars['Float'] | null)}

export interface FolderGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    mod_time?: boolean | number
    parent_folder?: FolderGenqlSelection
    /** @deprecated Use parent_folder instead */
    parent_folder_id?: boolean | number
    path?: boolean | number
    updated_at?: boolean | number
    zip_file?: BasicFileGenqlSelection
    /** @deprecated Use zip_file instead */
    zip_file_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FolderFilterType {AND?: (FolderFilterType | null),NOT?: (FolderFilterType | null),OR?: (FolderFilterType | null),
/** Filter by creation time */
created_at?: (TimestampCriterionInput | null),
/** Filter by files that meet this criteria */
files_filter?: (FileFilterType | null),
/** Filter by related galleries that meet this criteria */
galleries_filter?: (GalleryFilterType | null),gallery_count?: (IntCriterionInput | null),
/** Filter by modification time */
mod_time?: (TimestampCriterionInput | null),parent_folder?: (HierarchicalMultiCriterionInput | null),path?: (StringCriterionInput | null),
/** Filter by last update time */
updated_at?: (TimestampCriterionInput | null),zip_file?: (MultiCriterionInput | null)}


/** Gallery type */
export interface GalleryGenqlSelection{
    chapters?: GalleryChapterGenqlSelection
    code?: boolean | number
    cover?: ImageGenqlSelection
    created_at?: boolean | number
    date?: boolean | number
    details?: boolean | number
    files?: GalleryFileGenqlSelection
    folder?: FolderGenqlSelection
    id?: boolean | number
    image?: (ImageGenqlSelection & { __args: {index: Scalars['Int']} })
    image_count?: boolean | number
    organized?: boolean | number
    paths?: GalleryPathsTypeGenqlSelection
    performers?: PerformerGenqlSelection
    photographer?: boolean | number
    rating100?: boolean | number
    scenes?: SceneGenqlSelection
    studio?: StudioGenqlSelection
    tags?: TagGenqlSelection
    title?: boolean | number
    updated_at?: boolean | number
    /** @deprecated Use urls */
    url?: boolean | number
    urls?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GalleryAddInput {gallery_id: Scalars['ID'],image_ids: Scalars['ID'][]}

export interface GalleryChapterGenqlSelection{
    created_at?: boolean | number
    gallery?: GalleryGenqlSelection
    id?: boolean | number
    image_index?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GalleryChapterCreateInput {gallery_id: Scalars['ID'],image_index: Scalars['Int'],title: Scalars['String']}

export interface GalleryChapterUpdateInput {gallery_id?: (Scalars['ID'] | null),id: Scalars['ID'],image_index?: (Scalars['Int'] | null),title?: (Scalars['String'] | null)}

export interface GalleryCreateInput {code?: (Scalars['String'] | null),date?: (Scalars['String'] | null),details?: (Scalars['String'] | null),organized?: (Scalars['Boolean'] | null),performer_ids?: (Scalars['ID'][] | null),photographer?: (Scalars['String'] | null),rating100?: (Scalars['Int'] | null),scene_ids?: (Scalars['ID'][] | null),studio_id?: (Scalars['ID'] | null),tag_ids?: (Scalars['ID'][] | null),title: Scalars['String'],url?: (Scalars['String'] | null),urls?: (Scalars['String'][] | null)}

export interface GalleryDestroyInput {
/**
 * If true, then the zip file will be deleted if the gallery is zip-file-based.
 * If gallery is folder-based, then any files not associated with other
 * galleries will be deleted, along with the folder, if it is not empty.
 */
delete_file?: (Scalars['Boolean'] | null),delete_generated?: (Scalars['Boolean'] | null),ids: Scalars['ID'][]}

export interface GalleryFileGenqlSelection{
    basename?: boolean | number
    created_at?: boolean | number
    fingerprint?: { __args: {type: Scalars['String']} }
    fingerprints?: FingerprintGenqlSelection
    id?: boolean | number
    mod_time?: boolean | number
    parent_folder?: FolderGenqlSelection
    /** @deprecated Use parent_folder instead */
    parent_folder_id?: boolean | number
    path?: boolean | number
    size?: boolean | number
    updated_at?: boolean | number
    zip_file?: BasicFileGenqlSelection
    /** @deprecated Use zip_file instead */
    zip_file_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GalleryFilterType {AND?: (GalleryFilterType | null),NOT?: (GalleryFilterType | null),OR?: (GalleryFilterType | null),
/** Filter by average image resolution */
average_resolution?: (ResolutionCriterionInput | null),
/** Filter by file checksum */
checksum?: (StringCriterionInput | null),
/** Filter by studio code */
code?: (StringCriterionInput | null),
/** Filter by creation time */
created_at?: (TimestampCriterionInput | null),
/** Filter by date */
date?: (DateCriterionInput | null),details?: (StringCriterionInput | null),
/** Filter by zip-file count */
file_count?: (IntCriterionInput | null),
/** Filter by related files that meet this criteria */
files_filter?: (FileFilterType | null),
/** Filter by related folders that meet this criteria */
folders_filter?: (FolderFilterType | null),
/** Filter to only include galleries that have chapters. `true` or `false` */
has_chapters?: (Scalars['String'] | null),id?: (IntCriterionInput | null),
/** Filter by number of images in this gallery */
image_count?: (IntCriterionInput | null),
/** Filter by related images that meet this criteria */
images_filter?: (ImageFilterType | null),
/** Filter to only include galleries missing this property */
is_missing?: (Scalars['String'] | null),
/** Filter to include/exclude galleries that were created from zip */
is_zip?: (Scalars['Boolean'] | null),
/** Filter by organized */
organized?: (Scalars['Boolean'] | null),
/** Filter by path */
path?: (StringCriterionInput | null),
/** Filter galleries by performer age at time of gallery */
performer_age?: (IntCriterionInput | null),
/** Filter by performer count */
performer_count?: (IntCriterionInput | null),
/** Filter galleries that have performers that have been favorited */
performer_favorite?: (Scalars['Boolean'] | null),
/** Filter to only include galleries with performers with these tags */
performer_tags?: (HierarchicalMultiCriterionInput | null),
/** Filter to only include galleries with these performers */
performers?: (MultiCriterionInput | null),
/** Filter by related performers that meet this criteria */
performers_filter?: (PerformerFilterType | null),
/** Filter by photographer */
photographer?: (StringCriterionInput | null),rating100?: (IntCriterionInput | null),
/** Filter to only include galleries with these scenes */
scenes?: (MultiCriterionInput | null),
/** Filter by related scenes that meet this criteria */
scenes_filter?: (SceneFilterType | null),
/** Filter to only include galleries with this studio */
studios?: (HierarchicalMultiCriterionInput | null),
/** Filter by related studios that meet this criteria */
studios_filter?: (StudioFilterType | null),
/** Filter by tag count */
tag_count?: (IntCriterionInput | null),
/** Filter to only include galleries with these tags */
tags?: (HierarchicalMultiCriterionInput | null),
/** Filter by related tags that meet this criteria */
tags_filter?: (TagFilterType | null),title?: (StringCriterionInput | null),
/** Filter by last update time */
updated_at?: (TimestampCriterionInput | null),
/** Filter by url */
url?: (StringCriterionInput | null)}

export interface GalleryPathsTypeGenqlSelection{
    cover?: boolean | number
    preview?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GalleryRemoveInput {gallery_id: Scalars['ID'],image_ids: Scalars['ID'][]}

export interface GalleryResetCoverInput {gallery_id: Scalars['ID']}

export interface GallerySetCoverInput {cover_image_id: Scalars['ID'],gallery_id: Scalars['ID']}

export interface GalleryUpdateInput {clientMutationId?: (Scalars['String'] | null),code?: (Scalars['String'] | null),date?: (Scalars['String'] | null),details?: (Scalars['String'] | null),id: Scalars['ID'],organized?: (Scalars['Boolean'] | null),performer_ids?: (Scalars['ID'][] | null),photographer?: (Scalars['String'] | null),primary_file_id?: (Scalars['ID'] | null),rating100?: (Scalars['Int'] | null),scene_ids?: (Scalars['ID'][] | null),studio_id?: (Scalars['ID'] | null),tag_ids?: (Scalars['ID'][] | null),title?: (Scalars['String'] | null),url?: (Scalars['String'] | null),urls?: (Scalars['String'][] | null)}

export interface GenderCriterionInput {modifier: CriterionModifier,value?: (GenderEnum | null),value_list?: (GenderEnum[] | null)}

export interface GenerateAPIKeyInput {clear?: (Scalars['Boolean'] | null)}

export interface GenerateMetadataInput {clipPreviews?: (Scalars['Boolean'] | null),covers?: (Scalars['Boolean'] | null),
/** Generate transcodes even if not required */
forceTranscodes?: (Scalars['Boolean'] | null),imagePreviews?: (Scalars['Boolean'] | null),imageThumbnails?: (Scalars['Boolean'] | null),interactiveHeatmapsSpeeds?: (Scalars['Boolean'] | null),
/** marker ids to generate for */
markerIDs?: (Scalars['ID'][] | null),markerImagePreviews?: (Scalars['Boolean'] | null),markerScreenshots?: (Scalars['Boolean'] | null),markers?: (Scalars['Boolean'] | null),
/** overwrite existing media */
overwrite?: (Scalars['Boolean'] | null),phashes?: (Scalars['Boolean'] | null),previewOptions?: (GeneratePreviewOptionsInput | null),previews?: (Scalars['Boolean'] | null),
/** scene ids to generate for */
sceneIDs?: (Scalars['ID'][] | null),sprites?: (Scalars['Boolean'] | null),transcodes?: (Scalars['Boolean'] | null)}

export interface GenerateMetadataOptionsGenqlSelection{
    clipPreviews?: boolean | number
    covers?: boolean | number
    imagePreviews?: boolean | number
    imageThumbnails?: boolean | number
    interactiveHeatmapsSpeeds?: boolean | number
    markerImagePreviews?: boolean | number
    markerScreenshots?: boolean | number
    markers?: boolean | number
    phashes?: boolean | number
    previewOptions?: GeneratePreviewOptionsGenqlSelection
    previews?: boolean | number
    sprites?: boolean | number
    transcodes?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GeneratePreviewOptionsGenqlSelection{
    /** Duration of end of video to exclude when generating previews */
    previewExcludeEnd?: boolean | number
    /** Duration of start of video to exclude when generating previews */
    previewExcludeStart?: boolean | number
    /** Preset when generating preview */
    previewPreset?: boolean | number
    /** Preview segment duration, in seconds */
    previewSegmentDuration?: boolean | number
    /** Number of segments in a preview file */
    previewSegments?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GeneratePreviewOptionsInput {
/** Duration of end of video to exclude when generating previews */
previewExcludeEnd?: (Scalars['String'] | null),
/** Duration of start of video to exclude when generating previews */
previewExcludeStart?: (Scalars['String'] | null),
/** Preset when generating preview */
previewPreset?: (PreviewPreset | null),
/** Preview segment duration, in seconds */
previewSegmentDuration?: (Scalars['Float'] | null),
/** Number of segments in a preview file */
previewSegments?: (Scalars['Int'] | null)}

export interface GroupGenqlSelection{
    aliases?: boolean | number
    back_image_path?: boolean | number
    containing_groups?: GroupDescriptionGenqlSelection
    created_at?: boolean | number
    date?: boolean | number
    director?: boolean | number
    /** Duration in seconds */
    duration?: boolean | number
    front_image_path?: boolean | number
    id?: boolean | number
    name?: boolean | number
    o_counter?: boolean | number
    performer_count?: { __args: {depth?: (Scalars['Int'] | null)} } | boolean | number
    rating100?: boolean | number
    scene_count?: { __args: {depth?: (Scalars['Int'] | null)} } | boolean | number
    scenes?: SceneGenqlSelection
    studio?: StudioGenqlSelection
    sub_group_count?: { __args: {depth?: (Scalars['Int'] | null)} } | boolean | number
    sub_groups?: GroupDescriptionGenqlSelection
    synopsis?: boolean | number
    tags?: TagGenqlSelection
    updated_at?: boolean | number
    urls?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GroupCreateInput {aliases?: (Scalars['String'] | null),
/** This should be a URL or a base64 encoded data URL */
back_image?: (Scalars['String'] | null),containing_groups?: (GroupDescriptionInput[] | null),date?: (Scalars['String'] | null),director?: (Scalars['String'] | null),
/** Duration in seconds */
duration?: (Scalars['Int'] | null),
/** This should be a URL or a base64 encoded data URL */
front_image?: (Scalars['String'] | null),name: Scalars['String'],rating100?: (Scalars['Int'] | null),studio_id?: (Scalars['ID'] | null),sub_groups?: (GroupDescriptionInput[] | null),synopsis?: (Scalars['String'] | null),tag_ids?: (Scalars['ID'][] | null),urls?: (Scalars['String'][] | null)}


/** GroupDescription represents a relationship to a group with a description of the relationship */
export interface GroupDescriptionGenqlSelection{
    description?: boolean | number
    group?: GroupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GroupDescriptionInput {description?: (Scalars['String'] | null),group_id: Scalars['ID']}

export interface GroupDestroyInput {id: Scalars['ID']}

export interface GroupFilterType {AND?: (GroupFilterType | null),NOT?: (GroupFilterType | null),OR?: (GroupFilterType | null),
/** Filter by number of containing groups the group has */
containing_group_count?: (IntCriterionInput | null),
/** Filter by containing groups */
containing_groups?: (HierarchicalMultiCriterionInput | null),
/** Filter by creation time */
created_at?: (TimestampCriterionInput | null),
/** Filter by date */
date?: (DateCriterionInput | null),director?: (StringCriterionInput | null),
/** Filter by duration (in seconds) */
duration?: (IntCriterionInput | null),
/** Filter to only include groups missing this property */
is_missing?: (Scalars['String'] | null),name?: (StringCriterionInput | null),
/** Filter by o-counter */
o_counter?: (IntCriterionInput | null),
/** Filter to only include groups where performer appears in a scene */
performers?: (MultiCriterionInput | null),rating100?: (IntCriterionInput | null),
/** Filter by related scenes that meet this criteria */
scenes_filter?: (SceneFilterType | null),
/** Filter to only include groups with this studio */
studios?: (HierarchicalMultiCriterionInput | null),
/** Filter by related studios that meet this criteria */
studios_filter?: (StudioFilterType | null),
/** Filter by number of sub-groups the group has */
sub_group_count?: (IntCriterionInput | null),
/** Filter by sub groups */
sub_groups?: (HierarchicalMultiCriterionInput | null),synopsis?: (StringCriterionInput | null),
/** Filter by tag count */
tag_count?: (IntCriterionInput | null),
/** Filter to only include groups with these tags */
tags?: (HierarchicalMultiCriterionInput | null),
/** Filter by last update time */
updated_at?: (TimestampCriterionInput | null),
/** Filter by url */
url?: (StringCriterionInput | null)}

export interface GroupSubGroupAddInput {containing_group_id: Scalars['ID'],
/** The index at which to insert the sub groups. If not provided, the sub groups will be appended to the end */
insert_index?: (Scalars['Int'] | null),sub_groups: GroupDescriptionInput[]}

export interface GroupSubGroupRemoveInput {containing_group_id: Scalars['ID'],sub_group_ids: Scalars['ID'][]}

export interface GroupUpdateInput {aliases?: (Scalars['String'] | null),
/** This should be a URL or a base64 encoded data URL */
back_image?: (Scalars['String'] | null),containing_groups?: (GroupDescriptionInput[] | null),date?: (Scalars['String'] | null),director?: (Scalars['String'] | null),duration?: (Scalars['Int'] | null),
/** This should be a URL or a base64 encoded data URL */
front_image?: (Scalars['String'] | null),id: Scalars['ID'],name?: (Scalars['String'] | null),rating100?: (Scalars['Int'] | null),studio_id?: (Scalars['ID'] | null),sub_groups?: (GroupDescriptionInput[] | null),synopsis?: (Scalars['String'] | null),tag_ids?: (Scalars['ID'][] | null),urls?: (Scalars['String'][] | null)}

export interface HierarchicalMultiCriterionInput {depth?: (Scalars['Int'] | null),excludes?: (Scalars['ID'][] | null),modifier: CriterionModifier,value?: (Scalars['ID'][] | null)}

export interface HistoryMutationResultGenqlSelection{
    count?: boolean | number
    history?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IdentifyFieldOptionsGenqlSelection{
    /** creates missing objects if needed - only applicable for performers, tags and studios */
    createMissing?: boolean | number
    field?: boolean | number
    strategy?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IdentifyFieldOptionsInput {
/** creates missing objects if needed - only applicable for performers, tags and studios */
createMissing?: (Scalars['Boolean'] | null),field: Scalars['String'],strategy: IdentifyFieldStrategy}

export interface IdentifyMetadataInput {
/** Options defined here override the configured defaults */
options?: (IdentifyMetadataOptionsInput | null),
/** paths of scenes to identify - ignored if scene ids are set */
paths?: (Scalars['String'][] | null),
/** scene ids to identify */
sceneIDs?: (Scalars['ID'][] | null),
/** An ordered list of sources to identify items with. Only the first source that finds a match is used. */
sources: IdentifySourceInput[]}

export interface IdentifyMetadataOptionsGenqlSelection{
    /** any fields missing from here are defaulted to MERGE and createMissing false */
    fieldOptions?: IdentifyFieldOptionsGenqlSelection
    /** defaults to true if not provided */
    includeMalePerformers?: boolean | number
    /** defaults to true if not provided */
    setCoverImage?: boolean | number
    setOrganized?: boolean | number
    /** tag to tag skipped multiple matches with */
    skipMultipleMatchTag?: boolean | number
    /** defaults to true if not provided */
    skipMultipleMatches?: boolean | number
    /** tag to tag skipped single name performers with */
    skipSingleNamePerformerTag?: boolean | number
    /** defaults to true if not provided */
    skipSingleNamePerformers?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IdentifyMetadataOptionsInput {
/** any fields missing from here are defaulted to MERGE and createMissing false */
fieldOptions?: (IdentifyFieldOptionsInput[] | null),
/** defaults to true if not provided */
includeMalePerformers?: (Scalars['Boolean'] | null),
/** defaults to true if not provided */
setCoverImage?: (Scalars['Boolean'] | null),setOrganized?: (Scalars['Boolean'] | null),
/** tag to tag skipped multiple matches with */
skipMultipleMatchTag?: (Scalars['String'] | null),
/** defaults to true if not provided */
skipMultipleMatches?: (Scalars['Boolean'] | null),
/** tag to tag skipped single name performers with */
skipSingleNamePerformerTag?: (Scalars['String'] | null),
/** defaults to true if not provided */
skipSingleNamePerformers?: (Scalars['Boolean'] | null)}

export interface IdentifyMetadataTaskOptionsGenqlSelection{
    /** Options defined here override the configured defaults */
    options?: IdentifyMetadataOptionsGenqlSelection
    /** An ordered list of sources to identify items with. Only the first source that finds a match is used. */
    sources?: IdentifySourceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IdentifySourceGenqlSelection{
    /** Options defined for a source override the defaults */
    options?: IdentifyMetadataOptionsGenqlSelection
    source?: ScraperSourceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IdentifySourceInput {
/** Options defined for a source override the defaults */
options?: (IdentifyMetadataOptionsInput | null),source: ScraperSourceInput}

export interface ImageGenqlSelection{
    code?: boolean | number
    created_at?: boolean | number
    date?: boolean | number
    details?: boolean | number
    /** @deprecated Use visual_files */
    files?: ImageFileGenqlSelection
    galleries?: GalleryGenqlSelection
    id?: boolean | number
    o_counter?: boolean | number
    organized?: boolean | number
    paths?: ImagePathsTypeGenqlSelection
    performers?: PerformerGenqlSelection
    photographer?: boolean | number
    rating100?: boolean | number
    studio?: StudioGenqlSelection
    tags?: TagGenqlSelection
    title?: boolean | number
    updated_at?: boolean | number
    /** @deprecated Use urls */
    url?: boolean | number
    urls?: boolean | number
    visual_files?: VisualFileGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ImageDestroyInput {delete_file?: (Scalars['Boolean'] | null),delete_generated?: (Scalars['Boolean'] | null),id: Scalars['ID']}

export interface ImageFileGenqlSelection{
    basename?: boolean | number
    created_at?: boolean | number
    fingerprint?: { __args: {type: Scalars['String']} }
    fingerprints?: FingerprintGenqlSelection
    format?: boolean | number
    height?: boolean | number
    id?: boolean | number
    mod_time?: boolean | number
    parent_folder?: FolderGenqlSelection
    /** @deprecated Use parent_folder instead */
    parent_folder_id?: boolean | number
    path?: boolean | number
    size?: boolean | number
    updated_at?: boolean | number
    width?: boolean | number
    zip_file?: BasicFileGenqlSelection
    /** @deprecated Use zip_file instead */
    zip_file_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ImageFileFilterInput {format?: (StringCriterionInput | null),orientation?: (OrientationCriterionInput | null),resolution?: (ResolutionCriterionInput | null)}

export interface ImageFileTypeGenqlSelection{
    height?: boolean | number
    mod_time?: boolean | number
    size?: boolean | number
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ImageFilterType {AND?: (ImageFilterType | null),NOT?: (ImageFilterType | null),OR?: (ImageFilterType | null),
/** Filter by file checksum */
checksum?: (StringCriterionInput | null),
/** Filter by studio code */
code?: (StringCriterionInput | null),
/** Filter by creation time */
created_at?: (TimestampCriterionInput | null),
/** Filter by date */
date?: (DateCriterionInput | null),details?: (StringCriterionInput | null),
/** Filter by file count */
file_count?: (IntCriterionInput | null),
/** Filter by related files that meet this criteria */
files_filter?: (FileFilterType | null),
/** Filter to only include images with these galleries */
galleries?: (MultiCriterionInput | null),
/** Filter by related galleries that meet this criteria */
galleries_filter?: (GalleryFilterType | null),
/**  Filter by image id */
id?: (IntCriterionInput | null),
/** Filter to only include images missing this property */
is_missing?: (Scalars['String'] | null),
/** Filter by o-counter */
o_counter?: (IntCriterionInput | null),
/** Filter by organized */
organized?: (Scalars['Boolean'] | null),
/** Filter by orientation */
orientation?: (OrientationCriterionInput | null),
/** Filter by path */
path?: (StringCriterionInput | null),
/** Filter images by performer age at time of image */
performer_age?: (IntCriterionInput | null),
/** Filter by performer count */
performer_count?: (IntCriterionInput | null),
/** Filter images that have performers that have been favorited */
performer_favorite?: (Scalars['Boolean'] | null),
/** Filter to only include images with performers with these tags */
performer_tags?: (HierarchicalMultiCriterionInput | null),
/** Filter to only include images with these performers */
performers?: (MultiCriterionInput | null),
/** Filter by related performers that meet this criteria */
performers_filter?: (PerformerFilterType | null),
/** Filter by photographer */
photographer?: (StringCriterionInput | null),rating100?: (IntCriterionInput | null),
/** Filter by resolution */
resolution?: (ResolutionCriterionInput | null),
/** Filter to only include images with this studio */
studios?: (HierarchicalMultiCriterionInput | null),
/** Filter by related studios that meet this criteria */
studios_filter?: (StudioFilterType | null),
/** Filter by tag count */
tag_count?: (IntCriterionInput | null),
/** Filter to only include images with these tags */
tags?: (HierarchicalMultiCriterionInput | null),
/** Filter by related tags that meet this criteria */
tags_filter?: (TagFilterType | null),title?: (StringCriterionInput | null),
/** Filter by last update time */
updated_at?: (TimestampCriterionInput | null),
/** Filter by url */
url?: (StringCriterionInput | null)}

export interface ImagePathsTypeGenqlSelection{
    image?: boolean | number
    preview?: boolean | number
    thumbnail?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ImageUpdateInput {clientMutationId?: (Scalars['String'] | null),code?: (Scalars['String'] | null),date?: (Scalars['String'] | null),details?: (Scalars['String'] | null),gallery_ids?: (Scalars['ID'][] | null),id: Scalars['ID'],organized?: (Scalars['Boolean'] | null),performer_ids?: (Scalars['ID'][] | null),photographer?: (Scalars['String'] | null),primary_file_id?: (Scalars['ID'] | null),rating100?: (Scalars['Int'] | null),studio_id?: (Scalars['ID'] | null),tag_ids?: (Scalars['ID'][] | null),title?: (Scalars['String'] | null),url?: (Scalars['String'] | null),urls?: (Scalars['String'][] | null)}

export interface ImagesDestroyInput {delete_file?: (Scalars['Boolean'] | null),delete_generated?: (Scalars['Boolean'] | null),ids: Scalars['ID'][]}

export interface ImportObjectsInput {duplicateBehaviour: ImportDuplicateEnum,file: Scalars['Upload'],missingRefBehaviour: ImportMissingRefEnum}

export interface IntCriterionInput {modifier: CriterionModifier,value: Scalars['Int'],value2?: (Scalars['Int'] | null)}

export interface JobGenqlSelection{
    addTime?: boolean | number
    description?: boolean | number
    endTime?: boolean | number
    error?: boolean | number
    id?: boolean | number
    progress?: boolean | number
    startTime?: boolean | number
    status?: boolean | number
    subTasks?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface JobStatusUpdateGenqlSelection{
    job?: JobGenqlSelection
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LatestVersionGenqlSelection{
    release_date?: boolean | number
    shorthash?: boolean | number
    url?: boolean | number
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LogEntryGenqlSelection{
    level?: boolean | number
    message?: boolean | number
    time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MarkerStringsResultTypeGenqlSelection{
    count?: boolean | number
    id?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MigrateBlobsInput {deleteOld?: (Scalars['Boolean'] | null)}

export interface MigrateInput {backupPath: Scalars['String']}

export interface MigrateSceneScreenshotsInput {deleteFiles?: (Scalars['Boolean'] | null),overwriteExisting?: (Scalars['Boolean'] | null)}

export interface MoveFilesInput {
/** valid only for single file id. If empty, existing basename is used */
destination_basename?: (Scalars['String'] | null),
/** valid for single or multiple file ids */
destination_folder?: (Scalars['String'] | null),
/** valid for single or multiple file ids */
destination_folder_id?: (Scalars['ID'] | null),ids: Scalars['ID'][]}

export interface MovieGenqlSelection{
    aliases?: boolean | number
    back_image_path?: boolean | number
    created_at?: boolean | number
    date?: boolean | number
    director?: boolean | number
    /** Duration in seconds */
    duration?: boolean | number
    front_image_path?: boolean | number
    id?: boolean | number
    name?: boolean | number
    rating100?: boolean | number
    scene_count?: { __args: {depth?: (Scalars['Int'] | null)} } | boolean | number
    scenes?: SceneGenqlSelection
    studio?: StudioGenqlSelection
    synopsis?: boolean | number
    tags?: TagGenqlSelection
    updated_at?: boolean | number
    /** @deprecated Use urls */
    url?: boolean | number
    urls?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MovieCreateInput {aliases?: (Scalars['String'] | null),
/** This should be a URL or a base64 encoded data URL */
back_image?: (Scalars['String'] | null),date?: (Scalars['String'] | null),director?: (Scalars['String'] | null),
/** Duration in seconds */
duration?: (Scalars['Int'] | null),
/** This should be a URL or a base64 encoded data URL */
front_image?: (Scalars['String'] | null),name: Scalars['String'],rating100?: (Scalars['Int'] | null),studio_id?: (Scalars['ID'] | null),synopsis?: (Scalars['String'] | null),tag_ids?: (Scalars['ID'][] | null),url?: (Scalars['String'] | null),urls?: (Scalars['String'][] | null)}

export interface MovieDestroyInput {id: Scalars['ID']}

export interface MovieFilterType {AND?: (MovieFilterType | null),NOT?: (MovieFilterType | null),OR?: (MovieFilterType | null),
/** Filter by creation time */
created_at?: (TimestampCriterionInput | null),
/** Filter by date */
date?: (DateCriterionInput | null),director?: (StringCriterionInput | null),
/** Filter by duration (in seconds) */
duration?: (IntCriterionInput | null),
/** Filter to only include movies missing this property */
is_missing?: (Scalars['String'] | null),name?: (StringCriterionInput | null),
/** Filter to only include movies where performer appears in a scene */
performers?: (MultiCriterionInput | null),rating100?: (IntCriterionInput | null),
/** Filter by related scenes that meet this criteria */
scenes_filter?: (SceneFilterType | null),
/** Filter to only include movies with this studio */
studios?: (HierarchicalMultiCriterionInput | null),
/** Filter by related studios that meet this criteria */
studios_filter?: (StudioFilterType | null),synopsis?: (StringCriterionInput | null),
/** Filter by tag count */
tag_count?: (IntCriterionInput | null),
/** Filter to only include movies with these tags */
tags?: (HierarchicalMultiCriterionInput | null),
/** Filter by last update time */
updated_at?: (TimestampCriterionInput | null),
/** Filter by url */
url?: (StringCriterionInput | null)}

export interface MovieUpdateInput {aliases?: (Scalars['String'] | null),
/** This should be a URL or a base64 encoded data URL */
back_image?: (Scalars['String'] | null),date?: (Scalars['String'] | null),director?: (Scalars['String'] | null),duration?: (Scalars['Int'] | null),
/** This should be a URL or a base64 encoded data URL */
front_image?: (Scalars['String'] | null),id: Scalars['ID'],name?: (Scalars['String'] | null),rating100?: (Scalars['Int'] | null),studio_id?: (Scalars['ID'] | null),synopsis?: (Scalars['String'] | null),tag_ids?: (Scalars['ID'][] | null),url?: (Scalars['String'] | null),urls?: (Scalars['String'][] | null)}

export interface MultiCriterionInput {excludes?: (Scalars['ID'][] | null),modifier: CriterionModifier,value?: (Scalars['ID'][] | null)}

export interface MutationGenqlSelection{
    addGalleryImages?: { __args: {input: GalleryAddInput} }
    addGroupSubGroups?: { __args: {input: GroupSubGroupAddInput} }
    /** Enables an IP address for DLNA for an optional duration */
    addTempDLNAIP?: { __args: {input: AddTempDLNAIPInput} }
    /** Anonymise the database in a separate file. Optionally returns a link to download the database file */
    anonymiseDatabase?: { __args: {input: AnonymiseDatabaseInput} }
    /** Backup the database. Optionally returns a link to download the database file */
    backupDatabase?: { __args: {input: BackupDatabaseInput} }
    bulkGalleryUpdate?: (GalleryGenqlSelection & { __args: {input: BulkGalleryUpdateInput} })
    bulkGroupUpdate?: (GroupGenqlSelection & { __args: {input: BulkGroupUpdateInput} })
    bulkImageUpdate?: (ImageGenqlSelection & { __args: {input: BulkImageUpdateInput} })
    /** @deprecated Use bulkGroupUpdate instead */
    bulkMovieUpdate?: (MovieGenqlSelection & { __args: {input: BulkMovieUpdateInput} })
    bulkPerformerUpdate?: (PerformerGenqlSelection & { __args: {input: BulkPerformerUpdateInput} })
    bulkSceneMarkerUpdate?: (SceneMarkerGenqlSelection & { __args: {input: BulkSceneMarkerUpdateInput} })
    bulkSceneUpdate?: (SceneGenqlSelection & { __args: {input: BulkSceneUpdateInput} })
    bulkStudioUpdate?: (StudioGenqlSelection & { __args: {input: BulkStudioUpdateInput} })
    bulkTagUpdate?: (TagGenqlSelection & { __args: {input: BulkTagUpdateInput} })
    configureDLNA?: (ConfigDLNAResultGenqlSelection & { __args: {input: ConfigDLNAInput} })
    configureDefaults?: (ConfigDefaultSettingsResultGenqlSelection & { __args: {input: ConfigDefaultSettingsInput} })
    /** Change general configuration options */
    configureGeneral?: (ConfigGeneralResultGenqlSelection & { __args: {input: ConfigGeneralInput} })
    configureInterface?: (ConfigInterfaceResultGenqlSelection & { __args: {input: ConfigInterfaceInput} })
    /** overwrites the entire plugin configuration for the given plugin */
    configurePlugin?: { __args: {input: Scalars['Map'], plugin_id: Scalars['ID']} }
    configureScraping?: (ConfigScrapingResultGenqlSelection & { __args: {input: ConfigScrapingInput} })
    /**
     * overwrites the UI configuration
     * if input is provided, then the entire UI configuration is replaced
     * if partial is provided, then the partial UI configuration is merged into the existing UI configuration
     */
    configureUI?: { __args: {input?: (Scalars['Map'] | null), partial?: (Scalars['Map'] | null)} } | boolean | number
    /**
     * sets a single UI key value
     * key is a dot separated path to the value
     */
    configureUISetting?: { __args: {key: Scalars['String'], value?: (Scalars['Any'] | null)} }
    deleteFiles?: { __args: {ids: Scalars['ID'][]} }
    destroySavedFilter?: { __args: {input: DestroyFilterInput} }
    /** Disables DLNA for an optional duration. Has no effect if DLNA is disabled by default */
    disableDLNA?: { __args: {input: DisableDLNAInput} }
    /** Downloads and installs ffmpeg and ffprobe binaries into the configuration directory. Returns the job ID. */
    downloadFFMpeg?: boolean | number
    /** Enables DLNA for an optional duration. Has no effect if DLNA is enabled by default */
    enableDLNA?: { __args: {input: EnableDLNAInput} }
    /** DANGEROUS: Execute an arbitrary SQL statement without returning any rows. */
    execSQL?: (SQLExecResultGenqlSelection & { __args: {args?: ((Scalars['Any'] | null)[] | null), sql: Scalars['String']} })
    /** Returns a link to download the result */
    exportObjects?: { __args: {input: ExportObjectsInput} }
    fileSetFingerprints?: { __args: {input: FileSetFingerprintsInput} }
    galleriesUpdate?: (GalleryGenqlSelection & { __args: {input: GalleryUpdateInput[]} })
    galleryChapterCreate?: (GalleryChapterGenqlSelection & { __args: {input: GalleryChapterCreateInput} })
    galleryChapterDestroy?: { __args: {id: Scalars['ID']} }
    galleryChapterUpdate?: (GalleryChapterGenqlSelection & { __args: {input: GalleryChapterUpdateInput} })
    galleryCreate?: (GalleryGenqlSelection & { __args: {input: GalleryCreateInput} })
    galleryDestroy?: { __args: {input: GalleryDestroyInput} }
    galleryUpdate?: (GalleryGenqlSelection & { __args: {input: GalleryUpdateInput} })
    /** Generate and set (or clear) API key */
    generateAPIKey?: { __args: {input: GenerateAPIKeyInput} }
    groupCreate?: (GroupGenqlSelection & { __args: {input: GroupCreateInput} })
    groupDestroy?: { __args: {input: GroupDestroyInput} }
    groupUpdate?: (GroupGenqlSelection & { __args: {input: GroupUpdateInput} })
    groupsDestroy?: { __args: {ids: Scalars['ID'][]} }
    /** Decrements the o-counter for an image. Returns the new value */
    imageDecrementO?: { __args: {id: Scalars['ID']} }
    imageDestroy?: { __args: {input: ImageDestroyInput} }
    /** Increments the o-counter for an image. Returns the new value */
    imageIncrementO?: { __args: {id: Scalars['ID']} }
    /** Resets the o-counter for a image to 0. Returns the new value */
    imageResetO?: { __args: {id: Scalars['ID']} }
    imageUpdate?: (ImageGenqlSelection & { __args: {input: ImageUpdateInput} })
    imagesDestroy?: { __args: {input: ImagesDestroyInput} }
    imagesUpdate?: (ImageGenqlSelection & { __args: {input: ImageUpdateInput[]} })
    /** Performs an incremental import. Returns the job ID */
    importObjects?: { __args: {input: ImportObjectsInput} }
    /**
     * Installs the given packages.
     * If a package is already installed, it will be updated if needed..
     * If an error occurs when installing a package, the job will continue to install the remaining packages.
     * Returns the job ID
     */
    installPackages?: { __args: {packages: PackageSpecInput[], type: PackageType} }
    /** Start auto-tagging. Returns the job ID */
    metadataAutoTag?: { __args: {input: AutoTagMetadataInput} }
    /** Clean metadata. Returns the job ID */
    metadataClean?: { __args: {input: CleanMetadataInput} }
    /** Clean generated files. Returns the job ID */
    metadataCleanGenerated?: { __args: {input: CleanGeneratedInput} }
    /** Start a full export. Outputs to the metadata directory. Returns the job ID */
    metadataExport?: boolean | number
    /** Start generating content. Returns the job ID */
    metadataGenerate?: { __args: {input: GenerateMetadataInput} }
    /** Identifies scenes using scrapers. Returns the job ID */
    metadataIdentify?: { __args: {input: IdentifyMetadataInput} }
    /** Start an full import. Completely wipes the database and imports from the metadata directory. Returns the job ID */
    metadataImport?: boolean | number
    /** Start a scan. Returns the job ID */
    metadataScan?: { __args: {input: ScanMetadataInput} }
    /** Migrates the schema to the required version. Returns the job ID */
    migrate?: { __args: {input: MigrateInput} }
    /** Migrates blobs from the old storage system to the current one */
    migrateBlobs?: { __args: {input: MigrateBlobsInput} }
    /** Migrate generated files for the current hash naming */
    migrateHashNaming?: boolean | number
    /** Migrates legacy scene screenshot files into the blob storage */
    migrateSceneScreenshots?: { __args: {input: MigrateSceneScreenshotsInput} }
    /**
     * Moves the given files to the given destination. Returns true if successful.
     * Either the destination_folder or destination_folder_id must be provided.
     * If both are provided, the destination_folder_id takes precedence.
     * Destination folder must be a subfolder of one of the stash library paths.
     * If provided, destination_basename must be a valid filename with an extension that
     * matches one of the media extensions.
     * Creates folder hierarchy if needed.
     */
    moveFiles?: { __args: {input: MoveFilesInput} }
    /** @deprecated Use groupCreate instead */
    movieCreate?: (MovieGenqlSelection & { __args: {input: MovieCreateInput} })
    /** @deprecated Use groupDestroy instead */
    movieDestroy?: { __args: {input: MovieDestroyInput} }
    /** @deprecated Use groupUpdate instead */
    movieUpdate?: (MovieGenqlSelection & { __args: {input: MovieUpdateInput} })
    /** @deprecated Use groupsDestroy instead */
    moviesDestroy?: { __args: {ids: Scalars['ID'][]} }
    /** Optimises the database. Returns the job ID */
    optimiseDatabase?: boolean | number
    performerCreate?: (PerformerGenqlSelection & { __args: {input: PerformerCreateInput} })
    performerDestroy?: { __args: {input: PerformerDestroyInput} }
    performerUpdate?: (PerformerGenqlSelection & { __args: {input: PerformerUpdateInput} })
    performersDestroy?: { __args: {ids: Scalars['ID'][]} }
    /** DANGEROUS: Execute an arbitrary SQL statement that returns rows. */
    querySQL?: (SQLQueryResultGenqlSelection & { __args: {args?: ((Scalars['Any'] | null)[] | null), sql: Scalars['String']} })
    reloadPlugins?: boolean | number
    /** Reload scrapers */
    reloadScrapers?: boolean | number
    removeGalleryImages?: { __args: {input: GalleryRemoveInput} }
    removeGroupSubGroups?: { __args: {input: GroupSubGroupRemoveInput} }
    /** Removes an IP address from the temporary DLNA whitelist */
    removeTempDLNAIP?: { __args: {input: RemoveTempDLNAIPInput} }
    /** Reorder sub groups within a group. Returns true if successful. */
    reorderSubGroups?: { __args: {input: ReorderSubGroupsInput} }
    resetGalleryCover?: { __args: {input: GalleryResetCoverInput} }
    /**
     * Runs a plugin operation. The operation is run immediately and does not use the job queue.
     * Returns a map of the result.
     */
    runPluginOperation?: { __args: {args?: (Scalars['Map'] | null), plugin_id: Scalars['ID']} }
    /**
     * Run a plugin task.
     * If task_name is provided, then the task must exist in the plugin config and the tasks configuration
     * will be used to run the plugin.
     * If no task_name is provided, then the plugin will be executed with the arguments provided only.
     * Returns the job ID
     */
    runPluginTask?: { __args: {args?: (PluginArgInput[] | null), args_map?: (Scalars['Map'] | null), 
    /** displayed in the task queue */
    description?: (Scalars['String'] | null), plugin_id: Scalars['ID'], 
    /** if provided, then the default args will be applied */
    task_name?: (Scalars['String'] | null)} }
    saveFilter?: (SavedFilterGenqlSelection & { __args: {input: SaveFilterInput} })
    /** Increments the o-counter for a scene. Uses the current time if none provided. */
    sceneAddO?: (HistoryMutationResultGenqlSelection & { __args: {id: Scalars['ID'], times?: (Scalars['Timestamp'][] | null)} })
    /** Increments the play count for the scene. Uses the current time if none provided. */
    sceneAddPlay?: (HistoryMutationResultGenqlSelection & { __args: {id: Scalars['ID'], times?: (Scalars['Timestamp'][] | null)} })
    sceneAssignFile?: { __args: {input: AssignSceneFileInput} }
    sceneCreate?: (SceneGenqlSelection & { __args: {input: SceneCreateInput} })
    /**
     * @deprecated Use sceneRemoveO instead
     * Decrements the o-counter for a scene. Returns the new value
     */
    sceneDecrementO?: { __args: {id: Scalars['ID']} }
    /** Decrements the o-counter for a scene, removing the last recorded time if specific time not provided. Returns the new value */
    sceneDeleteO?: (HistoryMutationResultGenqlSelection & { __args: {id: Scalars['ID'], times?: (Scalars['Timestamp'][] | null)} })
    /** Decrements the play count for the scene, removing the specific times or the last recorded time if not provided. */
    sceneDeletePlay?: (HistoryMutationResultGenqlSelection & { __args: {id: Scalars['ID'], times?: (Scalars['Timestamp'][] | null)} })
    sceneDestroy?: { __args: {input: SceneDestroyInput} }
    /** Generates screenshot at specified time in seconds. Leave empty to generate default screenshot */
    sceneGenerateScreenshot?: { __args: {at?: (Scalars['Float'] | null), id: Scalars['ID']} }
    /**
     * @deprecated Use sceneAddO instead
     * Increments the o-counter for a scene. Returns the new value
     */
    sceneIncrementO?: { __args: {id: Scalars['ID']} }
    /**
     * @deprecated Use sceneAddPlay instead
     * Increments the play count for the scene. Returns the new play count value.
     */
    sceneIncrementPlayCount?: { __args: {id: Scalars['ID']} }
    sceneMarkerCreate?: (SceneMarkerGenqlSelection & { __args: {input: SceneMarkerCreateInput} })
    sceneMarkerDestroy?: { __args: {id: Scalars['ID']} }
    sceneMarkerUpdate?: (SceneMarkerGenqlSelection & { __args: {input: SceneMarkerUpdateInput} })
    sceneMarkersDestroy?: { __args: {ids: Scalars['ID'][]} }
    sceneMerge?: (SceneGenqlSelection & { __args: {input: SceneMergeInput} })
    /** Resets the resume time point and play duration */
    sceneResetActivity?: { __args: {id: Scalars['ID'], reset_duration?: (Scalars['Boolean'] | null), reset_resume?: (Scalars['Boolean'] | null)} }
    /** Resets the o-counter for a scene to 0. Returns the new value */
    sceneResetO?: { __args: {id: Scalars['ID']} }
    /** Resets the play count for a scene to 0. Returns the new play count value. */
    sceneResetPlayCount?: { __args: {id: Scalars['ID']} }
    /** Sets the resume time point (if provided) and adds the provided duration to the scene's play duration */
    sceneSaveActivity?: { __args: {id: Scalars['ID'], playDuration?: (Scalars['Float'] | null), resume_time?: (Scalars['Float'] | null)} }
    sceneUpdate?: (SceneGenqlSelection & { __args: {input: SceneUpdateInput} })
    scenesDestroy?: { __args: {input: ScenesDestroyInput} }
    scenesUpdate?: (SceneGenqlSelection & { __args: {input: SceneUpdateInput[]} })
    /** @deprecated now uses UI config */
    setDefaultFilter?: { __args: {input: SetDefaultFilterInput} }
    setGalleryCover?: { __args: {input: GallerySetCoverInput} }
    /**
     * Enable/disable plugins - enabledMap is a map of plugin IDs to enabled booleans.
     * Plugins not in the map are not affected.
     */
    setPluginsEnabled?: { __args: {enabledMap: Scalars['BoolMap']} }
    setup?: { __args: {input: SetupInput} }
    /** Run batch performer tag task. Returns the job ID. */
    stashBoxBatchPerformerTag?: { __args: {input: StashBoxBatchTagInput} }
    /** Run batch studio tag task. Returns the job ID. */
    stashBoxBatchStudioTag?: { __args: {input: StashBoxBatchTagInput} }
    stopAllJobs?: boolean | number
    stopJob?: { __args: {job_id: Scalars['ID']} }
    studioCreate?: (StudioGenqlSelection & { __args: {input: StudioCreateInput} })
    studioDestroy?: { __args: {input: StudioDestroyInput} }
    studioUpdate?: (StudioGenqlSelection & { __args: {input: StudioUpdateInput} })
    studiosDestroy?: { __args: {ids: Scalars['ID'][]} }
    /** Submit fingerprints to stash-box instance */
    submitStashBoxFingerprints?: { __args: {input: StashBoxFingerprintSubmissionInput} }
    /** Submit performer as draft to stash-box instance */
    submitStashBoxPerformerDraft?: { __args: {input: StashBoxDraftSubmissionInput} }
    /** Submit scene as draft to stash-box instance */
    submitStashBoxSceneDraft?: { __args: {input: StashBoxDraftSubmissionInput} }
    tagCreate?: (TagGenqlSelection & { __args: {input: TagCreateInput} })
    tagDestroy?: { __args: {input: TagDestroyInput} }
    tagUpdate?: (TagGenqlSelection & { __args: {input: TagUpdateInput} })
    tagsDestroy?: { __args: {ids: Scalars['ID'][]} }
    tagsMerge?: (TagGenqlSelection & { __args: {input: TagsMergeInput} })
    /**
     * Uninstalls the given packages.
     * If an error occurs when uninstalling a package, the job will continue to uninstall the remaining packages.
     * Returns the job ID
     */
    uninstallPackages?: { __args: {packages: PackageSpecInput[], type: PackageType} }
    /**
     * Updates the given packages.
     * If a package is not installed, it will not be installed.
     * If a package does not need to be updated, it will not be updated.
     * If no packages are provided, all packages of the given type will be updated.
     * If an error occurs when updating a package, the job will continue to update the remaining packages.
     * Returns the job ID.
     */
    updatePackages?: { __args: {packages?: (PackageSpecInput[] | null), type: PackageType} }
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrientationCriterionInput {value: OrientationEnum[]}

export interface PHashDuplicationCriterionInput {
/** Currently unimplemented */
distance?: (Scalars['Int'] | null),duplicated?: (Scalars['Boolean'] | null)}

export interface PackageGenqlSelection{
    date?: boolean | number
    metadata?: boolean | number
    name?: boolean | number
    package_id?: boolean | number
    requires?: PackageGenqlSelection
    sourceURL?: boolean | number
    /** The version of this package currently available from the remote source */
    source_package?: PackageGenqlSelection
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackageSourceGenqlSelection{
    local_path?: boolean | number
    name?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackageSourceInput {local_path?: (Scalars['String'] | null),name?: (Scalars['String'] | null),url: Scalars['String']}

export interface PackageSpecInput {id: Scalars['String'],sourceURL: Scalars['String']}

export interface PerformerGenqlSelection{
    alias_list?: boolean | number
    birthdate?: boolean | number
    career_length?: boolean | number
    circumcised?: boolean | number
    country?: boolean | number
    created_at?: boolean | number
    custom_fields?: boolean | number
    death_date?: boolean | number
    details?: boolean | number
    disambiguation?: boolean | number
    ethnicity?: boolean | number
    eye_color?: boolean | number
    fake_tits?: boolean | number
    favorite?: boolean | number
    gallery_count?: boolean | number
    gender?: boolean | number
    group_count?: boolean | number
    groups?: GroupGenqlSelection
    hair_color?: boolean | number
    height_cm?: boolean | number
    id?: boolean | number
    ignore_auto_tag?: boolean | number
    image_count?: boolean | number
    image_path?: boolean | number
    /** @deprecated Use urls */
    instagram?: boolean | number
    measurements?: boolean | number
    /** @deprecated use group_count instead */
    movie_count?: boolean | number
    /** @deprecated use groups instead */
    movies?: MovieGenqlSelection
    name?: boolean | number
    o_counter?: boolean | number
    penis_length?: boolean | number
    performer_count?: boolean | number
    piercings?: boolean | number
    rating100?: boolean | number
    scene_count?: boolean | number
    scenes?: SceneGenqlSelection
    stash_ids?: StashIDGenqlSelection
    tags?: TagGenqlSelection
    tattoos?: boolean | number
    /** @deprecated Use urls */
    twitter?: boolean | number
    updated_at?: boolean | number
    /** @deprecated Use urls */
    url?: boolean | number
    urls?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PerformerCreateInput {alias_list?: (Scalars['String'][] | null),birthdate?: (Scalars['String'] | null),career_length?: (Scalars['String'] | null),circumcised?: (CircumisedEnum | null),country?: (Scalars['String'] | null),custom_fields?: (Scalars['Map'] | null),death_date?: (Scalars['String'] | null),details?: (Scalars['String'] | null),disambiguation?: (Scalars['String'] | null),ethnicity?: (Scalars['String'] | null),eye_color?: (Scalars['String'] | null),fake_tits?: (Scalars['String'] | null),favorite?: (Scalars['Boolean'] | null),gender?: (GenderEnum | null),hair_color?: (Scalars['String'] | null),height_cm?: (Scalars['Int'] | null),ignore_auto_tag?: (Scalars['Boolean'] | null),
/** This should be a URL or a base64 encoded data URL */
image?: (Scalars['String'] | null),instagram?: (Scalars['String'] | null),measurements?: (Scalars['String'] | null),name: Scalars['String'],penis_length?: (Scalars['Float'] | null),piercings?: (Scalars['String'] | null),rating100?: (Scalars['Int'] | null),stash_ids?: (StashIDInput[] | null),tag_ids?: (Scalars['ID'][] | null),tattoos?: (Scalars['String'] | null),twitter?: (Scalars['String'] | null),url?: (Scalars['String'] | null),urls?: (Scalars['String'][] | null),weight?: (Scalars['Int'] | null)}

export interface PerformerDestroyInput {id: Scalars['ID']}

export interface PerformerFilterType {AND?: (PerformerFilterType | null),NOT?: (PerformerFilterType | null),OR?: (PerformerFilterType | null),
/** Filter by age */
age?: (IntCriterionInput | null),
/** Filter by aliases */
aliases?: (StringCriterionInput | null),
/** Filter by birth year */
birth_year?: (IntCriterionInput | null),
/** Filter by birthdate */
birthdate?: (DateCriterionInput | null),
/** Filter by career length */
career_length?: (StringCriterionInput | null),
/** Filter by ciricumcision */
circumcised?: (CircumcisionCriterionInput | null),
/** Filter by country */
country?: (StringCriterionInput | null),
/** Filter by creation time */
created_at?: (TimestampCriterionInput | null),custom_fields?: (CustomFieldCriterionInput[] | null),
/** Filter by death date */
death_date?: (DateCriterionInput | null),
/** Filter by death year */
death_year?: (IntCriterionInput | null),details?: (StringCriterionInput | null),disambiguation?: (StringCriterionInput | null),
/** Filter by ethnicity */
ethnicity?: (StringCriterionInput | null),
/** Filter by eye color */
eye_color?: (StringCriterionInput | null),
/** Filter by fake tits value */
fake_tits?: (StringCriterionInput | null),
/** Filter by favorite */
filter_favorites?: (Scalars['Boolean'] | null),
/** Filter by related galleries that meet this criteria */
galleries_filter?: (GalleryFilterType | null),
/** Filter by gallery count */
gallery_count?: (IntCriterionInput | null),
/** Filter by gender */
gender?: (GenderCriterionInput | null),
/** Filter by groups where performer appears in scene */
groups?: (HierarchicalMultiCriterionInput | null),
/** Filter by hair color */
hair_color?: (StringCriterionInput | null),
/** Filter by height in cm */
height_cm?: (IntCriterionInput | null),
/** Filter by autotag ignore value */
ignore_auto_tag?: (Scalars['Boolean'] | null),
/** Filter by image count */
image_count?: (IntCriterionInput | null),
/** Filter by related images that meet this criteria */
images_filter?: (ImageFilterType | null),
/** Filter to only include performers missing this property */
is_missing?: (Scalars['String'] | null),
/** Filter by measurements */
measurements?: (StringCriterionInput | null),name?: (StringCriterionInput | null),
/** Filter by o count */
o_counter?: (IntCriterionInput | null),
/** Filter by penis length value */
penis_length?: (FloatCriterionInput | null),
/** Filter by performers where performer appears with another performer in scene/image/gallery */
performers?: (MultiCriterionInput | null),
/** Filter by piercings */
piercings?: (StringCriterionInput | null),
/** Filter by play count */
play_count?: (IntCriterionInput | null),rating100?: (IntCriterionInput | null),
/** Filter by scene count */
scene_count?: (IntCriterionInput | null),
/** Filter by related scenes that meet this criteria */
scenes_filter?: (SceneFilterType | null),
/** Filter by StashID */
stash_id_endpoint?: (StashIDCriterionInput | null),
/** Filter by studios where performer appears in scene/image/gallery */
studios?: (HierarchicalMultiCriterionInput | null),
/** Filter by tag count */
tag_count?: (IntCriterionInput | null),
/** Filter to only include performers with these tags */
tags?: (HierarchicalMultiCriterionInput | null),
/** Filter by related tags that meet this criteria */
tags_filter?: (TagFilterType | null),
/** Filter by tattoos */
tattoos?: (StringCriterionInput | null),
/** Filter by last update time */
updated_at?: (TimestampCriterionInput | null),
/** Filter by url */
url?: (StringCriterionInput | null),
/** Filter by weight */
weight?: (IntCriterionInput | null)}

export interface PerformerUpdateInput {alias_list?: (Scalars['String'][] | null),birthdate?: (Scalars['String'] | null),career_length?: (Scalars['String'] | null),circumcised?: (CircumisedEnum | null),country?: (Scalars['String'] | null),custom_fields?: (CustomFieldsInput | null),death_date?: (Scalars['String'] | null),details?: (Scalars['String'] | null),disambiguation?: (Scalars['String'] | null),ethnicity?: (Scalars['String'] | null),eye_color?: (Scalars['String'] | null),fake_tits?: (Scalars['String'] | null),favorite?: (Scalars['Boolean'] | null),gender?: (GenderEnum | null),hair_color?: (Scalars['String'] | null),height_cm?: (Scalars['Int'] | null),id: Scalars['ID'],ignore_auto_tag?: (Scalars['Boolean'] | null),
/** This should be a URL or a base64 encoded data URL */
image?: (Scalars['String'] | null),instagram?: (Scalars['String'] | null),measurements?: (Scalars['String'] | null),name?: (Scalars['String'] | null),penis_length?: (Scalars['Float'] | null),piercings?: (Scalars['String'] | null),rating100?: (Scalars['Int'] | null),stash_ids?: (StashIDInput[] | null),tag_ids?: (Scalars['ID'][] | null),tattoos?: (Scalars['String'] | null),twitter?: (Scalars['String'] | null),url?: (Scalars['String'] | null),urls?: (Scalars['String'][] | null),weight?: (Scalars['Int'] | null)}

export interface PhashDistanceCriterionInput {distance?: (Scalars['Int'] | null),modifier: CriterionModifier,value: Scalars['String']}

export interface PluginGenqlSelection{
    description?: boolean | number
    enabled?: boolean | number
    hooks?: PluginHookGenqlSelection
    id?: boolean | number
    name?: boolean | number
    paths?: PluginPathsGenqlSelection
    /**
     * Plugin IDs of plugins that this plugin depends on.
     * Applies only for UI plugins to indicate css/javascript load order.
     */
    requires?: boolean | number
    settings?: PluginSettingGenqlSelection
    tasks?: PluginTaskGenqlSelection
    url?: boolean | number
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PluginArgInput {key: Scalars['String'],value?: (PluginValueInput | null)}

export interface PluginHookGenqlSelection{
    description?: boolean | number
    hooks?: boolean | number
    name?: boolean | number
    plugin?: PluginGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PluginPathsGenqlSelection{
    css?: boolean | number
    javascript?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PluginResultGenqlSelection{
    error?: boolean | number
    result?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PluginSettingGenqlSelection{
    description?: boolean | number
    display_name?: boolean | number
    name?: boolean | number
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PluginTaskGenqlSelection{
    description?: boolean | number
    name?: boolean | number
    plugin?: PluginGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PluginValueInput {a?: (PluginValueInput[] | null),b?: (Scalars['Boolean'] | null),f?: (Scalars['Float'] | null),i?: (Scalars['Int'] | null),o?: (PluginArgInput[] | null),str?: (Scalars['String'] | null)}


/** The query root for this schema */
export interface QueryGenqlSelection{
    /** @deprecated Use findGalleries instead */
    allGalleries?: GalleryGenqlSelection
    /** @deprecated Use findImages instead */
    allImages?: ImageGenqlSelection
    /** @deprecated Use findGroups instead */
    allMovies?: MovieGenqlSelection
    allPerformers?: PerformerGenqlSelection
    /** @deprecated Use findSceneMarkers instead */
    allSceneMarkers?: SceneMarkerGenqlSelection
    /** @deprecated Use findScenes instead */
    allScenes?: SceneGenqlSelection
    /** @deprecated Use findStudios instead */
    allStudios?: StudioGenqlSelection
    /** @deprecated Use findTags instead */
    allTags?: TagGenqlSelection
    /** List available packages */
    availablePackages?: (PackageGenqlSelection & { __args: {source: Scalars['String'], type: PackageType} })
    /** Returns the current, complete configuration */
    configuration?: ConfigResultGenqlSelection
    /** Returns an array of paths for the given path */
    directory?: (DirectoryGenqlSelection & { __args?: {
    /** Desired collation locale. Determines the order of the directory result. eg. 'en-US', 'pt-BR', ... */
    locale?: (Scalars['String'] | null), 
    /** The directory path to list */
    path?: (Scalars['String'] | null)} })
    dlnaStatus?: DLNAStatusGenqlSelection
    /** @deprecated default filter now stored in UI config */
    findDefaultFilter?: (SavedFilterGenqlSelection & { __args: {mode: FilterMode} })
    /**
     * Returns any groups of scenes that are perceptual duplicates within the queried distance
     * and the difference between their duration is smaller than durationDiff
     */
    findDuplicateScenes?: (SceneGenqlSelection & { __args: {distance?: (Scalars['Int'] | null), 
    /**
     * Max difference in seconds between files in order to be considered for similarity matching.
     * Fractional seconds are ok: 0.5 will mean only files that have durations within 0.5 seconds between them will be matched based on PHash distance.
     */
    duration_diff?: (Scalars['Float'] | null)} })
    /** Find a file by its id or path */
    findFile?: (BaseFileGenqlSelection & { __args?: {id?: (Scalars['ID'] | null), path?: (Scalars['String'] | null)} })
    /** Queries for Files */
    findFiles?: (FindFilesResultTypeGenqlSelection & { __args?: {file_filter?: (FileFilterType | null), filter?: (FindFilterType | null), ids?: (Scalars['ID'][] | null)} })
    /** Find a file by its id or path */
    findFolder?: (FolderGenqlSelection & { __args?: {id?: (Scalars['ID'] | null), path?: (Scalars['String'] | null)} })
    /** Queries for Files */
    findFolders?: (FindFoldersResultTypeGenqlSelection & { __args?: {filter?: (FindFilterType | null), folder_filter?: (FolderFilterType | null), ids?: (Scalars['ID'][] | null)} })
    findGalleries?: (FindGalleriesResultTypeGenqlSelection & { __args?: {filter?: (FindFilterType | null), gallery_filter?: (GalleryFilterType | null), ids?: (Scalars['ID'][] | null)} })
    findGallery?: (GalleryGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Find a group by ID */
    findGroup?: (GroupGenqlSelection & { __args: {id: Scalars['ID']} })
    /** A function which queries Group objects */
    findGroups?: (FindGroupsResultTypeGenqlSelection & { __args?: {filter?: (FindFilterType | null), group_filter?: (GroupFilterType | null), ids?: (Scalars['ID'][] | null)} })
    findImage?: (ImageGenqlSelection & { __args?: {checksum?: (Scalars['String'] | null), id?: (Scalars['ID'] | null)} })
    /** A function which queries Scene objects */
    findImages?: (FindImagesResultTypeGenqlSelection & { __args?: {filter?: (FindFilterType | null), ids?: (Scalars['ID'][] | null), image_filter?: (ImageFilterType | null), image_ids?: (Scalars['Int'][] | null)} })
    findJob?: (JobGenqlSelection & { __args: {input: FindJobInput} })
    /**
     * @deprecated Use findGroup instead
     * Find a movie by ID
     */
    findMovie?: (MovieGenqlSelection & { __args: {id: Scalars['ID']} })
    /**
     * @deprecated Use findGroups instead
     * A function which queries Movie objects
     */
    findMovies?: (FindMoviesResultTypeGenqlSelection & { __args?: {filter?: (FindFilterType | null), ids?: (Scalars['ID'][] | null), movie_filter?: (MovieFilterType | null)} })
    /** Find a performer by ID */
    findPerformer?: (PerformerGenqlSelection & { __args: {id: Scalars['ID']} })
    /** A function which queries Performer objects */
    findPerformers?: (FindPerformersResultTypeGenqlSelection & { __args?: {filter?: (FindFilterType | null), ids?: (Scalars['ID'][] | null), performer_filter?: (PerformerFilterType | null), performer_ids?: (Scalars['Int'][] | null)} })
    findSavedFilter?: (SavedFilterGenqlSelection & { __args: {id: Scalars['ID']} })
    findSavedFilters?: (SavedFilterGenqlSelection & { __args?: {mode?: (FilterMode | null)} })
    /** Find a scene by ID or Checksum */
    findScene?: (SceneGenqlSelection & { __args?: {checksum?: (Scalars['String'] | null), id?: (Scalars['ID'] | null)} })
    findSceneByHash?: (SceneGenqlSelection & { __args: {input: SceneHashInput} })
    /** A function which queries SceneMarker objects */
    findSceneMarkers?: (FindSceneMarkersResultTypeGenqlSelection & { __args?: {filter?: (FindFilterType | null), ids?: (Scalars['ID'][] | null), scene_marker_filter?: (SceneMarkerFilterType | null)} })
    /** A function which queries Scene objects */
    findScenes?: (FindScenesResultTypeGenqlSelection & { __args?: {filter?: (FindFilterType | null), ids?: (Scalars['ID'][] | null), scene_filter?: (SceneFilterType | null), scene_ids?: (Scalars['Int'][] | null)} })
    findScenesByPathRegex?: (FindScenesResultTypeGenqlSelection & { __args?: {filter?: (FindFilterType | null)} })
    /** Find a studio by ID */
    findStudio?: (StudioGenqlSelection & { __args: {id: Scalars['ID']} })
    /** A function which queries Studio objects */
    findStudios?: (FindStudiosResultTypeGenqlSelection & { __args?: {filter?: (FindFilterType | null), ids?: (Scalars['ID'][] | null), studio_filter?: (StudioFilterType | null)} })
    findTag?: (TagGenqlSelection & { __args: {id: Scalars['ID']} })
    findTags?: (FindTagsResultTypeGenqlSelection & { __args?: {filter?: (FindFilterType | null), ids?: (Scalars['ID'][] | null), tag_filter?: (TagFilterType | null)} })
    /** List installed packages */
    installedPackages?: (PackageGenqlSelection & { __args: {type: PackageType} })
    jobQueue?: JobGenqlSelection
    latestversion?: LatestVersionGenqlSelection
    /** List available scrapers */
    listScrapers?: (ScraperGenqlSelection & { __args: {types: ScrapeContentType[]} })
    logs?: LogEntryGenqlSelection
    /** Get marker strings */
    markerStrings?: (MarkerStringsResultTypeGenqlSelection & { __args?: {q?: (Scalars['String'] | null), sort?: (Scalars['String'] | null)} })
    /** Retrieve random scene markers for the wall */
    markerWall?: (SceneMarkerGenqlSelection & { __args?: {q?: (Scalars['String'] | null)} })
    parseSceneFilenames?: (SceneParserResultTypeGenqlSelection & { __args: {config: SceneParserInput, filter?: (FindFilterType | null)} })
    /** List available plugin operations */
    pluginTasks?: PluginTaskGenqlSelection
    /** List loaded plugins */
    plugins?: PluginGenqlSelection
    /** Organize scene markers by tag for a given scene ID */
    sceneMarkerTags?: (SceneMarkerTagGenqlSelection & { __args: {scene_id: Scalars['ID']} })
    /** Return valid stream paths */
    sceneStreams?: (SceneStreamEndpointGenqlSelection & { __args?: {id?: (Scalars['ID'] | null)} })
    /** Retrieve random scenes for the wall */
    sceneWall?: (SceneGenqlSelection & { __args?: {q?: (Scalars['String'] | null)} })
    /** Scrapes a complete gallery record based on a URL */
    scrapeGalleryURL?: (ScrapedGalleryGenqlSelection & { __args: {url: Scalars['String']} })
    /** Scrapes a complete group record based on a URL */
    scrapeGroupURL?: (ScrapedGroupGenqlSelection & { __args: {url: Scalars['String']} })
    /** Scrapes a complete image record based on a URL */
    scrapeImageURL?: (ScrapedImageGenqlSelection & { __args: {url: Scalars['String']} })
    /**
     * @deprecated Use scrapeGroupURL instead
     * Scrapes a complete movie record based on a URL
     */
    scrapeMovieURL?: (ScrapedMovieGenqlSelection & { __args: {url: Scalars['String']} })
    /** Scrape for multiple performers */
    scrapeMultiPerformers?: (ScrapedPerformerGenqlSelection & { __args: {input: ScrapeMultiPerformersInput, source: ScraperSourceInput} })
    /** Scrape for multiple scenes */
    scrapeMultiScenes?: (ScrapedSceneGenqlSelection & { __args: {input: ScrapeMultiScenesInput, source: ScraperSourceInput} })
    /** Scrapes a complete performer record based on a URL */
    scrapePerformerURL?: (ScrapedPerformerGenqlSelection & { __args: {url: Scalars['String']} })
    /** Scrapes a complete scene record based on a URL */
    scrapeSceneURL?: (ScrapedSceneGenqlSelection & { __args: {url: Scalars['String']} })
    /** Scrape for a single gallery */
    scrapeSingleGallery?: (ScrapedGalleryGenqlSelection & { __args: {input: ScrapeSingleGalleryInput, source: ScraperSourceInput} })
    /** Scrape for a single group */
    scrapeSingleGroup?: (ScrapedGroupGenqlSelection & { __args: {input: ScrapeSingleGroupInput, source: ScraperSourceInput} })
    /** Scrape for a single image */
    scrapeSingleImage?: (ScrapedImageGenqlSelection & { __args: {input: ScrapeSingleImageInput, source: ScraperSourceInput} })
    /**
     * @deprecated Use scrapeSingleGroup instead
     * Scrape for a single movie
     */
    scrapeSingleMovie?: (ScrapedMovieGenqlSelection & { __args: {input: ScrapeSingleMovieInput, source: ScraperSourceInput} })
    /** Scrape for a single performer */
    scrapeSinglePerformer?: (ScrapedPerformerGenqlSelection & { __args: {input: ScrapeSinglePerformerInput, source: ScraperSourceInput} })
    /** Scrape for a single scene */
    scrapeSingleScene?: (ScrapedSceneGenqlSelection & { __args: {input: ScrapeSingleSceneInput, source: ScraperSourceInput} })
    /** Scrape for a single studio */
    scrapeSingleStudio?: (ScrapedStudioGenqlSelection & { __args: {input: ScrapeSingleStudioInput, source: ScraperSourceInput} })
    /** Scrape for a single tag */
    scrapeSingleTag?: (ScrapedTagGenqlSelection & { __args: {input: ScrapeSingleTagInput, source: ScraperSourceInput} })
    /** Scrapes content based on a URL */
    scrapeURL?: (ScrapedContentGenqlSelection & { __args: {ty: ScrapeContentType, url: Scalars['String']} })
    /** Get stats */
    stats?: StatsResultTypeGenqlSelection
    systemStatus?: SystemStatusGenqlSelection
    validateStashBoxCredentials?: (StashBoxValidationResultGenqlSelection & { __args: {input: StashBoxInput} })
    version?: VersionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RemoveTempDLNAIPInput {address: Scalars['String']}

export interface ReorderSubGroupsInput {
/** ID of the group to reorder sub groups for */
group_id: Scalars['ID'],
/** If true, the sub groups will be inserted after the insert_index, otherwise they will be inserted before */
insert_after?: (Scalars['Boolean'] | null),
/** The sub-group ID at which to insert the sub groups */
insert_at_id: Scalars['ID'],
/**
 * IDs of the sub groups to reorder. These must be a subset of the current sub groups.
 * Sub groups will be inserted in this order at the insert_index
 */
sub_group_ids: Scalars['ID'][]}

export interface ResolutionCriterionInput {modifier: CriterionModifier,value: ResolutionEnum}

export interface SQLExecResultGenqlSelection{
    /**
     * The integer generated by the database in response to a command.
     * Typically this will be from an "auto increment" column when inserting a new row.
     * Not all databases support this feature, and the syntax of such statements varies.
     */
    last_insert_id?: boolean | number
    /**
     * The number of rows affected by the query, usually an UPDATE, INSERT, or DELETE.
     * Not all queries or databases support this feature.
     */
    rows_affected?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SQLQueryResultGenqlSelection{
    /** The column names, in the order they appear in the result set. */
    columns?: boolean | number
    /** The returned rows. */
    rows?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SaveFilterInput {find_filter?: (FindFilterType | null),
/** provide ID to overwrite existing filter */
id?: (Scalars['ID'] | null),mode: FilterMode,name: Scalars['String'],object_filter?: (Scalars['Map'] | null),ui_options?: (Scalars['Map'] | null)}

export interface SavedFilterGenqlSelection{
    /**
     * @deprecated use find_filter and object_filter instead
     * JSON-encoded filter string
     */
    filter?: boolean | number
    find_filter?: SavedFindFilterTypeGenqlSelection
    id?: boolean | number
    mode?: boolean | number
    name?: boolean | number
    object_filter?: boolean | number
    ui_options?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SavedFindFilterTypeGenqlSelection{
    direction?: boolean | number
    page?: boolean | number
    /** use per_page = -1 to indicate all results. Defaults to 25. */
    per_page?: boolean | number
    q?: boolean | number
    sort?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Filter options for meta data scannning */
export interface ScanMetaDataFilterInput {
/** If set, files with a modification time before this time point are ignored by the scan */
minModTime?: (Scalars['Timestamp'] | null)}

export interface ScanMetadataInput {
/** Filter options for the scan */
filter?: (ScanMetaDataFilterInput | null),paths?: (Scalars['String'][] | null),
/** Forces a rescan on files even if modification time is unchanged */
rescan?: (Scalars['Boolean'] | null),
/** Generate image clip previews during scan */
scanGenerateClipPreviews?: (Scalars['Boolean'] | null),
/** Generate covers during scan */
scanGenerateCovers?: (Scalars['Boolean'] | null),
/** Generate image previews during scan */
scanGenerateImagePreviews?: (Scalars['Boolean'] | null),
/** Generate phashes during scan */
scanGeneratePhashes?: (Scalars['Boolean'] | null),
/** Generate previews during scan */
scanGeneratePreviews?: (Scalars['Boolean'] | null),
/** Generate sprites during scan */
scanGenerateSprites?: (Scalars['Boolean'] | null),
/** Generate image thumbnails during scan */
scanGenerateThumbnails?: (Scalars['Boolean'] | null)}

export interface ScanMetadataOptionsGenqlSelection{
    /** Forces a rescan on files even if modification time is unchanged */
    rescan?: boolean | number
    /** Generate image clip previews during scan */
    scanGenerateClipPreviews?: boolean | number
    /** Generate covers during scan */
    scanGenerateCovers?: boolean | number
    /** Generate image previews during scan */
    scanGenerateImagePreviews?: boolean | number
    /** Generate phashes during scan */
    scanGeneratePhashes?: boolean | number
    /** Generate previews during scan */
    scanGeneratePreviews?: boolean | number
    /** Generate sprites during scan */
    scanGenerateSprites?: boolean | number
    /** Generate image thumbnails during scan */
    scanGenerateThumbnails?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SceneGenqlSelection{
    captions?: VideoCaptionGenqlSelection
    code?: boolean | number
    created_at?: boolean | number
    date?: boolean | number
    details?: boolean | number
    director?: boolean | number
    files?: VideoFileGenqlSelection
    galleries?: GalleryGenqlSelection
    groups?: SceneGroupGenqlSelection
    id?: boolean | number
    interactive?: boolean | number
    interactive_speed?: boolean | number
    /** The last time play count was updated */
    last_played_at?: boolean | number
    /** @deprecated Use groups */
    movies?: SceneMovieGenqlSelection
    o_counter?: boolean | number
    /** Times the o counter was incremented */
    o_history?: boolean | number
    organized?: boolean | number
    paths?: ScenePathsTypeGenqlSelection
    performers?: PerformerGenqlSelection
    /** The number ot times a scene has been played */
    play_count?: boolean | number
    /** The total time a scene has spent playing */
    play_duration?: boolean | number
    /** Times a scene was played */
    play_history?: boolean | number
    rating100?: boolean | number
    /** The time index a scene was left at */
    resume_time?: boolean | number
    /** Return valid stream paths */
    sceneStreams?: SceneStreamEndpointGenqlSelection
    scene_markers?: SceneMarkerGenqlSelection
    stash_ids?: StashIDGenqlSelection
    studio?: StudioGenqlSelection
    tags?: TagGenqlSelection
    title?: boolean | number
    updated_at?: boolean | number
    /** @deprecated Use urls */
    url?: boolean | number
    urls?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SceneCreateInput {code?: (Scalars['String'] | null),
/** This should be a URL or a base64 encoded data URL */
cover_image?: (Scalars['String'] | null),date?: (Scalars['String'] | null),details?: (Scalars['String'] | null),director?: (Scalars['String'] | null),
/**
 * The first id will be assigned as primary.
 * Files will be reassigned from existing scenes if applicable.
 * Files must not already be primary for another scene.
 */
file_ids?: (Scalars['ID'][] | null),gallery_ids?: (Scalars['ID'][] | null),groups?: (SceneGroupInput[] | null),movies?: (SceneMovieInput[] | null),organized?: (Scalars['Boolean'] | null),performer_ids?: (Scalars['ID'][] | null),rating100?: (Scalars['Int'] | null),stash_ids?: (StashIDInput[] | null),studio_id?: (Scalars['ID'] | null),tag_ids?: (Scalars['ID'][] | null),title?: (Scalars['String'] | null),url?: (Scalars['String'] | null),urls?: (Scalars['String'][] | null)}

export interface SceneDestroyInput {delete_file?: (Scalars['Boolean'] | null),delete_generated?: (Scalars['Boolean'] | null),id: Scalars['ID']}

export interface SceneFileTypeGenqlSelection{
    audio_codec?: boolean | number
    bitrate?: boolean | number
    duration?: boolean | number
    framerate?: boolean | number
    height?: boolean | number
    size?: boolean | number
    video_codec?: boolean | number
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SceneFilterType {AND?: (SceneFilterType | null),NOT?: (SceneFilterType | null),OR?: (SceneFilterType | null),
/** Filter by audio codec */
audio_codec?: (StringCriterionInput | null),
/** Filter by bit rate */
bitrate?: (IntCriterionInput | null),
/** Filter by captions */
captions?: (StringCriterionInput | null),
/** Filter by file checksum */
checksum?: (StringCriterionInput | null),code?: (StringCriterionInput | null),
/** Filter by creation time */
created_at?: (TimestampCriterionInput | null),
/** Filter by date */
date?: (DateCriterionInput | null),details?: (StringCriterionInput | null),director?: (StringCriterionInput | null),
/** Filter Scenes that have an exact phash match available */
duplicated?: (PHashDuplicationCriterionInput | null),
/** Filter by duration (in seconds) */
duration?: (IntCriterionInput | null),
/** Filter by file count */
file_count?: (IntCriterionInput | null),
/** Filter by related files that meet this criteria */
files_filter?: (FileFilterType | null),
/** Filter by frame rate */
framerate?: (IntCriterionInput | null),
/** Filter to only include scenes with this gallery */
galleries?: (MultiCriterionInput | null),
/** Filter by related galleries that meet this criteria */
galleries_filter?: (GalleryFilterType | null),
/** Filter to only include scenes with this group */
groups?: (HierarchicalMultiCriterionInput | null),
/** Filter by related groups that meet this criteria */
groups_filter?: (GroupFilterType | null),
/** Filter to only include scenes which have markers. `true` or `false` */
has_markers?: (Scalars['String'] | null),id?: (IntCriterionInput | null),
/** Filter by interactive */
interactive?: (Scalars['Boolean'] | null),
/** Filter by InteractiveSpeed */
interactive_speed?: (IntCriterionInput | null),
/** Filter to only include scenes missing this property */
is_missing?: (Scalars['String'] | null),
/** Filter by scene last played time */
last_played_at?: (TimestampCriterionInput | null),
/** Filter by related markers that meet this criteria */
markers_filter?: (SceneMarkerFilterType | null),
/** Filter to only include scenes with this movie */
movies?: (MultiCriterionInput | null),
/** Filter by related movies that meet this criteria */
movies_filter?: (MovieFilterType | null),
/** Filter by o-counter */
o_counter?: (IntCriterionInput | null),
/** Filter by organized */
organized?: (Scalars['Boolean'] | null),
/** Filter by orientation */
orientation?: (OrientationCriterionInput | null),
/** Filter by file oshash */
oshash?: (StringCriterionInput | null),
/** Filter by path */
path?: (StringCriterionInput | null),
/** Filter scenes by performer age at time of scene */
performer_age?: (IntCriterionInput | null),
/** Filter by performer count */
performer_count?: (IntCriterionInput | null),
/** Filter scenes that have performers that have been favorited */
performer_favorite?: (Scalars['Boolean'] | null),
/** Filter to only include scenes with performers with these tags */
performer_tags?: (HierarchicalMultiCriterionInput | null),
/** Filter to only include scenes with these performers */
performers?: (MultiCriterionInput | null),
/** Filter by related performers that meet this criteria */
performers_filter?: (PerformerFilterType | null),
/** Filter by file phash */
phash?: (StringCriterionInput | null),
/** Filter by file phash distance */
phash_distance?: (PhashDistanceCriterionInput | null),
/** Filter by play count */
play_count?: (IntCriterionInput | null),
/** Filter by play duration (in seconds) */
play_duration?: (IntCriterionInput | null),rating100?: (IntCriterionInput | null),
/** Filter by resolution */
resolution?: (ResolutionCriterionInput | null),
/** Filter by resume time */
resume_time?: (IntCriterionInput | null),
/** Filter by StashID */
stash_id_endpoint?: (StashIDCriterionInput | null),
/** Filter to only include scenes with this studio */
studios?: (HierarchicalMultiCriterionInput | null),
/** Filter by related studios that meet this criteria */
studios_filter?: (StudioFilterType | null),
/** Filter by tag count */
tag_count?: (IntCriterionInput | null),
/** Filter to only include scenes with these tags */
tags?: (HierarchicalMultiCriterionInput | null),
/** Filter by related tags that meet this criteria */
tags_filter?: (TagFilterType | null),title?: (StringCriterionInput | null),
/** Filter by last update time */
updated_at?: (TimestampCriterionInput | null),
/** Filter by url */
url?: (StringCriterionInput | null),
/** Filter by video codec */
video_codec?: (StringCriterionInput | null)}

export interface SceneGroupGenqlSelection{
    group?: GroupGenqlSelection
    scene_index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SceneGroupInput {group_id: Scalars['ID'],scene_index?: (Scalars['Int'] | null)}

export interface SceneHashInput {checksum?: (Scalars['String'] | null),oshash?: (Scalars['String'] | null)}

export interface SceneMarkerGenqlSelection{
    created_at?: boolean | number
    /** The optional end time of the marker (in seconds). Supports decimals. */
    end_seconds?: boolean | number
    id?: boolean | number
    /** The path to the preview image for this marker */
    preview?: boolean | number
    primary_tag?: TagGenqlSelection
    scene?: SceneGenqlSelection
    /** The path to the screenshot image for this marker */
    screenshot?: boolean | number
    /** The required start time of the marker (in seconds). Supports decimals. */
    seconds?: boolean | number
    /** The path to stream this marker */
    stream?: boolean | number
    tags?: TagGenqlSelection
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SceneMarkerCreateInput {
/** The optional end time of the marker (in seconds). Supports decimals. */
end_seconds?: (Scalars['Float'] | null),primary_tag_id: Scalars['ID'],scene_id: Scalars['ID'],
/** The required start time of the marker (in seconds). Supports decimals. */
seconds: Scalars['Float'],tag_ids?: (Scalars['ID'][] | null),title: Scalars['String']}

export interface SceneMarkerFilterType {
/** Filter by creation time */
created_at?: (TimestampCriterionInput | null),
/** Filter by duration (in seconds) */
duration?: (FloatCriterionInput | null),
/** Filter to only include scene markers with these performers */
performers?: (MultiCriterionInput | null),
/** Filter by cscene reation time */
scene_created_at?: (TimestampCriterionInput | null),
/** Filter by scene date */
scene_date?: (DateCriterionInput | null),
/** Filter by related scenes that meet this criteria */
scene_filter?: (SceneFilterType | null),
/** Filter to only include scene markers attached to a scene with these tags */
scene_tags?: (HierarchicalMultiCriterionInput | null),
/** Filter by lscene ast update time */
scene_updated_at?: (TimestampCriterionInput | null),
/** Filter to only include scene markers from these scenes */
scenes?: (MultiCriterionInput | null),
/** Filter to only include scene markers with these tags */
tags?: (HierarchicalMultiCriterionInput | null),
/** Filter by last update time */
updated_at?: (TimestampCriterionInput | null)}

export interface SceneMarkerTagGenqlSelection{
    scene_markers?: SceneMarkerGenqlSelection
    tag?: TagGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SceneMarkerUpdateInput {
/** The end time of the marker (in seconds). Supports decimals. */
end_seconds?: (Scalars['Float'] | null),id: Scalars['ID'],primary_tag_id?: (Scalars['ID'] | null),scene_id?: (Scalars['ID'] | null),
/** The start time of the marker (in seconds). Supports decimals. */
seconds?: (Scalars['Float'] | null),tag_ids?: (Scalars['ID'][] | null),title?: (Scalars['String'] | null)}

export interface SceneMergeInput {destination: Scalars['ID'],o_history?: (Scalars['Boolean'] | null),play_history?: (Scalars['Boolean'] | null),
/**
 * If destination scene has no files, then the primary file of the
 * first source scene will be assigned as primary
 */
source: Scalars['ID'][],values?: (SceneUpdateInput | null)}

export interface SceneMovieGenqlSelection{
    movie?: MovieGenqlSelection
    scene_index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SceneMovieIDGenqlSelection{
    movie_id?: boolean | number
    scene_index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SceneMovieInput {movie_id: Scalars['ID'],scene_index?: (Scalars['Int'] | null)}

export interface SceneParserInput {capitalizeTitle?: (Scalars['Boolean'] | null),ignoreOrganized?: (Scalars['Boolean'] | null),ignoreWords?: (Scalars['String'][] | null),whitespaceCharacters?: (Scalars['String'] | null)}

export interface SceneParserResultGenqlSelection{
    code?: boolean | number
    date?: boolean | number
    details?: boolean | number
    director?: boolean | number
    gallery_ids?: boolean | number
    movies?: SceneMovieIDGenqlSelection
    performer_ids?: boolean | number
    /** @deprecated Use 1-100 range with rating100 */
    rating?: boolean | number
    rating100?: boolean | number
    scene?: SceneGenqlSelection
    studio_id?: boolean | number
    tag_ids?: boolean | number
    title?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SceneParserResultTypeGenqlSelection{
    count?: boolean | number
    results?: SceneParserResultGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScenePathsTypeGenqlSelection{
    caption?: boolean | number
    funscript?: boolean | number
    interactive_heatmap?: boolean | number
    preview?: boolean | number
    screenshot?: boolean | number
    sprite?: boolean | number
    stream?: boolean | number
    vtt?: boolean | number
    webp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SceneStreamEndpointGenqlSelection{
    label?: boolean | number
    mime_type?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SceneUpdateInput {clientMutationId?: (Scalars['String'] | null),code?: (Scalars['String'] | null),
/** This should be a URL or a base64 encoded data URL */
cover_image?: (Scalars['String'] | null),date?: (Scalars['String'] | null),details?: (Scalars['String'] | null),director?: (Scalars['String'] | null),gallery_ids?: (Scalars['ID'][] | null),groups?: (SceneGroupInput[] | null),id: Scalars['ID'],movies?: (SceneMovieInput[] | null),o_counter?: (Scalars['Int'] | null),organized?: (Scalars['Boolean'] | null),performer_ids?: (Scalars['ID'][] | null),
/** The number ot times a scene has been played */
play_count?: (Scalars['Int'] | null),
/** The total time a scene has spent playing */
play_duration?: (Scalars['Float'] | null),primary_file_id?: (Scalars['ID'] | null),rating100?: (Scalars['Int'] | null),
/** The time index a scene was left at */
resume_time?: (Scalars['Float'] | null),stash_ids?: (StashIDInput[] | null),studio_id?: (Scalars['ID'] | null),tag_ids?: (Scalars['ID'][] | null),title?: (Scalars['String'] | null),url?: (Scalars['String'] | null),urls?: (Scalars['String'][] | null)}

export interface ScenesDestroyInput {delete_file?: (Scalars['Boolean'] | null),delete_generated?: (Scalars['Boolean'] | null),ids: Scalars['ID'][]}

export interface ScrapeMultiPerformersInput {
/** Instructs to query by scene fingerprints */
performer_ids?: (Scalars['ID'][] | null)}

export interface ScrapeMultiScenesInput {
/** Instructs to query by scene fingerprints */
scene_ids?: (Scalars['ID'][] | null)}

export interface ScrapeSingleGalleryInput {
/** Instructs to query by gallery id */
gallery_id?: (Scalars['ID'] | null),
/** Instructs to query by gallery fragment */
gallery_input?: (ScrapedGalleryInput | null),
/** Instructs to query by string */
query?: (Scalars['String'] | null)}

export interface ScrapeSingleGroupInput {
/** Instructs to query by group id */
group_id?: (Scalars['ID'] | null),
/** Instructs to query by group fragment */
group_input?: (ScrapedGroupInput | null),
/** Instructs to query by string */
query?: (Scalars['String'] | null)}

export interface ScrapeSingleImageInput {
/** Instructs to query by image id */
image_id?: (Scalars['ID'] | null),
/** Instructs to query by image fragment */
image_input?: (ScrapedImageInput | null),
/** Instructs to query by string */
query?: (Scalars['String'] | null)}

export interface ScrapeSingleMovieInput {
/** Instructs to query by movie id */
movie_id?: (Scalars['ID'] | null),
/** Instructs to query by movie fragment */
movie_input?: (ScrapedMovieInput | null),
/** Instructs to query by string */
query?: (Scalars['String'] | null)}

export interface ScrapeSinglePerformerInput {
/** Instructs to query by performer id */
performer_id?: (Scalars['ID'] | null),
/** Instructs to query by performer fragment */
performer_input?: (ScrapedPerformerInput | null),
/** Instructs to query by string */
query?: (Scalars['String'] | null)}

export interface ScrapeSingleSceneInput {
/** Instructs to query by string */
query?: (Scalars['String'] | null),
/** Instructs to query by scene fingerprints */
scene_id?: (Scalars['ID'] | null),
/** Instructs to query by scene fragment */
scene_input?: (ScrapedSceneInput | null)}

export interface ScrapeSingleStudioInput {
/** Query can be either a name or a Stash ID */
query?: (Scalars['String'] | null)}

export interface ScrapeSingleTagInput {
/** Query can be either a name or a Stash ID */
query?: (Scalars['String'] | null)}


/** Scraped Content is the forming union over the different scrapers */
export interface ScrapedContentGenqlSelection{
    on_ScrapedGallery?:ScrapedGalleryGenqlSelection,
    on_ScrapedGroup?:ScrapedGroupGenqlSelection,
    on_ScrapedImage?:ScrapedImageGenqlSelection,
    on_ScrapedMovie?:ScrapedMovieGenqlSelection,
    on_ScrapedPerformer?:ScrapedPerformerGenqlSelection,
    on_ScrapedScene?:ScrapedSceneGenqlSelection,
    on_ScrapedStudio?:ScrapedStudioGenqlSelection,
    on_ScrapedTag?:ScrapedTagGenqlSelection,
    __typename?: boolean | number
}

export interface ScrapedGalleryGenqlSelection{
    code?: boolean | number
    date?: boolean | number
    details?: boolean | number
    performers?: ScrapedPerformerGenqlSelection
    photographer?: boolean | number
    studio?: ScrapedStudioGenqlSelection
    tags?: ScrapedTagGenqlSelection
    title?: boolean | number
    /** @deprecated use urls */
    url?: boolean | number
    urls?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScrapedGalleryInput {code?: (Scalars['String'] | null),date?: (Scalars['String'] | null),details?: (Scalars['String'] | null),photographer?: (Scalars['String'] | null),title?: (Scalars['String'] | null),url?: (Scalars['String'] | null),urls?: (Scalars['String'][] | null)}


/** A group from a scraping operation... */
export interface ScrapedGroupGenqlSelection{
    aliases?: boolean | number
    /** This should be a base64 encoded data URL */
    back_image?: boolean | number
    date?: boolean | number
    director?: boolean | number
    duration?: boolean | number
    /** This should be a base64 encoded data URL */
    front_image?: boolean | number
    name?: boolean | number
    rating?: boolean | number
    stored_id?: boolean | number
    studio?: ScrapedStudioGenqlSelection
    synopsis?: boolean | number
    tags?: ScrapedTagGenqlSelection
    urls?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScrapedGroupInput {aliases?: (Scalars['String'] | null),date?: (Scalars['String'] | null),director?: (Scalars['String'] | null),duration?: (Scalars['String'] | null),name?: (Scalars['String'] | null),rating?: (Scalars['String'] | null),synopsis?: (Scalars['String'] | null),urls?: (Scalars['String'][] | null)}

export interface ScrapedImageGenqlSelection{
    code?: boolean | number
    date?: boolean | number
    details?: boolean | number
    performers?: ScrapedPerformerGenqlSelection
    photographer?: boolean | number
    studio?: ScrapedStudioGenqlSelection
    tags?: ScrapedTagGenqlSelection
    title?: boolean | number
    urls?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScrapedImageInput {code?: (Scalars['String'] | null),date?: (Scalars['String'] | null),details?: (Scalars['String'] | null),title?: (Scalars['String'] | null),urls?: (Scalars['String'][] | null)}


/** A movie from a scraping operation... */
export interface ScrapedMovieGenqlSelection{
    aliases?: boolean | number
    /** This should be a base64 encoded data URL */
    back_image?: boolean | number
    date?: boolean | number
    director?: boolean | number
    duration?: boolean | number
    /** This should be a base64 encoded data URL */
    front_image?: boolean | number
    name?: boolean | number
    rating?: boolean | number
    stored_id?: boolean | number
    studio?: ScrapedStudioGenqlSelection
    synopsis?: boolean | number
    tags?: ScrapedTagGenqlSelection
    /** @deprecated use urls */
    url?: boolean | number
    urls?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScrapedMovieInput {aliases?: (Scalars['String'] | null),date?: (Scalars['String'] | null),director?: (Scalars['String'] | null),duration?: (Scalars['String'] | null),name?: (Scalars['String'] | null),rating?: (Scalars['String'] | null),synopsis?: (Scalars['String'] | null),url?: (Scalars['String'] | null),urls?: (Scalars['String'][] | null)}


/** A performer from a scraping operation... */
export interface ScrapedPerformerGenqlSelection{
    aliases?: boolean | number
    birthdate?: boolean | number
    career_length?: boolean | number
    circumcised?: boolean | number
    country?: boolean | number
    death_date?: boolean | number
    details?: boolean | number
    disambiguation?: boolean | number
    ethnicity?: boolean | number
    eye_color?: boolean | number
    fake_tits?: boolean | number
    gender?: boolean | number
    hair_color?: boolean | number
    height?: boolean | number
    /**
     * @deprecated use images instead
     * This should be a base64 encoded data URL
     */
    image?: boolean | number
    images?: boolean | number
    /** @deprecated use urls */
    instagram?: boolean | number
    measurements?: boolean | number
    name?: boolean | number
    penis_length?: boolean | number
    piercings?: boolean | number
    remote_site_id?: boolean | number
    /** Set if performer matched */
    stored_id?: boolean | number
    tags?: ScrapedTagGenqlSelection
    tattoos?: boolean | number
    /** @deprecated use urls */
    twitter?: boolean | number
    /** @deprecated use urls */
    url?: boolean | number
    urls?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScrapedPerformerInput {aliases?: (Scalars['String'] | null),birthdate?: (Scalars['String'] | null),career_length?: (Scalars['String'] | null),circumcised?: (Scalars['String'] | null),country?: (Scalars['String'] | null),death_date?: (Scalars['String'] | null),details?: (Scalars['String'] | null),disambiguation?: (Scalars['String'] | null),ethnicity?: (Scalars['String'] | null),eye_color?: (Scalars['String'] | null),fake_tits?: (Scalars['String'] | null),gender?: (Scalars['String'] | null),hair_color?: (Scalars['String'] | null),height?: (Scalars['String'] | null),instagram?: (Scalars['String'] | null),measurements?: (Scalars['String'] | null),name?: (Scalars['String'] | null),penis_length?: (Scalars['String'] | null),piercings?: (Scalars['String'] | null),remote_site_id?: (Scalars['String'] | null),
/** Set if performer matched */
stored_id?: (Scalars['ID'] | null),tattoos?: (Scalars['String'] | null),twitter?: (Scalars['String'] | null),url?: (Scalars['String'] | null),urls?: (Scalars['String'][] | null),weight?: (Scalars['String'] | null)}

export interface ScrapedSceneGenqlSelection{
    code?: boolean | number
    date?: boolean | number
    details?: boolean | number
    director?: boolean | number
    duration?: boolean | number
    file?: SceneFileTypeGenqlSelection
    fingerprints?: StashBoxFingerprintGenqlSelection
    groups?: ScrapedGroupGenqlSelection
    /** This should be a base64 encoded data URL */
    image?: boolean | number
    /** @deprecated use groups */
    movies?: ScrapedMovieGenqlSelection
    performers?: ScrapedPerformerGenqlSelection
    remote_site_id?: boolean | number
    studio?: ScrapedStudioGenqlSelection
    tags?: ScrapedTagGenqlSelection
    title?: boolean | number
    /** @deprecated use urls */
    url?: boolean | number
    urls?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScrapedSceneInput {code?: (Scalars['String'] | null),date?: (Scalars['String'] | null),details?: (Scalars['String'] | null),director?: (Scalars['String'] | null),remote_site_id?: (Scalars['String'] | null),title?: (Scalars['String'] | null),url?: (Scalars['String'] | null),urls?: (Scalars['String'][] | null)}

export interface ScrapedStudioGenqlSelection{
    /** Aliases must be comma-delimited to be parsed correctly */
    aliases?: boolean | number
    details?: boolean | number
    image?: boolean | number
    name?: boolean | number
    parent?: ScrapedStudioGenqlSelection
    remote_site_id?: boolean | number
    /** Set if studio matched */
    stored_id?: boolean | number
    tags?: ScrapedTagGenqlSelection
    /** @deprecated use urls */
    url?: boolean | number
    urls?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScrapedTagGenqlSelection{
    name?: boolean | number
    /** Remote site ID, if applicable */
    remote_site_id?: boolean | number
    /** Set if tag matched */
    stored_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScraperGenqlSelection{
    /** Details for gallery scraper */
    gallery?: ScraperSpecGenqlSelection
    /** Details for group scraper */
    group?: ScraperSpecGenqlSelection
    id?: boolean | number
    /** Details for image scraper */
    image?: ScraperSpecGenqlSelection
    /**
     * @deprecated use group
     * Details for movie scraper
     */
    movie?: ScraperSpecGenqlSelection
    name?: boolean | number
    /** Details for performer scraper */
    performer?: ScraperSpecGenqlSelection
    /** Details for scene scraper */
    scene?: ScraperSpecGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScraperSourceGenqlSelection{
    /** Scraper ID to scrape with. Should be unset if stash_box_endpoint/stash_box_index is set */
    scraper_id?: boolean | number
    /** Stash-box endpoint */
    stash_box_endpoint?: boolean | number
    /**
     * @deprecated use stash_box_endpoint
     * Index of the configured stash-box instance to use. Should be unset if scraper_id is set
     */
    stash_box_index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScraperSourceInput {
/** Scraper ID to scrape with. Should be unset if stash_box_endpoint/stash_box_index is set */
scraper_id?: (Scalars['ID'] | null),
/** Stash-box endpoint */
stash_box_endpoint?: (Scalars['String'] | null),
/** Index of the configured stash-box instance to use. Should be unset if scraper_id is set */
stash_box_index?: (Scalars['Int'] | null)}

export interface ScraperSpecGenqlSelection{
    supported_scrapes?: boolean | number
    /** URLs matching these can be scraped with */
    urls?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SetDefaultFilterInput {
/** null to clear */
find_filter?: (FindFilterType | null),mode: FilterMode,object_filter?: (Scalars['Map'] | null),ui_options?: (Scalars['Map'] | null)}

export interface SetFingerprintsInput {type: Scalars['String'],
/** an null value will remove the fingerprint */
value?: (Scalars['String'] | null)}

export interface SetupInput {
/** Empty to indicate default - only applicable if storeBlobsInDatabase is false */
blobsLocation: Scalars['String'],
/** Empty to indicate default */
cacheLocation: Scalars['String'],
/** Empty to indicate $HOME/.stash/config.yml default */
configLocation: Scalars['String'],
/** Empty to indicate default */
databaseFile: Scalars['String'],
/** Empty to indicate default */
generatedLocation: Scalars['String'],
/** True if SFW content mode is enabled */
sfwContentMode?: (Scalars['Boolean'] | null),stashes: StashConfigInput[],storeBlobsInDatabase: Scalars['Boolean']}

export interface StashBoxGenqlSelection{
    api_key?: boolean | number
    endpoint?: boolean | number
    max_requests_per_minute?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Accepts either ids, or a combination of names and stash_ids.
 * If none are set, then all existing items will be tagged.
 */
export interface StashBoxBatchTagInput {
/** If batch adding studios, should their parent studios also be created? */
createParent: Scalars['Boolean'],
/** Stash endpoint to use for the tagging */
endpoint?: (Scalars['Int'] | null),
/** Fields to exclude when executing the tagging */
exclude_fields?: (Scalars['String'][] | null),
/**
 * IDs in stash of the items to update.
 * If set, names and stash_ids fields will be ignored.
 */
ids?: (Scalars['ID'][] | null),
/** Names of the items in the stash-box instance to search for and create */
names?: (Scalars['String'][] | null),
/** IDs in stash of the performers to update */
performer_ids?: (Scalars['ID'][] | null),
/** Names of the performers in the stash-box instance to search for and create */
performer_names?: (Scalars['String'][] | null),
/** Refresh items already tagged by StashBox if true. Only tag items with no StashBox tagging if false */
refresh: Scalars['Boolean'],
/** Endpoint of the stash-box instance to use */
stash_box_endpoint?: (Scalars['String'] | null),
/** Stash IDs of the items in the stash-box instance to search for and create */
stash_ids?: (Scalars['String'][] | null)}

export interface StashBoxDraftSubmissionInput {id: Scalars['String'],stash_box_endpoint?: (Scalars['String'] | null),stash_box_index?: (Scalars['Int'] | null)}

export interface StashBoxFingerprintGenqlSelection{
    algorithm?: boolean | number
    duration?: boolean | number
    hash?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StashBoxFingerprintSubmissionInput {scene_ids: Scalars['String'][],stash_box_endpoint?: (Scalars['String'] | null),stash_box_index?: (Scalars['Int'] | null)}

export interface StashBoxInput {api_key: Scalars['String'],endpoint: Scalars['String'],max_requests_per_minute?: (Scalars['Int'] | null),name: Scalars['String']}

export interface StashBoxPerformerQueryInput {
/** Instructs query by scene fingerprints */
performer_ids?: (Scalars['ID'][] | null),
/** Query by query string */
q?: (Scalars['String'] | null),
/** Endpoint of the stash-box instance to use */
stash_box_endpoint?: (Scalars['String'] | null),
/** Index of the configured stash-box instance to use */
stash_box_index?: (Scalars['Int'] | null)}

export interface StashBoxPerformerQueryResultGenqlSelection{
    query?: boolean | number
    results?: ScrapedPerformerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StashBoxSceneQueryInput {
/** Query by query string */
q?: (Scalars['String'] | null),
/** Instructs query by scene fingerprints */
scene_ids?: (Scalars['ID'][] | null),
/** Endpoint of the stash-box instance to use */
stash_box_endpoint?: (Scalars['String'] | null),
/** Index of the configured stash-box instance to use */
stash_box_index?: (Scalars['Int'] | null)}

export interface StashBoxValidationResultGenqlSelection{
    status?: boolean | number
    valid?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StashConfigGenqlSelection{
    excludeImage?: boolean | number
    excludeVideo?: boolean | number
    path?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Stash configuration details */
export interface StashConfigInput {excludeImage: Scalars['Boolean'],excludeVideo: Scalars['Boolean'],path: Scalars['String']}

export interface StashIDGenqlSelection{
    endpoint?: boolean | number
    stash_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StashIDCriterionInput {
/**
 * If present, this value is treated as a predicate.
 * That is, it will filter based on stash_ids with the matching endpoint
 */
endpoint?: (Scalars['String'] | null),modifier: CriterionModifier,stash_id?: (Scalars['String'] | null)}

export interface StashIDInput {endpoint: Scalars['String'],stash_id: Scalars['String'],updated_at?: (Scalars['Time'] | null)}

export interface StatsResultTypeGenqlSelection{
    gallery_count?: boolean | number
    group_count?: boolean | number
    image_count?: boolean | number
    images_size?: boolean | number
    /** @deprecated use group_count instead */
    movie_count?: boolean | number
    performer_count?: boolean | number
    scene_count?: boolean | number
    scenes_duration?: boolean | number
    scenes_played?: boolean | number
    scenes_size?: boolean | number
    studio_count?: boolean | number
    tag_count?: boolean | number
    total_o_count?: boolean | number
    total_play_count?: boolean | number
    total_play_duration?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StringCriterionInput {modifier: CriterionModifier,value: Scalars['String']}

export interface StudioGenqlSelection{
    aliases?: boolean | number
    child_studios?: StudioGenqlSelection
    created_at?: boolean | number
    details?: boolean | number
    favorite?: boolean | number
    gallery_count?: { __args: {depth?: (Scalars['Int'] | null)} } | boolean | number
    group_count?: { __args: {depth?: (Scalars['Int'] | null)} } | boolean | number
    groups?: GroupGenqlSelection
    id?: boolean | number
    ignore_auto_tag?: boolean | number
    image_count?: { __args: {depth?: (Scalars['Int'] | null)} } | boolean | number
    image_path?: boolean | number
    /** @deprecated use group_count instead */
    movie_count?: { __args: {depth?: (Scalars['Int'] | null)} } | boolean | number
    /** @deprecated use groups instead */
    movies?: MovieGenqlSelection
    name?: boolean | number
    o_counter?: boolean | number
    parent_studio?: StudioGenqlSelection
    performer_count?: { __args: {depth?: (Scalars['Int'] | null)} } | boolean | number
    rating100?: boolean | number
    scene_count?: { __args: {depth?: (Scalars['Int'] | null)} } | boolean | number
    stash_ids?: StashIDGenqlSelection
    tags?: TagGenqlSelection
    updated_at?: boolean | number
    /** @deprecated Use urls */
    url?: boolean | number
    urls?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StudioCreateInput {aliases?: (Scalars['String'][] | null),details?: (Scalars['String'] | null),favorite?: (Scalars['Boolean'] | null),ignore_auto_tag?: (Scalars['Boolean'] | null),
/** This should be a URL or a base64 encoded data URL */
image?: (Scalars['String'] | null),name: Scalars['String'],parent_id?: (Scalars['ID'] | null),rating100?: (Scalars['Int'] | null),stash_ids?: (StashIDInput[] | null),tag_ids?: (Scalars['ID'][] | null),url?: (Scalars['String'] | null),urls?: (Scalars['String'][] | null)}

export interface StudioDestroyInput {id: Scalars['ID']}

export interface StudioFilterType {AND?: (StudioFilterType | null),NOT?: (StudioFilterType | null),OR?: (StudioFilterType | null),
/** Filter by studio aliases */
aliases?: (StringCriterionInput | null),
/** Filter by subsidiary studio count */
child_count?: (IntCriterionInput | null),
/** Filter by creation time */
created_at?: (TimestampCriterionInput | null),details?: (StringCriterionInput | null),
/** Filter by favorite */
favorite?: (Scalars['Boolean'] | null),
/** Filter by related galleries that meet this criteria */
galleries_filter?: (GalleryFilterType | null),
/** Filter by gallery count */
gallery_count?: (IntCriterionInput | null),
/** Filter by autotag ignore value */
ignore_auto_tag?: (Scalars['Boolean'] | null),
/** Filter by image count */
image_count?: (IntCriterionInput | null),
/** Filter by related images that meet this criteria */
images_filter?: (ImageFilterType | null),
/** Filter to only include studios missing this property */
is_missing?: (Scalars['String'] | null),name?: (StringCriterionInput | null),
/** Filter to only include studios with this parent studio */
parents?: (MultiCriterionInput | null),rating100?: (IntCriterionInput | null),
/** Filter by scene count */
scene_count?: (IntCriterionInput | null),
/** Filter by related scenes that meet this criteria */
scenes_filter?: (SceneFilterType | null),
/** Filter by StashID */
stash_id_endpoint?: (StashIDCriterionInput | null),
/** Filter by tag count */
tag_count?: (IntCriterionInput | null),
/** Filter to only include studios with these tags */
tags?: (HierarchicalMultiCriterionInput | null),
/** Filter by last update time */
updated_at?: (TimestampCriterionInput | null),
/** Filter by url */
url?: (StringCriterionInput | null)}

export interface StudioUpdateInput {aliases?: (Scalars['String'][] | null),details?: (Scalars['String'] | null),favorite?: (Scalars['Boolean'] | null),id: Scalars['ID'],ignore_auto_tag?: (Scalars['Boolean'] | null),
/** This should be a URL or a base64 encoded data URL */
image?: (Scalars['String'] | null),name?: (Scalars['String'] | null),parent_id?: (Scalars['ID'] | null),rating100?: (Scalars['Int'] | null),stash_ids?: (StashIDInput[] | null),tag_ids?: (Scalars['ID'][] | null),url?: (Scalars['String'] | null),urls?: (Scalars['String'][] | null)}

export interface SubscriptionGenqlSelection{
    /** Update from the metadata manager */
    jobsSubscribe?: JobStatusUpdateGenqlSelection
    loggingSubscribe?: LogEntryGenqlSelection
    scanCompleteSubscribe?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SystemStatusGenqlSelection{
    appSchema?: boolean | number
    configPath?: boolean | number
    databasePath?: boolean | number
    databaseSchema?: boolean | number
    ffmpegPath?: boolean | number
    ffprobePath?: boolean | number
    homeDir?: boolean | number
    os?: boolean | number
    status?: boolean | number
    workingDir?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TagGenqlSelection{
    aliases?: boolean | number
    child_count?: boolean | number
    children?: TagGenqlSelection
    created_at?: boolean | number
    description?: boolean | number
    favorite?: boolean | number
    gallery_count?: { __args: {depth?: (Scalars['Int'] | null)} } | boolean | number
    group_count?: { __args: {depth?: (Scalars['Int'] | null)} } | boolean | number
    id?: boolean | number
    ignore_auto_tag?: boolean | number
    image_count?: { __args: {depth?: (Scalars['Int'] | null)} } | boolean | number
    image_path?: boolean | number
    /** @deprecated use group_count instead */
    movie_count?: { __args: {depth?: (Scalars['Int'] | null)} } | boolean | number
    name?: boolean | number
    parent_count?: boolean | number
    parents?: TagGenqlSelection
    performer_count?: { __args: {depth?: (Scalars['Int'] | null)} } | boolean | number
    scene_count?: { __args: {depth?: (Scalars['Int'] | null)} } | boolean | number
    scene_marker_count?: { __args: {depth?: (Scalars['Int'] | null)} } | boolean | number
    /** Value that does not appear in the UI but overrides name for sorting */
    sort_name?: boolean | number
    stash_ids?: StashIDGenqlSelection
    studio_count?: { __args: {depth?: (Scalars['Int'] | null)} } | boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TagCreateInput {aliases?: (Scalars['String'][] | null),child_ids?: (Scalars['ID'][] | null),description?: (Scalars['String'] | null),favorite?: (Scalars['Boolean'] | null),ignore_auto_tag?: (Scalars['Boolean'] | null),
/** This should be a URL or a base64 encoded data URL */
image?: (Scalars['String'] | null),name: Scalars['String'],parent_ids?: (Scalars['ID'][] | null),
/** Value that does not appear in the UI but overrides name for sorting */
sort_name?: (Scalars['String'] | null),stash_ids?: (StashIDInput[] | null)}

export interface TagDestroyInput {id: Scalars['ID']}

export interface TagFilterType {AND?: (TagFilterType | null),NOT?: (TagFilterType | null),OR?: (TagFilterType | null),
/** Filter by tag aliases */
aliases?: (StringCriterionInput | null),
/** Filter by number f child tags the tag has */
child_count?: (IntCriterionInput | null),
/** Filter by child tags */
children?: (HierarchicalMultiCriterionInput | null),
/** Filter by creation time */
created_at?: (TimestampCriterionInput | null),
/** Filter by tag description */
description?: (StringCriterionInput | null),
/** Filter by favorite */
favorite?: (Scalars['Boolean'] | null),
/** Filter by related galleries that meet this criteria */
galleries_filter?: (GalleryFilterType | null),
/** Filter by number of galleries with this tag */
gallery_count?: (IntCriterionInput | null),
/** Filter by number of group with this tag */
group_count?: (IntCriterionInput | null),
/** Filter by autotag ignore value */
ignore_auto_tag?: (Scalars['Boolean'] | null),
/** Filter by number of images with this tag */
image_count?: (IntCriterionInput | null),
/** Filter by related images that meet this criteria */
images_filter?: (ImageFilterType | null),
/** Filter to only include tags missing this property */
is_missing?: (Scalars['String'] | null),
/** Filter by number of markers with this tag */
marker_count?: (IntCriterionInput | null),
/** Filter by number of movies with this tag */
movie_count?: (IntCriterionInput | null),
/** Filter by tag name */
name?: (StringCriterionInput | null),
/** Filter by number of parent tags the tag has */
parent_count?: (IntCriterionInput | null),
/** Filter by parent tags */
parents?: (HierarchicalMultiCriterionInput | null),
/** Filter by number of performers with this tag */
performer_count?: (IntCriterionInput | null),
/** Filter by number of scenes with this tag */
scene_count?: (IntCriterionInput | null),
/** Filter by related scenes that meet this criteria */
scenes_filter?: (SceneFilterType | null),
/** Filter by tag sort_name */
sort_name?: (StringCriterionInput | null),
/** Filter by StashID */
stash_id_endpoint?: (StashIDCriterionInput | null),
/** Filter by number of studios with this tag */
studio_count?: (IntCriterionInput | null),
/** Filter by last update time */
updated_at?: (TimestampCriterionInput | null)}

export interface TagUpdateInput {aliases?: (Scalars['String'][] | null),child_ids?: (Scalars['ID'][] | null),description?: (Scalars['String'] | null),favorite?: (Scalars['Boolean'] | null),id: Scalars['ID'],ignore_auto_tag?: (Scalars['Boolean'] | null),
/** This should be a URL or a base64 encoded data URL */
image?: (Scalars['String'] | null),name?: (Scalars['String'] | null),parent_ids?: (Scalars['ID'][] | null),
/** Value that does not appear in the UI but overrides name for sorting */
sort_name?: (Scalars['String'] | null),stash_ids?: (StashIDInput[] | null)}

export interface TagsMergeInput {destination: Scalars['ID'],source: Scalars['ID'][]}

export interface TimestampCriterionInput {modifier: CriterionModifier,value: Scalars['String'],value2?: (Scalars['String'] | null)}

export interface VersionGenqlSelection{
    build_time?: boolean | number
    hash?: boolean | number
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VideoCaptionGenqlSelection{
    caption_type?: boolean | number
    language_code?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VideoFileGenqlSelection{
    audio_codec?: boolean | number
    basename?: boolean | number
    bit_rate?: boolean | number
    created_at?: boolean | number
    duration?: boolean | number
    fingerprint?: { __args: {type: Scalars['String']} }
    fingerprints?: FingerprintGenqlSelection
    format?: boolean | number
    frame_rate?: boolean | number
    height?: boolean | number
    id?: boolean | number
    mod_time?: boolean | number
    parent_folder?: FolderGenqlSelection
    /** @deprecated Use parent_folder instead */
    parent_folder_id?: boolean | number
    path?: boolean | number
    size?: boolean | number
    updated_at?: boolean | number
    video_codec?: boolean | number
    width?: boolean | number
    zip_file?: BasicFileGenqlSelection
    /** @deprecated Use zip_file instead */
    zip_file_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VideoFileFilterInput {audio_codec?: (StringCriterionInput | null),bitrate?: (IntCriterionInput | null),captions?: (StringCriterionInput | null),
/** in seconds */
duration?: (IntCriterionInput | null),format?: (StringCriterionInput | null),framerate?: (IntCriterionInput | null),interactive?: (Scalars['Boolean'] | null),interactive_speed?: (IntCriterionInput | null),orientation?: (OrientationCriterionInput | null),resolution?: (ResolutionCriterionInput | null),video_codec?: (StringCriterionInput | null)}

export interface VisualFileGenqlSelection{
    on_ImageFile?:ImageFileGenqlSelection,
    on_VideoFile?:VideoFileGenqlSelection,
    on_BaseFile?: BaseFileGenqlSelection,
    __typename?: boolean | number
}


    const AutoTagMetadataOptions_possibleTypes: string[] = ['AutoTagMetadataOptions']
    export const isAutoTagMetadataOptions = (obj?: { __typename?: any } | null): obj is AutoTagMetadataOptions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAutoTagMetadataOptions"')
      return AutoTagMetadataOptions_possibleTypes.includes(obj.__typename)
    }
    


    const BaseFile_possibleTypes: string[] = ['BasicFile','GalleryFile','ImageFile','VideoFile']
    export const isBaseFile = (obj?: { __typename?: any } | null): obj is BaseFile => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBaseFile"')
      return BaseFile_possibleTypes.includes(obj.__typename)
    }
    


    const BasicFile_possibleTypes: string[] = ['BasicFile']
    export const isBasicFile = (obj?: { __typename?: any } | null): obj is BasicFile => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBasicFile"')
      return BasicFile_possibleTypes.includes(obj.__typename)
    }
    


    const ConfigDLNAResult_possibleTypes: string[] = ['ConfigDLNAResult']
    export const isConfigDLNAResult = (obj?: { __typename?: any } | null): obj is ConfigDLNAResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConfigDLNAResult"')
      return ConfigDLNAResult_possibleTypes.includes(obj.__typename)
    }
    


    const ConfigDefaultSettingsResult_possibleTypes: string[] = ['ConfigDefaultSettingsResult']
    export const isConfigDefaultSettingsResult = (obj?: { __typename?: any } | null): obj is ConfigDefaultSettingsResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConfigDefaultSettingsResult"')
      return ConfigDefaultSettingsResult_possibleTypes.includes(obj.__typename)
    }
    


    const ConfigDisableDropdownCreate_possibleTypes: string[] = ['ConfigDisableDropdownCreate']
    export const isConfigDisableDropdownCreate = (obj?: { __typename?: any } | null): obj is ConfigDisableDropdownCreate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConfigDisableDropdownCreate"')
      return ConfigDisableDropdownCreate_possibleTypes.includes(obj.__typename)
    }
    


    const ConfigGeneralResult_possibleTypes: string[] = ['ConfigGeneralResult']
    export const isConfigGeneralResult = (obj?: { __typename?: any } | null): obj is ConfigGeneralResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConfigGeneralResult"')
      return ConfigGeneralResult_possibleTypes.includes(obj.__typename)
    }
    


    const ConfigImageLightboxResult_possibleTypes: string[] = ['ConfigImageLightboxResult']
    export const isConfigImageLightboxResult = (obj?: { __typename?: any } | null): obj is ConfigImageLightboxResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConfigImageLightboxResult"')
      return ConfigImageLightboxResult_possibleTypes.includes(obj.__typename)
    }
    


    const ConfigInterfaceResult_possibleTypes: string[] = ['ConfigInterfaceResult']
    export const isConfigInterfaceResult = (obj?: { __typename?: any } | null): obj is ConfigInterfaceResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConfigInterfaceResult"')
      return ConfigInterfaceResult_possibleTypes.includes(obj.__typename)
    }
    


    const ConfigResult_possibleTypes: string[] = ['ConfigResult']
    export const isConfigResult = (obj?: { __typename?: any } | null): obj is ConfigResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConfigResult"')
      return ConfigResult_possibleTypes.includes(obj.__typename)
    }
    


    const ConfigScrapingResult_possibleTypes: string[] = ['ConfigScrapingResult']
    export const isConfigScrapingResult = (obj?: { __typename?: any } | null): obj is ConfigScrapingResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConfigScrapingResult"')
      return ConfigScrapingResult_possibleTypes.includes(obj.__typename)
    }
    


    const DLNAIP_possibleTypes: string[] = ['DLNAIP']
    export const isDLNAIP = (obj?: { __typename?: any } | null): obj is DLNAIP => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDLNAIP"')
      return DLNAIP_possibleTypes.includes(obj.__typename)
    }
    


    const DLNAStatus_possibleTypes: string[] = ['DLNAStatus']
    export const isDLNAStatus = (obj?: { __typename?: any } | null): obj is DLNAStatus => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDLNAStatus"')
      return DLNAStatus_possibleTypes.includes(obj.__typename)
    }
    


    const Directory_possibleTypes: string[] = ['Directory']
    export const isDirectory = (obj?: { __typename?: any } | null): obj is Directory => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDirectory"')
      return Directory_possibleTypes.includes(obj.__typename)
    }
    


    const FindFilesResultType_possibleTypes: string[] = ['FindFilesResultType']
    export const isFindFilesResultType = (obj?: { __typename?: any } | null): obj is FindFilesResultType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFindFilesResultType"')
      return FindFilesResultType_possibleTypes.includes(obj.__typename)
    }
    


    const FindFoldersResultType_possibleTypes: string[] = ['FindFoldersResultType']
    export const isFindFoldersResultType = (obj?: { __typename?: any } | null): obj is FindFoldersResultType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFindFoldersResultType"')
      return FindFoldersResultType_possibleTypes.includes(obj.__typename)
    }
    


    const FindGalleriesResultType_possibleTypes: string[] = ['FindGalleriesResultType']
    export const isFindGalleriesResultType = (obj?: { __typename?: any } | null): obj is FindGalleriesResultType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFindGalleriesResultType"')
      return FindGalleriesResultType_possibleTypes.includes(obj.__typename)
    }
    


    const FindGalleryChaptersResultType_possibleTypes: string[] = ['FindGalleryChaptersResultType']
    export const isFindGalleryChaptersResultType = (obj?: { __typename?: any } | null): obj is FindGalleryChaptersResultType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFindGalleryChaptersResultType"')
      return FindGalleryChaptersResultType_possibleTypes.includes(obj.__typename)
    }
    


    const FindGroupsResultType_possibleTypes: string[] = ['FindGroupsResultType']
    export const isFindGroupsResultType = (obj?: { __typename?: any } | null): obj is FindGroupsResultType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFindGroupsResultType"')
      return FindGroupsResultType_possibleTypes.includes(obj.__typename)
    }
    


    const FindImagesResultType_possibleTypes: string[] = ['FindImagesResultType']
    export const isFindImagesResultType = (obj?: { __typename?: any } | null): obj is FindImagesResultType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFindImagesResultType"')
      return FindImagesResultType_possibleTypes.includes(obj.__typename)
    }
    


    const FindMoviesResultType_possibleTypes: string[] = ['FindMoviesResultType']
    export const isFindMoviesResultType = (obj?: { __typename?: any } | null): obj is FindMoviesResultType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFindMoviesResultType"')
      return FindMoviesResultType_possibleTypes.includes(obj.__typename)
    }
    


    const FindPerformersResultType_possibleTypes: string[] = ['FindPerformersResultType']
    export const isFindPerformersResultType = (obj?: { __typename?: any } | null): obj is FindPerformersResultType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFindPerformersResultType"')
      return FindPerformersResultType_possibleTypes.includes(obj.__typename)
    }
    


    const FindSceneMarkersResultType_possibleTypes: string[] = ['FindSceneMarkersResultType']
    export const isFindSceneMarkersResultType = (obj?: { __typename?: any } | null): obj is FindSceneMarkersResultType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFindSceneMarkersResultType"')
      return FindSceneMarkersResultType_possibleTypes.includes(obj.__typename)
    }
    


    const FindScenesResultType_possibleTypes: string[] = ['FindScenesResultType']
    export const isFindScenesResultType = (obj?: { __typename?: any } | null): obj is FindScenesResultType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFindScenesResultType"')
      return FindScenesResultType_possibleTypes.includes(obj.__typename)
    }
    


    const FindStudiosResultType_possibleTypes: string[] = ['FindStudiosResultType']
    export const isFindStudiosResultType = (obj?: { __typename?: any } | null): obj is FindStudiosResultType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFindStudiosResultType"')
      return FindStudiosResultType_possibleTypes.includes(obj.__typename)
    }
    


    const FindTagsResultType_possibleTypes: string[] = ['FindTagsResultType']
    export const isFindTagsResultType = (obj?: { __typename?: any } | null): obj is FindTagsResultType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFindTagsResultType"')
      return FindTagsResultType_possibleTypes.includes(obj.__typename)
    }
    


    const Fingerprint_possibleTypes: string[] = ['Fingerprint']
    export const isFingerprint = (obj?: { __typename?: any } | null): obj is Fingerprint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFingerprint"')
      return Fingerprint_possibleTypes.includes(obj.__typename)
    }
    


    const Folder_possibleTypes: string[] = ['Folder']
    export const isFolder = (obj?: { __typename?: any } | null): obj is Folder => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFolder"')
      return Folder_possibleTypes.includes(obj.__typename)
    }
    


    const Gallery_possibleTypes: string[] = ['Gallery']
    export const isGallery = (obj?: { __typename?: any } | null): obj is Gallery => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGallery"')
      return Gallery_possibleTypes.includes(obj.__typename)
    }
    


    const GalleryChapter_possibleTypes: string[] = ['GalleryChapter']
    export const isGalleryChapter = (obj?: { __typename?: any } | null): obj is GalleryChapter => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGalleryChapter"')
      return GalleryChapter_possibleTypes.includes(obj.__typename)
    }
    


    const GalleryFile_possibleTypes: string[] = ['GalleryFile']
    export const isGalleryFile = (obj?: { __typename?: any } | null): obj is GalleryFile => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGalleryFile"')
      return GalleryFile_possibleTypes.includes(obj.__typename)
    }
    


    const GalleryPathsType_possibleTypes: string[] = ['GalleryPathsType']
    export const isGalleryPathsType = (obj?: { __typename?: any } | null): obj is GalleryPathsType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGalleryPathsType"')
      return GalleryPathsType_possibleTypes.includes(obj.__typename)
    }
    


    const GenerateMetadataOptions_possibleTypes: string[] = ['GenerateMetadataOptions']
    export const isGenerateMetadataOptions = (obj?: { __typename?: any } | null): obj is GenerateMetadataOptions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGenerateMetadataOptions"')
      return GenerateMetadataOptions_possibleTypes.includes(obj.__typename)
    }
    


    const GeneratePreviewOptions_possibleTypes: string[] = ['GeneratePreviewOptions']
    export const isGeneratePreviewOptions = (obj?: { __typename?: any } | null): obj is GeneratePreviewOptions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGeneratePreviewOptions"')
      return GeneratePreviewOptions_possibleTypes.includes(obj.__typename)
    }
    


    const Group_possibleTypes: string[] = ['Group']
    export const isGroup = (obj?: { __typename?: any } | null): obj is Group => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGroup"')
      return Group_possibleTypes.includes(obj.__typename)
    }
    


    const GroupDescription_possibleTypes: string[] = ['GroupDescription']
    export const isGroupDescription = (obj?: { __typename?: any } | null): obj is GroupDescription => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGroupDescription"')
      return GroupDescription_possibleTypes.includes(obj.__typename)
    }
    


    const HistoryMutationResult_possibleTypes: string[] = ['HistoryMutationResult']
    export const isHistoryMutationResult = (obj?: { __typename?: any } | null): obj is HistoryMutationResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHistoryMutationResult"')
      return HistoryMutationResult_possibleTypes.includes(obj.__typename)
    }
    


    const IdentifyFieldOptions_possibleTypes: string[] = ['IdentifyFieldOptions']
    export const isIdentifyFieldOptions = (obj?: { __typename?: any } | null): obj is IdentifyFieldOptions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIdentifyFieldOptions"')
      return IdentifyFieldOptions_possibleTypes.includes(obj.__typename)
    }
    


    const IdentifyMetadataOptions_possibleTypes: string[] = ['IdentifyMetadataOptions']
    export const isIdentifyMetadataOptions = (obj?: { __typename?: any } | null): obj is IdentifyMetadataOptions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIdentifyMetadataOptions"')
      return IdentifyMetadataOptions_possibleTypes.includes(obj.__typename)
    }
    


    const IdentifyMetadataTaskOptions_possibleTypes: string[] = ['IdentifyMetadataTaskOptions']
    export const isIdentifyMetadataTaskOptions = (obj?: { __typename?: any } | null): obj is IdentifyMetadataTaskOptions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIdentifyMetadataTaskOptions"')
      return IdentifyMetadataTaskOptions_possibleTypes.includes(obj.__typename)
    }
    


    const IdentifySource_possibleTypes: string[] = ['IdentifySource']
    export const isIdentifySource = (obj?: { __typename?: any } | null): obj is IdentifySource => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIdentifySource"')
      return IdentifySource_possibleTypes.includes(obj.__typename)
    }
    


    const Image_possibleTypes: string[] = ['Image']
    export const isImage = (obj?: { __typename?: any } | null): obj is Image => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImage"')
      return Image_possibleTypes.includes(obj.__typename)
    }
    


    const ImageFile_possibleTypes: string[] = ['ImageFile']
    export const isImageFile = (obj?: { __typename?: any } | null): obj is ImageFile => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImageFile"')
      return ImageFile_possibleTypes.includes(obj.__typename)
    }
    


    const ImageFileType_possibleTypes: string[] = ['ImageFileType']
    export const isImageFileType = (obj?: { __typename?: any } | null): obj is ImageFileType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImageFileType"')
      return ImageFileType_possibleTypes.includes(obj.__typename)
    }
    


    const ImagePathsType_possibleTypes: string[] = ['ImagePathsType']
    export const isImagePathsType = (obj?: { __typename?: any } | null): obj is ImagePathsType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImagePathsType"')
      return ImagePathsType_possibleTypes.includes(obj.__typename)
    }
    


    const Job_possibleTypes: string[] = ['Job']
    export const isJob = (obj?: { __typename?: any } | null): obj is Job => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isJob"')
      return Job_possibleTypes.includes(obj.__typename)
    }
    


    const JobStatusUpdate_possibleTypes: string[] = ['JobStatusUpdate']
    export const isJobStatusUpdate = (obj?: { __typename?: any } | null): obj is JobStatusUpdate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isJobStatusUpdate"')
      return JobStatusUpdate_possibleTypes.includes(obj.__typename)
    }
    


    const LatestVersion_possibleTypes: string[] = ['LatestVersion']
    export const isLatestVersion = (obj?: { __typename?: any } | null): obj is LatestVersion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLatestVersion"')
      return LatestVersion_possibleTypes.includes(obj.__typename)
    }
    


    const LogEntry_possibleTypes: string[] = ['LogEntry']
    export const isLogEntry = (obj?: { __typename?: any } | null): obj is LogEntry => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLogEntry"')
      return LogEntry_possibleTypes.includes(obj.__typename)
    }
    


    const MarkerStringsResultType_possibleTypes: string[] = ['MarkerStringsResultType']
    export const isMarkerStringsResultType = (obj?: { __typename?: any } | null): obj is MarkerStringsResultType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarkerStringsResultType"')
      return MarkerStringsResultType_possibleTypes.includes(obj.__typename)
    }
    


    const Movie_possibleTypes: string[] = ['Movie']
    export const isMovie = (obj?: { __typename?: any } | null): obj is Movie => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMovie"')
      return Movie_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Package_possibleTypes: string[] = ['Package']
    export const isPackage = (obj?: { __typename?: any } | null): obj is Package => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackage"')
      return Package_possibleTypes.includes(obj.__typename)
    }
    


    const PackageSource_possibleTypes: string[] = ['PackageSource']
    export const isPackageSource = (obj?: { __typename?: any } | null): obj is PackageSource => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPackageSource"')
      return PackageSource_possibleTypes.includes(obj.__typename)
    }
    


    const Performer_possibleTypes: string[] = ['Performer']
    export const isPerformer = (obj?: { __typename?: any } | null): obj is Performer => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPerformer"')
      return Performer_possibleTypes.includes(obj.__typename)
    }
    


    const Plugin_possibleTypes: string[] = ['Plugin']
    export const isPlugin = (obj?: { __typename?: any } | null): obj is Plugin => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlugin"')
      return Plugin_possibleTypes.includes(obj.__typename)
    }
    


    const PluginHook_possibleTypes: string[] = ['PluginHook']
    export const isPluginHook = (obj?: { __typename?: any } | null): obj is PluginHook => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPluginHook"')
      return PluginHook_possibleTypes.includes(obj.__typename)
    }
    


    const PluginPaths_possibleTypes: string[] = ['PluginPaths']
    export const isPluginPaths = (obj?: { __typename?: any } | null): obj is PluginPaths => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPluginPaths"')
      return PluginPaths_possibleTypes.includes(obj.__typename)
    }
    


    const PluginResult_possibleTypes: string[] = ['PluginResult']
    export const isPluginResult = (obj?: { __typename?: any } | null): obj is PluginResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPluginResult"')
      return PluginResult_possibleTypes.includes(obj.__typename)
    }
    


    const PluginSetting_possibleTypes: string[] = ['PluginSetting']
    export const isPluginSetting = (obj?: { __typename?: any } | null): obj is PluginSetting => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPluginSetting"')
      return PluginSetting_possibleTypes.includes(obj.__typename)
    }
    


    const PluginTask_possibleTypes: string[] = ['PluginTask']
    export const isPluginTask = (obj?: { __typename?: any } | null): obj is PluginTask => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPluginTask"')
      return PluginTask_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const SQLExecResult_possibleTypes: string[] = ['SQLExecResult']
    export const isSQLExecResult = (obj?: { __typename?: any } | null): obj is SQLExecResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSQLExecResult"')
      return SQLExecResult_possibleTypes.includes(obj.__typename)
    }
    


    const SQLQueryResult_possibleTypes: string[] = ['SQLQueryResult']
    export const isSQLQueryResult = (obj?: { __typename?: any } | null): obj is SQLQueryResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSQLQueryResult"')
      return SQLQueryResult_possibleTypes.includes(obj.__typename)
    }
    


    const SavedFilter_possibleTypes: string[] = ['SavedFilter']
    export const isSavedFilter = (obj?: { __typename?: any } | null): obj is SavedFilter => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSavedFilter"')
      return SavedFilter_possibleTypes.includes(obj.__typename)
    }
    


    const SavedFindFilterType_possibleTypes: string[] = ['SavedFindFilterType']
    export const isSavedFindFilterType = (obj?: { __typename?: any } | null): obj is SavedFindFilterType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSavedFindFilterType"')
      return SavedFindFilterType_possibleTypes.includes(obj.__typename)
    }
    


    const ScanMetadataOptions_possibleTypes: string[] = ['ScanMetadataOptions']
    export const isScanMetadataOptions = (obj?: { __typename?: any } | null): obj is ScanMetadataOptions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScanMetadataOptions"')
      return ScanMetadataOptions_possibleTypes.includes(obj.__typename)
    }
    


    const Scene_possibleTypes: string[] = ['Scene']
    export const isScene = (obj?: { __typename?: any } | null): obj is Scene => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScene"')
      return Scene_possibleTypes.includes(obj.__typename)
    }
    


    const SceneFileType_possibleTypes: string[] = ['SceneFileType']
    export const isSceneFileType = (obj?: { __typename?: any } | null): obj is SceneFileType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSceneFileType"')
      return SceneFileType_possibleTypes.includes(obj.__typename)
    }
    


    const SceneGroup_possibleTypes: string[] = ['SceneGroup']
    export const isSceneGroup = (obj?: { __typename?: any } | null): obj is SceneGroup => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSceneGroup"')
      return SceneGroup_possibleTypes.includes(obj.__typename)
    }
    


    const SceneMarker_possibleTypes: string[] = ['SceneMarker']
    export const isSceneMarker = (obj?: { __typename?: any } | null): obj is SceneMarker => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSceneMarker"')
      return SceneMarker_possibleTypes.includes(obj.__typename)
    }
    


    const SceneMarkerTag_possibleTypes: string[] = ['SceneMarkerTag']
    export const isSceneMarkerTag = (obj?: { __typename?: any } | null): obj is SceneMarkerTag => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSceneMarkerTag"')
      return SceneMarkerTag_possibleTypes.includes(obj.__typename)
    }
    


    const SceneMovie_possibleTypes: string[] = ['SceneMovie']
    export const isSceneMovie = (obj?: { __typename?: any } | null): obj is SceneMovie => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSceneMovie"')
      return SceneMovie_possibleTypes.includes(obj.__typename)
    }
    


    const SceneMovieID_possibleTypes: string[] = ['SceneMovieID']
    export const isSceneMovieID = (obj?: { __typename?: any } | null): obj is SceneMovieID => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSceneMovieID"')
      return SceneMovieID_possibleTypes.includes(obj.__typename)
    }
    


    const SceneParserResult_possibleTypes: string[] = ['SceneParserResult']
    export const isSceneParserResult = (obj?: { __typename?: any } | null): obj is SceneParserResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSceneParserResult"')
      return SceneParserResult_possibleTypes.includes(obj.__typename)
    }
    


    const SceneParserResultType_possibleTypes: string[] = ['SceneParserResultType']
    export const isSceneParserResultType = (obj?: { __typename?: any } | null): obj is SceneParserResultType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSceneParserResultType"')
      return SceneParserResultType_possibleTypes.includes(obj.__typename)
    }
    


    const ScenePathsType_possibleTypes: string[] = ['ScenePathsType']
    export const isScenePathsType = (obj?: { __typename?: any } | null): obj is ScenePathsType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScenePathsType"')
      return ScenePathsType_possibleTypes.includes(obj.__typename)
    }
    


    const SceneStreamEndpoint_possibleTypes: string[] = ['SceneStreamEndpoint']
    export const isSceneStreamEndpoint = (obj?: { __typename?: any } | null): obj is SceneStreamEndpoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSceneStreamEndpoint"')
      return SceneStreamEndpoint_possibleTypes.includes(obj.__typename)
    }
    


    const ScrapedContent_possibleTypes: string[] = ['ScrapedGallery','ScrapedGroup','ScrapedImage','ScrapedMovie','ScrapedPerformer','ScrapedScene','ScrapedStudio','ScrapedTag']
    export const isScrapedContent = (obj?: { __typename?: any } | null): obj is ScrapedContent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScrapedContent"')
      return ScrapedContent_possibleTypes.includes(obj.__typename)
    }
    


    const ScrapedGallery_possibleTypes: string[] = ['ScrapedGallery']
    export const isScrapedGallery = (obj?: { __typename?: any } | null): obj is ScrapedGallery => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScrapedGallery"')
      return ScrapedGallery_possibleTypes.includes(obj.__typename)
    }
    


    const ScrapedGroup_possibleTypes: string[] = ['ScrapedGroup']
    export const isScrapedGroup = (obj?: { __typename?: any } | null): obj is ScrapedGroup => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScrapedGroup"')
      return ScrapedGroup_possibleTypes.includes(obj.__typename)
    }
    


    const ScrapedImage_possibleTypes: string[] = ['ScrapedImage']
    export const isScrapedImage = (obj?: { __typename?: any } | null): obj is ScrapedImage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScrapedImage"')
      return ScrapedImage_possibleTypes.includes(obj.__typename)
    }
    


    const ScrapedMovie_possibleTypes: string[] = ['ScrapedMovie']
    export const isScrapedMovie = (obj?: { __typename?: any } | null): obj is ScrapedMovie => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScrapedMovie"')
      return ScrapedMovie_possibleTypes.includes(obj.__typename)
    }
    


    const ScrapedPerformer_possibleTypes: string[] = ['ScrapedPerformer']
    export const isScrapedPerformer = (obj?: { __typename?: any } | null): obj is ScrapedPerformer => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScrapedPerformer"')
      return ScrapedPerformer_possibleTypes.includes(obj.__typename)
    }
    


    const ScrapedScene_possibleTypes: string[] = ['ScrapedScene']
    export const isScrapedScene = (obj?: { __typename?: any } | null): obj is ScrapedScene => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScrapedScene"')
      return ScrapedScene_possibleTypes.includes(obj.__typename)
    }
    


    const ScrapedStudio_possibleTypes: string[] = ['ScrapedStudio']
    export const isScrapedStudio = (obj?: { __typename?: any } | null): obj is ScrapedStudio => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScrapedStudio"')
      return ScrapedStudio_possibleTypes.includes(obj.__typename)
    }
    


    const ScrapedTag_possibleTypes: string[] = ['ScrapedTag']
    export const isScrapedTag = (obj?: { __typename?: any } | null): obj is ScrapedTag => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScrapedTag"')
      return ScrapedTag_possibleTypes.includes(obj.__typename)
    }
    


    const Scraper_possibleTypes: string[] = ['Scraper']
    export const isScraper = (obj?: { __typename?: any } | null): obj is Scraper => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScraper"')
      return Scraper_possibleTypes.includes(obj.__typename)
    }
    


    const ScraperSource_possibleTypes: string[] = ['ScraperSource']
    export const isScraperSource = (obj?: { __typename?: any } | null): obj is ScraperSource => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScraperSource"')
      return ScraperSource_possibleTypes.includes(obj.__typename)
    }
    


    const ScraperSpec_possibleTypes: string[] = ['ScraperSpec']
    export const isScraperSpec = (obj?: { __typename?: any } | null): obj is ScraperSpec => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScraperSpec"')
      return ScraperSpec_possibleTypes.includes(obj.__typename)
    }
    


    const StashBox_possibleTypes: string[] = ['StashBox']
    export const isStashBox = (obj?: { __typename?: any } | null): obj is StashBox => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStashBox"')
      return StashBox_possibleTypes.includes(obj.__typename)
    }
    


    const StashBoxFingerprint_possibleTypes: string[] = ['StashBoxFingerprint']
    export const isStashBoxFingerprint = (obj?: { __typename?: any } | null): obj is StashBoxFingerprint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStashBoxFingerprint"')
      return StashBoxFingerprint_possibleTypes.includes(obj.__typename)
    }
    


    const StashBoxPerformerQueryResult_possibleTypes: string[] = ['StashBoxPerformerQueryResult']
    export const isStashBoxPerformerQueryResult = (obj?: { __typename?: any } | null): obj is StashBoxPerformerQueryResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStashBoxPerformerQueryResult"')
      return StashBoxPerformerQueryResult_possibleTypes.includes(obj.__typename)
    }
    


    const StashBoxValidationResult_possibleTypes: string[] = ['StashBoxValidationResult']
    export const isStashBoxValidationResult = (obj?: { __typename?: any } | null): obj is StashBoxValidationResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStashBoxValidationResult"')
      return StashBoxValidationResult_possibleTypes.includes(obj.__typename)
    }
    


    const StashConfig_possibleTypes: string[] = ['StashConfig']
    export const isStashConfig = (obj?: { __typename?: any } | null): obj is StashConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStashConfig"')
      return StashConfig_possibleTypes.includes(obj.__typename)
    }
    


    const StashID_possibleTypes: string[] = ['StashID']
    export const isStashID = (obj?: { __typename?: any } | null): obj is StashID => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStashID"')
      return StashID_possibleTypes.includes(obj.__typename)
    }
    


    const StatsResultType_possibleTypes: string[] = ['StatsResultType']
    export const isStatsResultType = (obj?: { __typename?: any } | null): obj is StatsResultType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStatsResultType"')
      return StatsResultType_possibleTypes.includes(obj.__typename)
    }
    


    const Studio_possibleTypes: string[] = ['Studio']
    export const isStudio = (obj?: { __typename?: any } | null): obj is Studio => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStudio"')
      return Studio_possibleTypes.includes(obj.__typename)
    }
    


    const Subscription_possibleTypes: string[] = ['Subscription']
    export const isSubscription = (obj?: { __typename?: any } | null): obj is Subscription => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubscription"')
      return Subscription_possibleTypes.includes(obj.__typename)
    }
    


    const SystemStatus_possibleTypes: string[] = ['SystemStatus']
    export const isSystemStatus = (obj?: { __typename?: any } | null): obj is SystemStatus => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSystemStatus"')
      return SystemStatus_possibleTypes.includes(obj.__typename)
    }
    


    const Tag_possibleTypes: string[] = ['Tag']
    export const isTag = (obj?: { __typename?: any } | null): obj is Tag => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTag"')
      return Tag_possibleTypes.includes(obj.__typename)
    }
    


    const Version_possibleTypes: string[] = ['Version']
    export const isVersion = (obj?: { __typename?: any } | null): obj is Version => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVersion"')
      return Version_possibleTypes.includes(obj.__typename)
    }
    


    const VideoCaption_possibleTypes: string[] = ['VideoCaption']
    export const isVideoCaption = (obj?: { __typename?: any } | null): obj is VideoCaption => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVideoCaption"')
      return VideoCaption_possibleTypes.includes(obj.__typename)
    }
    


    const VideoFile_possibleTypes: string[] = ['VideoFile']
    export const isVideoFile = (obj?: { __typename?: any } | null): obj is VideoFile => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVideoFile"')
      return VideoFile_possibleTypes.includes(obj.__typename)
    }
    


    const VisualFile_possibleTypes: string[] = ['ImageFile','VideoFile']
    export const isVisualFile = (obj?: { __typename?: any } | null): obj is VisualFile => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVisualFile"')
      return VisualFile_possibleTypes.includes(obj.__typename)
    }
    

export const enumBlobsStorageType = {
   DATABASE: 'DATABASE' as const,
   FILESYSTEM: 'FILESYSTEM' as const
}

export const enumBulkUpdateIdMode = {
   ADD: 'ADD' as const,
   REMOVE: 'REMOVE' as const,
   SET: 'SET' as const
}

export const enumCircumisedEnum = {
   CUT: 'CUT' as const,
   UNCUT: 'UNCUT' as const
}

export const enumCriterionModifier = {
   BETWEEN: 'BETWEEN' as const,
   EQUALS: 'EQUALS' as const,
   EXCLUDES: 'EXCLUDES' as const,
   GREATER_THAN: 'GREATER_THAN' as const,
   INCLUDES: 'INCLUDES' as const,
   INCLUDES_ALL: 'INCLUDES_ALL' as const,
   IS_NULL: 'IS_NULL' as const,
   LESS_THAN: 'LESS_THAN' as const,
   MATCHES_REGEX: 'MATCHES_REGEX' as const,
   NOT_BETWEEN: 'NOT_BETWEEN' as const,
   NOT_EQUALS: 'NOT_EQUALS' as const,
   NOT_MATCHES_REGEX: 'NOT_MATCHES_REGEX' as const,
   NOT_NULL: 'NOT_NULL' as const
}

export const enumFilterMode = {
   GALLERIES: 'GALLERIES' as const,
   GROUPS: 'GROUPS' as const,
   IMAGES: 'IMAGES' as const,
   MOVIES: 'MOVIES' as const,
   PERFORMERS: 'PERFORMERS' as const,
   SCENES: 'SCENES' as const,
   SCENE_MARKERS: 'SCENE_MARKERS' as const,
   STUDIOS: 'STUDIOS' as const,
   TAGS: 'TAGS' as const
}

export const enumGenderEnum = {
   FEMALE: 'FEMALE' as const,
   INTERSEX: 'INTERSEX' as const,
   MALE: 'MALE' as const,
   NON_BINARY: 'NON_BINARY' as const,
   TRANSGENDER_FEMALE: 'TRANSGENDER_FEMALE' as const,
   TRANSGENDER_MALE: 'TRANSGENDER_MALE' as const
}

export const enumHashAlgorithm = {
   MD5: 'MD5' as const,
   OSHASH: 'OSHASH' as const
}

export const enumIdentifyFieldStrategy = {
   IGNORE: 'IGNORE' as const,
   MERGE: 'MERGE' as const,
   OVERWRITE: 'OVERWRITE' as const
}

export const enumImageLightboxDisplayMode = {
   FIT_X: 'FIT_X' as const,
   FIT_XY: 'FIT_XY' as const,
   ORIGINAL: 'ORIGINAL' as const
}

export const enumImageLightboxScrollMode = {
   PAN_Y: 'PAN_Y' as const,
   ZOOM: 'ZOOM' as const
}

export const enumImportDuplicateEnum = {
   FAIL: 'FAIL' as const,
   IGNORE: 'IGNORE' as const,
   OVERWRITE: 'OVERWRITE' as const
}

export const enumImportMissingRefEnum = {
   CREATE: 'CREATE' as const,
   FAIL: 'FAIL' as const,
   IGNORE: 'IGNORE' as const
}

export const enumJobStatus = {
   CANCELLED: 'CANCELLED' as const,
   FAILED: 'FAILED' as const,
   FINISHED: 'FINISHED' as const,
   READY: 'READY' as const,
   RUNNING: 'RUNNING' as const,
   STOPPING: 'STOPPING' as const
}

export const enumJobStatusUpdateType = {
   ADD: 'ADD' as const,
   REMOVE: 'REMOVE' as const,
   UPDATE: 'UPDATE' as const
}

export const enumLogLevel = {
   Debug: 'Debug' as const,
   Error: 'Error' as const,
   Info: 'Info' as const,
   Progress: 'Progress' as const,
   Trace: 'Trace' as const,
   Warning: 'Warning' as const
}

export const enumOrientationEnum = {
   LANDSCAPE: 'LANDSCAPE' as const,
   PORTRAIT: 'PORTRAIT' as const,
   SQUARE: 'SQUARE' as const
}

export const enumPackageType = {
   Plugin: 'Plugin' as const,
   Scraper: 'Scraper' as const
}

export const enumPluginSettingTypeEnum = {
   BOOLEAN: 'BOOLEAN' as const,
   NUMBER: 'NUMBER' as const,
   STRING: 'STRING' as const
}

export const enumPreviewPreset = {
   fast: 'fast' as const,
   medium: 'medium' as const,
   slow: 'slow' as const,
   slower: 'slower' as const,
   ultrafast: 'ultrafast' as const,
   veryfast: 'veryfast' as const,
   veryslow: 'veryslow' as const
}

export const enumResolutionEnum = {
   EIGHT_K: 'EIGHT_K' as const,
   FIVE_K: 'FIVE_K' as const,
   FOUR_K: 'FOUR_K' as const,
   FULL_HD: 'FULL_HD' as const,
   HUGE: 'HUGE' as const,
   LOW: 'LOW' as const,
   QUAD_HD: 'QUAD_HD' as const,
   R360P: 'R360P' as const,
   SEVEN_K: 'SEVEN_K' as const,
   SIX_K: 'SIX_K' as const,
   STANDARD: 'STANDARD' as const,
   STANDARD_HD: 'STANDARD_HD' as const,
   VERY_LOW: 'VERY_LOW' as const,
   VR_HD: 'VR_HD' as const,
   WEB_HD: 'WEB_HD' as const
}

export const enumScrapeContentType = {
   GALLERY: 'GALLERY' as const,
   GROUP: 'GROUP' as const,
   IMAGE: 'IMAGE' as const,
   MOVIE: 'MOVIE' as const,
   PERFORMER: 'PERFORMER' as const,
   SCENE: 'SCENE' as const
}

export const enumScrapeType = {
   FRAGMENT: 'FRAGMENT' as const,
   NAME: 'NAME' as const,
   URL: 'URL' as const
}

export const enumSortDirectionEnum = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumStreamingResolutionEnum = {
   FOUR_K: 'FOUR_K' as const,
   FULL_HD: 'FULL_HD' as const,
   LOW: 'LOW' as const,
   ORIGINAL: 'ORIGINAL' as const,
   STANDARD: 'STANDARD' as const,
   STANDARD_HD: 'STANDARD_HD' as const
}

export const enumSystemStatusEnum = {
   NEEDS_MIGRATION: 'NEEDS_MIGRATION' as const,
   OK: 'OK' as const,
   SETUP: 'SETUP' as const
}
