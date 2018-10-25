/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql'

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result

export type SubscriptionResolver<Result, Parent = any, Context = any, Args = any> = {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result>
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>
}

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any
/** An object with an id, parent, and children */
export interface Node {
  id: string /** The id of the node. */
  parent?: Node | null /** The parent of this node. */
  children?: Node[] | null /** The children of this node. */
}

export interface Query {
  allSitePage?: SitePageConnection | null /** Connection to all SitePage nodes */
  allSitePlugin?: SitePluginConnection | null /** Connection to all SitePlugin nodes */
  allDirectory?: DirectoryConnection | null /** Connection to all Directory nodes */
  allFile?: FileConnection | null /** Connection to all File nodes */
  allMarkdownRemark?: MarkdownRemarkConnection | null /** Connection to all MarkdownRemark nodes */
  sitePage?: SitePage | null
  sitePlugin?: SitePlugin | null
  site?: Site | null
  directory?: Directory | null
  file?: File | null
  markdownRemark?: MarkdownRemark | null
}
/** A connection to a list of items. */
export interface SitePageConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: SitePageEdge[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: string[] | null
  group?: SitePageGroupConnectionConnection[] | null
}
/** Information about pagination in a connection. */
export interface PageInfo {
  hasNextPage: boolean /** When paginating, are there more items? */
}
/** An edge in a connection. */
export interface SitePageEdge {
  node?: SitePage | null /** The item at the end of the edge */
  next?: SitePage | null /** The next edge in the connection */
  previous?: SitePage | null /** The previous edge in the connection */
}
/** Node of type SitePage */
export interface SitePage extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: Node[] | null /** The children of this node. */
  jsonName?: string | null
  internalComponentName?: string | null
  path?: string | null
  component?: string | null
  componentChunkName?: string | null
  context?: Context | null
  pluginCreator?: SitePlugin | null
  pluginCreatorId?: string | null
  componentPath?: string | null
  internal?: Internal_7 | null
}

export interface Context {
  slug?: string | null
}
/** Node of type SitePlugin */
export interface SitePlugin extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: Node[] | null /** The children of this node. */
  resolve?: string | null
  name?: string | null
  version?: string | null
  pluginOptions?: PluginOptions_3 | null
  nodeAPIs?: string[] | null
  browserAPIs?: string[] | null
  ssrAPIs?: string[] | null
  pluginFilepath?: string | null
  packageJson?: PackageJson_2 | null
  internal?: Internal_8 | null
}

export interface PluginOptions_3 {
  plugins?: Plugins_2[] | null
  classPrefix?: string | null
  showLineNumbers?: boolean | null
  noInlineHighlight?: boolean | null
  pathToConfigModule?: string | null
  omitGoogleFont?: boolean | null
  name?: string | null
  path?: string | null
  trackingId?: string | null
  pathCheck?: boolean | null
}

export interface Plugins_2 {
  resolve?: string | null
  id?: string | null
  name?: string | null
  version?: string | null
  pluginOptions?: PluginOptions_4 | null
  pluginFilepath?: string | null
}

export interface PluginOptions_4 {
  classPrefix?: string | null
  showLineNumbers?: boolean | null
  noInlineHighlight?: boolean | null
}

export interface PackageJson_2 {
  name?: string | null
  description?: string | null
  version?: string | null
  main?: string | null
  license?: string | null
  dependencies?: Dependencies_2[] | null
  devDependencies?: DevDependencies_2[] | null
  peerDependencies?: PeerDependencies_2[] | null
  keywords?: string[] | null
}

export interface Dependencies_2 {
  name?: string | null
  version?: string | null
}

export interface DevDependencies_2 {
  name?: string | null
  version?: string | null
}

export interface PeerDependencies_2 {
  name?: string | null
  version?: string | null
}

export interface Internal_8 {
  contentDigest?: string | null
  type?: string | null
  owner?: string | null
}

