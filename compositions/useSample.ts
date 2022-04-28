export type SampleType = {
  id: number
  name?: string
}

export const useSample = () => {
  /**
   * Sampleを取得
   */
  const getSample = (): SampleType => {
    return { id: 1, name: 'sample text' }
  }

  return {
    getSample,
  }
}
