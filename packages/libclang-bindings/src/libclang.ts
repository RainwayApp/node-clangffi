import ffi from "ffi-napi";
import ref, { Pointer as TypedPointer, UnderlyingType } from "ref-napi";
import refStructDi, { StructObject } from "ref-struct-di";
import refArrayDi, { TypedArray } from "ref-array-di";

const Struct = refStructDi(ref);
const Array = refArrayDi(ref);
const Pointer = ref.refType;
export type __time32_t = number;
export type __time64_t = number;
export type time_t = __time64_t;
export enum CXErrorCode {
  CXError_Success = 0,
  CXError_Failure = 1,
  CXError_Crashed = 2,
  CXError_InvalidArguments = 3,
  CXError_ASTReadError = 4,
}
export type CXStringType = UnderlyingType<typeof CXStringDef>;
export interface CXString {
  data: TypedPointer<void>;
  private_flags: number;
}
export type CXStringSetType = UnderlyingType<typeof CXStringSetDef>;
export interface CXStringSet {
  Strings: TypedPointer<CXString>;
  Count: number;
}
export type CXVirtualFileOverlayImplType = UnderlyingType<
  typeof CXVirtualFileOverlayImplDef
>;
export interface CXVirtualFileOverlayImpl {}
export type CXVirtualFileOverlay = TypedPointer<CXVirtualFileOverlayImpl>;
export type CXModuleMapDescriptorImplType = UnderlyingType<
  typeof CXModuleMapDescriptorImplDef
>;
export interface CXModuleMapDescriptorImpl {}
export type CXModuleMapDescriptor = TypedPointer<CXModuleMapDescriptorImpl>;
export type CXIndex = TypedPointer<void>;
export type CXTargetInfoImplType = UnderlyingType<typeof CXTargetInfoImplDef>;
export interface CXTargetInfoImpl {}
export type CXTargetInfo = TypedPointer<CXTargetInfoImpl>;
export type CXTranslationUnitImplType = UnderlyingType<
  typeof CXTranslationUnitImplDef
>;
export interface CXTranslationUnitImpl {}
export type CXTranslationUnit = TypedPointer<CXTranslationUnitImpl>;
export type CXClientData = TypedPointer<void>;
export type CXUnsavedFileType = UnderlyingType<typeof CXUnsavedFileDef>;
export interface CXUnsavedFile {
  Filename: string;
  Contents: string;
  Length: number;
}
export enum CXAvailabilityKind {
  CXAvailability_Available = 0,
  CXAvailability_Deprecated = 1,
  CXAvailability_NotAvailable = 2,
  CXAvailability_NotAccessible = 3,
}
export type CXVersionType = UnderlyingType<typeof CXVersionDef>;
export interface CXVersion {
  Major: number;
  Minor: number;
  Subminor: number;
}
export enum CXCursor_ExceptionSpecificationKind {
  CXCursor_ExceptionSpecificationKind_None = 0,
  CXCursor_ExceptionSpecificationKind_DynamicNone = 1,
  CXCursor_ExceptionSpecificationKind_Dynamic = 2,
  CXCursor_ExceptionSpecificationKind_MSAny = 3,
  CXCursor_ExceptionSpecificationKind_BasicNoexcept = 4,
  CXCursor_ExceptionSpecificationKind_ComputedNoexcept = 5,
  CXCursor_ExceptionSpecificationKind_Unevaluated = 6,
  CXCursor_ExceptionSpecificationKind_Uninstantiated = 7,
  CXCursor_ExceptionSpecificationKind_Unparsed = 8,
  CXCursor_ExceptionSpecificationKind_NoThrow = 9,
}
export enum CXGlobalOptFlags {
  CXGlobalOpt_None = 0,
  CXGlobalOpt_ThreadBackgroundPriorityForIndexing = 1,
  CXGlobalOpt_ThreadBackgroundPriorityForEditing = 2,
  CXGlobalOpt_ThreadBackgroundPriorityForAll = 3,
}
export type CXFile = TypedPointer<void>;
export type CXFileUniqueIDType = UnderlyingType<typeof CXFileUniqueIDDef>;
export interface CXFileUniqueID {
  data: TypedArray<number, 3>;
}
export type CXSourceLocationType = UnderlyingType<typeof CXSourceLocationDef>;
export interface CXSourceLocation {
  ptr_data: TypedArray<TypedPointer<void>, 2>;
  int_data: number;
}
export type CXSourceRangeType = UnderlyingType<typeof CXSourceRangeDef>;
export interface CXSourceRange {
  ptr_data: TypedArray<TypedPointer<void>, 2>;
  begin_int_data: number;
  end_int_data: number;
}
export type CXSourceRangeListType = UnderlyingType<typeof CXSourceRangeListDef>;
export interface CXSourceRangeList {
  count: number;
  ranges: TypedPointer<CXSourceRange>;
}
export enum CXDiagnosticSeverity {
  CXDiagnostic_Ignored = 0,
  CXDiagnostic_Note = 1,
  CXDiagnostic_Warning = 2,
  CXDiagnostic_Error = 3,
  CXDiagnostic_Fatal = 4,
}
export type CXDiagnostic = TypedPointer<void>;
export type CXDiagnosticSet = TypedPointer<void>;
export enum CXLoadDiag_Error {
  CXLoadDiag_None = 0,
  CXLoadDiag_Unknown = 1,
  CXLoadDiag_CannotLoad = 2,
  CXLoadDiag_InvalidFile = 3,
}
export enum CXDiagnosticDisplayOptions {
  CXDiagnostic_DisplaySourceLocation = 1,
  CXDiagnostic_DisplayColumn = 2,
  CXDiagnostic_DisplaySourceRanges = 4,
  CXDiagnostic_DisplayOption = 8,
  CXDiagnostic_DisplayCategoryId = 16,
  CXDiagnostic_DisplayCategoryName = 32,
}
export enum CXTranslationUnit_Flags {
  CXTranslationUnit_None = 0,
  CXTranslationUnit_DetailedPreprocessingRecord = 1,
  CXTranslationUnit_Incomplete = 2,
  CXTranslationUnit_PrecompiledPreamble = 4,
  CXTranslationUnit_CacheCompletionResults = 8,
  CXTranslationUnit_ForSerialization = 16,
  CXTranslationUnit_CXXChainedPCH = 32,
  CXTranslationUnit_SkipFunctionBodies = 64,
  CXTranslationUnit_IncludeBriefCommentsInCodeCompletion = 128,
  CXTranslationUnit_CreatePreambleOnFirstParse = 256,
  CXTranslationUnit_KeepGoing = 512,
  CXTranslationUnit_SingleFileParse = 1024,
  CXTranslationUnit_LimitSkipFunctionBodiesToPreamble = 2048,
  CXTranslationUnit_IncludeAttributedTypes = 4096,
  CXTranslationUnit_VisitImplicitAttributes = 8192,
  CXTranslationUnit_IgnoreNonErrorsFromIncludedFiles = 16384,
  CXTranslationUnit_RetainExcludedConditionalBlocks = 32768,
}
export enum CXSaveTranslationUnit_Flags {
  CXSaveTranslationUnit_None = 0,
}
export enum CXSaveError {
  CXSaveError_None = 0,
  CXSaveError_Unknown = 1,
  CXSaveError_TranslationErrors = 2,
  CXSaveError_InvalidTU = 3,
}
export enum CXReparse_Flags {
  CXReparse_None = 0,
}
export enum CXTUResourceUsageKind {
  CXTUResourceUsage_AST = 1,
  CXTUResourceUsage_Identifiers = 2,
  CXTUResourceUsage_Selectors = 3,
  CXTUResourceUsage_GlobalCompletionResults = 4,
  CXTUResourceUsage_SourceManagerContentCache = 5,
  CXTUResourceUsage_AST_SideTables = 6,
  CXTUResourceUsage_SourceManager_Membuffer_Malloc = 7,
  CXTUResourceUsage_SourceManager_Membuffer_MMap = 8,
  CXTUResourceUsage_ExternalASTSource_Membuffer_Malloc = 9,
  CXTUResourceUsage_ExternalASTSource_Membuffer_MMap = 10,
  CXTUResourceUsage_Preprocessor = 11,
  CXTUResourceUsage_PreprocessingRecord = 12,
  CXTUResourceUsage_SourceManager_DataStructures = 13,
  CXTUResourceUsage_Preprocessor_HeaderSearch = 14,
  CXTUResourceUsage_MEMORY_IN_BYTES_BEGIN = 1,
  CXTUResourceUsage_MEMORY_IN_BYTES_END = 14,
  CXTUResourceUsage_First = 1,
  CXTUResourceUsage_Last = 14,
}
export type CXTUResourceUsageEntryType = UnderlyingType<
  typeof CXTUResourceUsageEntryDef