export interface Internal_7 {
  type?: string | null
  contentDigest?: string | null
  description?: string | null
  owner?: string | null
}
/** A connection to a list of items. */
export interface SitePageGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: SitePageGroupConnectionEdge[] | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface SitePageGroupConnectionEdge {
  node?: SitePage | null /** The item at the end of the edge */
  next?: SitePage | null /** The next edge in the connection */
  previous?: SitePage | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface SitePluginConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: SitePluginEdge[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: string[] | null
  group?: SitePluginGroupConnectionConnection[] | null
}
/** An edge in a connection. */
export interface SitePluginEdge {
  node?: SitePlugin | null /** The item at the end of the edge */
  next?: SitePlugin | null /** The next edge in the connection */
  previous?: SitePlugin | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface SitePluginGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: SitePluginGroupConnectionEdge[] | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface SitePluginGroupConnectionEdge {
  node?: SitePlugin | null /** The item at the end of the edge */
  next?: SitePlugin | null /** The next edge in the connection */
  previous?: SitePlugin | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface DirectoryConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: DirectoryEdge[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: string[] | null
  group?: DirectoryGroupConnectionConnection[] | null
}
/** An edge in a connection. */
export interface DirectoryEdge {
  node?: Directory | null /** The item at the end of the edge */
  next?: Directory | null /** The next edge in the connection */
  previous?: Directory | null /** The previous edge in the connection */
}
/** Node of type Directory */
export interface Directory extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: Node[] | null /** The children of this node. */
  internal?: Internal_9 | null
  sourceInstanceName?: string | null
  absolutePath?: string | null
  relativePath?: string | null
  extension?: string | null
  size?: number | null
  prettySize?: string | null
  modifiedTime?: Date | null
  accessTime?: Date | null
  changeTime?: Date | null
  birthTime?: Date | null
  root?: string | null
  dir?: string | null
  base?: string | null
  ext?: string | null
  name?: string | null
  relativeDirectory?: string | null
  dev?: number | null
  mode?: number | null
  nlink?: number | null
  uid?: number | null
  gid?: number | null
  rdev?: number | null
  ino?: number | null
  atimeMs?: number | null
  mtimeMs?: number | null
  ctimeMs?: number | null
  birthtimeMs?: number | null
  atime?: Date | null
  mtime?: Date | null
  ctime?: Date | null
  birthtime?: Date | null
}

export interface Internal_9 {
  contentDigest?: string | null
  type?: string | null
  description?: string | null
  owner?: string | null
}
/** A connection to a list of items. */
export interface DirectoryGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: DirectoryGroupConnectionEdge[] | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface DirectoryGroupConnectionEdge {
  node?: Directory | null /** The item at the end of the edge */
  next?: Directory | null /** The next edge in the connection */
  previous?: Directory | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface FileConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: FileEdge[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: string[] | null
  group?: FileGroupConnectionConnection[] | null
}
/** An edge in a connection. */
export interface FileEdge {
  node?: File | null /** The item at the end of the edge */
  next?: File | null /** The next edge in the connection */
  previous?: File | null /** The previous edge in the connection */
}
/** Node of type File */
export interface File extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: Node[] | null /** The children of this node. */
  childMarkdownRemark?: MarkdownRemark | null /** The child of this node of type markdownRemark */
  internal?: Internal_10 | null
  sourceInstanceName?: string | null
  absolutePath?: string | null
  relativePath?: string | null
  extension?: string | null
  size?: number | null
  prettySize?: string | null
  modifiedTime?: Date | null
  accessTime?: Date | null
  changeTime?: Date | null
  birthTime?: Date | null
  root?: string | null
  dir?: string | null
  base?: string | null
  ext?: string | null
  name?: string | null
  relativeDirectory?: string | null
  dev?: number | null
  mode?: number | null
  nlink?: number | null
  uid?: number | null
  gid?: number | null
  rdev?: number | null
  ino?: number | null
  atimeMs?: number | null
  mtimeMs?: number | null
  ctimeMs?: number | null
  birthtimeMs?: number | null
  atime?: Date | null
  mtime?: Date | null
  ctime?: Date | null
  birthtime?: Date | null
  publicURL?: string | null /** Copy file to static directory and return public url to it */
}
/** Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: Node[] | null /** The children of this node. */
  internal?: Internal_11 | null
  frontmatter?: Frontmatter_2 | null
  rawMarkdownBody?: string | null
  fileAbsolutePath?: string | null
  fields?: Fields_2 | null
  html?: string | null
  htmlAst?: Json | null
  excerpt?: string | null
  headings?: MarkdownHeading[] | null
  timeToRead?: number | null
  tableOfContents?: string | null
  wordCount?: WordCount | null
}

export interface Internal_11 {
  content?: string | null
  type?: string | null
  contentDigest?: string | null
  owner?: string | null
  fieldOwners?: FieldOwners_2 | null
}

export interface FieldOwners_2 {
  slug?: string | null
}

export interface Frontmatter_2 {
  title?: string | null
  date?: Date | null
  _PARENT?: string | null
}

export interface Fields_2 {
  slug?: string | null
}

export interface MarkdownHeading {
  value?: string | null
  depth?: number | null
}

export interface WordCount {
  paragraphs?: number | null
  sentences?: number | null
  words?: number | null
}

export interface Internal_10 {
  contentDigest?: string | null
  type?: string | null
  mediaType?: string | null
  description?: string | null
  owner?: string | null
}
/** A connection to a list of items. */
export interface FileGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: FileGroupConnectionEdge[] | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface FileGroupConnectionEdge {
  node?: File | null /** The item at the end of the edge */
  next?: File | null /** The next edge in the connection */
  previous?: File | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface MarkdownRemarkConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: MarkdownRemarkEdge[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: string[] | null
  group?: MarkdownRemarkGroupConnectionConnection[] | null
}
/** An edge in a connection. */
export interface MarkdownRemarkEdge {
  node?: MarkdownRemark | null /** The item at the end of the edge */
  next?: MarkdownRemark | null /** The next edge in the connection */
  previous?: MarkdownRemark | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface MarkdownRemarkGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: MarkdownRemarkGroupConnectionEdge[] | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface MarkdownRemarkGroupConnectionEdge {
  node?: MarkdownRemark | null /** The item at the end of the edge */
  next?: MarkdownRemark | null /** The next edge in the connection */
  previous?: MarkdownRemark | null /** The previous edge in the connection */
}
/** Node of type Site */
export interface Site extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: Node[] | null /** The children of this node. */
  siteMetadata?: SiteMetadata_2 | null
  port?: Date | null
  host?: string | null
  pathPrefix?: string | null
  polyfill?: boolean | null
  buildTime?: Date | null
  internal?: Internal_12 | null
}

export interface SiteMetadata_2 {
  siteName?: string | null
}

export interface Internal_12 {
  contentDigest?: string | null
  type?: string | null
  owner?: string | null
}

export interface SitePageConnectionSort {
  fields: SitePageConnectionSortByFieldsEnum[]
  order?: SitePageConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterSitePage {
  jsonName?: SitePageConnectionJsonNameQueryString | null
  internalComponentName?: SitePageConnectionInternalComponentNameQueryString | null
  path?: SitePageConnectionPathQueryString_2 | null
  component?: SitePageConnectionComponentQueryString | null
  componentChunkName?: SitePageConnectionComponentChunkNameQueryString | null
  context?: SitePageConnectionContextInputObject | null
  pluginCreator?: SitePageConnectionPluginCreatorInputObject | null
  pluginCreatorId?: SitePageConnectionPluginCreatorIdQueryString_2 | null
  componentPath?: SitePageConnectionComponentPathQueryString | null
  id?: SitePageConnectionIdQueryString_2 | null
  internal?: SitePageConnectionInternalInputObject_2 | null
}

export interface SitePageConnectionJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionInternalComponentNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionComponentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionComponentChunkNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionContextInputObject {
  slug?: SitePageConnectionContextSlugQueryString | null
}

export interface SitePageConnectionContextSlugQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorInputObject {
  resolve?: SitePageConnectionPluginCreatorResolveQueryString | null
  id?: SitePageConnectionPluginCreatorIdQueryString | null
  name?: SitePageConnectionPluginCreatorNameQueryString | null
  version?: SitePageConnectionPluginCreatorVersionQueryString | null
  pluginOptions?: SitePageConnectionPluginCreatorPluginOptionsInputObject | null
  nodeAPIs?: SitePageConnectionPluginCreatorNodeApIsQueryList | null
  browserAPIs?: SitePageConnectionPluginCreatorBrowserApIsQueryList | null
  ssrAPIs?: SitePageConnectionPluginCreatorSsrApIsQueryList | null
  pluginFilepath?: SitePageConnectionPluginCreatorPluginFilepathQueryString | null
  packageJson?: SitePageConnectionPluginCreatorPackageJsonInputObject | null
  parent?: SitePageConnectionPluginCreatorParentQueryString | null
  internal?: SitePageConnectionPluginCreatorInternalInputObject | null
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorIdQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
  plugins?: SitePageConnectionPluginCreatorPluginOptionsPluginsQueryList | null
  classPrefix?: SitePageConnectionPluginCreatorPluginOptionsClassPrefixQueryString | null
  showLineNumbers?: SitePageConnectionPluginCreatorPluginOptionsShowLineNumbersQueryBoolean | null
  noInlineHighlight?: SitePageConnectionPluginCreatorPluginOptionsNoInlineHighlightQueryBoolean | null
  pathToConfigModule?: SitePageConnectionPluginCreatorPluginOptionsPathToConfigModuleQueryString | null
  omitGoogleFont?: SitePageConnectionPluginCreatorPluginOptionsOmitGoogleFontQueryBoolean | null
  name?: SitePageConnectionPluginCreatorPluginOptionsNameQueryString | null
  path?: SitePageConnectionPluginCreatorPluginOptionsPathQueryString | null
  trackingId?: SitePageConnectionPluginCreatorPluginOptionsTrackingIdQueryString | null
  pathCheck?: SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPluginOptionsPluginsInputObject | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsInputObject {
  resolve?: SitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString | null
  id?: SitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString | null
  name?: SitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString | null
  version?: SitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString | null
  pluginOptions?: SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject | null
  pluginFilepath?: SitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  classPrefix?: SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsClassPrefixQueryString | null
  showLineNumbers?: SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsShowLineNumbersQueryBoolean | null
  noInlineHighlight?: SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsNoInlineHighlightQueryBoolean | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsClassPrefixQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsShowLineNumbersQueryBoolean {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsNoInlineHighlightQueryBoolean {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsClassPrefixQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsShowLineNumbersQueryBoolean {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsNoInlineHighlightQueryBoolean {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathToConfigModuleQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsOmitGoogleFontQueryBoolean {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsTrackingIdQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorBrowserApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonNameQueryString | null
  description?: SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString | null
  version?: SitePageConnectionPluginCreatorPackageJsonVersionQueryString | null
  main?: SitePageConnectionPluginCreatorPackageJsonMainQueryString | null
  license?: SitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null
  dependencies?: SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList | null
  devDependencies?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null
  peerDependencies?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList | null
  keywords?: SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList | null
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString | null
  version?: SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString | null
  version?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null
  version?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorParentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: SitePageConnectionPluginCreatorInternalContentDigestQueryString | null
  type?: SitePageConnectionPluginCreatorInternalTypeQueryString | null
  owner?: SitePageConnectionPluginCreatorInternalOwnerQueryString | null
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionComponentPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionInternalInputObject_2 {
  type?: SitePageConnectionInternalTypeQueryString_2 | null
  contentDigest?: SitePageConnectionInternalContentDigestQueryString_2 | null
  description?: SitePageConnectionInternalDescriptionQueryString | null
  owner?: SitePageConnectionInternalOwnerQueryString_2 | null
}

export interface SitePageConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionInternalDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionSort {
  fields: SitePluginConnectionSortByFieldsEnum[]
  order?: SitePluginConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
  resolve?: SitePluginConnectionResolveQueryString_2 | null
  id?: SitePluginConnectionIdQueryString_2 | null
  name?: SitePluginConnectionNameQueryString_2 | null
  version?: SitePluginConnectionVersionQueryString_2 | null
  pluginOptions?: SitePluginConnectionPluginOptionsInputObject_2 | null
  nodeAPIs?: SitePluginConnectionNodeApIsQueryList_2 | null
  browserAPIs?: SitePluginConnectionBrowserApIsQueryList_2 | null
  ssrAPIs?: SitePluginConnectionSsrApIsQueryList_2 | null
  pluginFilepath?: SitePluginConnectionPluginFilepathQueryString_2 | null
  packageJson?: SitePluginConnectionPackageJsonInputObject_2 | null
  internal?: SitePluginConnectionInternalInputObject_2 | null
}

export interface SitePluginConnectionResolveQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
  plugins?: SitePluginConnectionPluginOptionsPluginsQueryList_2 | null
  classPrefix?: SitePluginConnectionPluginOptionsClassPrefixQueryString_2 | null
  showLineNumbers?: SitePluginConnectionPluginOptionsShowLineNumbersQueryBoolean_2 | null
  noInlineHighlight?: SitePluginConnectionPluginOptionsNoInlineHighlightQueryBoolean_2 | null
  pathToConfigModule?: SitePluginConnectionPluginOptionsPathToConfigModuleQueryString_2 | null
  omitGoogleFont?: SitePluginConnectionPluginOptionsOmitGoogleFontQueryBoolean_2 | null
  name?: SitePluginConnectionPluginOptionsNameQueryString_2 | null
  path?: SitePluginConnectionPluginOptionsPathQueryString_2 | null
  trackingId?: SitePluginConnectionPluginOptionsTrackingIdQueryString_2 | null
  pathCheck?: SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 | null
}

export interface SitePluginConnectionPluginOptionsPluginsQueryList_2 {
  elemMatch?: SitePluginConnectionPluginOptionsPluginsInputObject_2 | null
}

export interface SitePluginConnectionPluginOptionsPluginsInputObject_2 {
  resolve?: SitePluginConnectionPluginOptionsPluginsResolveQueryString_2 | null
  id?: SitePluginConnectionPluginOptionsPluginsIdQueryString_2 | null
  name?: SitePluginConnectionPluginOptionsPluginsNameQueryString_2 | null
  version?: SitePluginConnectionPluginOptionsPluginsVersionQueryString_2 | null
  pluginOptions?: SitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 | null
  pluginFilepath?: SitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 | null
}

export interface SitePluginConnectionPluginOptionsPluginsResolveQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 {
  classPrefix?: SitePluginConnectionPluginOptionsPluginsPluginOptionsClassPrefixQueryString_2 | null
  showLineNumbers?: SitePluginConnectionPluginOptionsPluginsPluginOptionsShowLineNumbersQueryBoolean_2 | null
  noInlineHighlight?: SitePluginConnectionPluginOptionsPluginsPluginOptionsNoInlineHighlightQueryBoolean_2 | null
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsClassPrefixQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsShowLineNumbersQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsNoInlineHighlightQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPluginOptionsClassPrefixQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPluginOptionsShowLineNumbersQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePluginConnectionPluginOptionsNoInlineHighlightQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePluginConnectionPluginOptionsPathToConfigModuleQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPluginOptionsOmitGoogleFontQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPluginOptionsTrackingIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionBrowserApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionSsrApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
  name?: SitePluginConnectionPackageJsonNameQueryString_2 | null
  description?: SitePluginConnectionPackageJsonDescriptionQueryString_2 | null
  version?: SitePluginConnectionPackageJsonVersionQueryString_2 | null
  main?: SitePluginConnectionPackageJsonMainQueryString_2 | null
  license?: SitePluginConnectionPackageJsonLicenseQueryString_2 | null
  dependencies?: SitePluginConnectionPackageJsonDependenciesQueryList_2 | null
  devDependencies?: SitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null
  peerDependencies?: SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null
  keywords?: SitePluginConnectionPackageJsonKeywordsQueryList_2 | null
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonDependenciesInputObject_2 | null
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null
  version?: SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonDevDependenciesInputObject_2 | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null
  version?: SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null
  version?: SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionInternalInputObject_2 {
  contentDigest?: SitePluginConnectionInternalContentDigestQueryString_2 | null
  type?: SitePluginConnectionInternalTypeQueryString_2 | null
  owner?: SitePluginConnectionInternalOwnerQueryString_2 | null
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionSort {
  fields: DirectoryConnectionSortByFieldsEnum[]
  order?: DirectoryConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterDirectory {
  id?: DirectoryConnectionIdQueryString_2 | null
  internal?: DirectoryConnectionInternalInputObject_2 | null
  sourceInstanceName?: DirectoryConnectionSourceInstanceNameQueryString_2 | null
  absolutePath?: DirectoryConnectionAbsolutePathQueryString_2 | null
  relativePath?: DirectoryConnectionRelativePathQueryString_2 | null
  extension?: DirectoryConnectionExtensionQueryString_2 | null
  size?: DirectoryConnectionSizeQueryInteger_2 | null
  prettySize?: DirectoryConnectionPrettySizeQueryString_2 | null
  modifiedTime?: DirectoryConnectionModifiedTimeQueryString_2 | null
  accessTime?: DirectoryConnectionAccessTimeQueryString_2 | null
  changeTime?: DirectoryConnectionChangeTimeQueryString_2 | null
  birthTime?: DirectoryConnectionBirthTimeQueryString_2 | null
  root?: DirectoryConnectionRootQueryString_2 | null
  dir?: DirectoryConnectionDirQueryString_2 | null
  base?: DirectoryConnectionBaseQueryString_2 | null
  ext?: DirectoryConnectionExtQueryString_2 | null
  name?: DirectoryConnectionNameQueryString_2 | null
  relativeDirectory?: DirectoryConnectionRelativeDirectoryQueryString_2 | null
  dev?: DirectoryConnectionDevQueryFloat_2 | null
  mode?: DirectoryConnectionModeQueryInteger_2 | null
  nlink?: DirectoryConnectionNlinkQueryInteger_2 | null
  uid?: DirectoryConnectionUidQueryInteger_2 | null
  gid?: DirectoryConnectionGidQueryInteger_2 | null
  rdev?: DirectoryConnectionRdevQueryInteger_2 | null
  ino?: DirectoryConnectionInoQueryFloat_2 | null
  atimeMs?: DirectoryConnectionAtimeMsQueryFloat_2 | null
  mtimeMs?: DirectoryConnectionMtimeMsQueryFloat_2 | null
  ctimeMs?: DirectoryConnectionCtimeMsQueryFloat_2 | null
  birthtimeMs?: DirectoryConnectionBirthtimeMsQueryFloat_2 | null
  atime?: DirectoryConnectionAtimeQueryString_2 | null
  mtime?: DirectoryConnectionMtimeQueryString_2 | null
  ctime?: DirectoryConnectionCtimeQueryString_2 | null
  birthtime?: DirectoryConnectionBirthtimeQueryString_2 | null
}

export interface DirectoryConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionInternalInputObject_2 {
  contentDigest?: DirectoryConnectionInternalContentDigestQueryString_2 | null
  type?: DirectoryConnectionInternalTypeQueryString_2 | null
  description?: DirectoryConnectionInternalDescriptionQueryString_2 | null
  owner?: DirectoryConnectionInternalOwnerQueryString_2 | null
}

export interface DirectoryConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionInternalDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionRelativePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionExtensionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionSizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryConnectionPrettySizeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionModifiedTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionAccessTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionChangeTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionBirthTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionRootQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionDirQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionBaseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionExtQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionDevQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryConnectionModeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryConnectionNlinkQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryConnectionUidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryConnectionGidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryConnectionRdevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryConnectionInoQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryConnectionAtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryConnectionMtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryConnectionCtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryConnectionBirthtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryConnectionAtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionMtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionCtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryConnectionBirthtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionSort {
  fields: FileConnectionSortByFieldsEnum[]
  order?: FileConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterFile {
  id?: FileConnectionIdQueryString_2 | null
  internal?: FileConnectionInternalInputObject_2 | null
  sourceInstanceName?: FileConnectionSourceInstanceNameQueryString_2 | null
  absolutePath?: FileConnectionAbsolutePathQueryString_2 | null
  relativePath?: FileConnectionRelativePathQueryString_2 | null
  extension?: FileConnectionExtensionQueryString_2 | null
  size?: FileConnectionSizeQueryInteger_2 | null
  prettySize?: FileConnectionPrettySizeQueryString_2 | null
  modifiedTime?: FileConnectionModifiedTimeQueryString_2 | null
  accessTime?: FileConnectionAccessTimeQueryString_2 | null
  changeTime?: FileConnectionChangeTimeQueryString_2 | null
  birthTime?: FileConnectionBirthTimeQueryString_2 | null
  root?: FileConnectionRootQueryString_2 | null
  dir?: FileConnectionDirQueryString_2 | null
  base?: FileConnectionBaseQueryString_2 | null
  ext?: FileConnectionExtQueryString_2 | null
  name?: FileConnectionNameQueryString_2 | null
  relativeDirectory?: FileConnectionRelativeDirectoryQueryString_2 | null
  dev?: FileConnectionDevQueryFloat_2 | null
  mode?: FileConnectionModeQueryInteger_2 | null
  nlink?: FileConnectionNlinkQueryInteger_2 | null
  uid?: FileConnectionUidQueryInteger_2 | null
  gid?: FileConnectionGidQueryInteger_2 | null
  rdev?: FileConnectionRdevQueryInteger_2 | null
  ino?: FileConnectionInoQueryFloat_2 | null
  atimeMs?: FileConnectionAtimeMsQueryFloat_2 | null
  mtimeMs?: FileConnectionMtimeMsQueryFloat_2 | null
  ctimeMs?: FileConnectionCtimeMsQueryFloat_2 | null
  birthtimeMs?: FileConnectionBirthtimeMsQueryFloat_2 | null
  atime?: FileConnectionAtimeQueryString_2 | null
  mtime?: FileConnectionMtimeQueryString_2 | null
  ctime?: FileConnectionCtimeQueryString_2 | null
  birthtime?: FileConnectionBirthtimeQueryString_2 | null
  publicURL?: PublicUrlQueryString_4 | null
}

export interface FileConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionInternalInputObject_2 {
  contentDigest?: FileConnectionInternalContentDigestQueryString_2 | null
  type?: FileConnectionInternalTypeQueryString_2 | null
  mediaType?: FileConnectionInternalMediaTypeQueryString_2 | null
  description?: FileConnectionInternalDescriptionQueryString_2 | null
  owner?: FileConnectionInternalOwnerQueryString_2 | null
}

export interface FileConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionInternalMediaTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionInternalDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionRelativePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionExtensionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionSizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileConnectionPrettySizeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionModifiedTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionAccessTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionChangeTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionBirthTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionRootQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionDirQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionBaseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionExtQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionDevQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileConnectionModeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileConnectionNlinkQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileConnectionUidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileConnectionGidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileConnectionRdevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileConnectionInoQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileConnectionAtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileConnectionMtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileConnectionCtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileConnectionBirthtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileConnectionAtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionMtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionCtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileConnectionBirthtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface PublicUrlQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkConnectionSort {
  fields: MarkdownRemarkConnectionSortByFieldsEnum[]
  order?: MarkdownRemarkConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterMarkdownRemark {
  id?: MarkdownRemarkConnectionIdQueryString_2 | null
  internal?: MarkdownRemarkConnectionInternalInputObject_2 | null
  frontmatter?: MarkdownRemarkConnectionFrontmatterInputObject_2 | null
  excerpt?: ExcerptQueryString_4 | null
  rawMarkdownBody?: MarkdownRemarkConnectionRawMarkdownBodyQueryString_2 | null
  fileAbsolutePath?: MarkdownRemarkConnectionFileAbsolutePathQueryString_2 | null
  fields?: MarkdownRemarkConnectionFieldsInputObject_2 | null
  html?: HtmlQueryString_4 | null
  headings?: HeadingsQueryList_4 | null
  timeToRead?: TimeToReadQueryInt_4 | null
  tableOfContents?: TableOfContentsQueryString_4 | null
  wordCount?: WordCountTypeName_4 | null
}

export interface MarkdownRemarkConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkConnectionInternalInputObject_2 {
  content?: MarkdownRemarkConnectionInternalContentQueryString_2 | null
  type?: MarkdownRemarkConnectionInternalTypeQueryString_2 | null
  contentDigest?: MarkdownRemarkConnectionInternalContentDigestQueryString_2 | null
  owner?: MarkdownRemarkConnectionInternalOwnerQueryString_2 | null
  fieldOwners?: MarkdownRemarkConnectionInternalFieldOwnersInputObject_2 | null
}

export interface MarkdownRemarkConnectionInternalContentQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkConnectionInternalFieldOwnersInputObject_2 {
  slug?: MarkdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 | null
}

export interface MarkdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkConnectionFrontmatterInputObject_2 {
  title?: MarkdownRemarkConnectionFrontmatterTitleQueryString_2 | null
  date?: MarkdownRemarkConnectionFrontmatterDateQueryString_2 | null
  _PARENT?: MarkdownRemarkConnectionFrontmatterParentQueryString_2 | null
}

export interface MarkdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkConnectionFrontmatterDateQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkConnectionFrontmatterParentQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface ExcerptQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkConnectionRawMarkdownBodyQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkConnectionFileAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkConnectionFieldsInputObject_2 {
  slug?: MarkdownRemarkConnectionFieldsSlugQueryString_2 | null
}

export interface MarkdownRemarkConnectionFieldsSlugQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface HtmlQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface HeadingsQueryList_4 {
  elemMatch?: HeadingsListElemTypeName_4 | null
}

export interface HeadingsListElemTypeName_4 {
  value?: HeadingsListElemValueQueryString_4 | null
  depth?: HeadingsListElemDepthQueryInt_4 | null
}

export interface HeadingsListElemValueQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface HeadingsListElemDepthQueryInt_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface TimeToReadQueryInt_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface TableOfContentsQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface WordCountTypeName_4 {
  paragraphs?: WordCountParagraphsQueryInt_4 | null
  sentences?: WordCountSentencesQueryInt_4 | null
  words?: WordCountWordsQueryInt_4 | null
}

export interface WordCountParagraphsQueryInt_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface WordCountSentencesQueryInt_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface WordCountWordsQueryInt_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface SitePageJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageInternalComponentNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageComponentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageComponentChunkNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageContextInputObject {
  slug?: SitePageContextSlugQueryString | null
}

export interface SitePageContextSlugQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorInputObject {
  resolve?: SitePagePluginCreatorResolveQueryString | null
  id?: SitePagePluginCreatorIdQueryString | null
  name?: SitePagePluginCreatorNameQueryString | null
  version?: SitePagePluginCreatorVersionQueryString | null
  pluginOptions?: SitePagePluginCreatorPluginOptionsInputObject | null
  nodeAPIs?: SitePagePluginCreatorNodeApIsQueryList | null
  browserAPIs?: SitePagePluginCreatorBrowserApIsQueryList | null
  ssrAPIs?: SitePagePluginCreatorSsrApIsQueryList | null
  pluginFilepath?: SitePagePluginCreatorPluginFilepathQueryString | null
  packageJson?: SitePagePluginCreatorPackageJsonInputObject | null
  parent?: SitePagePluginCreatorParentQueryString | null
  internal?: SitePagePluginCreatorInternalInputObject | null
}

export interface SitePagePluginCreatorResolveQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorIdQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
  plugins?: SitePagePluginCreatorPluginOptionsPluginsQueryList | null
  classPrefix?: SitePagePluginCreatorPluginOptionsClassPrefixQueryString | null
  showLineNumbers?: SitePagePluginCreatorPluginOptionsShowLineNumbersQueryBoolean | null
  noInlineHighlight?: SitePagePluginCreatorPluginOptionsNoInlineHighlightQueryBoolean | null
  pathToConfigModule?: SitePagePluginCreatorPluginOptionsPathToConfigModuleQueryString | null
  omitGoogleFont?: SitePagePluginCreatorPluginOptionsOmitGoogleFontQueryBoolean | null
  name?: SitePagePluginCreatorPluginOptionsNameQueryString | null
  path?: SitePagePluginCreatorPluginOptionsPathQueryString | null
  trackingId?: SitePagePluginCreatorPluginOptionsTrackingIdQueryString | null
  pathCheck?: SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean | null
}

export interface SitePagePluginCreatorPluginOptionsPluginsQueryList {
  elemMatch?: SitePagePluginCreatorPluginOptionsPluginsInputObject | null
}

export interface SitePagePluginCreatorPluginOptionsPluginsInputObject {
  resolve?: SitePagePluginCreatorPluginOptionsPluginsResolveQueryString | null
  id?: SitePagePluginCreatorPluginOptionsPluginsIdQueryString | null
  name?: SitePagePluginCreatorPluginOptionsPluginsNameQueryString | null
  version?: SitePagePluginCreatorPluginOptionsPluginsVersionQueryString | null
  pluginOptions?: SitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject | null
  pluginFilepath?: SitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString | null
}

export interface SitePagePluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  classPrefix?: SitePagePluginCreatorPluginOptionsPluginsPluginOptionsClassPrefixQueryString | null
  showLineNumbers?: SitePagePluginCreatorPluginOptionsPluginsPluginOptionsShowLineNumbersQueryBoolean | null
  noInlineHighlight?: SitePagePluginCreatorPluginOptionsPluginsPluginOptionsNoInlineHighlightQueryBoolean | null
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsClassPrefixQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsShowLineNumbersQueryBoolean {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsNoInlineHighlightQueryBoolean {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPluginOptionsClassPrefixQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPluginOptionsShowLineNumbersQueryBoolean {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePagePluginCreatorPluginOptionsNoInlineHighlightQueryBoolean {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePagePluginCreatorPluginOptionsPathToConfigModuleQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPluginOptionsOmitGoogleFontQueryBoolean {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPluginOptionsTrackingIdQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePagePluginCreatorNodeApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorBrowserApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorSsrApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPackageJsonInputObject {
  name?: SitePagePluginCreatorPackageJsonNameQueryString | null
  description?: SitePagePluginCreatorPackageJsonDescriptionQueryString | null
  version?: SitePagePluginCreatorPackageJsonVersionQueryString | null
  main?: SitePagePluginCreatorPackageJsonMainQueryString | null
  license?: SitePagePluginCreatorPackageJsonLicenseQueryString | null
  dependencies?: SitePagePluginCreatorPackageJsonDependenciesQueryList | null
  devDependencies?: SitePagePluginCreatorPackageJsonDevDependenciesQueryList | null
  peerDependencies?: SitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null
  keywords?: SitePagePluginCreatorPackageJsonKeywordsQueryList | null
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonDependenciesInputObject | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonDependenciesNameQueryString | null
  version?: SitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonDevDependenciesInputObject | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null
  version?: SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonPeerDependenciesInputObject | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null
  version?: SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorParentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorInternalInputObject {
  contentDigest?: SitePagePluginCreatorInternalContentDigestQueryString | null
  type?: SitePagePluginCreatorInternalTypeQueryString | null
  owner?: SitePagePluginCreatorInternalOwnerQueryString | null
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorInternalTypeQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePagePluginCreatorIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageComponentPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageInternalInputObject_2 {
  type?: SitePageInternalTypeQueryString_2 | null
  contentDigest?: SitePageInternalContentDigestQueryString_2 | null
  description?: SitePageInternalDescriptionQueryString | null
  owner?: SitePageInternalOwnerQueryString_2 | null
}

export interface SitePageInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageInternalDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePageInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginResolveQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPluginOptionsInputObject_2 {
  plugins?: SitePluginPluginOptionsPluginsQueryList_2 | null
  classPrefix?: SitePluginPluginOptionsClassPrefixQueryString_2 | null
  showLineNumbers?: SitePluginPluginOptionsShowLineNumbersQueryBoolean_2 | null
  noInlineHighlight?: SitePluginPluginOptionsNoInlineHighlightQueryBoolean_2 | null
  pathToConfigModule?: SitePluginPluginOptionsPathToConfigModuleQueryString_2 | null
  omitGoogleFont?: SitePluginPluginOptionsOmitGoogleFontQueryBoolean_2 | null
  name?: SitePluginPluginOptionsNameQueryString_2 | null
  path?: SitePluginPluginOptionsPathQueryString_2 | null
  trackingId?: SitePluginPluginOptionsTrackingIdQueryString_2 | null
  pathCheck?: SitePluginPluginOptionsPathCheckQueryBoolean_2 | null
}

export interface SitePluginPluginOptionsPluginsQueryList_2 {
  elemMatch?: SitePluginPluginOptionsPluginsInputObject_2 | null
}

export interface SitePluginPluginOptionsPluginsInputObject_2 {
  resolve?: SitePluginPluginOptionsPluginsResolveQueryString_2 | null
  id?: SitePluginPluginOptionsPluginsIdQueryString_2 | null
  name?: SitePluginPluginOptionsPluginsNameQueryString_2 | null
  version?: SitePluginPluginOptionsPluginsVersionQueryString_2 | null
  pluginOptions?: SitePluginPluginOptionsPluginsPluginOptionsInputObject_2 | null
  pluginFilepath?: SitePluginPluginOptionsPluginsPluginFilepathQueryString_2 | null
}

export interface SitePluginPluginOptionsPluginsResolveQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPluginOptionsPluginsIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPluginOptionsPluginsNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPluginOptionsPluginsVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPluginOptionsPluginsPluginOptionsInputObject_2 {
  classPrefix?: SitePluginPluginOptionsPluginsPluginOptionsClassPrefixQueryString_2 | null
  showLineNumbers?: SitePluginPluginOptionsPluginsPluginOptionsShowLineNumbersQueryBoolean_2 | null
  noInlineHighlight?: SitePluginPluginOptionsPluginsPluginOptionsNoInlineHighlightQueryBoolean_2 | null
}

export interface SitePluginPluginOptionsPluginsPluginOptionsClassPrefixQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPluginOptionsPluginsPluginOptionsShowLineNumbersQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePluginPluginOptionsPluginsPluginOptionsNoInlineHighlightQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPluginOptionsClassPrefixQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPluginOptionsShowLineNumbersQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePluginPluginOptionsNoInlineHighlightQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePluginPluginOptionsPathToConfigModuleQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPluginOptionsOmitGoogleFontQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePluginPluginOptionsNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPluginOptionsPathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPluginOptionsTrackingIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SitePluginNodeApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginBrowserApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginSsrApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPluginFilepathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPackageJsonInputObject_2 {
  name?: SitePluginPackageJsonNameQueryString_2 | null
  description?: SitePluginPackageJsonDescriptionQueryString_2 | null
  version?: SitePluginPackageJsonVersionQueryString_2 | null
  main?: SitePluginPackageJsonMainQueryString_2 | null
  license?: SitePluginPackageJsonLicenseQueryString_2 | null
  dependencies?: SitePluginPackageJsonDependenciesQueryList_2 | null
  devDependencies?: SitePluginPackageJsonDevDependenciesQueryList_2 | null
  peerDependencies?: SitePluginPackageJsonPeerDependenciesQueryList_2 | null
  keywords?: SitePluginPackageJsonKeywordsQueryList_2 | null
}

export interface SitePluginPackageJsonNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPackageJsonVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPackageJsonMainQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonDependenciesInputObject_2 | null
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
  name?: SitePluginPackageJsonDependenciesNameQueryString_2 | null
  version?: SitePluginPackageJsonDependenciesVersionQueryString_2 | null
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonDevDependenciesInputObject_2 | null
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: SitePluginPackageJsonDevDependenciesNameQueryString_2 | null
  version?: SitePluginPackageJsonDevDependenciesVersionQueryString_2 | null
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonPeerDependenciesInputObject_2 | null
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: SitePluginPackageJsonPeerDependenciesNameQueryString_2 | null
  version?: SitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginInternalInputObject_2 {
  contentDigest?: SitePluginInternalContentDigestQueryString_2 | null
  type?: SitePluginInternalTypeQueryString_2 | null
  owner?: SitePluginInternalOwnerQueryString_2 | null
}

export interface SitePluginInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePluginInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SiteSiteMetadataInputObject_2 {
  siteName?: SiteSiteMetadataSiteNameQueryString_2 | null
}

export interface SiteSiteMetadataSiteNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePortQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SiteHostQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePathPrefixQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SitePolyfillQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: boolean[] | null
  nin?: boolean[] | null
}

export interface SiteBuildTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SiteIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SiteInternalInputObject_2 {
  contentDigest?: SiteInternalContentDigestQueryString_2 | null
  type?: SiteInternalTypeQueryString_2 | null
  owner?: SiteInternalOwnerQueryString_2 | null
}

export interface SiteInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SiteInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface SiteInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryInternalInputObject_2 {
  contentDigest?: DirectoryInternalContentDigestQueryString_2 | null
  type?: DirectoryInternalTypeQueryString_2 | null
  description?: DirectoryInternalDescriptionQueryString_2 | null
  owner?: DirectoryInternalOwnerQueryString_2 | null
}

export interface DirectoryInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryInternalDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectorySourceInstanceNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryRelativePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryExtensionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectorySizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryPrettySizeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryModifiedTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryAccessTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryChangeTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryBirthTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryRootQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryDirQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryBaseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryExtQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryRelativeDirectoryQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryDevQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryModeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryNlinkQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryUidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryGidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryRdevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryInoQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryAtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryMtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryCtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryBirthtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface DirectoryAtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryMtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryCtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface DirectoryBirthtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileInternalInputObject_2 {
  contentDigest?: FileInternalContentDigestQueryString_2 | null
  type?: FileInternalTypeQueryString_2 | null
  mediaType?: FileInternalMediaTypeQueryString_2 | null
  description?: FileInternalDescriptionQueryString_2 | null
  owner?: FileInternalOwnerQueryString_2 | null
}

export interface FileInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileInternalMediaTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileInternalDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileSourceInstanceNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileRelativePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileExtensionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileSizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FilePrettySizeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileModifiedTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileAccessTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileChangeTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileBirthTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileRootQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileDirQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileBaseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileExtQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileRelativeDirectoryQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileDevQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileModeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileNlinkQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileUidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileGidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileRdevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileInoQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileAtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileMtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileCtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileBirthtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface FileAtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileMtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileCtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface FileBirthtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface PublicUrlQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkInternalInputObject_2 {
  content?: MarkdownRemarkInternalContentQueryString_2 | null
  type?: MarkdownRemarkInternalTypeQueryString_2 | null
  contentDigest?: MarkdownRemarkInternalContentDigestQueryString_2 | null
  owner?: MarkdownRemarkInternalOwnerQueryString_2 | null
  fieldOwners?: MarkdownRemarkInternalFieldOwnersInputObject_2 | null
}

export interface MarkdownRemarkInternalContentQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkInternalFieldOwnersInputObject_2 {
  slug?: MarkdownRemarkInternalFieldOwnersSlugQueryString_2 | null
}

export interface MarkdownRemarkInternalFieldOwnersSlugQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkFrontmatterInputObject_2 {
  title?: MarkdownRemarkFrontmatterTitleQueryString_2 | null
  date?: MarkdownRemarkFrontmatterDateQueryString_2 | null
  _PARENT?: MarkdownRemarkFrontmatterParentQueryString_2 | null
}

export interface MarkdownRemarkFrontmatterTitleQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkFrontmatterDateQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkFrontmatterParentQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface ExcerptQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkRawMarkdownBodyQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkFileAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface MarkdownRemarkFieldsInputObject_2 {
  slug?: MarkdownRemarkFieldsSlugQueryString_2 | null
}

export interface MarkdownRemarkFieldsSlugQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface HtmlQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface HeadingsQueryList_3 {
  elemMatch?: HeadingsListElemTypeName_3 | null
}

export interface HeadingsListElemTypeName_3 {
  value?: HeadingsListElemValueQueryString_3 | null
  depth?: HeadingsListElemDepthQueryInt_3 | null
}

export interface HeadingsListElemValueQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface HeadingsListElemDepthQueryInt_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface TimeToReadQueryInt_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface TableOfContentsQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: string[] | null
  nin?: string[] | null
}

export interface WordCountTypeName_3 {
  paragraphs?: WordCountParagraphsQueryInt_3 | null
  sentences?: WordCountSentencesQueryInt_3 | null
  words?: WordCountWordsQueryInt_3 | null
}

export interface WordCountParagraphsQueryInt_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface WordCountSentencesQueryInt_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}

export interface WordCountWordsQueryInt_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: number[] | null
  nin?: number[] | null
}
export interface AllSitePageQueryArgs {
  skip?: number | null
  limit?: number | null
  sort?: SitePageConnectionSort | null
  filter?: FilterSitePage | null
}
export interface AllSitePluginQueryArgs {
  skip?: number | null
  limit?: number | null
  sort?: SitePluginConnectionSort | null
  filter?: FilterSitePlugin | null
}
export interface AllDirectoryQueryArgs {
  skip?: number | null
  limit?: number | null
  sort?: DirectoryConnectionSort | null
  filter?: FilterDirectory | null
}
export interface AllFileQueryArgs {
  skip?: number | null
  limit?: number | null
  sort?: FileConnectionSort | null
  filter?: FilterFile | null
}
export interface AllMarkdownRemarkQueryArgs {
  skip?: number | null
  limit?: number | null
  sort?: MarkdownRemarkConnectionSort | null
  filter?: FilterMarkdownRemark | null
}
export interface SitePageQueryArgs {
  jsonName?: SitePageJsonNameQueryString | null
  internalComponentName?: SitePageInternalComponentNameQueryString | null
  path?: SitePagePathQueryString_2 | null
  component?: SitePageComponentQueryString | null
  componentChunkName?: SitePageComponentChunkNameQueryString | null
  context?: SitePageContextInputObject | null
  pluginCreator?: SitePagePluginCreatorInputObject | null
  pluginCreatorId?: SitePagePluginCreatorIdQueryString_2 | null
  componentPath?: SitePageComponentPathQueryString | null
  id?: SitePageIdQueryString_2 | null
  internal?: SitePageInternalInputObject_2 | null
}
export interface SitePluginQueryArgs {
  resolve?: SitePluginResolveQueryString_2 | null
  id?: SitePluginIdQueryString_2 | null
  name?: SitePluginNameQueryString_2 | null
  version?: SitePluginVersionQueryString_2 | null
  pluginOptions?: SitePluginPluginOptionsInputObject_2 | null
  nodeAPIs?: SitePluginNodeApIsQueryList_2 | null
  browserAPIs?: SitePluginBrowserApIsQueryList_2 | null
  ssrAPIs?: SitePluginSsrApIsQueryList_2 | null
  pluginFilepath?: SitePluginPluginFilepathQueryString_2 | null
  packageJson?: SitePluginPackageJsonInputObject_2 | null
  internal?: SitePluginInternalInputObject_2 | null
}
export interface SiteQueryArgs {
  siteMetadata?: SiteSiteMetadataInputObject_2 | null
  port?: SitePortQueryString_2 | null
  host?: SiteHostQueryString_2 | null
  pathPrefix?: SitePathPrefixQueryString_2 | null
  polyfill?: SitePolyfillQueryBoolean_2 | null
  buildTime?: SiteBuildTimeQueryString_2 | null
  id?: SiteIdQueryString_2 | null
  internal?: SiteInternalInputObject_2 | null
}
export interface DirectoryQueryArgs {
  id?: DirectoryIdQueryString_2 | null
  internal?: DirectoryInternalInputObject_2 | null
  sourceInstanceName?: DirectorySourceInstanceNameQueryString_2 | null
  absolutePath?: DirectoryAbsolutePathQueryString_2 | null
  relativePath?: DirectoryRelativePathQueryString_2 | null
  extension?: DirectoryExtensionQueryString_2 | null
  size?: DirectorySizeQueryInteger_2 | null
  prettySize?: DirectoryPrettySizeQueryString_2 | null
  modifiedTime?: DirectoryModifiedTimeQueryString_2 | null
  accessTime?: DirectoryAccessTimeQueryString_2 | null
  changeTime?: DirectoryChangeTimeQueryString_2 | null
  birthTime?: DirectoryBirthTimeQueryString_2 | null
  root?: DirectoryRootQueryString_2 | null
  dir?: DirectoryDirQueryString_2 | null
  base?: DirectoryBaseQueryString_2 | null
  ext?: DirectoryExtQueryString_2 | null
  name?: DirectoryNameQueryString_2 | null
  relativeDirectory?: DirectoryRelativeDirectoryQueryString_2 | null
  dev?: DirectoryDevQueryFloat_2 | null
  mode?: DirectoryModeQueryInteger_2 | null
  nlink?: DirectoryNlinkQueryInteger_2 | null
  uid?: DirectoryUidQueryInteger_2 | null
  gid?: DirectoryGidQueryInteger_2 | null
  rdev?: DirectoryRdevQueryInteger_2 | null
  ino?: DirectoryInoQueryFloat_2 | null
  atimeMs?: DirectoryAtimeMsQueryFloat_2 | null
  mtimeMs?: DirectoryMtimeMsQueryFloat_2 | null
  ctimeMs?: DirectoryCtimeMsQueryFloat_2 | null
  birthtimeMs?: DirectoryBirthtimeMsQueryFloat_2 | null
  atime?: DirectoryAtimeQueryString_2 | null
  mtime?: DirectoryMtimeQueryString_2 | null
  ctime?: DirectoryCtimeQueryString_2 | null
  birthtime?: DirectoryBirthtimeQueryString_2 | null
}
export interface FileQueryArgs {
  id?: FileIdQueryString_2 | null
  internal?: FileInternalInputObject_2 | null
  sourceInstanceName?: FileSourceInstanceNameQueryString_2 | null
  absolutePath?: FileAbsolutePathQueryString_2 | null
  relativePath?: FileRelativePathQueryString_2 | null
  extension?: FileExtensionQueryString_2 | null
  size?: FileSizeQueryInteger_2 | null
  prettySize?: FilePrettySizeQueryString_2 | null
  modifiedTime?: FileModifiedTimeQueryString_2 | null
  accessTime?: FileAccessTimeQueryString_2 | null
  changeTime?: FileChangeTimeQueryString_2 | null
  birthTime?: FileBirthTimeQueryString_2 | null
  root?: FileRootQueryString_2 | null
  dir?: FileDirQueryString_2 | null
  base?: FileBaseQueryString_2 | null
  ext?: FileExtQueryString_2 | null
  name?: FileNameQueryString_2 | null
  relativeDirectory?: FileRelativeDirectoryQueryString_2 | null
  dev?: FileDevQueryFloat_2 | null
  mode?: FileModeQueryInteger_2 | null
  nlink?: FileNlinkQueryInteger_2 | null
  uid?: FileUidQueryInteger_2 | null
  gid?: FileGidQueryInteger_2 | null
  rdev?: FileRdevQueryInteger_2 | null
  ino?: FileInoQueryFloat_2 | null
  atimeMs?: FileAtimeMsQueryFloat_2 | null
  mtimeMs?: FileMtimeMsQueryFloat_2 | null
  ctimeMs?: FileCtimeMsQueryFloat_2 | null
  birthtimeMs?: FileBirthtimeMsQueryFloat_2 | null
  atime?: FileAtimeQueryString_2 | null
  mtime?: FileMtimeQueryString_2 | null
  ctime?: FileCtimeQueryString_2 | null
  birthtime?: FileBirthtimeQueryString_2 | null
  publicURL?: PublicUrlQueryString_3 | null
}
export interface MarkdownRemarkQueryArgs {
  id?: MarkdownRemarkIdQueryString_2 | null
  internal?: MarkdownRemarkInternalInputObject_2 | null
  frontmatter?: MarkdownRemarkFrontmatterInputObject_2 | null
  excerpt?: ExcerptQueryString_3 | null
  rawMarkdownBody?: MarkdownRemarkRawMarkdownBodyQueryString_2 | null
  fileAbsolutePath?: MarkdownRemarkFileAbsolutePathQueryString_2 | null
  fields?: MarkdownRemarkFieldsInputObject_2 | null
  html?: HtmlQueryString_3 | null
  headings?: HeadingsQueryList_3 | null
  timeToRead?: TimeToReadQueryInt_3 | null
  tableOfContents?: TableOfContentsQueryString_3 | null
  wordCount?: WordCountTypeName_3 | null
}
export interface DistinctSitePageConnectionArgs {
  field?: SitePageDistinctEnum | null
}
export interface GroupSitePageConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: SitePageGroupEnum | null
}
export interface DistinctSitePluginConnectionArgs {
  field?: SitePluginDistinctEnum | null
}
export interface GroupSitePluginConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: SitePluginGroupEnum | null
}
export interface DistinctDirectoryConnectionArgs {
  field?: DirectoryDistinctEnum | null
}
export interface GroupDirectoryConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: DirectoryGroupEnum | null
}
export interface ModifiedTimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}
export interface AccessTimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}
export interface ChangeTimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}
export interface BirthTimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}
export interface AtimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}
export interface MtimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}
export interface CtimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}
export interface BirthtimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}
export interface DistinctFileConnectionArgs {
  field?: FileDistinctEnum | null
}
export interface GroupFileConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: FileGroupEnum | null
}
export interface ModifiedTimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}
export interface AccessTimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}
export interface ChangeTimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}
export interface BirthTimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}
export interface AtimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}
export interface MtimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}
export interface CtimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}
export interface BirthtimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}
export interface ExcerptMarkdownRemarkArgs {
  pruneLength?: number | null
  truncate?: boolean | null
}
export interface HeadingsMarkdownRemarkArgs {
  depth?: HeadingLevels | null
}
export interface TableOfContentsMarkdownRemarkArgs {
  pathToSlugField?: string | null
}
export interface DateFrontmatter_2Args {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}
export interface DistinctMarkdownRemarkConnectionArgs {
  field?: MarkdownRemarkDistinctEnum | null
}
export interface GroupMarkdownRemarkConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: MarkdownRemarkGroupEnum | null
}
export interface PortSiteArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}
export interface BuildTimeSiteArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export enum SitePageConnectionSortByFieldsEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___slug = 'context___slug',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePageConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum SitePageDistinctEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___slug = 'context___slug',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePageGroupEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___slug = 'context___slug',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePluginConnectionSortByFieldsEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions___plugins',
  pluginOptions___classPrefix = 'pluginOptions___classPrefix',
  pluginOptions___showLineNumbers = 'pluginOptions___showLineNumbers',
  pluginOptions___noInlineHighlight = 'pluginOptions___noInlineHighlight',
  pluginOptions___pathToConfigModule = 'pluginOptions___pathToConfigModule',
  pluginOptions___omitGoogleFont = 'pluginOptions___omitGoogleFont',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___trackingId = 'pluginOptions___trackingId',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum SitePluginConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum SitePluginDistinctEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions___plugins',
  pluginOptions___classPrefix = 'pluginOptions___classPrefix',
  pluginOptions___showLineNumbers = 'pluginOptions___showLineNumbers',
  pluginOptions___noInlineHighlight = 'pluginOptions___noInlineHighlight',
  pluginOptions___pathToConfigModule = 'pluginOptions___pathToConfigModule',
  pluginOptions___omitGoogleFont = 'pluginOptions___omitGoogleFont',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___trackingId = 'pluginOptions___trackingId',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum SitePluginGroupEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions___plugins',
  pluginOptions___classPrefix = 'pluginOptions___classPrefix',
  pluginOptions___showLineNumbers = 'pluginOptions___showLineNumbers',
  pluginOptions___noInlineHighlight = 'pluginOptions___noInlineHighlight',
  pluginOptions___pathToConfigModule = 'pluginOptions___pathToConfigModule',
  pluginOptions___omitGoogleFont = 'pluginOptions___omitGoogleFont',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___trackingId = 'pluginOptions___trackingId',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum DirectoryConnectionSortByFieldsEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum DirectoryConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum DirectoryDistinctEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum DirectoryGroupEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum FileConnectionSortByFieldsEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___mediaType = 'internal___mediaType',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  publicURL = 'publicURL',
}

