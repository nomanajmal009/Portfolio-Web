"use client";

import { Form, Input, Button, Modal } from "antd";
import { UserOutlined, MailOutlined, MessageOutlined, SendOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useState } from "react";

const { TextArea } = Input;

export function ContactForm({ isVisible = true }: { isVisible?: boolean }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFinish = async (values: { name: string; email: string; message: string }) => {
    setLoading(true);
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just show a success message
      console.log("Form values:", values);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Show success modal
      setIsModalOpen(true);
      form.resetFields();
    } catch (error) {
      // Handle error - you can add error modal here if needed
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="lets-connect" className="py-16 relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a question or want to work together? Send me a message!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
            <Form
              form={form}
              name="contact-form"
              onFinish={onFinish}
              layout="vertical"
              size="large"
              className="space-y-6"
            >
              <Form.Item
                name="name"
                rules={[
                  { required: true, message: "Please enter your name!" },
                  { min: 2, message: "Name must be at least 2 characters" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="text-primary" />}
                  placeholder="Your Name"
                  className="h-12"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="text-primary" />}
                  placeholder="Your Email Address"
                  className="h-12"
                />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[
                  { required: true, message: "Please enter your message!" },
                  { min: 10, message: "Message must be at least 10 characters" },
                ]}
              >
                <TextArea
                  rows={6}
                  placeholder="Your Message"
                  className="resize-none"
                  showCount
                  maxLength={1000}
                />
              </Form.Item>

              <Form.Item>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    icon={<SendOutlined />}
                    size="large"
                    className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary-light hover:to-accent-light border-0 shadow-lg"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </Form.Item>
            </Form>
          </div>
        </motion.div>
      </div>

      {/* Success Modal */}
      <Modal
        open={isModalOpen}
        onCancel={handleModalClose}
        onOk={handleModalClose}
        okText="Close"
        cancelButtonProps={{ style: { display: 'none' } }}
        width={500}
        styles={{
          content: {
            borderRadius: '12px',
          },
        }}
      >
        <div className="text-center py-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="mb-4"
          >
            <CheckCircleOutlined className="text-6xl text-green-500" />
          </motion.div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Message Sent Successfully!
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Thank you for reaching out! I've received your message and will get back to you as soon as possible.
          </p>
        </div>
      </Modal>
    </section>
  );
}

