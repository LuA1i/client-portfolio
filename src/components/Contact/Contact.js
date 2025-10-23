import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import supabase from '../../lib/supabase'

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const sendToSupabase = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.user_name,
            email: formData.user_email,
            message: formData.message
          }
        ])

      if (error) throw error

      toast.success('Message Sent Successfully!', {
        position: 'bottom-right',
        autoClose: 3000,
      })
      
      // Reset form
      setFormData({
        user_name: '',
        user_email: '',
        message: ''
      })

    } catch (error) {
      console.error('Error saving message:', error)
      toast.error(`Failed To Send Message: ${error.message}`, {
        position: 'bottom-right',
        autoClose: 3000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="contact" className="mt-52 sm:px-10">
      <p className="text-4xl px-10 sm:px-0 font-bold text-[#00b4d8] sm:text-left">
        Contact Me
      </p>
      <div className="flex flex-col sm:flex-col justify-between items-center sm:px-10 ml-10 gap-2">
        <div className="w-full py-10 sm:w-1/2 text-center sm:text-left">
          <p className="text-lg px-10">Email: luqman.ali270304@outlook.com</p>
        </div>

        <div className="w-full pl-10 px-10 sm:w-1/2">
          <form className="flex flex-col gap-4" onSubmit={sendToSupabase}>
            <input
              type="text"
              required
              name="user_name"
              placeholder="Enter Name"
              value={formData.user_name}
              onChange={handleChange}
              className="p-2 border bg-[#000300] border-gray-300 rounded-md focus:outline-none focus:border-[#00b4d8] focus:duration-500"
            />
            <input
              type="email"
              required
              name="user_email"
              placeholder="Enter Email"
              value={formData.user_email}
              onChange={handleChange}
              className="p-2 border bg-[#000300] border-gray-300 rounded-md focus:outline-none focus:border-[#00b4d8] focus:duration-500"
            />
            <textarea
              placeholder="Message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="p-2 border bg-[#000300] border-gray-300 rounded-md focus:outline-none focus:border-[#00b4d8] focus:duration-500"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#00b4d8] text-white py-2 px-4 rounded-md hover:bg-[#0096c7] cursor-pointer transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        theme="dark"
        progressStyle={{
          backgroundColor: '#00b4d8',
        }}
      />
    </div>
  )
}

export default Contact