export enum FileConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum HeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export enum FileDistinctEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___mediaType = 'internal___mediaType',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum FileGroupEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___mediaType = 'internal___mediaType',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum MarkdownRemarkConnectionSortByFieldsEnum {
  id = 'id',
  parent = 'parent',
  internal___content = 'internal___content',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  internal___fieldOwners___slug = 'internal___fieldOwners___slug',
  frontmatter___title = 'frontmatter___title',
  frontmatter___date = 'frontmatter___date',
  frontmatter____PARENT = 'frontmatter____PARENT',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___slug = 'fields___slug',
  html = 'html',
  headings = 'headings',
  timeToRead = 'timeToRead',
  tableOfContents = 'tableOfContents',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
}

export enum MarkdownRemarkConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum MarkdownRemarkDistinctEnum {
  id = 'id',
  parent = 'parent',
  internal___content = 'internal___content',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  internal___fieldOwners___slug = 'internal___fieldOwners___slug',
  frontmatter___title = 'frontmatter___title',
  frontmatter___date = 'frontmatter___date',
  frontmatter____PARENT = 'frontmatter____PARENT',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___slug = 'fields___slug',
}

export enum MarkdownRemarkGroupEnum {
  id = 'id',
  parent = 'parent',
  internal___content = 'internal___content',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  internal___fieldOwners___slug = 'internal___fieldOwners___slug',
  frontmatter___title = 'frontmatter___title',
  frontmatter___date = 'frontmatter___date',
  frontmatter____PARENT = 'frontmatter____PARENT',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___slug = 'fields___slug',
}