>;
export interface CXTUResourceUsageEntry {
  kind: CXTUResourceUsageKind;
  amount: number;
}
export type CXTUResourceUsageType = UnderlyingType<typeof CXTUResourceUsageDef>;
export interface CXTUResourceUsage {
  data: TypedPointer<void>;
  numEntries: number;
  entries: TypedPointer<CXTUResourceUsageEntry>;
}
export enum CXCursorKind {
  CXCursor_UnexposedDecl = 1,
  CXCursor_StructDecl = 2,
  CXCursor_UnionDecl = 3,
  CXCursor_ClassDecl = 4,
  CXCursor_EnumDecl = 5,
  CXCursor_FieldDecl = 6,
  CXCursor_EnumConstantDecl = 7,
  CXCursor_FunctionDecl = 8,
  CXCursor_VarDecl = 9,
  CXCursor_ParmDecl = 10,
  CXCursor_ObjCInterfaceDecl = 11,
  CXCursor_ObjCCategoryDecl = 12,
  CXCursor_ObjCProtocolDecl = 13,
  CXCursor_ObjCPropertyDecl = 14,
  CXCursor_ObjCIvarDecl = 15,
  CXCursor_ObjCInstanceMethodDecl = 16,
  CXCursor_ObjCClassMethodDecl = 17,
  CXCursor_ObjCImplementationDecl = 18,
  CXCursor_ObjCCategoryImplDecl = 19,
  CXCursor_TypedefDecl = 20,
  CXCursor_CXXMethod = 21,
  CXCursor_Namespace = 22,
  CXCursor_LinkageSpec = 23,
  CXCursor_Constructor = 24,
  CXCursor_Destructor = 25,
  CXCursor_ConversionFunction = 26,
  CXCursor_TemplateTypeParameter = 27,
  CXCursor_NonTypeTemplateParameter = 28,
  CXCursor_TemplateTemplateParameter = 29,
  CXCursor_FunctionTemplate = 30,
  CXCursor_ClassTemplate = 31,
  CXCursor_ClassTemplatePartialSpecialization = 32,
  CXCursor_NamespaceAlias = 33,
  CXCursor_UsingDirective = 34,
  CXCursor_UsingDeclaration = 35,
  CXCursor_TypeAliasDecl = 36,
  CXCursor_ObjCSynthesizeDecl = 37,
  CXCursor_ObjCDynamicDecl = 38,
  CXCursor_CXXAccessSpecifier = 39,
  CXCursor_FirstDecl = 1,
  CXCursor_LastDecl = 39,
  CXCursor_FirstRef = 40,
  CXCursor_ObjCSuperClassRef = 40,
  CXCursor_ObjCProtocolRef = 41,
  CXCursor_ObjCClassRef = 42,
  CXCursor_TypeRef = 43,
  CXCursor_CXXBaseSpecifier = 44,
  CXCursor_TemplateRef = 45,
  CXCursor_NamespaceRef = 46,
  CXCursor_MemberRef = 47,
  CXCursor_LabelRef = 48,
  CXCursor_OverloadedDeclRef = 49,
  CXCursor_VariableRef = 50,
  CXCursor_LastRef = 50,
  CXCursor_FirstInvalid = 70,
  CXCursor_InvalidFile = 70,
  CXCursor_NoDeclFound = 71,
  CXCursor_NotImplemented = 72,
  CXCursor_InvalidCode = 73,
  CXCursor_LastInvalid = 73,
  CXCursor_FirstExpr = 100,
  CXCursor_UnexposedExpr = 100,
  CXCursor_DeclRefExpr = 101,
  CXCursor_MemberRefExpr = 102,
  CXCursor_CallExpr = 103,
  CXCursor_ObjCMessageExpr = 104,
  CXCursor_BlockExpr = 105,
  CXCursor_IntegerLiteral = 106,
  CXCursor_FloatingLiteral = 107,
  CXCursor_ImaginaryLiteral = 108,
  CXCursor_StringLiteral = 109,
  CXCursor_CharacterLiteral = 110,
  CXCursor_ParenExpr = 111,
  CXCursor_UnaryOperator = 112,
  CXCursor_ArraySubscriptExpr = 113,
  CXCursor_BinaryOperator = 114,
  CXCursor_CompoundAssignOperator = 115,
  CXCursor_ConditionalOperator = 116,
  CXCursor_CStyleCastExpr = 117,
  CXCursor_CompoundLiteralExpr = 118,
  CXCursor_InitListExpr = 119,
  CXCursor_AddrLabelExpr = 120,
  CXCursor_StmtExpr = 121,
  CXCursor_GenericSelectionExpr = 122,
  CXCursor_GNUNullExpr = 123,
  CXCursor_CXXStaticCastExpr = 124,
  CXCursor_CXXDynamicCastExpr = 125,
  CXCursor_CXXReinterpretCastExpr = 126,
  CXCursor_CXXConstCastExpr = 127,
  CXCursor_CXXFunctionalCastExpr = 128,
  CXCursor_CXXTypeidExpr = 129,
  CXCursor_CXXBoolLiteralExpr = 130,
  CXCursor_CXXNullPtrLiteralExpr = 131,
  CXCursor_CXXThisExpr = 132,
  CXCursor_CXXThrowExpr = 133,
  CXCursor_CXXNewExpr = 134,
  CXCursor_CXXDeleteExpr = 135,
  CXCursor_UnaryExpr = 136,
  CXCursor_ObjCStringLiteral = 137,
  CXCursor_ObjCEncodeExpr = 138,
  CXCursor_ObjCSelectorExpr = 139,
  CXCursor_ObjCProtocolExpr = 140,
  CXCursor_ObjCBridgedCastExpr = 141,
  CXCursor_PackExpansionExpr = 142,
  CXCursor_SizeOfPackExpr = 143,
  CXCursor_LambdaExpr = 144,
  CXCursor_ObjCBoolLiteralExpr = 145,
  CXCursor_ObjCSelfExpr = 146,
  CXCursor_OMPArraySectionExpr = 147,
  CXCursor_ObjCAvailabilityCheckExpr = 148,
  CXCursor_FixedPointLiteral = 149,
  CXCursor_OMPArrayShapingExpr = 150,
  CXCursor_OMPIteratorExpr = 151,
  CXCursor_CXXAddrspaceCastExpr = 152,
  CXCursor_LastExpr = 152,
  CXCursor_FirstStmt = 200,
  CXCursor_UnexposedStmt = 200,
  CXCursor_LabelStmt = 201,
  CXCursor_CompoundStmt = 202,
  CXCursor_CaseStmt = 203,
  CXCursor_DefaultStmt = 204,
  CXCursor_IfStmt = 205,
  CXCursor_SwitchStmt = 206,
  CXCursor_WhileStmt = 207,
  CXCursor_DoStmt = 208,
  CXCursor_ForStmt = 209,
  CXCursor_GotoStmt = 210,
  CXCursor_IndirectGotoStmt = 211,
  CXCursor_ContinueStmt = 212,
  CXCursor_BreakStmt = 213,
  CXCursor_ReturnStmt = 214,
  CXCursor_GCCAsmStmt = 215,
  CXCursor_AsmStmt = 215,
  CXCursor_ObjCAtTryStmt = 216,
  CXCursor_ObjCAtCatchStmt = 217,
  CXCursor_ObjCAtFinallyStmt = 218,
  CXCursor_ObjCAtThrowStmt = 219,
  CXCursor_ObjCAtSynchronizedStmt = 220,
  CXCursor_ObjCAutoreleasePoolStmt = 221,
  CXCursor_ObjCForCollectionStmt = 222,
  CXCursor_CXXCatchStmt = 223,
  CXCursor_CXXTryStmt = 224,
  CXCursor_CXXForRangeStmt = 225,
  CXCursor_SEHTryStmt = 226,
  CXCursor_SEHExceptStmt = 227,
  CXCursor_SEHFinallyStmt = 228,
  CXCursor_MSAsmStmt = 229,
  CXCursor_NullStmt = 230,
  CXCursor_DeclStmt = 231,
  CXCursor_OMPParallelDirective = 232,
  CXCursor_OMPSimdDirective = 233,
  CXCursor_OMPForDirective = 234,
  CXCursor_OMPSectionsDirective = 235,
  CXCursor_OMPSectionDirective = 236,
  CXCursor_OMPSingleDirective = 237,
  CXCursor_OMPParallelForDirective = 238,
  CXCursor_OMPParallelSectionsDirective = 239,
  CXCursor_OMPTaskDirective = 240,
  CXCursor_OMPMasterDirective = 241,
  CXCursor_OMPCriticalDirective = 242,
  CXCursor_OMPTaskyieldDirective = 243,
  CXCursor_OMPBarrierDirective = 244,
  CXCursor_OMPTaskwaitDirective = 245,
  CXCursor_OMPFlushDirective = 246,
  CXCursor_SEHLeaveStmt = 247,
  CXCursor_OMPOrderedDirective = 248,
  CXCursor_OMPAtomicDirective = 249,
  CXCursor_OMPForSimdDirective = 250,
  CXCursor_OMPParallelForSimdDirective = 251,
  CXCursor_OMPTargetDirective = 252,
  CXCursor_OMPTeamsDirective = 253,
  CXCursor_OMPTaskgroupDirective = 254,
  CXCursor_OMPCancellationPointDirective = 255,
  CXCursor_OMPCancelDirective = 256,
  CXCursor_OMPTargetDataDirective = 257,
  CXCursor_OMPTaskLoopDirective = 258,
  CXCursor_OMPTaskLoopSimdDirective = 259,
  CXCursor_OMPDistributeDirective = 260,
  CXCursor_OMPTargetEnterDataDirective = 261,
  CXCursor_OMPTargetExitDataDirective = 262,
  CXCursor_OMPTargetParallelDirective = 263,
  CXCursor_OMPTargetParallelForDirective = 264,
  CXCursor_OMPTargetUpdateDirective = 265,
  CXCursor_OMPDistributeParallelForDirective = 266,
  CXCursor_OMPDistributeParallelForSimdDirective = 267,
  CXCursor_OMPDistributeSimdDirective = 268,
  CXCursor_OMPTargetParallelForSimdDirective = 269,
  CXCursor_OMPTargetSimdDirective = 270,
  CXCursor_OMPTeamsDistributeDirective = 271,
  CXCursor_OMPTeamsDistributeSimdDirective = 272,
  CXCursor_OMPTeamsDistributeParallelForSimdDirective = 273,
  CXCursor_OMPTeamsDistributeParallelForDirective = 274,
  CXCursor_OMPTargetTeamsDirective = 275,
  CXCursor_OMPTargetTeamsDistributeDirective = 276,
  CXCursor_OMPTargetTeamsDistributeParallelForDirective = 277,
  CXCursor_OMPTargetTeamsDistributeParallelForSimdDirective = 278,
  CXCursor_OMPTargetTeamsDistributeSimdDirective = 279,
  CXCursor_BuiltinBitCastExpr = 280,
  CXCursor_OMPMasterTaskLoopDirective = 281,
  CXCursor_OMPParallelMasterTaskLoopDirective = 282,
  CXCursor_OMPMasterTaskLoopSimdDirective = 283,
  CXCursor_OMPParallelMasterTaskLoopSimdDirective = 284,
  CXCursor_OMPParallelMasterDirective = 285,
  CXCursor_OMPDepobjDirective = 286,
  CXCursor_OMPScanDirective = 287,
  CXCursor_OMPTileDirective = 288,
  CXCursor_OMPCanonicalLoop = 289,
  CXCursor_OMPInteropDirective = 290,
  CXCursor_OMPDispatchDirective = 291,
  CXCursor_OMPMaskedDirective = 292,
  CXCursor_OMPUnrollDirective = 293,
  CXCursor_LastStmt = 293,
  CXCursor_TranslationUnit = 300,
  CXCursor_FirstAttr = 400,
  CXCursor_UnexposedAttr = 400,
  CXCursor_IBActionAttr = 401,
  CXCursor_IBOutletAttr = 402,
  CXCursor_IBOutletCollectionAttr = 403,
  CXCursor_CXXFinalAttr = 404,
  CXCursor_CXXOverrideAttr = 405,
  CXCursor_AnnotateAttr = 406,
  CXCursor_AsmLabelAttr = 407,
  CXCursor_PackedAttr = 408,
  CXCursor_PureAttr = 409,
  CXCursor_ConstAttr = 410,
  CXCursor_NoDuplicateAttr = 411,
  CXCursor_CUDAConstantAttr = 412,
  CXCursor_CUDADeviceAttr = 413,
  CXCursor_CUDAGlobalAttr = 414,
  CXCursor_CUDAHostAttr = 415,
  CXCursor_CUDASharedAttr = 416,
  CXCursor_VisibilityAttr = 417,
  CXCursor_DLLExport = 418,
  CXCursor_DLLImport = 419,
  CXCursor_NSReturnsRetained = 420,
  CXCursor_NSReturnsNotRetained = 421,
  CXCursor_NSReturnsAutoreleased = 422,
  CXCursor_NSConsumesSelf = 423,
  CXCursor_NSConsumed = 424,
  CXCursor_ObjCException = 425,
  CXCursor_ObjCNSObject = 426,
  CXCursor_ObjCIndependentClass = 427,
  CXCursor_ObjCPreciseLifetime = 428,
  CXCursor_ObjCReturnsInnerPointer = 429,
  CXCursor_ObjCRequiresSuper = 430,
  CXCursor_ObjCRootClass = 431,
  CXCursor_ObjCSubclassingRestricted = 432,
  CXCursor_ObjCExplicitProtocolImpl = 433,
  CXCursor_ObjCDesignatedInitializer = 434,
  CXCursor_ObjCRuntimeVisible = 435,
  CXCursor_ObjCBoxable = 436,
  CXCursor_FlagEnum = 437,
  CXCursor_ConvergentAttr = 438,
  CXCursor_WarnUnusedAttr = 439,
  CXCursor_WarnUnusedResultAttr = 440,
  CXCursor_AlignedAttr = 441,
  CXCursor_LastAttr = 441,
  CXCursor_PreprocessingDirective = 500,
  CXCursor_MacroDefinition = 501,
  CXCursor_MacroExpansion = 502,
  CXCursor_MacroInstantiation = 502,
  CXCursor_InclusionDirective = 503,
  CXCursor_FirstPreprocessing = 500,
  CXCursor_LastPreprocessing = 503,
  CXCursor_ModuleImportDecl = 600,
  CXCursor_TypeAliasTemplateDecl = 601,
  CXCursor_StaticAssert = 602,
  CXCursor_FriendDecl = 603,
  CXCursor_FirstExtraDecl = 600,
  CXCursor_LastExtraDecl = 603,
  CXCursor_OverloadCandidate = 700,
}
export type CXCursorType = UnderlyingType<typeof CXCursorDef>;
export interface CXCursor {
  kind: CXCursorKind;
  xdata: number;
  data: TypedArray<TypedPointer<void>, 3>;
}
export enum CXLinkageKind {
  CXLinkage_Invalid = 0,
  CXLinkage_NoLinkage = 1,
  CXLinkage_Internal = 2,
  CXLinkage_UniqueExternal = 3,
  CXLinkage_External = 4,
}
export enum CXVisibilityKind {
  CXVisibility_Invalid = 0,
  CXVisibility_Hidden = 1,
  CXVisibility_Protected = 2,
  CXVisibility_Default = 3,
}
export type CXPlatformAvailabilityType = UnderlyingType<
  typeof CXPlatformAvailabilityDef
