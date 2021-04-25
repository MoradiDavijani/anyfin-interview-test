/**
 * We could use Redis in a real-life application with an LRU or LFU strategy.
 * I implemented a simple form of cache with the LRU strategy in this file.
 */
const MAX_CACHE_KEYS = 1000

class Cache {
  cacheMap: Record<string, any>
  cacheKeys: string[]
  maxCacheKeys: number

  constructor(maxCacheKeys: number) {
    this.cacheMap = {}
    this.cacheKeys = []
    this.maxCacheKeys = maxCacheKeys
  }

  getValue(key: string) {
    if (!this.cacheMap[key]) {
      return null
    }

    /**
     * Move the used key to the top of the cache keys to keep the keys ordered
     * based on their latest used time
     */
    this.cacheKeys.splice(this.cacheKeys.indexOf(key), 1)
    this.cacheKeys.push(key)

    return this.cacheMap[key]
  }

  setValue(key: string, data: unknown) {
    this.cacheMap[key] = data
    this.cacheKeys.push(key)

    if (this.cacheKeys.length > this.maxCacheKeys) {
      /**
       * Removing least recently used cache item
       */
      const leastRecentlyUsedKey = this.cacheKeys.shift()
      if (leastRecentlyUsedKey) {
        delete this.cacheMap[leastRecentlyUsedKey]
      }
    }
  }
}

let cache: Cache | undefined
const getCacheInstance = (): Cache => {
  if (!cache) {
    cache = new Cache(MAX_CACHE_KEYS)
  }

  return cache
}

export const cached = async <DataType>(
  key: string,
  callback: () => Promise<DataType>
): Promise<DataType> => {
  const cacheInstance = getCacheInstance()

  const cachedValue = cacheInstance.getValue(key)
  if (cachedValue) {
    return cachedValue
  }

  const data = await callback()

  cacheInstance.setValue(key, data)

  return data
}