export interface QueryResolvers<Context = any> {
  allSitePage?: QueryAllSitePageResolver<
    SitePageConnection | null,
    any,
    Context
  > /** Connection to all SitePage nodes */
  allSitePlugin?: QueryAllSitePluginResolver<
    SitePluginConnection | null,
    any,
    Context
  > /** Connection to all SitePlugin nodes */
  allDirectory?: QueryAllDirectoryResolver<
    DirectoryConnection | null,
    any,
    Context
  > /** Connection to all Directory nodes */
  allFile?: QueryAllFileResolver<FileConnection | null, any, Context> /** Connection to all File nodes */
  allMarkdownRemark?: QueryAllMarkdownRemarkResolver<
    MarkdownRemarkConnection | null,
    any,
    Context
  > /** Connection to all MarkdownRemark nodes */
  sitePage?: QuerySitePageResolver<SitePage | null, any, Context>
  sitePlugin?: QuerySitePluginResolver<SitePlugin | null, any, Context>
  site?: QuerySiteResolver<Site | null, any, Context>
  directory?: QueryDirectoryResolver<Directory | null, any, Context>
  file?: QueryFileResolver<File | null, any, Context>
  markdownRemark?: QueryMarkdownRemarkResolver<MarkdownRemark | null, any, Context>
}