>;
export interface CXPlatformAvailability {
  Platform: CXString;
  Introduced: CXVersion;
  Deprecated: CXVersion;
  Obsoleted: CXVersion;
  Unavailable: number;
  Message: CXString;
}
export enum CXLanguageKind {
  CXLanguage_Invalid = 0,
  CXLanguage_C = 1,
  CXLanguage_ObjC = 2,
  CXLanguage_CPlusPlus = 3,
}
export enum CXTLSKind {
  CXTLS_None = 0,
  CXTLS_Dynamic = 1,
  CXTLS_Static = 2,
}
export type CXCursorSetImplType = UnderlyingType<typeof CXCursorSetImplDef>;
export interface CXCursorSetImpl {}
export type CXCursorSet = TypedPointer<CXCursorSetImpl>;
export enum CXTypeKind {
  CXType_Invalid = 0,
  CXType_Unexposed = 1,
  CXType_Void = 2,
  CXType_Bool = 3,
  CXType_Char_U = 4,
  CXType_UChar = 5,
  CXType_Char16 = 6,
  CXType_Char32 = 7,
  CXType_UShort = 8,
  CXType_UInt = 9,
  CXType_ULong = 10,
  CXType_ULongLong = 11,
  CXType_UInt128 = 12,
  CXType_Char_S = 13,
  CXType_SChar = 14,
  CXType_WChar = 15,
  CXType_Short = 16,
  CXType_Int = 17,
  CXType_Long = 18,
  CXType_LongLong = 19,
  CXType_Int128 = 20,
  CXType_Float = 21,
  CXType_Double = 22,
  CXType_LongDouble = 23,
  CXType_NullPtr = 24,
  CXType_Overload = 25,
  CXType_Dependent = 26,
  CXType_ObjCId = 27,
  CXType_ObjCClass = 28,
  CXType_ObjCSel = 29,
  CXType_Float128 = 30,
  CXType_Half = 31,
  CXType_Float16 = 32,
  CXType_ShortAccum = 33,
  CXType_Accum = 34,
  CXType_LongAccum = 35,
  CXType_UShortAccum = 36,
  CXType_UAccum = 37,
  CXType_ULongAccum = 38,
  CXType_BFloat16 = 39,
  CXType_FirstBuiltin = 2,
  CXType_LastBuiltin = 39,
  CXType_Complex = 100,
  CXType_Pointer = 101,
  CXType_BlockPointer = 102,
  CXType_LValueReference = 103,
  CXType_RValueReference = 104,
  CXType_Record = 105,
  CXType_Enum = 106,
  CXType_Typedef = 107,
  CXType_ObjCInterface = 108,
  CXType_ObjCObjectPointer = 109,
  CXType_FunctionNoProto = 110,
  CXType_FunctionProto = 111,
  CXType_ConstantArray = 112,
  CXType_Vector = 113,
  CXType_IncompleteArray = 114,
  CXType_VariableArray = 115,
  CXType_DependentSizedArray = 116,
  CXType_MemberPointer = 117,
  CXType_Auto = 118,
  CXType_Elaborated = 119,
  CXType_Pipe = 120,
  CXType_OCLImage1dRO = 121,
  CXType_OCLImage1dArrayRO = 122,
  CXType_OCLImage1dBufferRO = 123,
  CXType_OCLImage2dRO = 124,
  CXType_OCLImage2dArrayRO = 125,
  CXType_OCLImage2dDepthRO = 126,
  CXType_OCLImage2dArrayDepthRO = 127,
  CXType_OCLImage2dMSAARO = 128,
  CXType_OCLImage2dArrayMSAARO = 129,
  CXType_OCLImage2dMSAADepthRO = 130,
  CXType_OCLImage2dArrayMSAADepthRO = 131,
  CXType_OCLImage3dRO = 132,
  CXType_OCLImage1dWO = 133,
  CXType_OCLImage1dArrayWO = 134,
  CXType_OCLImage1dBufferWO = 135,
  CXType_OCLImage2dWO = 136,
  CXType_OCLImage2dArrayWO = 137,
  CXType_OCLImage2dDepthWO = 138,
  CXType_OCLImage2dArrayDepthWO = 139,
  CXType_OCLImage2dMSAAWO = 140,
  CXType_OCLImage2dArrayMSAAWO = 141,
  CXType_OCLImage2dMSAADepthWO = 142,
  CXType_OCLImage2dArrayMSAADepthWO = 143,
  CXType_OCLImage3dWO = 144,
  CXType_OCLImage1dRW = 145,
  CXType_OCLImage1dArrayRW = 146,
  CXType_OCLImage1dBufferRW = 147,
  CXType_OCLImage2dRW = 148,
  CXType_OCLImage2dArrayRW = 149,
  CXType_OCLImage2dDepthRW = 150,
  CXType_OCLImage2dArrayDepthRW = 151,
  CXType_OCLImage2dMSAARW = 152,
  CXType_OCLImage2dArrayMSAARW = 153,
  CXType_OCLImage2dMSAADepthRW = 154,
  CXType_OCLImage2dArrayMSAADepthRW = 155,
  CXType_OCLImage3dRW = 156,
  CXType_OCLSampler = 157,
  CXType_OCLEvent = 158,
  CXType_OCLQueue = 159,
  CXType_OCLReserveID = 160,
  CXType_ObjCObject = 161,
  CXType_ObjCTypeParam = 162,
  CXType_Attributed = 163,
  CXType_OCLIntelSubgroupAVCMcePayload = 164,
  CXType_OCLIntelSubgroupAVCImePayload = 165,
  CXType_OCLIntelSubgroupAVCRefPayload = 166,
  CXType_OCLIntelSubgroupAVCSicPayload = 167,
  CXType_OCLIntelSubgroupAVCMceResult = 168,
  CXType_OCLIntelSubgroupAVCImeResult = 169,
  CXType_OCLIntelSubgroupAVCRefResult = 170,
  CXType_OCLIntelSubgroupAVCSicResult = 171,
  CXType_OCLIntelSubgroupAVCImeResultSingleRefStreamout = 172,
  CXType_OCLIntelSubgroupAVCImeResultDualRefStreamout = 173,
  CXType_OCLIntelSubgroupAVCImeSingleRefStreamin = 174,
  CXType_OCLIntelSubgroupAVCImeDualRefStreamin = 175,
  CXType_ExtVector = 176,
  CXType_Atomic = 177,
}
export enum CXCallingConv {
  CXCallingConv_Default = 0,
  CXCallingConv_C = 1,
  CXCallingConv_X86StdCall = 2,
  CXCallingConv_X86FastCall = 3,
  CXCallingConv_X86ThisCall = 4,
  CXCallingConv_X86Pascal = 5,
  CXCallingConv_AAPCS = 6,
  CXCallingConv_AAPCS_VFP = 7,
  CXCallingConv_X86RegCall = 8,
  CXCallingConv_IntelOclBicc = 9,
  CXCallingConv_Win64 = 10,
  CXCallingConv_X86_64Win64 = 10,
  CXCallingConv_X86_64SysV = 11,
  CXCallingConv_X86VectorCall = 12,
  CXCallingConv_Swift = 13,
  CXCallingConv_PreserveMost = 14,
  CXCallingConv_PreserveAll = 15,
  CXCallingConv_AArch64VectorCall = 16,
  CXCallingConv_SwiftAsync = 17,
  CXCallingConv_Invalid = 100,
  CXCallingConv_Unexposed = 200,
}
export type CXTypeType = UnderlyingType<typeof CXTypeDef>;
export interface CXType {
  kind: CXTypeKind;
  data: TypedArray<TypedPointer<void>, 2>;
}
export enum CXTemplateArgumentKind {
  CXTemplateArgumentKind_Null = 0,
  CXTemplateArgumentKind_Type = 1,
  CXTemplateArgumentKind_Declaration = 2,
  CXTemplateArgumentKind_NullPtr = 3,
  CXTemplateArgumentKind_Integral = 4,
  CXTemplateArgumentKind_Template = 5,
  CXTemplateArgumentKind_TemplateExpansion = 6,
  CXTemplateArgumentKind_Expression = 7,
  CXTemplateArgumentKind_Pack = 8,
  CXTemplateArgumentKind_Invalid = 9,
}
export enum CXTypeNullabilityKind {
  CXTypeNullability_NonNull = 0,
  CXTypeNullability_Nullable = 1,
  CXTypeNullability_Unspecified = 2,
  CXTypeNullability_Invalid = 3,
  CXTypeNullability_NullableResult = 4,
}
export enum CXTypeLayoutError {
  CXTypeLayoutError_Invalid = 4294967295,
  CXTypeLayoutError_Incomplete = 4294967294,
  CXTypeLayoutError_Dependent = 4294967293,
  CXTypeLayoutError_NotConstantSize = 4294967292,
  CXTypeLayoutError_InvalidFieldName = 4294967291,
  CXTypeLayoutError_Undeduced = 4294967290,
}
export enum CXRefQualifierKind {
  CXRefQualifier_None = 0,
  CXRefQualifier_LValue = 1,
  CXRefQualifier_RValue = 2,
}
export enum CX_CXXAccessSpecifier {
  CX_CXXInvalidAccessSpecifier = 0,
  CX_CXXPublic = 1,
  CX_CXXProtected = 2,
  CX_CXXPrivate = 3,
}
export enum CX_StorageClass {
  CX_SC_Invalid = 0,
  CX_SC_None = 1,
  CX_SC_Extern = 2,
  CX_SC_Static = 3,
  CX_SC_PrivateExtern = 4,
  CX_SC_OpenCLWorkGroupLocal = 5,
  CX_SC_Auto = 6,
  CX_SC_Register = 7,
}
export enum CXChildVisitResult {
  CXChildVisit_Break = 0,
  CXChildVisit_Continue = 1,
  CXChildVisit_Recurse = 2,
}
export type CXCursorVisitor = (
  arg0: CXCursor,
  arg1: CXCursor,
  arg2: CXClientData
) => CXChildVisitResult;
export type CXPrintingPolicy = TypedPointer<void>;
export enum CXPrintingPolicyProperty {
  CXPrintingPolicy_Indentation = 0,
  CXPrintingPolicy_SuppressSpecifiers = 1,
  CXPrintingPolicy_SuppressTagKeyword = 2,
  CXPrintingPolicy_IncludeTagDefinition = 3,
  CXPrintingPolicy_SuppressScope = 4,
  CXPrintingPolicy_SuppressUnwrittenScope = 5,
  CXPrintingPolicy_SuppressInitializers = 6,
  CXPrintingPolicy_ConstantArraySizeAsWritten = 7,
  CXPrintingPolicy_AnonymousTagLocations = 8,
  CXPrintingPolicy_SuppressStrongLifetime = 9,
  CXPrintingPolicy_SuppressLifetimeQualifiers = 10,
  CXPrintingPolicy_SuppressTemplateArgsInCXXConstructors = 11,
  CXPrintingPolicy_Bool = 12,
  CXPrintingPolicy_Restrict = 13,
  CXPrintingPolicy_Alignof = 14,
  CXPrintingPolicy_UnderscoreAlignof = 15,
  CXPrintingPolicy_UseVoidForZeroParams = 16,
  CXPrintingPolicy_TerseOutput = 17,
  CXPrintingPolicy_PolishForDeclaration = 18,
  CXPrintingPolicy_Half = 19,
  CXPrintingPolicy_MSWChar = 20,
  CXPrintingPolicy_IncludeNewlines = 21,
  CXPrintingPolicy_MSVCFormatting = 22,
  CXPrintingPolicy_ConstantsAsWritten = 23,
  CXPrintingPolicy_SuppressImplicitBase = 24,
  CXPrintingPolicy_FullyQualifiedName = 25,
  CXPrintingPolicy_LastProperty = 25,
}
export enum CXObjCPropertyAttrKind {
  CXObjCPropertyAttr_noattr = 0,
  CXObjCPropertyAttr_readonly = 1,
  CXObjCPropertyAttr_getter = 2,
  CXObjCPropertyAttr_assign = 4,
  CXObjCPropertyAttr_readwrite = 8,
  CXObjCPropertyAttr_retain = 16,
  CXObjCPropertyAttr_copy = 32,
  CXObjCPropertyAttr_nonatomic = 64,
  CXObjCPropertyAttr_setter = 128,
  CXObjCPropertyAttr_atomic = 256,
  CXObjCPropertyAttr_weak = 512,
  CXObjCPropertyAttr_strong = 1024,
  CXObjCPropertyAttr_unsafe_unretained = 2048,
  CXObjCPropertyAttr_class = 4096,
}
export enum CXObjCDeclQualifierKind {
  CXObjCDeclQualifier_None = 0,
  CXObjCDeclQualifier_In = 1,
  CXObjCDeclQualifier_Inout = 2,
  CXObjCDeclQualifier_Out = 4,
  CXObjCDeclQualifier_Bycopy = 8,
  CXObjCDeclQualifier_Byref = 16,
  CXObjCDeclQualifier_Oneway = 32,
}
export type CXModule = TypedPointer<void>;
export enum CXNameRefFlags {
  CXNameRange_WantQualifier = 1,
  CXNameRange_WantTemplateArgs = 2,
  CXNameRange_WantSinglePiece = 4,
}
export enum CXTokenKind {
  CXToken_Punctuation = 0,
  CXToken_Keyword = 1,
  CXToken_Identifier = 2,
  CXToken_Literal = 3,
  CXToken_Comment = 4,
}
export type CXTokenType = UnderlyingType<typeof CXTokenDef>;
export interface CXToken {
  int_data: TypedArray<number, 4>;
  ptr_data: TypedPointer<void>;
}
export type CXCompletionString = TypedPointer<void>;
export type CXCompletionResultType = UnderlyingType<
  typeof CXCompletionResultDef
>;
export interface CXCompletionResult {
  CursorKind: CXCursorKind;
  CompletionString: CXCompletionString;
}
export enum CXCompletionChunkKind {
  CXCompletionChunk_Optional = 0,
  CXCompletionChunk_TypedText = 1,
  CXCompletionChunk_Text = 2,
  CXCompletionChunk_Placeholder = 3,
  CXCompletionChunk_Informative = 4,
  CXCompletionChunk_CurrentParameter = 5,
  CXCompletionChunk_LeftParen = 6,
  CXCompletionChunk_RightParen = 7,
  CXCompletionChunk_LeftBracket = 8,
  CXCompletionChunk_RightBracket = 9,
  CXCompletionChunk_LeftBrace = 10,
  CXCompletionChunk_RightBrace = 11,
  CXCompletionChunk_LeftAngle = 12,
  CXCompletionChunk_RightAngle = 13,
  CXCompletionChunk_Comma = 14,
  CXCompletionChunk_ResultType = 15,
  CXCompletionChunk_Colon = 16,
  CXCompletionChunk_SemiColon = 17,
  CXCompletionChunk_Equal = 18,
  CXCompletionChunk_HorizontalSpace = 19,
  CXCompletionChunk_VerticalSpace = 20,
}
export type CXCodeCompleteResultsType = UnderlyingType<
  typeof CXCodeCompleteResultsDef
