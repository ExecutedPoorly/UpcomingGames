import { useState, useEffect } from 'react'
export function useShowAddGameState() {
  const [showAddGame, setShowAddGame] = useState(false)
  const switchAddGameShown = () => setShowAddGame((showAddGame) => !showAddGame)
  return [showAddGame, switchAddGameShown]
}