export type QueryAllSitePageResolver<R = SitePageConnection | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export interface QueryAllSitePageArgs {
  skip?: number | null
  limit?: number | null
  sort?: SitePageConnectionSort | null
  filter?: FilterSitePage | null
}

export type QueryAllSitePluginResolver<R = SitePluginConnection | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export interface QueryAllSitePluginArgs {
  skip?: number | null
  limit?: number | null
  sort?: SitePluginConnectionSort | null
  filter?: FilterSitePlugin | null
}

export type QueryAllDirectoryResolver<R = DirectoryConnection | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export interface QueryAllDirectoryArgs {
  skip?: number | null
  limit?: number | null
  sort?: DirectoryConnectionSort | null
  filter?: FilterDirectory | null
}

export type QueryAllFileResolver<R = FileConnection | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface QueryAllFileArgs {
  skip?: number | null
  limit?: number | null
  sort?: FileConnectionSort | null
  filter?: FilterFile | null
}

export type QueryAllMarkdownRemarkResolver<R = MarkdownRemarkConnection | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export interface QueryAllMarkdownRemarkArgs {
  skip?: number | null
  limit?: number | null
  sort?: MarkdownRemarkConnectionSort | null
  filter?: FilterMarkdownRemark | null
}

export type QuerySitePageResolver<R = SitePage | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface QuerySitePageArgs {
  jsonName?: SitePageJsonNameQueryString | null
  internalComponentName?: SitePageInternalComponentNameQueryString | null
  path?: SitePagePathQueryString_2 | null
  component?: SitePageComponentQueryString | null
  componentChunkName?: SitePageComponentChunkNameQueryString | null
  context?: SitePageContextInputObject | null
  pluginCreator?: SitePagePluginCreatorInputObject | null
  pluginCreatorId?: SitePagePluginCreatorIdQueryString_2 | null
  componentPath?: SitePageComponentPathQueryString | null
  id?: SitePageIdQueryString_2 | null
  internal?: SitePageInternalInputObject_2 | null
}

export type QuerySitePluginResolver<R = SitePlugin | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface QuerySitePluginArgs {
  resolve?: SitePluginResolveQueryString_2 | null
  id?: SitePluginIdQueryString_2 | null
  name?: SitePluginNameQueryString_2 | null
  version?: SitePluginVersionQueryString_2 | null
  pluginOptions?: SitePluginPluginOptionsInputObject_2 | null
  nodeAPIs?: SitePluginNodeApIsQueryList_2 | null
  browserAPIs?: SitePluginBrowserApIsQueryList_2 | null
  ssrAPIs?: SitePluginSsrApIsQueryList_2 | null
  pluginFilepath?: SitePluginPluginFilepathQueryString_2 | null
  packageJson?: SitePluginPackageJsonInputObject_2 | null
  internal?: SitePluginInternalInputObject_2 | null
}

export type QuerySiteResolver<R = Site | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface QuerySiteArgs {
  siteMetadata?: SiteSiteMetadataInputObject_2 | null
  port?: SitePortQueryString_2 | null
  host?: SiteHostQueryString_2 | null
  pathPrefix?: SitePathPrefixQueryString_2 | null
  polyfill?: SitePolyfillQueryBoolean_2 | null
  buildTime?: SiteBuildTimeQueryString_2 | null
  id?: SiteIdQueryString_2 | null
  internal?: SiteInternalInputObject_2 | null
}

export type QueryDirectoryResolver<R = Directory | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface QueryDirectoryArgs {
  id?: DirectoryIdQueryString_2 | null
  internal?: DirectoryInternalInputObject_2 | null
  sourceInstanceName?: DirectorySourceInstanceNameQueryString_2 | null
  absolutePath?: DirectoryAbsolutePathQueryString_2 | null
  relativePath?: DirectoryRelativePathQueryString_2 | null
  extension?: DirectoryExtensionQueryString_2 | null
  size?: DirectorySizeQueryInteger_2 | null
  prettySize?: DirectoryPrettySizeQueryString_2 | null
  modifiedTime?: DirectoryModifiedTimeQueryString_2 | null
  accessTime?: DirectoryAccessTimeQueryString_2 | null
  changeTime?: DirectoryChangeTimeQueryString_2 | null
  birthTime?: DirectoryBirthTimeQueryString_2 | null
  root?: DirectoryRootQueryString_2 | null
  dir?: DirectoryDirQueryString_2 | null
  base?: DirectoryBaseQueryString_2 | null
  ext?: DirectoryExtQueryString_2 | null
  name?: DirectoryNameQueryString_2 | null
  relativeDirectory?: DirectoryRelativeDirectoryQueryString_2 | null
  dev?: DirectoryDevQueryFloat_2 | null
  mode?: DirectoryModeQueryInteger_2 | null
  nlink?: DirectoryNlinkQueryInteger_2 | null
  uid?: DirectoryUidQueryInteger_2 | null
  gid?: DirectoryGidQueryInteger_2 | null
  rdev?: DirectoryRdevQueryInteger_2 | null
  ino?: DirectoryInoQueryFloat_2 | null
  atimeMs?: DirectoryAtimeMsQueryFloat_2 | null
  mtimeMs?: DirectoryMtimeMsQueryFloat_2 | null
  ctimeMs?: DirectoryCtimeMsQueryFloat_2 | null
  birthtimeMs?: DirectoryBirthtimeMsQueryFloat_2 | null
  atime?: DirectoryAtimeQueryString_2 | null
  mtime?: DirectoryMtimeQueryString_2 | null
  ctime?: DirectoryCtimeQueryString_2 | null
  birthtime?: DirectoryBirthtimeQueryString_2 | null
}

export type QueryFileResolver<R = File | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface QueryFileArgs {
  id?: FileIdQueryString_2 | null
  internal?: FileInternalInputObject_2 | null
  sourceInstanceName?: FileSourceInstanceNameQueryString_2 | null
  absolutePath?: FileAbsolutePathQueryString_2 | null
  relativePath?: FileRelativePathQueryString_2 | null
  extension?: FileExtensionQueryString_2 | null
  size?: FileSizeQueryInteger_2 | null
  prettySize?: FilePrettySizeQueryString_2 | null
  modifiedTime?: FileModifiedTimeQueryString_2 | null
  accessTime?: FileAccessTimeQueryString_2 | null
  changeTime?: FileChangeTimeQueryString_2 | null
  birthTime?: FileBirthTimeQueryString_2 | null
  root?: FileRootQueryString_2 | null
  dir?: FileDirQueryString_2 | null
  base?: FileBaseQueryString_2 | null
  ext?: FileExtQueryString_2 | null
  name?: FileNameQueryString_2 | null
  relativeDirectory?: FileRelativeDirectoryQueryString_2 | null
  dev?: FileDevQueryFloat_2 | null
  mode?: FileModeQueryInteger_2 | null
  nlink?: FileNlinkQueryInteger_2 | null
  uid?: FileUidQueryInteger_2 | null
  gid?: FileGidQueryInteger_2 | null
  rdev?: FileRdevQueryInteger_2 | null
  ino?: FileInoQueryFloat_2 | null
  atimeMs?: FileAtimeMsQueryFloat_2 | null
  mtimeMs?: FileMtimeMsQueryFloat_2 | null
  ctimeMs?: FileCtimeMsQueryFloat_2 | null
  birthtimeMs?: FileBirthtimeMsQueryFloat_2 | null
  atime?: FileAtimeQueryString_2 | null
  mtime?: FileMtimeQueryString_2 | null
  ctime?: FileCtimeQueryString_2 | null
  birthtime?: FileBirthtimeQueryString_2 | null
  publicURL?: PublicUrlQueryString_3 | null
}

export type QueryMarkdownRemarkResolver<R = MarkdownRemark | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export interface QueryMarkdownRemarkArgs {
  id?: MarkdownRemarkIdQueryString_2 | null
  internal?: MarkdownRemarkInternalInputObject_2 | null
  frontmatter?: MarkdownRemarkFrontmatterInputObject_2 | null
  excerpt?: ExcerptQueryString_3 | null
  rawMarkdownBody?: MarkdownRemarkRawMarkdownBodyQueryString_2 | null
  fileAbsolutePath?: MarkdownRemarkFileAbsolutePathQueryString_2 | null
  fields?: MarkdownRemarkFieldsInputObject_2 | null
  html?: HtmlQueryString_3 | null
  headings?: HeadingsQueryList_3 | null
  timeToRead?: TimeToReadQueryInt_3 | null
  tableOfContents?: TableOfContentsQueryString_3 | null
  wordCount?: WordCountTypeName_3 | null
}

/** A connection to a list of items. */
export interface SitePageConnectionResolvers<Context = any> {
  pageInfo?: SitePageConnectionPageInfoResolver<PageInfo, any, Context> /** Information to aid in pagination. */
  edges?: SitePageConnectionEdgesResolver<SitePageEdge[] | null, any, Context> /** A list of edges. */
  totalCount?: SitePageConnectionTotalCountResolver<number | null, any, Context>
  distinct?: SitePageConnectionDistinctResolver<string[] | null, any, Context>
  group?: SitePageConnectionGroupResolver<SitePageGroupConnectionConnection[] | null, any, Context>
}

export type SitePageConnectionPageInfoResolver<R = PageInfo, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePageConnectionEdgesResolver<R = SitePageEdge[] | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePageConnectionTotalCountResolver<R = number | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePageConnectionDistinctResolver<R = string[] | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export interface SitePageConnectionDistinctArgs {
  field?: SitePageDistinctEnum | null
}

export type SitePageConnectionGroupResolver<
  R = SitePageGroupConnectionConnection[] | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export interface SitePageConnectionGroupArgs {
  skip?: number | null
  limit?: number | null
  field?: SitePageGroupEnum | null
}

/** Information about pagination in a connection. */
export interface PageInfoResolvers<Context = any> {
  hasNextPage?: PageInfoHasNextPageResolver<boolean, any, Context> /** When paginating, are there more items? */
}

export type PageInfoHasNextPageResolver<R = boolean, Parent = any, Context = any> = Resolver<R, Parent, Context>
/** An edge in a connection. */
export interface SitePageEdgeResolvers<Context = any> {
  node?: SitePageEdgeNodeResolver<SitePage | null, any, Context> /** The item at the end of the edge */
  next?: SitePageEdgeNextResolver<SitePage | null, any, Context> /** The next edge in the connection */
  previous?: SitePageEdgePreviousResolver<SitePage | null, any, Context> /** The previous edge in the connection */
}

export type SitePageEdgeNodeResolver<R = SitePage | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePageEdgeNextResolver<R = SitePage | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePageEdgePreviousResolver<R = SitePage | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
/** Node of type SitePage */
export interface SitePageResolvers<Context = any> {
  id?: SitePageIdResolver<string, any, Context> /** The id of this node. */
  parent?: SitePageParentResolver<Node | null, any, Context> /** The parent of this node. */
  children?: SitePageChildrenResolver<Node[] | null, any, Context> /** The children of this node. */
  jsonName?: SitePageJsonNameResolver<string | null, any, Context>
  internalComponentName?: SitePageInternalComponentNameResolver<string | null, any, Context>
  path?: SitePagePathResolver<string | null, any, Context>
  component?: SitePageComponentResolver<string | null, any, Context>
  componentChunkName?: SitePageComponentChunkNameResolver<string | null, any, Context>
  context?: SitePageContextResolver<Context | null, any, Context>
  pluginCreator?: SitePagePluginCreatorResolver<SitePlugin | null, any, Context>
  pluginCreatorId?: SitePagePluginCreatorIdResolver<string | null, any, Context>
  componentPath?: SitePageComponentPathResolver<string | null, any, Context>
  internal?: SitePageInternalResolver<Internal_7 | null, any, Context>
}

export type SitePageIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePageParentResolver<R = Node | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePageChildrenResolver<R = Node[] | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePageJsonNameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePageInternalComponentNameResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePagePathResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePageComponentResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePageComponentChunkNameResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePageContextResolver<R = Context | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePagePluginCreatorResolver<R = SitePlugin | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePagePluginCreatorIdResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePageComponentPathResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePageInternalResolver<R = Internal_7 | null, Parent = any, Context = any> = Resolver<R, Parent, Context>

export interface ContextResolvers<Context = any> {
  slug?: ContextSlugResolver<string | null, any, Context>
}