>;
export interface CXCodeCompleteResults {
  Results: TypedPointer<CXCompletionResult>;
  NumResults: number;
}
export enum CXCodeComplete_Flags {
  CXCodeComplete_IncludeMacros = 1,
  CXCodeComplete_IncludeCodePatterns = 2,
  CXCodeComplete_IncludeBriefComments = 4,
  CXCodeComplete_SkipPreamble = 8,
  CXCodeComplete_IncludeCompletionsWithFixIts = 16,
}
export enum CXCompletionContext {
  CXCompletionContext_Unexposed = 0,
  CXCompletionContext_AnyType = 1,
  CXCompletionContext_AnyValue = 2,
  CXCompletionContext_ObjCObjectValue = 4,
  CXCompletionContext_ObjCSelectorValue = 8,
  CXCompletionContext_CXXClassTypeValue = 16,
  CXCompletionContext_DotMemberAccess = 32,
  CXCompletionContext_ArrowMemberAccess = 64,
  CXCompletionContext_ObjCPropertyAccess = 128,
  CXCompletionContext_EnumTag = 256,
  CXCompletionContext_UnionTag = 512,
  CXCompletionContext_StructTag = 1024,
  CXCompletionContext_ClassTag = 2048,
  CXCompletionContext_Namespace = 4096,
  CXCompletionContext_NestedNameSpecifier = 8192,
  CXCompletionContext_ObjCInterface = 16384,
  CXCompletionContext_ObjCProtocol = 32768,
  CXCompletionContext_ObjCCategory = 65536,
  CXCompletionContext_ObjCInstanceMessage = 131072,
  CXCompletionContext_ObjCClassMessage = 262144,
  CXCompletionContext_ObjCSelectorName = 524288,
  CXCompletionContext_MacroName = 1048576,
  CXCompletionContext_NaturalLanguage = 2097152,
  CXCompletionContext_IncludedFile = 4194304,
  CXCompletionContext_Unknown = 8388607,
}
export type CXInclusionVisitor = (
  arg0: CXFile,
  arg1: TypedPointer<CXSourceLocation>,
  arg2: number,
  arg3: CXClientData
) => void;
export enum CXEvalResultKind {
  CXEval_Int = 1,
  CXEval_Float = 2,
  CXEval_ObjCStrLiteral = 3,
  CXEval_StrLiteral = 4,
  CXEval_CFStr = 5,
  CXEval_Other = 6,
  CXEval_UnExposed = 0,
}
export type CXEvalResult = TypedPointer<void>;
export type CXRemapping = TypedPointer<void>;
export enum CXVisitorResult {
  CXVisit_Break = 0,
  CXVisit_Continue = 1,
}
export type CXCursorAndRangeVisitorType = UnderlyingType<
  typeof CXCursorAndRangeVisitorDef
>;
export interface CXCursorAndRangeVisitor {
  context: TypedPointer<void>;
  visit: (
    arg0: TypedPointer<void>,
    arg1: CXCursor,
    arg2: CXSourceRange
  ) => CXVisitorResult;
}
export enum CXResult {
  CXResult_Success = 0,
  CXResult_Invalid = 1,
  CXResult_VisitBreak = 2,
}
export type CXIdxClientFile = TypedPointer<void>;
export type CXIdxClientEntity = TypedPointer<void>;
export type CXIdxClientContainer = TypedPointer<void>;
export type CXIdxClientASTFile = TypedPointer<void>;
export type CXIdxLocType = UnderlyingType<typeof CXIdxLocDef>;
export interface CXIdxLoc {
  ptr_data: TypedArray<TypedPointer<void>, 2>;
  int_data: number;
}
export type CXIdxIncludedFileInfoType = UnderlyingType<
  typeof CXIdxIncludedFileInfoDef
>;
export interface CXIdxIncludedFileInfo {
  hashLoc: CXIdxLoc;
  filename: string;
  file: CXFile;
  isImport: number;
  isAngled: number;
  isModuleImport: number;
}
export type CXIdxImportedASTFileInfoType = UnderlyingType<
  typeof CXIdxImportedASTFileInfoDef
>;
export interface CXIdxImportedASTFileInfo {
  file: CXFile;
  module: CXModule;
  loc: CXIdxLoc;
  isImplicit: number;
}
export enum CXIdxEntityKind {
  CXIdxEntity_Unexposed = 0,
  CXIdxEntity_Typedef = 1,
  CXIdxEntity_Function = 2,
  CXIdxEntity_Variable = 3,
  CXIdxEntity_Field = 4,
  CXIdxEntity_EnumConstant = 5,
  CXIdxEntity_ObjCClass = 6,
  CXIdxEntity_ObjCProtocol = 7,
  CXIdxEntity_ObjCCategory = 8,
  CXIdxEntity_ObjCInstanceMethod = 9,
  CXIdxEntity_ObjCClassMethod = 10,
  CXIdxEntity_ObjCProperty = 11,
  CXIdxEntity_ObjCIvar = 12,
  CXIdxEntity_Enum = 13,
  CXIdxEntity_Struct = 14,
  CXIdxEntity_Union = 15,
  CXIdxEntity_CXXClass = 16,
  CXIdxEntity_CXXNamespace = 17,
  CXIdxEntity_CXXNamespaceAlias = 18,
  CXIdxEntity_CXXStaticVariable = 19,
  CXIdxEntity_CXXStaticMethod = 20,
  CXIdxEntity_CXXInstanceMethod = 21,
  CXIdxEntity_CXXConstructor = 22,
  CXIdxEntity_CXXDestructor = 23,
  CXIdxEntity_CXXConversionFunction = 24,
  CXIdxEntity_CXXTypeAlias = 25,
  CXIdxEntity_CXXInterface = 26,
}
export enum CXIdxEntityLanguage {
  CXIdxEntityLang_None = 0,
  CXIdxEntityLang_C = 1,
  CXIdxEntityLang_ObjC = 2,
  CXIdxEntityLang_CXX = 3,
  CXIdxEntityLang_Swift = 4,
}
export enum CXIdxEntityCXXTemplateKind {
  CXIdxEntity_NonTemplate = 0,
  CXIdxEntity_Template = 1,
  CXIdxEntity_TemplatePartialSpecialization = 2,
  CXIdxEntity_TemplateSpecialization = 3,
}
export enum CXIdxAttrKind {
  CXIdxAttr_Unexposed = 0,
  CXIdxAttr_IBAction = 1,
  CXIdxAttr_IBOutlet = 2,
  CXIdxAttr_IBOutletCollection = 3,
}
export type CXIdxAttrInfoType = UnderlyingType<typeof CXIdxAttrInfoDef>;
export interface CXIdxAttrInfo {
  kind: CXIdxAttrKind;
  cursor: CXCursor;
  loc: CXIdxLoc;
}
export type CXIdxEntityInfoType = UnderlyingType<typeof CXIdxEntityInfoDef>;
export interface CXIdxEntityInfo {
  kind: CXIdxEntityKind;
  templateKind: CXIdxEntityCXXTemplateKind;
  lang: CXIdxEntityLanguage;
  name: string;
  USR: string;
  cursor: CXCursor;
  attributes: TypedPointer<TypedPointer<CXIdxAttrInfo>>;
  numAttributes: number;
}
export type CXIdxContainerInfoType = UnderlyingType<
  typeof CXIdxContainerInfoDef
>;
export interface CXIdxContainerInfo {
  cursor: CXCursor;
}
export type CXIdxIBOutletCollectionAttrInfoType = UnderlyingType<
  typeof CXIdxIBOutletCollectionAttrInfoDef
>;
export interface CXIdxIBOutletCollectionAttrInfo {
  attrInfo: TypedPointer<CXIdxAttrInfo>;
  objcClass: TypedPointer<CXIdxEntityInfo>;
  classCursor: CXCursor;
  classLoc: CXIdxLoc;
}
export enum CXIdxDeclInfoFlags {
  CXIdxDeclFlag_Skipped = 1,
}
export type CXIdxDeclInfoType = UnderlyingType<typeof CXIdxDeclInfoDef>;
export interface CXIdxDeclInfo {
  entityInfo: TypedPointer<CXIdxEntityInfo>;
  cursor: CXCursor;
  loc: CXIdxLoc;
  semanticContainer: TypedPointer<CXIdxContainerInfo>;
  lexicalContainer: TypedPointer<CXIdxContainerInfo>;
  isRedeclaration: number;
  isDefinition: number;
  isContainer: number;
  declAsContainer: TypedPointer<CXIdxContainerInfo>;
  isImplicit: number;
  attributes: TypedPointer<TypedPointer<CXIdxAttrInfo>>;
  numAttributes: number;
  flags: number;
}
export enum CXIdxObjCContainerKind {
  CXIdxObjCContainer_ForwardRef = 0,
  CXIdxObjCContainer_Interface = 1,
  CXIdxObjCContainer_Implementation = 2,
}
export type CXIdxObjCContainerDeclInfoType = UnderlyingType<
  typeof CXIdxObjCContainerDeclInfoDef
>;
export interface CXIdxObjCContainerDeclInfo {
  declInfo: TypedPointer<CXIdxDeclInfo>;
  kind: CXIdxObjCContainerKind;
}
export type CXIdxBaseClassInfoType = UnderlyingType<
  typeof CXIdxBaseClassInfoDef
>;
export interface CXIdxBaseClassInfo {
  base: TypedPointer<CXIdxEntityInfo>;
  cursor: CXCursor;
  loc: CXIdxLoc;
}
export type CXIdxObjCProtocolRefInfoType = UnderlyingType<
  typeof CXIdxObjCProtocolRefInfoDef
>;
export interface CXIdxObjCProtocolRefInfo {
  protocol: TypedPointer<CXIdxEntityInfo>;
  cursor: CXCursor;
  loc: CXIdxLoc;
}
export type CXIdxObjCProtocolRefListInfoType = UnderlyingType<
  typeof CXIdxObjCProtocolRefListInfoDef
>;
export interface CXIdxObjCProtocolRefListInfo {
  protocols: TypedPointer<TypedPointer<CXIdxObjCProtocolRefInfo>>;
  numProtocols: number;
}
export type CXIdxObjCInterfaceDeclInfoType = UnderlyingType<
  typeof CXIdxObjCInterfaceDeclInfoDef
>;
export interface CXIdxObjCInterfaceDeclInfo {
  containerInfo: TypedPointer<CXIdxObjCContainerDeclInfo>;
  superInfo: TypedPointer<CXIdxBaseClassInfo>;
  protocols: TypedPointer<CXIdxObjCProtocolRefListInfo>;
}
export type CXIdxObjCCategoryDeclInfoType = UnderlyingType<
  typeof CXIdxObjCCategoryDeclInfoDef
>;
export interface CXIdxObjCCategoryDeclInfo {
  containerInfo: TypedPointer<CXIdxObjCContainerDeclInfo>;
  objcClass: TypedPointer<CXIdxEntityInfo>;
  classCursor: CXCursor;
  classLoc: CXIdxLoc;
  protocols: TypedPointer<CXIdxObjCProtocolRefListInfo>;
}
export type CXIdxObjCPropertyDeclInfoType = UnderlyingType<
  typeof CXIdxObjCPropertyDeclInfoDef
>;
export interface CXIdxObjCPropertyDeclInfo {
  declInfo: TypedPointer<CXIdxDeclInfo>;
  getter: TypedPointer<CXIdxEntityInfo>;
  setter: TypedPointer<CXIdxEntityInfo>;
}
export type CXIdxCXXClassDeclInfoType = UnderlyingType<
  typeof CXIdxCXXClassDeclInfoDef
>;
export interface CXIdxCXXClassDeclInfo {
  declInfo: TypedPointer<CXIdxDeclInfo>;
  bases: TypedPointer<TypedPointer<CXIdxBaseClassInfo>>;
  numBases: number;
}
export enum CXIdxEntityRefKind {
  CXIdxEntityRef_Direct = 1,
  CXIdxEntityRef_Implicit = 2,
}
export enum CXSymbolRole {
  CXSymbolRole_None = 0,
  CXSymbolRole_Declaration = 1,
  CXSymbolRole_Definition = 2,
  CXSymbolRole_Reference = 4,
  CXSymbolRole_Read = 8,
  CXSymbolRole_Write = 16,
  CXSymbolRole_Call = 32,
  CXSymbolRole_Dynamic = 64,
  CXSymbolRole_AddressOf = 128,
  CXSymbolRole_Implicit = 256,
}
export type CXIdxEntityRefInfoType = UnderlyingType<
  typeof CXIdxEntityRefInfoDef
