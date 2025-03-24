
export interface Ireturn {
    corrected_text: string
    error_type: ErrorType
  }
  
  export interface ErrorType {
    grammar_errors: string
    punctuation_errors: string
    semantic_contextual_errors: string
    spelling_errors: string
    style_readability_issues: string
  }
  