export type ContextSlugResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
/** Node of type SitePlugin */
export interface SitePluginResolvers<Context = any> {
  id?: SitePluginIdResolver<string, any, Context> /** The id of this node. */
  parent?: SitePluginParentResolver<Node | null, any, Context> /** The parent of this node. */
  children?: SitePluginChildrenResolver<Node[] | null, any, Context> /** The children of this node. */
  resolve?: SitePluginResolveResolver<string | null, any, Context>
  name?: SitePluginNameResolver<string | null, any, Context>
  version?: SitePluginVersionResolver<string | null, any, Context>
  pluginOptions?: SitePluginPluginOptionsResolver<PluginOptions_3 | null, any, Context>
  nodeAPIs?: SitePluginNodeApIsResolver<string[] | null, any, Context>
  browserAPIs?: SitePluginBrowserApIsResolver<string[] | null, any, Context>
  ssrAPIs?: SitePluginSsrApIsResolver<string[] | null, any, Context>
  pluginFilepath?: SitePluginPluginFilepathResolver<string | null, any, Context>
  packageJson?: SitePluginPackageJsonResolver<PackageJson_2 | null, any, Context>
  internal?: SitePluginInternalResolver<Internal_8 | null, any, Context>
}

export type SitePluginIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePluginParentResolver<R = Node | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePluginChildrenResolver<R = Node[] | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePluginResolveResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePluginNameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePluginVersionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePluginPluginOptionsResolver<R = PluginOptions_3 | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePluginNodeApIsResolver<R = string[] | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePluginBrowserApIsResolver<R = string[] | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePluginSsrApIsResolver<R = string[] | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePluginPluginFilepathResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePluginPackageJsonResolver<R = PackageJson_2 | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePluginInternalResolver<R = Internal_8 | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>

export interface PluginOptions_3Resolvers<Context = any> {
  plugins?: PluginOptions_3PluginsResolver<Plugins_2[] | null, any, Context>
  classPrefix?: PluginOptions_3ClassPrefixResolver<string | null, any, Context>
  showLineNumbers?: PluginOptions_3ShowLineNumbersResolver<boolean | null, any, Context>
  noInlineHighlight?: PluginOptions_3NoInlineHighlightResolver<boolean | null, any, Context>
  pathToConfigModule?: PluginOptions_3PathToConfigModuleResolver<string | null, any, Context>
  omitGoogleFont?: PluginOptions_3OmitGoogleFontResolver<boolean | null, any, Context>
  name?: PluginOptions_3NameResolver<string | null, any, Context>
  path?: PluginOptions_3PathResolver<string | null, any, Context>
  trackingId?: PluginOptions_3TrackingIdResolver<string | null, any, Context>
  pathCheck?: PluginOptions_3PathCheckResolver<boolean | null, any, Context>
}

export type PluginOptions_3PluginsResolver<R = Plugins_2[] | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type PluginOptions_3ClassPrefixResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type PluginOptions_3ShowLineNumbersResolver<R = boolean | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type PluginOptions_3NoInlineHighlightResolver<R = boolean | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type PluginOptions_3PathToConfigModuleResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type PluginOptions_3OmitGoogleFontResolver<R = boolean | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type PluginOptions_3NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type PluginOptions_3PathResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type PluginOptions_3TrackingIdResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type PluginOptions_3PathCheckResolver<R = boolean | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>

export interface Plugins_2Resolvers<Context = any> {
  resolve?: Plugins_2ResolveResolver<string | null, any, Context>
  id?: Plugins_2IdResolver<string | null, any, Context>
  name?: Plugins_2NameResolver<string | null, any, Context>
  version?: Plugins_2VersionResolver<string | null, any, Context>
  pluginOptions?: Plugins_2PluginOptionsResolver<PluginOptions_4 | null, any, Context>
  pluginFilepath?: Plugins_2PluginFilepathResolver<string | null, any, Context>
}

export type Plugins_2ResolveResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type Plugins_2IdResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type Plugins_2NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type Plugins_2VersionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type Plugins_2PluginOptionsResolver<R = PluginOptions_4 | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type Plugins_2PluginFilepathResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>

export interface PluginOptions_4Resolvers<Context = any> {
  classPrefix?: PluginOptions_4ClassPrefixResolver<string | null, any, Context>
  showLineNumbers?: PluginOptions_4ShowLineNumbersResolver<boolean | null, any, Context>
  noInlineHighlight?: PluginOptions_4NoInlineHighlightResolver<boolean | null, any, Context>
}

export type PluginOptions_4ClassPrefixResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type PluginOptions_4ShowLineNumbersResolver<R = boolean | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type PluginOptions_4NoInlineHighlightResolver<R = boolean | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>

export interface PackageJson_2Resolvers<Context = any> {
  name?: PackageJson_2NameResolver<string | null, any, Context>
  description?: PackageJson_2DescriptionResolver<string | null, any, Context>
  version?: PackageJson_2VersionResolver<string | null, any, Context>
  main?: PackageJson_2MainResolver<string | null, any, Context>
  license?: PackageJson_2LicenseResolver<string | null, any, Context>
  dependencies?: PackageJson_2DependenciesResolver<Dependencies_2[] | null, any, Context>
  devDependencies?: PackageJson_2DevDependenciesResolver<DevDependencies_2[] | null, any, Context>
  peerDependencies?: PackageJson_2PeerDependenciesResolver<PeerDependencies_2[] | null, any, Context>
  keywords?: PackageJson_2KeywordsResolver<string[] | null, any, Context>
}

export type PackageJson_2NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type PackageJson_2DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type PackageJson_2VersionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type PackageJson_2MainResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type PackageJson_2LicenseResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type PackageJson_2DependenciesResolver<R = Dependencies_2[] | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type PackageJson_2DevDependenciesResolver<
  R = DevDependencies_2[] | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export type PackageJson_2PeerDependenciesResolver<
  R = PeerDependencies_2[] | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export type PackageJson_2KeywordsResolver<R = string[] | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>

export interface Dependencies_2Resolvers<Context = any> {
  name?: Dependencies_2NameResolver<string | null, any, Context>
  version?: Dependencies_2VersionResolver<string | null, any, Context>
}

export type Dependencies_2NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type Dependencies_2VersionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>

export interface DevDependencies_2Resolvers<Context = any> {
  name?: DevDependencies_2NameResolver<string | null, any, Context>
  version?: DevDependencies_2VersionResolver<string | null, any, Context>
}

export type DevDependencies_2NameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DevDependencies_2VersionResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>

export interface PeerDependencies_2Resolvers<Context = any> {
  name?: PeerDependencies_2NameResolver<string | null, any, Context>
  version?: PeerDependencies_2VersionResolver<string | null, any, Context>
}

export type PeerDependencies_2NameResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type PeerDependencies_2VersionResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>

export interface Internal_8Resolvers<Context = any> {
  contentDigest?: Internal_8ContentDigestResolver<string | null, any, Context>
  type?: Internal_8TypeResolver<string | null, any, Context>
  owner?: Internal_8OwnerResolver<string | null, any, Context>
}

export type Internal_8ContentDigestResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type Internal_8TypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type Internal_8OwnerResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>

export interface Internal_7Resolvers<Context = any> {
  type?: Internal_7TypeResolver<string | null, any, Context>
  contentDigest?: Internal_7ContentDigestResolver<string | null, any, Context>
  description?: Internal_7DescriptionResolver<string | null, any, Context>
  owner?: Internal_7OwnerResolver<string | null, any, Context>
}

export type Internal_7TypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type Internal_7ContentDigestResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type Internal_7DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type Internal_7OwnerResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
/** A connection to a list of items. */
export interface SitePageGroupConnectionConnectionResolvers<Context = any> {
  pageInfo?: SitePageGroupConnectionConnectionPageInfoResolver<
    PageInfo,
    any,
    Context
  > /** Information to aid in pagination. */
  edges?: SitePageGroupConnectionConnectionEdgesResolver<
    SitePageGroupConnectionEdge[] | null,
    any,
    Context
  > /** A list of edges. */
  field?: SitePageGroupConnectionConnectionFieldResolver<string | null, any, Context>
  fieldValue?: SitePageGroupConnectionConnectionFieldValueResolver<string | null, any, Context>
  totalCount?: SitePageGroupConnectionConnectionTotalCountResolver<number | null, any, Context>
}

export type SitePageGroupConnectionConnectionPageInfoResolver<R = PageInfo, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePageGroupConnectionConnectionEdgesResolver<
  R = SitePageGroupConnectionEdge[] | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export type SitePageGroupConnectionConnectionFieldResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePageGroupConnectionConnectionFieldValueResolver<
  R = string | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export type SitePageGroupConnectionConnectionTotalCountResolver<
  R = number | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
/** An edge in a connection. */
export interface SitePageGroupConnectionEdgeResolvers<Context = any> {
  node?: SitePageGroupConnectionEdgeNodeResolver<SitePage | null, any, Context> /** The item at the end of the edge */
  next?: SitePageGroupConnectionEdgeNextResolver<SitePage | null, any, Context> /** The next edge in the connection */
  previous?: SitePageGroupConnectionEdgePreviousResolver<
    SitePage | null,
    any,
    Context
  > /** The previous edge in the connection */
}

export type SitePageGroupConnectionEdgeNodeResolver<R = SitePage | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePageGroupConnectionEdgeNextResolver<R = SitePage | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePageGroupConnectionEdgePreviousResolver<R = SitePage | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
/** A connection to a list of items. */
export interface SitePluginConnectionResolvers<Context = any> {
  pageInfo?: SitePluginConnectionPageInfoResolver<PageInfo, any, Context> /** Information to aid in pagination. */
  edges?: SitePluginConnectionEdgesResolver<SitePluginEdge[] | null, any, Context> /** A list of edges. */
  totalCount?: SitePluginConnectionTotalCountResolver<number | null, any, Context>
  distinct?: SitePluginConnectionDistinctResolver<string[] | null, any, Context>
  group?: SitePluginConnectionGroupResolver<SitePluginGroupConnectionConnection[] | null, any, Context>
}

export type SitePluginConnectionPageInfoResolver<R = PageInfo, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePluginConnectionEdgesResolver<R = SitePluginEdge[] | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePluginConnectionTotalCountResolver<R = number | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePluginConnectionDistinctResolver<R = string[] | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export interface SitePluginConnectionDistinctArgs {
  field?: SitePluginDistinctEnum | null
}

export type SitePluginConnectionGroupResolver<
  R = SitePluginGroupConnectionConnection[] | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export interface SitePluginConnectionGroupArgs {
  skip?: number | null
  limit?: number | null
  field?: SitePluginGroupEnum | null
}

/** An edge in a connection. */
export interface SitePluginEdgeResolvers<Context = any> {
  node?: SitePluginEdgeNodeResolver<SitePlugin | null, any, Context> /** The item at the end of the edge */
  next?: SitePluginEdgeNextResolver<SitePlugin | null, any, Context> /** The next edge in the connection */
  previous?: SitePluginEdgePreviousResolver<SitePlugin | null, any, Context> /** The previous edge in the connection */
}

export type SitePluginEdgeNodeResolver<R = SitePlugin | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePluginEdgeNextResolver<R = SitePlugin | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePluginEdgePreviousResolver<R = SitePlugin | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
/** A connection to a list of items. */
export interface SitePluginGroupConnectionConnectionResolvers<Context = any> {
  pageInfo?: SitePluginGroupConnectionConnectionPageInfoResolver<
    PageInfo,
    any,
    Context
  > /** Information to aid in pagination. */
  edges?: SitePluginGroupConnectionConnectionEdgesResolver<
    SitePluginGroupConnectionEdge[] | null,
    any,
    Context
  > /** A list of edges. */
  field?: SitePluginGroupConnectionConnectionFieldResolver<string | null, any, Context>
  fieldValue?: SitePluginGroupConnectionConnectionFieldValueResolver<string | null, any, Context>
  totalCount?: SitePluginGroupConnectionConnectionTotalCountResolver<number | null, any, Context>
}

export type SitePluginGroupConnectionConnectionPageInfoResolver<R = PageInfo, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePluginGroupConnectionConnectionEdgesResolver<
  R = SitePluginGroupConnectionEdge[] | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export type SitePluginGroupConnectionConnectionFieldResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePluginGroupConnectionConnectionFieldValueResolver<
  R = string | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export type SitePluginGroupConnectionConnectionTotalCountResolver<
  R = number | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
/** An edge in a connection. */
export interface SitePluginGroupConnectionEdgeResolvers<Context = any> {
  node?: SitePluginGroupConnectionEdgeNodeResolver<
    SitePlugin | null,
    any,
    Context
  > /** The item at the end of the edge */
  next?: SitePluginGroupConnectionEdgeNextResolver<
    SitePlugin | null,
    any,
    Context
  > /** The next edge in the connection */
  previous?: SitePluginGroupConnectionEdgePreviousResolver<
    SitePlugin | null,
    any,
    Context
  > /** The previous edge in the connection */
}

export type SitePluginGroupConnectionEdgeNodeResolver<R = SitePlugin | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePluginGroupConnectionEdgeNextResolver<R = SitePlugin | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePluginGroupConnectionEdgePreviousResolver<
  R = SitePlugin | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
/** A connection to a list of items. */
export interface DirectoryConnectionResolvers<Context = any> {
  pageInfo?: DirectoryConnectionPageInfoResolver<PageInfo, any, Context> /** Information to aid in pagination. */
  edges?: DirectoryConnectionEdgesResolver<DirectoryEdge[] | null, any, Context> /** A list of edges. */
  totalCount?: DirectoryConnectionTotalCountResolver<number | null, any, Context>
  distinct?: DirectoryConnectionDistinctResolver<string[] | null, any, Context>
  group?: DirectoryConnectionGroupResolver<DirectoryGroupConnectionConnection[] | null, any, Context>
}

export type DirectoryConnectionPageInfoResolver<R = PageInfo, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type DirectoryConnectionEdgesResolver<R = DirectoryEdge[] | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type DirectoryConnectionTotalCountResolver<R = number | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type DirectoryConnectionDistinctResolver<R = string[] | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export interface DirectoryConnectionDistinctArgs {
  field?: DirectoryDistinctEnum | null
}

export type DirectoryConnectionGroupResolver<
  R = DirectoryGroupConnectionConnection[] | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export interface DirectoryConnectionGroupArgs {
  skip?: number | null
  limit?: number | null
  field?: DirectoryGroupEnum | null
}

/** An edge in a connection. */
export interface DirectoryEdgeResolvers<Context = any> {
  node?: DirectoryEdgeNodeResolver<Directory | null, any, Context> /** The item at the end of the edge */
  next?: DirectoryEdgeNextResolver<Directory | null, any, Context> /** The next edge in the connection */
  previous?: DirectoryEdgePreviousResolver<Directory | null, any, Context> /** The previous edge in the connection */
}

