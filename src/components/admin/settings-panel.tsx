"use client"

import type React from "react"

import { useState } from "react"
import { Save } from "lucide-react"

export function SettingsPanel() {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "Rejuvenexx",
    siteDescription: "Premium Peptides and Research Compounds",
    contactEmail: "info@rejuvenexx.co",
    contactPhone: "(xxx) xxxxx",
    currency: "USD",
    taxRate: "7.5",
  })

  const [shippingSettings, setShippingSettings] = useState({
    enableFreeShipping: true,
    freeShippingThreshold: "100",
    defaultShippingRate: "9.99",
    internationalShipping: true,
    internationalShippingRate: "29.99",
  })

  const [emailSettings, setEmailSettings] = useState({
    orderConfirmation: true,
    shippingConfirmation: true,
    deliveryConfirmation: true,
    marketingEmails: true,
  })

  const [affiliateSettings, setAffiliateSettings] = useState({
    enableAffiliateProgram: true,
    defaultCommissionRate: "10",
    minimumPayoutAmount: "50",
    payoutFrequency: "monthly",
  })

  const handleGeneralSettingsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setGeneralSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleShippingSettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target
    setShippingSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleEmailSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setEmailSettings((prev) => ({ ...prev, [name]: checked }))
  }

  const handleAffiliateSettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target
    setAffiliateSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSaveSettings = (section: string) => {
    // In a real app, you would call an API to save the settings
    alert(`${section} settings saved successfully`)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Settings</h2>

      {/* General Settings */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium">General Settings</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="siteName" className="block text-sm font-medium text-gray-700 mb-1">
                Site Name
              </label>
              <input
                type="text"
                id="siteName"
                name="siteName"
                value={generalSettings.siteName}
                onChange={handleGeneralSettingsChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Email
              </label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={generalSettings.contactEmail}
                onChange={handleGeneralSettingsChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Phone
              </label>
              <input
                type="text"
                id="contactPhone"
                name="contactPhone"
                value={generalSettings.contactPhone}
                onChange={handleGeneralSettingsChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
                Currency
              </label>
              <select
                id="currency"
                name="currency"
                value={generalSettings.currency}
                onChange={handleGeneralSettingsChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="CAD">CAD ($)</option>
                <option value="AUD">AUD ($)</option>
              </select>
            </div>
            <div>
              <label htmlFor="taxRate" className="block text-sm font-medium text-gray-700 mb-1">
                Tax Rate (%)
              </label>
              <input
                type="text"
                id="taxRate"
                name="taxRate"
                value={generalSettings.taxRate}
                onChange={handleGeneralSettingsChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700 mb-1">
                Site Description
              </label>
              <textarea
                id="siteDescription"
                name="siteDescription"
                value={generalSettings.siteDescription}
                onChange={handleGeneralSettingsChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => handleSaveSettings("General")}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Save className="h-5 w-5 mr-2" />
              Save General Settings
            </button>
          </div>
        </div>
      </div>

      {/* Shipping Settings */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium">Shipping Settings</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="enableFreeShipping"
                  name="enableFreeShipping"
                  type="checkbox"
                  checked={shippingSettings.enableFreeShipping}
                  onChange={handleShippingSettingsChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="enableFreeShipping" className="font-medium text-gray-700">
                  Enable Free Shipping
                </label>
                <p className="text-gray-500">Offer free shipping for orders above a certain amount</p>
              </div>
            </div>

            {shippingSettings.enableFreeShipping && (
              <div>
                <label htmlFor="freeShippingThreshold" className="block text-sm font-medium text-gray-700 mb-1">
                  Free Shipping Threshold ($)
                </label>
                <input
                  type="text"
                  id="freeShippingThreshold"
                  name="freeShippingThreshold"
                  value={shippingSettings.freeShippingThreshold}
                  onChange={handleShippingSettingsChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            <div>
              <label htmlFor="defaultShippingRate" className="block text-sm font-medium text-gray-700 mb-1">
                Default Shipping Rate ($)
              </label>
              <input
                type="text"
                id="defaultShippingRate"
                name="defaultShippingRate"
                value={shippingSettings.defaultShippingRate}
                onChange={handleShippingSettingsChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="internationalShipping"
                  name="internationalShipping"
                  type="checkbox"
                  checked={shippingSettings.internationalShipping}
                  onChange={handleShippingSettingsChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="internationalShipping" className="font-medium text-gray-700">
                  Enable International Shipping
                </label>
                <p className="text-gray-500">Allow shipping to international addresses</p>
              </div>
            </div>

            {shippingSettings.internationalShipping && (
              <div>
                <label htmlFor="internationalShippingRate" className="block text-sm font-medium text-gray-700 mb-1">
                  International Shipping Rate ($)
                </label>
                <input
                  type="text"
                  id="internationalShippingRate"
                  name="internationalShippingRate"
                  value={shippingSettings.internationalShippingRate}
                  onChange={handleShippingSettingsChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => handleSaveSettings("Shipping")}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Save className="h-5 w-5 mr-2" />
              Save Shipping Settings
            </button>
          </div>
        </div>
      </div>

      {/* Email Notifications */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium">Email Notifications</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="orderConfirmation"
                  name="orderConfirmation"
                  type="checkbox"
                  checked={emailSettings.orderConfirmation}
                  onChange={handleEmailSettingsChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="orderConfirmation" className="font-medium text-gray-700">
                  Order Confirmation Emails
                </label>
                <p className="text-gray-500">Send email notifications when an order is placed</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="shippingConfirmation"
                  name="shippingConfirmation"
                  type="checkbox"
                  checked={emailSettings.shippingConfirmation}
                  onChange={handleEmailSettingsChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="shippingConfirmation" className="font-medium text-gray-700">
                  Shipping Confirmation Emails
                </label>
                <p className="text-gray-500">Send email notifications when an order is shipped</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="deliveryConfirmation"
                  name="deliveryConfirmation"
                  type="checkbox"
                  checked={emailSettings.deliveryConfirmation}
                  onChange={handleEmailSettingsChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="deliveryConfirmation" className="font-medium text-gray-700">
                  Delivery Confirmation Emails
                </label>
                <p className="text-gray-500">Send email notifications when an order is delivered</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="marketingEmails"
                  name="marketingEmails"
                  type="checkbox"
                  checked={emailSettings.marketingEmails}
                  onChange={handleEmailSettingsChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="marketingEmails" className="font-medium text-gray-700">
                  Marketing Emails
                </label>
                <p className="text-gray-500">Send promotional emails to customers (respects opt-in preferences)</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => handleSaveSettings("Email")}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Save className="h-5 w-5 mr-2" />
              Save Email Settings
            </button>
          </div>
        </div>
      </div>

      {/* Affiliate Settings */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium">Affiliate Program Settings</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="enableAffiliateProgram"
                  name="enableAffiliateProgram"
                  type="checkbox"
                  checked={affiliateSettings.enableAffiliateProgram}
                  onChange={handleAffiliateSettingsChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="enableAffiliateProgram" className="font-medium text-gray-700">
                  Enable Affiliate Program
                </label>
                <p className="text-gray-500">Allow users to sign up as affiliates and earn commissions</p>
              </div>
            </div>

            {affiliateSettings.enableAffiliateProgram && (
              <>
                <div>
                  <label htmlFor="defaultCommissionRate" className="block text-sm font-medium text-gray-700 mb-1">
                    Default Commission Rate (%)
                  </label>
                  <input
                    type="text"
                    id="defaultCommissionRate"
                    name="defaultCommissionRate"
                    value={affiliateSettings.defaultCommissionRate}
                    onChange={handleAffiliateSettingsChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="minimumPayoutAmount" className="block text-sm font-medium text-gray-700 mb-1">
                    Minimum Payout Amount ($)
                  </label>
                  <input
                    type="text"
                    id="minimumPayoutAmount"
                    name="minimumPayoutAmount"
                    value={affiliateSettings.minimumPayoutAmount}
                    onChange={handleAffiliateSettingsChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="payoutFrequency" className="block text-sm font-medium text-gray-700 mb-1">
                    Payout Frequency
                  </label>
                  <select
                    id="payoutFrequency"
                    name="payoutFrequency"
                    value={affiliateSettings.payoutFrequency}
                    onChange={handleAffiliateSettingsChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                  </select>
                </div>
              </>
            )}
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => handleSaveSettings("Affiliate")}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Save className="h-5 w-5 mr-2" />
              Save Affiliate Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
