"use client" // include with Next.js 13+

import { HttpTypes } from "@medusajs/types"
import { useEffect, useMemo, useState } from "react"
import { validateCallback } from "../../../../../../lib/data/customer"

export default function EmailPassVerifiedCallback() {
  const [loading, setLoading] = useState(true)
  const [customer, setCustomer] = useState<HttpTypes.StoreCustomer>()
  const [error, setError] = useState<string>()

  const queryParams = useMemo(() => {
    const searchParams = new URLSearchParams(window.location.search)
    return Object.fromEntries(searchParams.entries())
  }, [])

  useEffect(() => {
    if (!loading) {
      return
    }

    handleValidation()
  }, [loading])

  useEffect(() => {
    if (!customer) {
      return
    }

    // redirect to homepage after successful authentication
    window.location.href = "/"
  }, [customer])

  const handleValidation = async () => {
    const result = await validateCallback(queryParams)

    if (result.success) {
      setCustomer(result.customer)
    } else {
      setError(result.error)
    }

    setLoading(false)
  }

  return (
    <div>
      {loading && <span>Loading...</span>}
      {error && <span>Authentication Failed: {error}</span>}
      {customer && (
        <span>Created customer {customer.email} with Emailpass Verified.</span>
      )}
    </div>
  )
}