export type DirectoryEdgeNodeResolver<R = Directory | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryEdgeNextResolver<R = Directory | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryEdgePreviousResolver<R = Directory | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
/** Node of type Directory */
export interface DirectoryResolvers<Context = any> {
  id?: DirectoryIdResolver<string, any, Context> /** The id of this node. */
  parent?: DirectoryParentResolver<Node | null, any, Context> /** The parent of this node. */
  children?: DirectoryChildrenResolver<Node[] | null, any, Context> /** The children of this node. */
  internal?: DirectoryInternalResolver<Internal_9 | null, any, Context>
  sourceInstanceName?: DirectorySourceInstanceNameResolver<string | null, any, Context>
  absolutePath?: DirectoryAbsolutePathResolver<string | null, any, Context>
  relativePath?: DirectoryRelativePathResolver<string | null, any, Context>
  extension?: DirectoryExtensionResolver<string | null, any, Context>
  size?: DirectorySizeResolver<number | null, any, Context>
  prettySize?: DirectoryPrettySizeResolver<string | null, any, Context>
  modifiedTime?: DirectoryModifiedTimeResolver<Date | null, any, Context>
  accessTime?: DirectoryAccessTimeResolver<Date | null, any, Context>
  changeTime?: DirectoryChangeTimeResolver<Date | null, any, Context>
  birthTime?: DirectoryBirthTimeResolver<Date | null, any, Context>
  root?: DirectoryRootResolver<string | null, any, Context>
  dir?: DirectoryDirResolver<string | null, any, Context>
  base?: DirectoryBaseResolver<string | null, any, Context>
  ext?: DirectoryExtResolver<string | null, any, Context>
  name?: DirectoryNameResolver<string | null, any, Context>
  relativeDirectory?: DirectoryRelativeDirectoryResolver<string | null, any, Context>
  dev?: DirectoryDevResolver<number | null, any, Context>
  mode?: DirectoryModeResolver<number | null, any, Context>
  nlink?: DirectoryNlinkResolver<number | null, any, Context>
  uid?: DirectoryUidResolver<number | null, any, Context>
  gid?: DirectoryGidResolver<number | null, any, Context>
  rdev?: DirectoryRdevResolver<number | null, any, Context>
  ino?: DirectoryInoResolver<number | null, any, Context>
  atimeMs?: DirectoryAtimeMsResolver<number | null, any, Context>
  mtimeMs?: DirectoryMtimeMsResolver<number | null, any, Context>
  ctimeMs?: DirectoryCtimeMsResolver<number | null, any, Context>
  birthtimeMs?: DirectoryBirthtimeMsResolver<number | null, any, Context>
  atime?: DirectoryAtimeResolver<Date | null, any, Context>
  mtime?: DirectoryMtimeResolver<Date | null, any, Context>
  ctime?: DirectoryCtimeResolver<Date | null, any, Context>
  birthtime?: DirectoryBirthtimeResolver<Date | null, any, Context>
}

export type DirectoryIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryParentResolver<R = Node | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryChildrenResolver<R = Node[] | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryInternalResolver<R = Internal_9 | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectorySourceInstanceNameResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type DirectoryAbsolutePathResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryRelativePathResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryExtensionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectorySizeResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryPrettySizeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryModifiedTimeResolver<R = Date | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface DirectoryModifiedTimeArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export type DirectoryAccessTimeResolver<R = Date | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface DirectoryAccessTimeArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export type DirectoryChangeTimeResolver<R = Date | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface DirectoryChangeTimeArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export type DirectoryBirthTimeResolver<R = Date | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface DirectoryBirthTimeArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export type DirectoryRootResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryDirResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryBaseResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryExtResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryNameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryRelativeDirectoryResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type DirectoryDevResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryModeResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryNlinkResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryUidResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryGidResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryRdevResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryInoResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryAtimeMsResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryMtimeMsResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryCtimeMsResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryBirthtimeMsResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type DirectoryAtimeResolver<R = Date | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface DirectoryAtimeArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export type DirectoryMtimeResolver<R = Date | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface DirectoryMtimeArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export type DirectoryCtimeResolver<R = Date | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface DirectoryCtimeArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export type DirectoryBirthtimeResolver<R = Date | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface DirectoryBirthtimeArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export interface Internal_9Resolvers<Context = any> {
  contentDigest?: Internal_9ContentDigestResolver<string | null, any, Context>
  type?: Internal_9TypeResolver<string | null, any, Context>
  description?: Internal_9DescriptionResolver<string | null, any, Context>
  owner?: Internal_9OwnerResolver<string | null, any, Context>
}

export type Internal_9ContentDigestResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type Internal_9TypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type Internal_9DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type Internal_9OwnerResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
/** A connection to a list of items. */
export interface DirectoryGroupConnectionConnectionResolvers<Context = any> {
  pageInfo?: DirectoryGroupConnectionConnectionPageInfoResolver<
    PageInfo,
    any,
    Context
  > /** Information to aid in pagination. */
  edges?: DirectoryGroupConnectionConnectionEdgesResolver<
    DirectoryGroupConnectionEdge[] | null,
    any,
    Context
  > /** A list of edges. */
  field?: DirectoryGroupConnectionConnectionFieldResolver<string | null, any, Context>
  fieldValue?: DirectoryGroupConnectionConnectionFieldValueResolver<string | null, any, Context>
  totalCount?: DirectoryGroupConnectionConnectionTotalCountResolver<number | null, any, Context>
}

export type DirectoryGroupConnectionConnectionPageInfoResolver<R = PageInfo, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type DirectoryGroupConnectionConnectionEdgesResolver<
  R = DirectoryGroupConnectionEdge[] | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export type DirectoryGroupConnectionConnectionFieldResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type DirectoryGroupConnectionConnectionFieldValueResolver<
  R = string | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export type DirectoryGroupConnectionConnectionTotalCountResolver<
  R = number | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
/** An edge in a connection. */
export interface DirectoryGroupConnectionEdgeResolvers<Context = any> {
  node?: DirectoryGroupConnectionEdgeNodeResolver<Directory | null, any, Context> /** The item at the end of the edge */
  next?: DirectoryGroupConnectionEdgeNextResolver<Directory | null, any, Context> /** The next edge in the connection */
  previous?: DirectoryGroupConnectionEdgePreviousResolver<
    Directory | null,
    any,
    Context
  > /** The previous edge in the connection */
}

export type DirectoryGroupConnectionEdgeNodeResolver<R = Directory | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type DirectoryGroupConnectionEdgeNextResolver<R = Directory | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type DirectoryGroupConnectionEdgePreviousResolver<R = Directory | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
/** A connection to a list of items. */
export interface FileConnectionResolvers<Context = any> {
  pageInfo?: FileConnectionPageInfoResolver<PageInfo, any, Context> /** Information to aid in pagination. */
  edges?: FileConnectionEdgesResolver<FileEdge[] | null, any, Context> /** A list of edges. */
  totalCount?: FileConnectionTotalCountResolver<number | null, any, Context>
  distinct?: FileConnectionDistinctResolver<string[] | null, any, Context>
  group?: FileConnectionGroupResolver<FileGroupConnectionConnection[] | null, any, Context>
}

export type FileConnectionPageInfoResolver<R = PageInfo, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileConnectionEdgesResolver<R = FileEdge[] | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type FileConnectionTotalCountResolver<R = number | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type FileConnectionDistinctResolver<R = string[] | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export interface FileConnectionDistinctArgs {
  field?: FileDistinctEnum | null
}

export type FileConnectionGroupResolver<
  R = FileGroupConnectionConnection[] | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export interface FileConnectionGroupArgs {
  skip?: number | null
  limit?: number | null
  field?: FileGroupEnum | null
}

/** An edge in a connection. */
export interface FileEdgeResolvers<Context = any> {
  node?: FileEdgeNodeResolver<File | null, any, Context> /** The item at the end of the edge */
  next?: FileEdgeNextResolver<File | null, any, Context> /** The next edge in the connection */
  previous?: FileEdgePreviousResolver<File | null, any, Context> /** The previous edge in the connection */
}

export type FileEdgeNodeResolver<R = File | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileEdgeNextResolver<R = File | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileEdgePreviousResolver<R = File | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
/** Node of type File */
export interface FileResolvers<Context = any> {
  id?: FileIdResolver<string, any, Context> /** The id of this node. */
  parent?: FileParentResolver<Node | null, any, Context> /** The parent of this node. */
  children?: FileChildrenResolver<Node[] | null, any, Context> /** The children of this node. */
  childMarkdownRemark?: FileChildMarkdownRemarkResolver<
    MarkdownRemark | null,
    any,
    Context
  > /** The child of this node of type markdownRemark */
  internal?: FileInternalResolver<Internal_10 | null, any, Context>
  sourceInstanceName?: FileSourceInstanceNameResolver<string | null, any, Context>
  absolutePath?: FileAbsolutePathResolver<string | null, any, Context>
  relativePath?: FileRelativePathResolver<string | null, any, Context>
  extension?: FileExtensionResolver<string | null, any, Context>
  size?: FileSizeResolver<number | null, any, Context>
  prettySize?: FilePrettySizeResolver<string | null, any, Context>
  modifiedTime?: FileModifiedTimeResolver<Date | null, any, Context>
  accessTime?: FileAccessTimeResolver<Date | null, any, Context>
  changeTime?: FileChangeTimeResolver<Date | null, any, Context>
  birthTime?: FileBirthTimeResolver<Date | null, any, Context>
  root?: FileRootResolver<string | null, any, Context>
  dir?: FileDirResolver<string | null, any, Context>
  base?: FileBaseResolver<string | null, any, Context>
  ext?: FileExtResolver<string | null, any, Context>
  name?: FileNameResolver<string | null, any, Context>
  relativeDirectory?: FileRelativeDirectoryResolver<string | null, any, Context>
  dev?: FileDevResolver<number | null, any, Context>
  mode?: FileModeResolver<number | null, any, Context>
  nlink?: FileNlinkResolver<number | null, any, Context>
  uid?: FileUidResolver<number | null, any, Context>
  gid?: FileGidResolver<number | null, any, Context>
  rdev?: FileRdevResolver<number | null, any, Context>
  ino?: FileInoResolver<number | null, any, Context>
  atimeMs?: FileAtimeMsResolver<number | null, any, Context>
  mtimeMs?: FileMtimeMsResolver<number | null, any, Context>
  ctimeMs?: FileCtimeMsResolver<number | null, any, Context>
  birthtimeMs?: FileBirthtimeMsResolver<number | null, any, Context>
  atime?: FileAtimeResolver<Date | null, any, Context>
  mtime?: FileMtimeResolver<Date | null, any, Context>
  ctime?: FileCtimeResolver<Date | null, any, Context>
  birthtime?: FileBirthtimeResolver<Date | null, any, Context>
  publicURL?: FilePublicUrlResolver<
    string | null,
    any,
    Context
  > /** Copy file to static directory and return public url to it */
}

export type FileIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileParentResolver<R = Node | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileChildrenResolver<R = Node[] | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileChildMarkdownRemarkResolver<R = MarkdownRemark | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type FileInternalResolver<R = Internal_10 | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileSourceInstanceNameResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type FileAbsolutePathResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileRelativePathResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileExtensionResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileSizeResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FilePrettySizeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileModifiedTimeResolver<R = Date | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface FileModifiedTimeArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export type FileAccessTimeResolver<R = Date | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface FileAccessTimeArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export type FileChangeTimeResolver<R = Date | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface FileChangeTimeArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export type FileBirthTimeResolver<R = Date | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface FileBirthTimeArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export type FileRootResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileDirResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileBaseResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileExtResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileNameResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileRelativeDirectoryResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileDevResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileModeResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileNlinkResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileUidResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileGidResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileRdevResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileInoResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileAtimeMsResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileMtimeMsResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileCtimeMsResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileBirthtimeMsResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type FileAtimeResolver<R = Date | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface FileAtimeArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export type FileMtimeResolver<R = Date | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface FileMtimeArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export type FileCtimeResolver<R = Date | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface FileCtimeArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export type FileBirthtimeResolver<R = Date | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface FileBirthtimeArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export type FilePublicUrlResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
/** Node of type MarkdownRemark */
export interface MarkdownRemarkResolvers<Context = any> {
  id?: MarkdownRemarkIdResolver<string, any, Context> /** The id of this node. */
  parent?: MarkdownRemarkParentResolver<Node | null, any, Context> /** The parent of this node. */
  children?: MarkdownRemarkChildrenResolver<Node[] | null, any, Context> /** The children of this node. */
  internal?: MarkdownRemarkInternalResolver<Internal_11 | null, any, Context>
  frontmatter?: MarkdownRemarkFrontmatterResolver<Frontmatter_2 | null, any, Context>
  rawMarkdownBody?: MarkdownRemarkRawMarkdownBodyResolver<string | null, any, Context>
  fileAbsolutePath?: MarkdownRemarkFileAbsolutePathResolver<string | null, any, Context>
  fields?: MarkdownRemarkFieldsResolver<Fields_2 | null, any, Context>
  html?: MarkdownRemarkHtmlResolver<string | null, any, Context>
  htmlAst?: MarkdownRemarkHtmlAstResolver<Json | null, any, Context>
  excerpt?: MarkdownRemarkExcerptResolver<string | null, any, Context>
  headings?: MarkdownRemarkHeadingsResolver<MarkdownHeading[] | null, any, Context>
  timeToRead?: MarkdownRemarkTimeToReadResolver<number | null, any, Context>
  tableOfContents?: MarkdownRemarkTableOfContentsResolver<string | null, any, Context>
  wordCount?: MarkdownRemarkWordCountResolver<WordCount | null, any, Context>
}

export type MarkdownRemarkIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type MarkdownRemarkParentResolver<R = Node | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type MarkdownRemarkChildrenResolver<R = Node[] | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type MarkdownRemarkInternalResolver<R = Internal_11 | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type MarkdownRemarkFrontmatterResolver<R = Frontmatter_2 | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type MarkdownRemarkRawMarkdownBodyResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type MarkdownRemarkFileAbsolutePathResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type MarkdownRemarkFieldsResolver<R = Fields_2 | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type MarkdownRemarkHtmlResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type MarkdownRemarkHtmlAstResolver<R = Json | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type MarkdownRemarkExcerptResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface MarkdownRemarkExcerptArgs {
  pruneLength?: number | null
  truncate?: boolean | null
}