>;
export interface CXIdxEntityRefInfo {
  kind: CXIdxEntityRefKind;
  cursor: CXCursor;
  loc: CXIdxLoc;
  referencedEntity: TypedPointer<CXIdxEntityInfo>;
  parentEntity: TypedPointer<CXIdxEntityInfo>;
  container: TypedPointer<CXIdxContainerInfo>;
  role: CXSymbolRole;
}
export type IndexerCallbacksType = UnderlyingType<typeof IndexerCallbacksDef>;
export interface IndexerCallbacks {
  abortQuery: (arg0: CXClientData, arg1: TypedPointer<void>) => number;
  diagnostic: (
    arg0: CXClientData,
    arg1: CXDiagnosticSet,
    arg2: TypedPointer<void>
  ) => void;
  enteredMainFile: (
    arg0: CXClientData,
    arg1: CXFile,
    arg2: TypedPointer<void>
  ) => CXIdxClientFile;
  ppIncludedFile: (
    arg0: CXClientData,
    arg1: TypedPointer<CXIdxIncludedFileInfo>
  ) => CXIdxClientFile;
  importedASTFile: (
    arg0: CXClientData,
    arg1: TypedPointer<CXIdxImportedASTFileInfo>
  ) => CXIdxClientASTFile;
  startedTranslationUnit: (
    arg0: CXClientData,
    arg1: TypedPointer<void>
  ) => CXIdxClientContainer;
  indexDeclaration: (
    arg0: CXClientData,
    arg1: TypedPointer<CXIdxDeclInfo>
  ) => void;
  indexEntityReference: (
    arg0: CXClientData,
    arg1: TypedPointer<CXIdxEntityRefInfo>
  ) => void;
}
export type CXIndexAction = TypedPointer<void>;
export enum CXIndexOptFlags {
  CXIndexOpt_None = 0,
  CXIndexOpt_SuppressRedundantRefs = 1,
  CXIndexOpt_IndexFunctionLocalSymbols = 2,
  CXIndexOpt_IndexImplicitTemplateInstantiations = 4,
  CXIndexOpt_SuppressWarnings = 8,
  CXIndexOpt_SkipParsedBodiesInSession = 16,
}
export type CXFieldVisitor = (
  arg0: CXCursor,
  arg1: CXClientData
) => CXVisitorResult;
export const __time32_tDef = ref.types.long;
export const __time64_tDef = ref.types.longlong;
export const time_tDef = __time64_tDef;
export const CXErrorCodeDef = ref.types.int;
export const CXStringDef = Struct({
  data: Pointer(ref.types.void),
  private_flags: ref.types.uint,
});
export const CXStringSetDef = Struct({
  Strings: Pointer(CXStringDef),
  Count: ref.types.uint,
});
export const CXVirtualFileOverlayImplDef = Struct({});
export const CXVirtualFileOverlayDef = Pointer(CXVirtualFileOverlayImplDef);
export const CXModuleMapDescriptorImplDef = Struct({});
export const CXModuleMapDescriptorDef = Pointer(CXModuleMapDescriptorImplDef);
export const CXIndexDef = Pointer(ref.types.void);
export const CXTargetInfoImplDef = Struct({});
export const CXTargetInfoDef = Pointer(CXTargetInfoImplDef);
export const CXTranslationUnitImplDef = Struct({});
export const CXTranslationUnitDef = Pointer(CXTranslationUnitImplDef);
export const CXClientDataDef = Pointer(ref.types.void);
export const CXUnsavedFileDef = Struct({
  Filename: ref.types.CString,
  Contents: ref.types.CString,
  Length: ref.types.ulong,
});
export const CXAvailabilityKindDef = ref.types.int;
export const CXVersionDef = Struct({
  Major: ref.types.int,
  Minor: ref.types.int,
  Subminor: ref.types.int,
});
export const CXCursor_ExceptionSpecificationKindDef = ref.types.int;
export const CXGlobalOptFlagsDef = ref.types.int;
export const CXFileDef = Pointer(ref.types.void);
export const CXFileUniqueIDDef = Struct({
  data: Array(ref.types.ulonglong, 3),
});
export const CXSourceLocationDef = Struct({
  ptr_data: Array(Pointer(ref.types.void), 2),
  int_data: ref.types.uint,
});
export const CXSourceRangeDef = Struct({
  ptr_data: Array(Pointer(ref.types.void), 2),
  begin_int_data: ref.types.uint,
  end_int_data: ref.types.uint,
});
export const CXSourceRangeListDef = Struct({
  count: ref.types.uint,
  ranges: Pointer(CXSourceRangeDef),
});
export const CXDiagnosticSeverityDef = ref.types.int;
export const CXDiagnosticDef = Pointer(ref.types.void);
export const CXDiagnosticSetDef = Pointer(ref.types.void);
export const CXLoadDiag_ErrorDef = ref.types.int;
export const CXDiagnosticDisplayOptionsDef = ref.types.int;
export const CXTranslationUnit_FlagsDef = ref.types.int;
export const CXSaveTranslationUnit_FlagsDef = ref.types.int;
export const CXSaveErrorDef = ref.types.int;
export const CXReparse_FlagsDef = ref.types.int;
export const CXTUResourceUsageKindDef = ref.types.int;
export const CXTUResourceUsageEntryDef = Struct({
  kind: CXTUResourceUsageKindDef,
  amount: ref.types.ulong,
});
export const CXTUResourceUsageDef = Struct({
  data: Pointer(ref.types.void),
  numEntries: ref.types.uint,
  entries: Pointer(CXTUResourceUsageEntryDef),
});
export const CXCursorKindDef = ref.types.int;
export const CXCursorDef = Struct({
  kind: CXCursorKindDef,
  xdata: ref.types.int,
  data: Array(Pointer(ref.types.void), 3),
});
export const CXLinkageKindDef = ref.types.int;
export const CXVisibilityKindDef = ref.types.int;
export const CXPlatformAvailabilityDef = Struct({
  Platform: CXStringDef,
  Introduced: CXVersionDef,
  Deprecated: CXVersionDef,
  Obsoleted: CXVersionDef,
  Unavailable: ref.types.int,
  Message: CXStringDef,
});
export const CXLanguageKindDef = ref.types.int;
export const CXTLSKindDef = ref.types.int;
export const CXCursorSetImplDef = Struct({});
export const CXCursorSetDef = Pointer(CXCursorSetImplDef);
export const CXTypeKindDef = ref.types.int;
export const CXCallingConvDef = ref.types.int;
export const CXTypeDef = Struct({
  kind: CXTypeKindDef,
  data: Array(Pointer(ref.types.void), 2),
});
export const CXTemplateArgumentKindDef = ref.types.int;
export const CXTypeNullabilityKindDef = ref.types.int;
export const CXTypeLayoutErrorDef = ref.types.int;
export const CXRefQualifierKindDef = ref.types.int;
export const CX_CXXAccessSpecifierDef = ref.types.int;
export const CX_StorageClassDef = ref.types.int;
export const CXChildVisitResultDef = ref.types.int;
export const CXCursorVisitorDef = ffi.Function(CXChildVisitResultDef, [
  CXCursorDef,
  CXCursorDef,
  CXClientDataDef,
]);
export const CXPrintingPolicyDef = Pointer(ref.types.void);
export const CXPrintingPolicyPropertyDef = ref.types.int;
export const CXObjCPropertyAttrKindDef = ref.types.int;
export const CXObjCDeclQualifierKindDef = ref.types.int;
export const CXModuleDef = Pointer(ref.types.void);
export const CXNameRefFlagsDef = ref.types.int;
export const CXTokenKindDef = ref.types.int;
export const CXTokenDef = Struct({
  int_data: Array(ref.types.uint, 4),
  ptr_data: Pointer(ref.types.void),
});
export const CXCompletionStringDef = Pointer(ref.types.void);
export const CXCompletionResultDef = Struct({
  CursorKind: CXCursorKindDef,
  CompletionString: CXCompletionStringDef,
});
export const CXCompletionChunkKindDef = ref.types.int;
export const CXCodeCompleteResultsDef = Struct({
  Results: Pointer(CXCompletionResultDef),
  NumResults: ref.types.uint,
});
export const CXCodeComplete_FlagsDef = ref.types.int;
export const CXCompletionContextDef = ref.types.int;
export const CXInclusionVisitorDef = ffi.Function(ref.types.void, [
  CXFileDef,
  Pointer(CXSourceLocationDef),
  ref.types.uint,
  CXClientDataDef,
]);
export const CXEvalResultKindDef = ref.types.int;
export const CXEvalResultDef = Pointer(ref.types.void);
export const CXRemappingDef = Pointer(ref.types.void);
export const CXVisitorResultDef = ref.types.int;
export const CXCursorAndRangeVisitorDef = Struct({
  context: Pointer(ref.types.void),
  visit: ffi.Function(CXVisitorResultDef, [
    Pointer(ref.types.void),
    CXCursorDef,
    CXSourceRangeDef,
  ]),
});
export const CXResultDef = ref.types.int;
export const CXIdxClientFileDef = Pointer(ref.types.void);
export const CXIdxClientEntityDef = Pointer(ref.types.void);
export const CXIdxClientContainerDef = Pointer(ref.types.void);
export const CXIdxClientASTFileDef = Pointer(ref.types.void);
export const CXIdxLocDef = Struct({
  ptr_data: Array(Pointer(ref.types.void), 2),
  int_data: ref.types.uint,
});
export const CXIdxIncludedFileInfoDef = Struct({
  hashLoc: CXIdxLocDef,
  filename: ref.types.CString,
  file: CXFileDef,
  isImport: ref.types.int,
  isAngled: ref.types.int,
  isModuleImport: ref.types.int,
});
export const CXIdxImportedASTFileInfoDef = Struct({
  file: CXFileDef,
  module: CXModuleDef,
  loc: CXIdxLocDef,
  isImplicit: ref.types.int,
});
export const CXIdxEntityKindDef = ref.types.int;
export const CXIdxEntityLanguageDef = ref.types.int;
export const CXIdxEntityCXXTemplateKindDef = ref.types.int;
export const CXIdxAttrKindDef = ref.types.int;
export const CXIdxAttrInfoDef = Struct({
  kind: CXIdxAttrKindDef,
  cursor: CXCursorDef,
  loc: CXIdxLocDef,
});
export const CXIdxEntityInfoDef = Struct({
  kind: CXIdxEntityKindDef,
  templateKind: CXIdxEntityCXXTemplateKindDef,
  lang: CXIdxEntityLanguageDef,
  name: ref.types.CString,
  USR: ref.types.CString,
  cursor: CXCursorDef,
  attributes: Pointer(Pointer(CXIdxAttrInfoDef)),
  numAttributes: ref.types.uint,
});
export const CXIdxContainerInfoDef = Struct({
  cursor: CXCursorDef,
});
export const CXIdxIBOutletCollectionAttrInfoDef = Struct({
  attrInfo: Pointer(CXIdxAttrInfoDef),
  objcClass: Pointer(CXIdxEntityInfoDef),
  classCursor: CXCursorDef,
  classLoc: CXIdxLocDef,
});
export const CXIdxDeclInfoFlagsDef = ref.types.int;
export const CXIdxDeclInfoDef = Struct({
  entityInfo: Pointer(CXIdxEntityInfoDef),
  cursor: CXCursorDef,
  loc: CXIdxLocDef,
  semanticContainer: Pointer(CXIdxContainerInfoDef),
  lexicalContainer: Pointer(CXIdxContainerInfoDef),
  isRedeclaration: ref.types.int,
  isDefinition: ref.types.int,
  isContainer: ref.types.int,
  declAsContainer: Pointer(CXIdxContainerInfoDef),
  isImplicit: ref.types.int,
  attributes: Pointer(Pointer(CXIdxAttrInfoDef)),
  numAttributes: ref.types.uint,
  flags: ref.types.uint,
});
export const CXIdxObjCContainerKindDef = ref.types.int;
export const CXIdxObjCContainerDeclInfoDef = Struct({
  declInfo: Pointer(CXIdxDeclInfoDef),
  kind: CXIdxObjCContainerKindDef,
});
export const CXIdxBaseClassInfoDef = Struct({
  base: Pointer(CXIdxEntityInfoDef),
  cursor: CXCursorDef,
  loc: CXIdxLocDef,
});
export const CXIdxObjCProtocolRefInfoDef = Struct({
  protocol: Pointer(CXIdxEntityInfoDef),
  cursor: CXCursorDef,
  loc: CXIdxLocDef,
});
export const CXIdxObjCProtocolRefListInfoDef = Struct({
  protocols: Pointer(Pointer(CXIdxObjCProtocolRefInfoDef)),
  numProtocols: ref.types.uint,
});
export const CXIdxObjCInterfaceDeclInfoDef = Struct({
  containerInfo: Pointer(CXIdxObjCContainerDeclInfoDef),
  superInfo: Pointer(CXIdxBaseClassInfoDef),
  protocols: Pointer(CXIdxObjCProtocolRefListInfoDef),
});
export const CXIdxObjCCategoryDeclInfoDef = Struct({
  containerInfo: Pointer(CXIdxObjCContainerDeclInfoDef),
  objcClass: Pointer(CXIdxEntityInfoDef),
  classCursor: CXCursorDef,
  classLoc: CXIdxLocDef,
  protocols: Pointer(CXIdxObjCProtocolRefListInfoDef),
});
export const CXIdxObjCPropertyDeclInfoDef = Struct({
  declInfo: Pointer(CXIdxDeclInfoDef),
  getter: Pointer(CXIdxEntityInfoDef),
  setter: Pointer(CXIdxEntityInfoDef),
});
export const CXIdxCXXClassDeclInfoDef = Struct({
  declInfo: Pointer(CXIdxDeclInfoDef),
  bases: Pointer(Pointer(CXIdxBaseClassInfoDef)),
  numBases: ref.types.uint,
});
export const CXIdxEntityRefKindDef = ref.types.int;
export const CXSymbolRoleDef = ref.types.int;
export const CXIdxEntityRefInfoDef = Struct({
  kind: CXIdxEntityRefKindDef,
  cursor: CXCursorDef,
  loc: CXIdxLocDef,
  referencedEntity: Pointer(CXIdxEntityInfoDef),
  parentEntity: Pointer(CXIdxEntityInfoDef),
  container: Pointer(CXIdxContainerInfoDef),
  role: CXSymbolRoleDef,
});
export const IndexerCallbacksDef = Struct({
  abortQuery: ffi.Function(ref.types.int, [
    CXClientDataDef,
    Pointer(ref.types.void),
  ]),
  diagnostic: ffi.Function(ref.types.void, [
    CXClientDataDef,
    CXDiagnosticSetDef,
    Pointer(ref.types.void),
  ]),
  enteredMainFile: ffi.Function(CXIdxClientFileDef, [
    CXClientDataDef,
    CXFileDef,
    Pointer(ref.types.void),
  ]),
  ppIncludedFile: ffi.Function(CXIdxClientFileDef, [
    CXClientDataDef,
    Pointer(CXIdxIncludedFileInfoDef),
  ]),
  importedASTFile: ffi.Function(CXIdxClientASTFileDef, [
    CXClientDataDef,
    Pointer(CXIdxImportedASTFileInfoDef),
  ]),
  startedTranslationUnit: ffi.Function(CXIdxClientContainerDef, [
    CXClientDataDef,
    Pointer(ref.types.void),
  ]),
  indexDeclaration: ffi.Function(ref.types.void, [
    CXClientDataDef,
    Pointer(CXIdxDeclInfoDef),
  ]),
  indexEntityReference: ffi.Function(ref.types.void, [
    CXClientDataDef,
    Pointer(CXIdxEntityRefInfoDef),
  ]),
});
export const CXIndexActionDef = Pointer(ref.types.void);
export const CXIndexOptFlagsDef = ref.types.int;
export const CXFieldVisitorDef = ffi.Function(CXVisitorResultDef, [
  CXCursorDef,
  CXClientDataDef,
]);
export function dlopen(libPath: string) {
  return ffi.Library(libPath, {
    clang_getCString: [ref.types.CString, [CXStringDef]],
    clang_disposeString: [ref.types.void, [CXStringDef]],
    clang_disposeStringSet: [ref.types.void, [Pointer(CXStringSetDef)]],
    clang_getBuildSessionTimestamp: [ref.types.ulonglong, []],
    clang_VirtualFileOverlay_create: [
      CXVirtualFileOverlayDef,
      [ref.types.uint],
    ],
    clang_VirtualFileOverlay_addFileMapping: [
      CXErrorCodeDef,
      [CXVirtualFileOverlayDef, ref.types.CString, ref.types.CString],
    ],
    clang_VirtualFileOverlay_setCaseSensitivity: [
      CXErrorCodeDef,
      [CXVirtualFileOverlayDef, ref.types.int],
    ],
    clang_VirtualFileOverlay_writeToBuffer: [
      CXErrorCodeDef,
      [
        CXVirtualFileOverlayDef,
        ref.types.uint,
        Pointer(ref.types.CString),
        Pointer(ref.types.uint),
      ],
    ],
    clang_free: [ref.types.void, [Pointer(ref.types.void)]],
    clang_VirtualFileOverlay_dispose: [
      ref.types.void,
      [CXVirtualFileOverlayDef],
    ],
    clang_ModuleMapDescriptor_create: [
      CXModuleMapDescriptorDef,
      [ref.types.uint],
    ],
    clang_ModuleMapDescriptor_setFrameworkModuleName: [
      CXErrorCodeDef,
      [CXModuleMapDescriptorDef, ref.types.CString],
    ],
    clang_ModuleMapDescriptor_setUmbrellaHeader: [
      CXErrorCodeDef,
      [CXModuleMapDescriptorDef, ref.types.CString],
    ],
    clang_ModuleMapDescriptor_writeToBuffer: [
      CXErrorCodeDef,
      [
        CXModuleMapDescriptorDef,
        ref.types.uint,
        Pointer(ref.types.CString),
        Pointer(ref.types.uint),
      ],
    ],
    clang_ModuleMapDescriptor_dispose: [
      ref.types.void,
      [CXModuleMapDescriptorDef],
    ],
    clang_createIndex: [CXIndexDef, [ref.types.int, ref.types.int]],
    clang_disposeIndex: [ref.types.void, [CXIndexDef]],
    clang_CXIndex_setGlobalOptions: [
      ref.types.void,
      [CXIndexDef, ref.types.uint],
    ],
    clang_CXIndex_getGlobalOptions: [ref.types.uint, [CXIndexDef]],
    clang_CXIndex_setInvocationEmissionPathOption: [
      ref.types.void,
      [CXIndexDef, ref.types.CString],
    ],
    clang_getFileName: [CXStringDef, [CXFileDef]],
    clang_getFileTime: [time_tDef, [CXFileDef]],
    clang_getFileUniqueID: [
      ref.types.int,
      [CXFileDef, Pointer(CXFileUniqueIDDef)],
    ],
    clang_isFileMultipleIncludeGuarded: [
      ref.types.uint,
      [CXTranslationUnitDef, CXFileDef],
    ],
    clang_getFile: [CXFileDef, [CXTranslationUnitDef, ref.types.CString]],
    clang_getFileContents: [
      ref.types.CString,
      [CXTranslationUnitDef, CXFileDef, Pointer(ref.types.size_t)],
    ],
    clang_File_isEqual: [ref.types.int, [CXFileDef, CXFileDef]],
    clang_File_tryGetRealPathName: [CXStringDef, [CXFileDef]],
    clang_getNullLocation: [CXSourceLocationDef, []],
    clang_equalLocations: [
      ref.types.uint,
      [CXSourceLocationDef, CXSourceLocationDef],
    ],
    clang_getLocation: [
      CXSourceLocationDef,
      [CXTranslationUnitDef, CXFileDef, ref.types.uint, ref.types.uint],
    ],
    clang_getLocationForOffset: [
      CXSourceLocationDef,
      [CXTranslationUnitDef, CXFileDef, ref.types.uint],
    ],
    clang_Location_isInSystemHeader: [ref.types.int, [CXSourceLocationDef]],
    clang_Location_isFromMainFile: [ref.types.int, [CXSourceLocationDef]],
    clang_getNullRange: [CXSourceRangeDef, []],
    clang_getRange: [
      CXSourceRangeDef,
      [CXSourceLocationDef, CXSourceLocationDef],
    ],
    clang_equalRanges: [ref.types.uint, [CXSourceRangeDef, CXSourceRangeDef]],
    clang_Range_isNull: [ref.types.int, [CXSourceRangeDef]],
    clang_getExpansionLocation: [
      ref.types.void,
      [
        CXSourceLocationDef,
        Pointer(CXFileDef),
        Pointer(ref.types.uint),
        Pointer(ref.types.uint),
        Pointer(ref.types.uint),
      ],
    ],
    clang_getPresumedLocation: [
      ref.types.void,
      [
        CXSourceLocationDef,
        Pointer(CXStringDef),
        Pointer(ref.types.uint),
        Pointer(ref.types.uint),
      ],
    ],
    clang_getInstantiationLocation: [
      ref.types.void,
      [
        CXSourceLocationDef,
        Pointer(CXFileDef),
        Pointer(ref.types.uint),
        Pointer(ref.types.uint),
        Pointer(ref.types.uint),
      ],
    ],
    clang_getSpellingLocation: [
      ref.types.void,
      [
        CXSourceLocationDef,
        Pointer(CXFileDef),
        Pointer(ref.types.uint),
        Pointer(ref.types.uint),
        Pointer(ref.types.uint),
      ],
    ],
    clang_getFileLocation: [
      ref.types.void,
      [
        CXSourceLocationDef,
        Pointer(CXFileDef),
        Pointer(ref.types.uint),
        Pointer(ref.types.uint),
        Pointer(ref.types.uint),
      ],
    ],
    clang_getRangeStart: [CXSourceLocationDef, [CXSourceRangeDef]],
    clang_getRangeEnd: [CXSourceLocationDef, [CXSourceRangeDef]],
    clang_getSkippedRanges: [
      Pointer(CXSourceRangeListDef),
      [CXTranslationUnitDef, CXFileDef],
    ],
    clang_getAllSkippedRanges: [
      Pointer(CXSourceRangeListDef),
      [CXTranslationUnitDef],
    ],
    clang_disposeSourceRangeList: [
      ref.types.void,
      [Pointer(CXSourceRangeListDef)],
    ],
    clang_getNumDiagnosticsInSet: [ref.types.uint, [CXDiagnosticSetDef]],
    clang_getDiagnosticInSet: [
      CXDiagnosticDef,
      [CXDiagnosticSetDef, ref.types.uint],
    ],
    clang_loadDiagnostics: [
      CXDiagnosticSetDef,
      [ref.types.CString, Pointer(CXLoadDiag_ErrorDef), Pointer(CXStringDef)],
    ],
    clang_disposeDiagnosticSet: [ref.types.void, [CXDiagnosticSetDef]],
    clang_getChildDiagnostics: [CXDiagnosticSetDef, [CXDiagnosticDef]],
    clang_getNumDiagnostics: [ref.types.uint, [CXTranslationUnitDef]],
    clang_getDiagnostic: [
      CXDiagnosticDef,
      [CXTranslationUnitDef, ref.types.uint],
    ],
    clang_getDiagnosticSetFromTU: [CXDiagnosticSetDef, [CXTranslationUnitDef]],
    clang_disposeDiagnostic: [ref.types.void, [CXDiagnosticDef]],
    clang_formatDiagnostic: [CXStringDef, [CXDiagnosticDef, ref.types.uint]],
    clang_defaultDiagnosticDisplayOptions: [ref.types.uint, []],
    clang_getDiagnosticSeverity: [CXDiagnosticSeverityDef, [CXDiagnosticDef]],
    clang_getDiagnosticLocation: [CXSourceLocationDef, [CXDiagnosticDef]],
    clang_getDiagnosticSpelling: [CXStringDef, [CXDiagnosticDef]],
    clang_getDiagnosticOption: [
      CXStringDef,
      [CXDiagnosticDef, Pointer(CXStringDef)],
    ],
    clang_getDiagnosticCategory: [ref.types.uint, [CXDiagnosticDef]],
    clang_getDiagnosticCategoryName: [CXStringDef, [ref.types.uint]],
    clang_getDiagnosticCategoryText: [CXStringDef, [CXDiagnosticDef]],
    clang_getDiagnosticNumRanges: [ref.types.uint, [CXDiagnosticDef]],
    clang_getDiagnosticRange: [
      CXSourceRangeDef,
      [CXDiagnosticDef, ref.types.uint],
    ],
    clang_getDiagnosticNumFixIts: [ref.types.uint, [CXDiagnosticDef]],
    clang_getDiagnosticFixIt: [
      CXStringDef,
      [CXDiagnosticDef, ref.types.uint, Pointer(CXSourceRangeDef)],
    ],
    clang_getTranslationUnitSpelling: [CXStringDef, [CXTranslationUnitDef]],
    clang_createTranslationUnitFromSourceFile: [
      CXTranslationUnitDef,
      [
        CXIndexDef,
        ref.types.CString,
        ref.types.int,
        Pointer(ref.types.CString),
        ref.types.uint,
        Pointer(CXUnsavedFileDef),
      ],
    ],
    clang_createTranslationUnit: [
      CXTranslationUnitDef,
      [CXIndexDef, ref.types.CString],
    ],
    clang_createTranslationUnit2: [
      CXErrorCodeDef,
      [CXIndexDef, ref.types.CString, Pointer(CXTranslationUnitDef)],
    ],
    clang_defaultEditingTranslationUnitOptions: [ref.types.uint, []],
    clang_parseTranslationUnit: [
      CXTranslationUnitDef,
      [
        CXIndexDef,
        ref.types.CString,
        Pointer(ref.types.CString),
        ref.types.int,
        Pointer(CXUnsavedFileDef),
        ref.types.uint,
        ref.types.uint,
      ],
    ],
    clang_parseTranslationUnit2: [
      CXErrorCodeDef,
      [
        CXIndexDef,
        ref.types.CString,
        Pointer(ref.types.CString),
        ref.types.int,
        Pointer(CXUnsavedFileDef),
        ref.types.uint,
        ref.types.uint,
        Pointer(CXTranslationUnitDef),
      ],
    ],
    clang_parseTranslationUnit2FullArgv: [
      CXErrorCodeDef,
      [
        CXIndexDef,
        ref.types.CString,
        Pointer(ref.types.CString),
        ref.types.int,
        Pointer(CXUnsavedFileDef),
        ref.types.uint,
        ref.types.uint,
        Pointer(CXTranslationUnitDef),
      ],
    ],
    clang_defaultSaveOptions: [ref.types.uint, [CXTranslationUnitDef]],
    clang_saveTranslationUnit: [
      ref.types.int,
      [CXTranslationUnitDef, ref.types.CString, ref.types.uint],
    ],
    clang_suspendTranslationUnit: [ref.types.uint, [CXTranslationUnitDef]],
    clang_disposeTranslationUnit: [ref.types.void, [CXTranslationUnitDef]],
    clang_defaultReparseOptions: [ref.types.uint, [CXTranslationUnitDef]],
    clang_reparseTranslationUnit: [
      ref.types.int,
      [
        CXTranslationUnitDef,
        ref.types.uint,
        Pointer(CXUnsavedFileDef),
        ref.types.uint,
      ],
    ],
    clang_getTUResourceUsageName: [
      ref.types.CString,
      [CXTUResourceUsageKindDef],
    ],
    clang_getCXTUResourceUsage: [CXTUResourceUsageDef, [CXTranslationUnitDef]],
    clang_disposeCXTUResourceUsage: [ref.types.void, [CXTUResourceUsageDef]],
    clang_getTranslationUnitTargetInfo: [
      CXTargetInfoDef,
      [CXTranslationUnitDef],
    ],
    clang_TargetInfo_dispose: [ref.types.void, [CXTargetInfoDef]],
    clang_TargetInfo_getTriple: [CXStringDef, [CXTargetInfoDef]],
    clang_TargetInfo_getPointerWidth: [ref.types.int, [CXTargetInfoDef]],
    clang_getNullCursor: [CXCursorDef, []],
    clang_getTranslationUnitCursor: [CXCursorDef, [CXTranslationUnitDef]],
    clang_equalCursors: [ref.types.uint, [CXCursorDef, CXCursorDef]],
    clang_Cursor_isNull: [ref.types.int, [CXCursorDef]],
    clang_hashCursor: [ref.types.uint, [CXCursorDef]],
    clang_getCursorKind: [CXCursorKindDef, [CXCursorDef]],
    clang_isDeclaration: [ref.types.uint, [CXCursorKindDef]],
    clang_isInvalidDeclaration: [ref.types.uint, [CXCursorDef]],
    clang_isReference: [ref.types.uint, [CXCursorKindDef]],
    clang_isExpression: [ref.types.uint, [CXCursorKindDef]],
    clang_isStatement: [ref.types.uint, [CXCursorKindDef]],
    clang_isAttribute: [ref.types.uint, [CXCursorKindDef]],
    clang_Cursor_hasAttrs: [ref.types.uint, [CXCursorDef]],
    clang_isInvalid: [ref.types.uint, [CXCursorKindDef]],
    clang_isTranslationUnit: [ref.types.uint, [CXCursorKindDef]],
    clang_isPreprocessing: [ref.types.uint, [CXCursorKindDef]],
    clang_isUnexposed: [ref.types.uint, [CXCursorKindDef]],
    clang_getCursorLinkage: [CXLinkageKindDef, [CXCursorDef]],
    clang_getCursorVisibility: [CXVisibilityKindDef, [CXCursorDef]],
    clang_getCursorAvailability: [CXAvailabilityKindDef, [CXCursorDef]],
    clang_getCursorPlatformAvailability: [
      ref.types.int,
      [
        CXCursorDef,
        Pointer(ref.types.int),
        Pointer(CXStringDef),
        Pointer(ref.types.int),
        Pointer(CXStringDef),
        Pointer(CXPlatformAvailabilityDef),
        ref.types.int,
      ],
    ],
    clang_disposeCXPlatformAvailability: [
      ref.types.void,
      [Pointer(CXPlatformAvailabilityDef)],
    ],
    clang_Cursor_getVarDeclInitializer: [CXCursorDef, [CXCursorDef]],
    clang_Cursor_hasVarDeclGlobalStorage: [ref.types.int, [CXCursorDef]],
    clang_Cursor_hasVarDeclExternalStorage: [ref.types.int, [CXCursorDef]],
    clang_getCursorLanguage: [CXLanguageKindDef, [CXCursorDef]],
    clang_getCursorTLSKind: [CXTLSKindDef, [CXCursorDef]],
    clang_Cursor_getTranslationUnit: [CXTranslationUnitDef, [CXCursorDef]],
    clang_createCXCursorSet: [CXCursorSetDef, []],
    clang_disposeCXCursorSet: [ref.types.void, [CXCursorSetDef]],
    clang_CXCursorSet_contains: [ref.types.uint, [CXCursorSetDef, CXCursorDef]],
    clang_CXCursorSet_insert: [ref.types.uint, [CXCursorSetDef, CXCursorDef]],
    clang_getCursorSemanticParent: [CXCursorDef, [CXCursorDef]],
    clang_getCursorLexicalParent: [CXCursorDef, [CXCursorDef]],
    clang_getOverriddenCursors: [
      ref.types.void,
      [CXCursorDef, Pointer(Pointer(CXCursorDef)), Pointer(ref.types.uint)],
    ],
    clang_disposeOverriddenCursors: [ref.types.void, [Pointer(CXCursorDef)]],
    clang_getIncludedFile: [CXFileDef, [CXCursorDef]],
    clang_getCursor: [CXCursorDef, [CXTranslationUnitDef, CXSourceLocationDef]],
    clang_getCursorLocation: [CXSourceLocationDef, [CXCursorDef]],
    clang_getCursorExtent: [CXSourceRangeDef, [CXCursorDef]],
    clang_getCursorType: [CXTypeDef, [CXCursorDef]],
    clang_getTypeSpelling: [CXStringDef, [CXTypeDef]],
    clang_getTypedefDeclUnderlyingType: [CXTypeDef, [CXCursorDef]],
    clang_getEnumDeclIntegerType: [CXTypeDef, [CXCursorDef]],
    clang_getEnumConstantDeclValue: [ref.types.longlong, [CXCursorDef]],
    clang_getEnumConstantDeclUnsignedValue: [
      ref.types.ulonglong,
      [CXCursorDef],
    ],
    clang_getFieldDeclBitWidth: [ref.types.int, [CXCursorDef]],
    clang_Cursor_getNumArguments: [ref.types.int, [CXCursorDef]],
    clang_Cursor_getArgument: [CXCursorDef, [CXCursorDef, ref.types.uint]],
    clang_Cursor_getNumTemplateArguments: [ref.types.int, [CXCursorDef]],
    clang_Cursor_getTemplateArgumentKind: [
      CXTemplateArgumentKindDef,
      [CXCursorDef, ref.types.uint],
    ],
    clang_Cursor_getTemplateArgumentType: [
      CXTypeDef,
      [CXCursorDef, ref.types.uint],
    ],
    clang_Cursor_getTemplateArgumentValue: [
      ref.types.longlong,
      [CXCursorDef, ref.types.uint],
    ],
    clang_Cursor_getTemplateArgumentUnsignedValue: [
      ref.types.ulonglong,
      [CXCursorDef, ref.types.uint],
    ],
    clang_equalTypes: [ref.types.uint, [CXTypeDef, CXTypeDef]],
    clang_getCanonicalType: [CXTypeDef, [CXTypeDef]],
    clang_isConstQualifiedType: [ref.types.uint, [CXTypeDef]],
    clang_Cursor_isMacroFunctionLike: [ref.types.uint, [CXCursorDef]],
    clang_Cursor_isMacroBuiltin: [ref.types.uint, [CXCursorDef]],
    clang_Cursor_isFunctionInlined: [ref.types.uint, [CXCursorDef]],
    clang_isVolatileQualifiedType: [ref.types.uint, [CXTypeDef]],
    clang_isRestrictQualifiedType: [ref.types.uint, [CXTypeDef]],
    clang_getAddressSpace: [ref.types.uint, [CXTypeDef]],
    clang_getTypedefName: [CXStringDef, [CXTypeDef]],
    clang_getPointeeType: [CXTypeDef, [CXTypeDef]],
    clang_getTypeDeclaration: [CXCursorDef, [CXTypeDef]],
    clang_getDeclObjCTypeEncoding: [CXStringDef, [CXCursorDef]],
    clang_Type_getObjCEncoding: [CXStringDef, [CXTypeDef]],
    clang_getTypeKindSpelling: [CXStringDef, [CXTypeKindDef]],
    clang_getFunctionTypeCallingConv: [CXCallingConvDef, [CXTypeDef]],
    clang_getResultType: [CXTypeDef, [CXTypeDef]],
    clang_getExceptionSpecificationType: [ref.types.int, [CXTypeDef]],
    clang_getNumArgTypes: [ref.types.int, [CXTypeDef]],
    clang_getArgType: [CXTypeDef, [CXTypeDef, ref.types.uint]],
    clang_Type_getObjCObjectBaseType: [CXTypeDef, [CXTypeDef]],
    clang_Type_getNumObjCProtocolRefs: [ref.types.uint, [CXTypeDef]],
    clang_Type_getObjCProtocolDecl: [CXCursorDef, [CXTypeDef, ref.types.uint]],
    clang_Type_getNumObjCTypeArgs: [ref.types.uint, [CXTypeDef]],
    clang_Type_getObjCTypeArg: [CXTypeDef, [CXTypeDef, ref.types.uint]],
    clang_isFunctionTypeVariadic: [ref.types.uint, [CXTypeDef]],
    clang_getCursorResultType: [CXTypeDef, [CXCursorDef]],
    clang_getCursorExceptionSpecificationType: [ref.types.int, [CXCursorDef]],
    clang_isPODType: [ref.types.uint, [CXTypeDef]],
    clang_getElementType: [CXTypeDef, [CXTypeDef]],
    clang_getNumElements: [ref.types.longlong, [CXTypeDef]],
    clang_getArrayElementType: [CXTypeDef, [CXTypeDef]],
    clang_getArraySize: [ref.types.longlong, [CXTypeDef]],
    clang_Type_getNamedType: [CXTypeDef, [CXTypeDef]],
    clang_Type_isTransparentTagTypedef: [ref.types.uint, [CXTypeDef]],
    clang_Type_getNullability: [CXTypeNullabilityKindDef, [CXTypeDef]],
    clang_Type_getAlignOf: [ref.types.longlong, [CXTypeDef]],
    clang_Type_getClassType: [CXTypeDef, [CXTypeDef]],
    clang_Type_getSizeOf: [ref.types.longlong, [CXTypeDef]],
    clang_Type_getOffsetOf: [
      ref.types.longlong,
      [CXTypeDef, ref.types.CString],
    ],
    clang_Type_getModifiedType: [CXTypeDef, [CXTypeDef]],
    clang_Type_getValueType: [CXTypeDef, [CXTypeDef]],
    clang_Cursor_getOffsetOfField: [ref.types.longlong, [CXCursorDef]],
    clang_Cursor_isAnonymous: [ref.types.uint, [CXCursorDef]],
    clang_Cursor_isAnonymousRecordDecl: [ref.types.uint, [CXCursorDef]],
    clang_Cursor_isInlineNamespace: [ref.types.uint, [CXCursorDef]],
    clang_Type_getNumTemplateArguments: [ref.types.int, [CXTypeDef]],
    clang_Type_getTemplateArgumentAsType: [
      CXTypeDef,
      [CXTypeDef, ref.types.uint],
    ],
    clang_Type_getCXXRefQualifier: [CXRefQualifierKindDef, [CXTypeDef]],
    clang_Cursor_isBitField: [ref.types.uint, [CXCursorDef]],
    clang_isVirtualBase: [ref.types.uint, [CXCursorDef]],
    clang_getCXXAccessSpecifier: [CX_CXXAccessSpecifierDef, [CXCursorDef]],
    clang_Cursor_getStorageClass: [CX_StorageClassDef, [CXCursorDef]],
    clang_getNumOverloadedDecls: [ref.types.uint, [CXCursorDef]],
    clang_getOverloadedDecl: [CXCursorDef, [CXCursorDef, ref.types.uint]],
    clang_getIBOutletCollectionType: [CXTypeDef, [CXCursorDef]],
    clang_visitChildren: [
      ref.types.uint,
      [CXCursorDef, CXCursorVisitorDef, CXClientDataDef],
    ],
    clang_getCursorUSR: [CXStringDef, [CXCursorDef]],
    clang_constructUSR_ObjCClass: [CXStringDef, [ref.types.CString]],
    clang_constructUSR_ObjCCategory: [
      CXStringDef,
      [ref.types.CString, ref.types.CString],
    ],
    clang_constructUSR_ObjCProtocol: [CXStringDef, [ref.types.CString]],
    clang_constructUSR_ObjCIvar: [
      CXStringDef,
      [ref.types.CString, CXStringDef],
    ],
    clang_constructUSR_ObjCMethod: [
      CXStringDef,
      [ref.types.CString, ref.types.uint, CXStringDef],
    ],
    clang_constructUSR_ObjCProperty: [
      CXStringDef,
      [ref.types.CString, CXStringDef],
    ],
    clang_getCursorSpelling: [CXStringDef, [CXCursorDef]],
    clang_Cursor_getSpellingNameRange: [
      CXSourceRangeDef,
      [CXCursorDef, ref.types.uint, ref.types.uint],
    ],
    clang_PrintingPolicy_getProperty: [
      ref.types.uint,
      [CXPrintingPolicyDef, CXPrintingPolicyPropertyDef],
    ],
    clang_PrintingPolicy_setProperty: [
      ref.types.void,
      [CXPrintingPolicyDef, CXPrintingPolicyPropertyDef, ref.types.uint],
    ],
    clang_getCursorPrintingPolicy: [CXPrintingPolicyDef, [CXCursorDef]],
    clang_PrintingPolicy_dispose: [ref.types.void, [CXPrintingPolicyDef]],
    clang_getCursorPrettyPrinted: [
      CXStringDef,
      [CXCursorDef, CXPrintingPolicyDef],
    ],
    clang_getCursorDisplayName: [CXStringDef, [CXCursorDef]],
    clang_getCursorReferenced: [CXCursorDef, [CXCursorDef]],
    clang_getCursorDefinition: [CXCursorDef, [CXCursorDef]],
    clang_isCursorDefinition: [ref.types.uint, [CXCursorDef]],
    clang_getCanonicalCursor: [CXCursorDef, [CXCursorDef]],
    clang_Cursor_getObjCSelectorIndex: [ref.types.int, [CXCursorDef]],
    clang_Cursor_isDynamicCall: [ref.types.int, [CXCursorDef]],
    clang_Cursor_getReceiverType: [CXTypeDef, [CXCursorDef]],
    clang_Cursor_getObjCPropertyAttributes: [
      ref.types.uint,
      [CXCursorDef, ref.types.uint],
    ],
    clang_Cursor_getObjCPropertyGetterName: [CXStringDef, [CXCursorDef]],
    clang_Cursor_getObjCPropertySetterName: [CXStringDef, [CXCursorDef]],
    clang_Cursor_getObjCDeclQualifiers: [ref.types.uint, [CXCursorDef]],
    clang_Cursor_isObjCOptional: [ref.types.uint, [CXCursorDef]],
    clang_Cursor_isVariadic: [ref.types.uint, [CXCursorDef]],
    clang_Cursor_isExternalSymbol: [
      ref.types.uint,
      [
        CXCursorDef,
        Pointer(CXStringDef),
        Pointer(CXStringDef),
        Pointer(ref.types.uint),
      ],
    ],
    clang_Cursor_getCommentRange: [CXSourceRangeDef, [CXCursorDef]],
    clang_Cursor_getRawCommentText: [CXStringDef, [CXCursorDef]],
    clang_Cursor_getBriefCommentText: [CXStringDef, [CXCursorDef]],
    clang_Cursor_getMangling: [CXStringDef, [CXCursorDef]],
    clang_Cursor_getCXXManglings: [Pointer(CXStringSetDef), [CXCursorDef]],
    clang_Cursor_getObjCManglings: [Pointer(CXStringSetDef), [CXCursorDef]],
    clang_Cursor_getModule: [CXModuleDef, [CXCursorDef]],
    clang_getModuleForFile: [CXModuleDef, [CXTranslationUnitDef, CXFileDef]],
    clang_Module_getASTFile: [CXFileDef, [CXModuleDef]],
    clang_Module_getParent: [CXModuleDef, [CXModuleDef]],
    clang_Module_getName: [CXStringDef, [CXModuleDef]],
    clang_Module_getFullName: [CXStringDef, [CXModuleDef]],
    clang_Module_isSystem: [ref.types.int, [CXModuleDef]],
    clang_Module_getNumTopLevelHeaders: [
      ref.types.uint,
      [CXTranslationUnitDef, CXModuleDef],
    ],
    clang_Module_getTopLevelHeader: [
      CXFileDef,
      [CXTranslationUnitDef, CXModuleDef, ref.types.uint],
    ],
    clang_CXXConstructor_isConvertingConstructor: [
      ref.types.uint,
      [CXCursorDef],
    ],
    clang_CXXConstructor_isCopyConstructor: [ref.types.uint, [CXCursorDef]],
    clang_CXXConstructor_isDefaultConstructor: [ref.types.uint, [CXCursorDef]],
    clang_CXXConstructor_isMoveConstructor: [ref.types.uint, [CXCursorDef]],
    clang_CXXField_isMutable: [ref.types.uint, [CXCursorDef]],
    clang_CXXMethod_isDefaulted: [ref.types.uint, [CXCursorDef]],
    clang_CXXMethod_isPureVirtual: [ref.types.uint, [CXCursorDef]],
    clang_CXXMethod_isStatic: [ref.types.uint, [CXCursorDef]],
    clang_CXXMethod_isVirtual: [ref.types.uint, [CXCursorDef]],
    clang_CXXRecord_isAbstract: [ref.types.uint, [CXCursorDef]],
    clang_EnumDecl_isScoped: [ref.types.uint, [CXCursorDef]],
    clang_CXXMethod_isConst: [ref.types.uint, [CXCursorDef]],
    clang_getTemplateCursorKind: [CXCursorKindDef, [CXCursorDef]],
    clang_getSpecializedCursorTemplate: [CXCursorDef, [CXCursorDef]],
    clang_getCursorReferenceNameRange: [
      CXSourceRangeDef,
      [CXCursorDef, ref.types.uint, ref.types.uint],
    ],
    clang_getToken: [
      Pointer(CXTokenDef),
      [CXTranslationUnitDef, CXSourceLocationDef],
    ],
    clang_getTokenKind: [CXTokenKindDef, [CXTokenDef]],
    clang_getTokenSpelling: [CXStringDef, [CXTranslationUnitDef, CXTokenDef]],
    clang_getTokenLocation: [
      CXSourceLocationDef,
      [CXTranslationUnitDef, CXTokenDef],
    ],
    clang_getTokenExtent: [
      CXSourceRangeDef,
      [CXTranslationUnitDef, CXTokenDef],
    ],
    clang_tokenize: [
      ref.types.void,
      [
        CXTranslationUnitDef,
        CXSourceRangeDef,
        Pointer(Pointer(CXTokenDef)),
        Pointer(ref.types.uint),
      ],
    ],
    clang_annotateTokens: [
      ref.types.void,
      [
        CXTranslationUnitDef,
        Pointer(CXTokenDef),
        ref.types.uint,
        Pointer(CXCursorDef),
      ],
    ],
    clang_disposeTokens: [
      ref.types.void,
      [CXTranslationUnitDef, Pointer(CXTokenDef), ref.types.uint],
    ],
    clang_getCursorKindSpelling: [CXStringDef, [CXCursorKindDef]],
    clang_getDefinitionSpellingAndExtent: [
      ref.types.void,
      [
        CXCursorDef,
        Pointer(ref.types.CString),
        Pointer(ref.types.CString),
        Pointer(ref.types.uint),
        Pointer(ref.types.uint),
        Pointer(ref.types.uint),
        Pointer(ref.types.uint),
      ],
    ],
    clang_enableStackTraces: [ref.types.void, []],
    clang_executeOnThread: [
      ref.types.void,
      [
        ffi.Function(ref.types.void, [Pointer(ref.types.void)]),
        Pointer(ref.types.void),
        ref.types.uint,
      ],
    ],
    clang_getCompletionChunkKind: [
      CXCompletionChunkKindDef,
      [CXCompletionStringDef, ref.types.uint],
    ],
    clang_getCompletionChunkText: [
      CXStringDef,
      [CXCompletionStringDef, ref.types.uint],
    ],
    clang_getCompletionChunkCompletionString: [
      CXCompletionStringDef,
      [CXCompletionStringDef, ref.types.uint],
    ],
    clang_getNumCompletionChunks: [ref.types.uint, [CXCompletionStringDef]],
    clang_getCompletionPriority: [ref.types.uint, [CXCompletionStringDef]],
    clang_getCompletionAvailability: [
      CXAvailabilityKindDef,
      [CXCompletionStringDef],
    ],
    clang_getCompletionNumAnnotations: [
      ref.types.uint,
      [CXCompletionStringDef],
    ],
    clang_getCompletionAnnotation: [
      CXStringDef,
      [CXCompletionStringDef, ref.types.uint],
    ],
    clang_getCompletionParent: [
      CXStringDef,
      [CXCompletionStringDef, Pointer(CXCursorKindDef)],
    ],
    clang_getCompletionBriefComment: [CXStringDef, [CXCompletionStringDef]],
    clang_getCursorCompletionString: [CXCompletionStringDef, [CXCursorDef]],
    clang_getCompletionNumFixIts: [
      ref.types.uint,
      [Pointer(CXCodeCompleteResultsDef), ref.types.uint],
    ],
    clang_getCompletionFixIt: [
      CXStringDef,
      [
        Pointer(CXCodeCompleteResultsDef),
        ref.types.uint,
        ref.types.uint,
        Pointer(CXSourceRangeDef),
      ],
    ],
    clang_defaultCodeCompleteOptions: [ref.types.uint, []],
    clang_codeCompleteAt: [
      Pointer(CXCodeCompleteResultsDef),
      [
        CXTranslationUnitDef,
        ref.types.CString,
        ref.types.uint,
        ref.types.uint,
        Pointer(CXUnsavedFileDef),
        ref.types.uint,
        ref.types.uint,
      ],
    ],
    clang_sortCodeCompletionResults: [
      ref.types.void,
      [Pointer(CXCompletionResultDef), ref.types.uint],
    ],
    clang_disposeCodeCompleteResults: [
      ref.types.void,
      [Pointer(CXCodeCompleteResultsDef)],
    ],
    clang_codeCompleteGetNumDiagnostics: [
      ref.types.uint,
      [Pointer(CXCodeCompleteResultsDef)],
    ],
    clang_codeCompleteGetDiagnostic: [
      CXDiagnosticDef,
      [Pointer(CXCodeCompleteResultsDef), ref.types.uint],
    ],
    clang_codeCompleteGetContexts: [
      ref.types.ulonglong,
      [Pointer(CXCodeCompleteResultsDef)],
    ],
    clang_codeCompleteGetContainerKind: [
      CXCursorKindDef,
      [Pointer(CXCodeCompleteResultsDef), Pointer(ref.types.uint)],
    ],
    clang_codeCompleteGetContainerUSR: [
      CXStringDef,
      [Pointer(CXCodeCompleteResultsDef)],
    ],
    clang_codeCompleteGetObjCSelector: [
      CXStringDef,
      [Pointer(CXCodeCompleteResultsDef)],
    ],
    clang_getClangVersion: [CXStringDef, []],
    clang_toggleCrashRecovery: [ref.types.void, [ref.types.uint]],
    clang_getInclusions: [
      ref.types.void,
      [CXTranslationUnitDef, CXInclusionVisitorDef, CXClientDataDef],
    ],
    clang_Cursor_Evaluate: [CXEvalResultDef, [CXCursorDef]],
    clang_EvalResult_getKind: [CXEvalResultKindDef, [CXEvalResultDef]],
    clang_EvalResult_getAsInt: [ref.types.int, [CXEvalResultDef]],
    clang_EvalResult_getAsLongLong: [ref.types.longlong, [CXEvalResultDef]],
    clang_EvalResult_isUnsignedInt: [ref.types.uint, [CXEvalResultDef]],
    clang_EvalResult_getAsUnsigned: [ref.types.ulonglong, [CXEvalResultDef]],
    clang_EvalResult_getAsDouble: [ref.types.double, [CXEvalResultDef]],
    clang_EvalResult_getAsStr: [ref.types.CString, [CXEvalResultDef]],
    clang_EvalResult_dispose: [ref.types.void, [CXEvalResultDef]],
    clang_getRemappings: [CXRemappingDef, [ref.types.CString]],
    clang_getRemappingsFromFileList: [
      CXRemappingDef,
      [Pointer(ref.types.CString), ref.types.uint],
    ],
    clang_remap_getNumFiles: [ref.types.uint, [CXRemappingDef]],
    clang_remap_getFilenames: [
      ref.types.void,
      [
        CXRemappingDef,
        ref.types.uint,
        Pointer(CXStringDef),
        Pointer(CXStringDef),
      ],
    ],
    clang_remap_dispose: [ref.types.void, [CXRemappingDef]],
    clang_findReferencesInFile: [
      CXResultDef,
      [CXCursorDef, CXFileDef, CXCursorAndRangeVisitorDef],
    ],
    clang_findIncludesInFile: [
      CXResultDef,
      [CXTranslationUnitDef, CXFileDef, CXCursorAndRangeVisitorDef],
    ],
    clang_index_isEntityObjCContainerKind: [
      ref.types.int,
      [CXIdxEntityKindDef],
    ],
    clang_index_getObjCContainerDeclInfo: [
      Pointer(CXIdxObjCContainerDeclInfoDef),
      [Pointer(CXIdxDeclInfoDef)],
    ],
    clang_index_getObjCInterfaceDeclInfo: [
      Pointer(CXIdxObjCInterfaceDeclInfoDef),
      [Pointer(CXIdxDeclInfoDef)],
    ],
    clang_index_getObjCCategoryDeclInfo: [
      Pointer(CXIdxObjCCategoryDeclInfoDef),
      [Pointer(CXIdxDeclInfoDef)],
    ],
    clang_index_getObjCProtocolRefListInfo: [
      Pointer(CXIdxObjCProtocolRefListInfoDef),
      [Pointer(CXIdxDeclInfoDef)],
    ],
    clang_index_getObjCPropertyDeclInfo: [
      Pointer(CXIdxObjCPropertyDeclInfoDef),
      [Pointer(CXIdxDeclInfoDef)],
    ],
    clang_index_getIBOutletCollectionAttrInfo: [
      Pointer(CXIdxIBOutletCollectionAttrInfoDef),
      [Pointer(CXIdxAttrInfoDef)],
    ],
    clang_index_getCXXClassDeclInfo: [
      Pointer(CXIdxCXXClassDeclInfoDef),
      [Pointer(CXIdxDeclInfoDef)],
    ],
    clang_index_getClientContainer: [
      CXIdxClientContainerDef,
      [Pointer(CXIdxContainerInfoDef)],
    ],
    clang_index_setClientContainer: [
      ref.types.void,
      [Pointer(CXIdxContainerInfoDef), CXIdxClientContainerDef],
    ],
    clang_index_getClientEntity: [
      CXIdxClientEntityDef,
      [Pointer(CXIdxEntityInfoDef)],
    ],
    clang_index_setClientEntity: [
      ref.types.void,
      [Pointer(CXIdxEntityInfoDef), CXIdxClientEntityDef],
    ],
    clang_IndexAction_create: [CXIndexActionDef, [CXIndexDef]],
    clang_IndexAction_dispose: [ref.types.void, [CXIndexActionDef]],
    clang_indexSourceFile: [
      ref.types.int,
      [
        CXIndexActionDef,
        CXClientDataDef,
        Pointer(IndexerCallbacksDef),
        ref.types.uint,
        ref.types.uint,
        ref.types.CString,
        Pointer(ref.types.CString),
        ref.types.int,
        Pointer(CXUnsavedFileDef),
        ref.types.uint,
        Pointer(CXTranslationUnitDef),
        ref.types.uint,
      ],
    ],
    clang_indexSourceFileFullArgv: [
      ref.types.int,
      [
        CXIndexActionDef,
        CXClientDataDef,
        Pointer(IndexerCallbacksDef),
        ref.types.uint,
        ref.types.uint,
        ref.types.CString,
        Pointer(ref.types.CString),
        ref.types.int,
        Pointer(CXUnsavedFileDef),
        ref.types.uint,
        Pointer(CXTranslationUnitDef),
        ref.types.uint,
      ],
    ],
    clang_indexTranslationUnit: [
      ref.types.int,
      [
        CXIndexActionDef,
        CXClientDataDef,
        Pointer(IndexerCallbacksDef),
        ref.types.uint,
        ref.types.uint,
        CXTranslationUnitDef,
      ],
    ],
    clang_indexLoc_getFileLocation: [
      ref.types.void,
      [
        CXIdxLocDef,
        Pointer(CXIdxClientFileDef),
        Pointer(CXFileDef),
        Pointer(ref.types.uint),
        Pointer(ref.types.uint),
        Pointer(ref.types.uint),
      ],
    ],
    clang_indexLoc_getCXSourceLocation: [CXSourceLocationDef, [CXIdxLocDef]],
    clang_Type_visitFields: [
      ref.types.uint,
      [CXTypeDef, CXFieldVisitorDef, CXClientDataDef],
    ],
  });
}
