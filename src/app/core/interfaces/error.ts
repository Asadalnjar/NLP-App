

export interface Error {
    id: number
    researchName: string
    researchType: string
    correctedText: string
    errorType: ErrorType
  }
  
  export interface ErrorType {
    grammar_errors: number
    punctuation_errors: number
    semantic_contextual_errors: number
    spelling_errors: number
    style_readability_issues: number
  }
  