export type MarkdownRemarkHeadingsResolver<R = MarkdownHeading[] | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export interface MarkdownRemarkHeadingsArgs {
  depth?: HeadingLevels | null
}

export type MarkdownRemarkTimeToReadResolver<R = number | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type MarkdownRemarkTableOfContentsResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export interface MarkdownRemarkTableOfContentsArgs {
  pathToSlugField?: string | null
}

export type MarkdownRemarkWordCountResolver<R = WordCount | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>

export interface Internal_11Resolvers<Context = any> {
  content?: Internal_11ContentResolver<string | null, any, Context>
  type?: Internal_11TypeResolver<string | null, any, Context>
  contentDigest?: Internal_11ContentDigestResolver<string | null, any, Context>
  owner?: Internal_11OwnerResolver<string | null, any, Context>
  fieldOwners?: Internal_11FieldOwnersResolver<FieldOwners_2 | null, any, Context>
}

export type Internal_11ContentResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type Internal_11TypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type Internal_11ContentDigestResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type Internal_11OwnerResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type Internal_11FieldOwnersResolver<R = FieldOwners_2 | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>

export interface FieldOwners_2Resolvers<Context = any> {
  slug?: FieldOwners_2SlugResolver<string | null, any, Context>
}

export type FieldOwners_2SlugResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>

export interface Frontmatter_2Resolvers<Context = any> {
  title?: Frontmatter_2TitleResolver<string | null, any, Context>
  date?: Frontmatter_2DateResolver<Date | null, any, Context>
  _PARENT?: Frontmatter_2ParentResolver<string | null, any, Context>
}

export type Frontmatter_2TitleResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type Frontmatter_2DateResolver<R = Date | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface Frontmatter_2DateArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export type Frontmatter_2ParentResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>

export interface Fields_2Resolvers<Context = any> {
  slug?: Fields_2SlugResolver<string | null, any, Context>
}

export type Fields_2SlugResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>

export interface MarkdownHeadingResolvers<Context = any> {
  value?: MarkdownHeadingValueResolver<string | null, any, Context>
  depth?: MarkdownHeadingDepthResolver<number | null, any, Context>
}

export type MarkdownHeadingValueResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type MarkdownHeadingDepthResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>

export interface WordCountResolvers<Context = any> {
  paragraphs?: WordCountParagraphsResolver<number | null, any, Context>
  sentences?: WordCountSentencesResolver<number | null, any, Context>
  words?: WordCountWordsResolver<number | null, any, Context>
}

export type WordCountParagraphsResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type WordCountSentencesResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type WordCountWordsResolver<R = number | null, Parent = any, Context = any> = Resolver<R, Parent, Context>

export interface Internal_10Resolvers<Context = any> {
  contentDigest?: Internal_10ContentDigestResolver<string | null, any, Context>
  type?: Internal_10TypeResolver<string | null, any, Context>
  mediaType?: Internal_10MediaTypeResolver<string | null, any, Context>
  description?: Internal_10DescriptionResolver<string | null, any, Context>
  owner?: Internal_10OwnerResolver<string | null, any, Context>
}

export type Internal_10ContentDigestResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type Internal_10TypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type Internal_10MediaTypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type Internal_10DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type Internal_10OwnerResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
/** A connection to a list of items. */
export interface FileGroupConnectionConnectionResolvers<Context = any> {
  pageInfo?: FileGroupConnectionConnectionPageInfoResolver<
    PageInfo,
    any,
    Context
  > /** Information to aid in pagination. */
  edges?: FileGroupConnectionConnectionEdgesResolver<
    FileGroupConnectionEdge[] | null,
    any,
    Context
  > /** A list of edges. */
  field?: FileGroupConnectionConnectionFieldResolver<string | null, any, Context>
  fieldValue?: FileGroupConnectionConnectionFieldValueResolver<string | null, any, Context>
  totalCount?: FileGroupConnectionConnectionTotalCountResolver<number | null, any, Context>
}

export type FileGroupConnectionConnectionPageInfoResolver<R = PageInfo, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type FileGroupConnectionConnectionEdgesResolver<
  R = FileGroupConnectionEdge[] | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export type FileGroupConnectionConnectionFieldResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type FileGroupConnectionConnectionFieldValueResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type FileGroupConnectionConnectionTotalCountResolver<R = number | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
/** An edge in a connection. */
export interface FileGroupConnectionEdgeResolvers<Context = any> {
  node?: FileGroupConnectionEdgeNodeResolver<File | null, any, Context> /** The item at the end of the edge */
  next?: FileGroupConnectionEdgeNextResolver<File | null, any, Context> /** The next edge in the connection */
  previous?: FileGroupConnectionEdgePreviousResolver<
    File | null,
    any,
    Context
  > /** The previous edge in the connection */
}

export type FileGroupConnectionEdgeNodeResolver<R = File | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type FileGroupConnectionEdgeNextResolver<R = File | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type FileGroupConnectionEdgePreviousResolver<R = File | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
/** A connection to a list of items. */
export interface MarkdownRemarkConnectionResolvers<Context = any> {
  pageInfo?: MarkdownRemarkConnectionPageInfoResolver<PageInfo, any, Context> /** Information to aid in pagination. */
  edges?: MarkdownRemarkConnectionEdgesResolver<MarkdownRemarkEdge[] | null, any, Context> /** A list of edges. */
  totalCount?: MarkdownRemarkConnectionTotalCountResolver<number | null, any, Context>
  distinct?: MarkdownRemarkConnectionDistinctResolver<string[] | null, any, Context>
  group?: MarkdownRemarkConnectionGroupResolver<MarkdownRemarkGroupConnectionConnection[] | null, any, Context>
}

export type MarkdownRemarkConnectionPageInfoResolver<R = PageInfo, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type MarkdownRemarkConnectionEdgesResolver<
  R = MarkdownRemarkEdge[] | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export type MarkdownRemarkConnectionTotalCountResolver<R = number | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type MarkdownRemarkConnectionDistinctResolver<R = string[] | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export interface MarkdownRemarkConnectionDistinctArgs {
  field?: MarkdownRemarkDistinctEnum | null
}

export type MarkdownRemarkConnectionGroupResolver<
  R = MarkdownRemarkGroupConnectionConnection[] | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export interface MarkdownRemarkConnectionGroupArgs {
  skip?: number | null
  limit?: number | null
  field?: MarkdownRemarkGroupEnum | null
}

/** An edge in a connection. */
export interface MarkdownRemarkEdgeResolvers<Context = any> {
  node?: MarkdownRemarkEdgeNodeResolver<MarkdownRemark | null, any, Context> /** The item at the end of the edge */
  next?: MarkdownRemarkEdgeNextResolver<MarkdownRemark | null, any, Context> /** The next edge in the connection */
  previous?: MarkdownRemarkEdgePreviousResolver<
    MarkdownRemark | null,
    any,
    Context
  > /** The previous edge in the connection */
}

export type MarkdownRemarkEdgeNodeResolver<R = MarkdownRemark | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type MarkdownRemarkEdgeNextResolver<R = MarkdownRemark | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type MarkdownRemarkEdgePreviousResolver<R = MarkdownRemark | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
/** A connection to a list of items. */
export interface MarkdownRemarkGroupConnectionConnectionResolvers<Context = any> {
  pageInfo?: MarkdownRemarkGroupConnectionConnectionPageInfoResolver<
    PageInfo,
    any,
    Context
  > /** Information to aid in pagination. */
  edges?: MarkdownRemarkGroupConnectionConnectionEdgesResolver<
    MarkdownRemarkGroupConnectionEdge[] | null,
    any,
    Context
  > /** A list of edges. */
  field?: MarkdownRemarkGroupConnectionConnectionFieldResolver<string | null, any, Context>
  fieldValue?: MarkdownRemarkGroupConnectionConnectionFieldValueResolver<string | null, any, Context>
  totalCount?: MarkdownRemarkGroupConnectionConnectionTotalCountResolver<number | null, any, Context>
}

export type MarkdownRemarkGroupConnectionConnectionPageInfoResolver<
  R = PageInfo,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export type MarkdownRemarkGroupConnectionConnectionEdgesResolver<
  R = MarkdownRemarkGroupConnectionEdge[] | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export type MarkdownRemarkGroupConnectionConnectionFieldResolver<
  R = string | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export type MarkdownRemarkGroupConnectionConnectionFieldValueResolver<
  R = string | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export type MarkdownRemarkGroupConnectionConnectionTotalCountResolver<
  R = number | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
/** An edge in a connection. */
export interface MarkdownRemarkGroupConnectionEdgeResolvers<Context = any> {
  node?: MarkdownRemarkGroupConnectionEdgeNodeResolver<
    MarkdownRemark | null,
    any,
    Context
  > /** The item at the end of the edge */
  next?: MarkdownRemarkGroupConnectionEdgeNextResolver<
    MarkdownRemark | null,
    any,
    Context
  > /** The next edge in the connection */
  previous?: MarkdownRemarkGroupConnectionEdgePreviousResolver<
    MarkdownRemark | null,
    any,
    Context
  > /** The previous edge in the connection */
}

export type MarkdownRemarkGroupConnectionEdgeNodeResolver<
  R = MarkdownRemark | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export type MarkdownRemarkGroupConnectionEdgeNextResolver<
  R = MarkdownRemark | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
export type MarkdownRemarkGroupConnectionEdgePreviousResolver<
  R = MarkdownRemark | null,
  Parent = any,
  Context = any
> = Resolver<R, Parent, Context>
/** Node of type Site */
export interface SiteResolvers<Context = any> {
  id?: SiteIdResolver<string, any, Context> /** The id of this node. */
  parent?: SiteParentResolver<Node | null, any, Context> /** The parent of this node. */
  children?: SiteChildrenResolver<Node[] | null, any, Context> /** The children of this node. */
  siteMetadata?: SiteSiteMetadataResolver<SiteMetadata_2 | null, any, Context>
  port?: SitePortResolver<Date | null, any, Context>
  host?: SiteHostResolver<string | null, any, Context>
  pathPrefix?: SitePathPrefixResolver<string | null, any, Context>
  polyfill?: SitePolyfillResolver<boolean | null, any, Context>
  buildTime?: SiteBuildTimeResolver<Date | null, any, Context>
  internal?: SiteInternalResolver<Internal_12 | null, any, Context>
}

export type SiteIdResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SiteParentResolver<R = Node | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SiteChildrenResolver<R = Node[] | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SiteSiteMetadataResolver<R = SiteMetadata_2 | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type SitePortResolver<R = Date | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface SitePortArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export type SiteHostResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePathPrefixResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SitePolyfillResolver<R = boolean | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type SiteBuildTimeResolver<R = Date | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export interface SiteBuildTimeArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null /** Configures the locale Moment.js will use to format the date. */
}

export type SiteInternalResolver<R = Internal_12 | null, Parent = any, Context = any> = Resolver<R, Parent, Context>

export interface SiteMetadata_2Resolvers<Context = any> {
  siteName?: SiteMetadata_2SiteNameResolver<string | null, any, Context>
}

export type SiteMetadata_2SiteNameResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>

export interface Internal_12Resolvers<Context = any> {
  contentDigest?: Internal_12ContentDigestResolver<string | null, any, Context>
  type?: Internal_12TypeResolver<string | null, any, Context>
  owner?: Internal_12OwnerResolver<string | null, any, Context>
}

export type Internal_12ContentDigestResolver<R = string | null, Parent = any, Context = any> = Resolver<
  R,
  Parent,
  Context
>
export type Internal_12TypeResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>
export type Internal_12OwnerResolver<R = string | null, Parent = any, Context = any> = Resolver<R, Parent, Context>

export type AnonymousQuery_1Variables = {}

export type AnonymousQuery_1Query = {
  __typename?: 'Query'
  site?: AnonymousQuery_1Site | null
}

export type AnonymousQuery_1Site = {
  __typename?: 'Site'
  siteMetadata?: AnonymousQuery_1SiteMetadata | null
}

export type AnonymousQuery_1SiteMetadata = {
  __typename?: 'siteMetadata_2'
  siteName?: string | null
}

export type AnonymousQuery_2Variables = {}

export type AnonymousQuery_2Query = {
  __typename?: 'Query'
  allFile?: AnonymousQuery_2AllFile | null
}

export type AnonymousQuery_2AllFile = {
  __typename?: 'FileConnection'
  edges?: AnonymousQuery_2Edges[] | null
}

export type AnonymousQuery_2Edges = {
  __typename?: 'FileEdge'
  node?: AnonymousQuery_2Node | null
}

export type AnonymousQuery_2Node = {
  __typename?: 'File'
  relativePath?: string | null
  prettySize?: string | null
  extension?: string | null
  birthTime?: Date | null
}

export type AnonymousQuery_3Variables = {}

export type AnonymousQuery_3Query = {
  __typename?: 'Query'
  allMarkdownRemark?: AnonymousQuery_3AllMarkdownRemark | null
}

export type AnonymousQuery_3AllMarkdownRemark = {
  __typename?: 'MarkdownRemarkConnection'
  totalCount?: number | null
  edges?: AnonymousQuery_3Edges[] | null
}

export type AnonymousQuery_3Edges = {
  __typename?: 'MarkdownRemarkEdge'
  node?: AnonymousQuery_3Node | null
}

export type AnonymousQuery_3Node = {
  __typename?: 'MarkdownRemark'
  id: string
  frontmatter?: AnonymousQuery_3Frontmatter | null
  fields?: AnonymousQuery_3Fields | null
  excerpt?: string | null
}

export type AnonymousQuery_3Frontmatter = {
  __typename?: 'frontmatter_2'
  title?: string | null
  date?: Date | null
}

export type AnonymousQuery_3Fields = {
  __typename?: 'fields_2'
  slug?: string | null
}

export type AnonymousQuery_4Variables = {
  slug: string
}

export type AnonymousQuery_4Query = {
  __typename?: 'Query'
  markdownRemark?: AnonymousQuery_4MarkdownRemark | null
}

export type AnonymousQuery_4MarkdownRemark = {
  __typename?: 'MarkdownRemark'
  html?: string | null
  frontmatter?: AnonymousQuery_4Frontmatter | null
}

export type AnonymousQuery_4Frontmatter = {
  __typename?: 'frontmatter_2'
  title?: string | null
}
