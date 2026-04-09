export function isObject(item: unknown): item is object {
  return typeof item === 'object' && !Array.isArray(item)
}

export default function deepMerge<T extends object, R extends object>(target: T, source: R): T {
  const output = { ...target } as Record<string, unknown>
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      const sourceValue = (source as Record<string, unknown>)[key]
      const targetValue = (target as Record<string, unknown>)[key]
      if (isObject(sourceValue)) {
        if (!(key in target)) {
          Object.assign(output, { [key]: sourceValue })
        } else {
          output[key] = deepMerge(targetValue as object, sourceValue as object)
        }
      } else {
        Object.assign(output, { [key]: sourceValue })
      }
    })
  }
  return output as T
}
