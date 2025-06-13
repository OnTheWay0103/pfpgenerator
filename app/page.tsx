import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Free AI Image Generator & Profile Picture Maker
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Transform your photos into stunning AI-generated images, art, and professional profile pictures. No signup required.
          </p>
          <Link 
            href="/create"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Create AI Images Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our AI Image Generator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-50">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Create AI Images in Three Simple Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6">Free AI Image Generator Online</h2>
            <p className="mb-4">
              Our AI image generator is a powerful tool that transforms your photos into stunning AI-generated images and art. Whether you're looking to create a professional profile picture or generate unique AI art, our platform offers a seamless experience with no signup required.
            </p>
            <h3 className="text-2xl font-bold mb-4">Create AI Images from Text</h3>
            <p className="mb-4">
              Transform your ideas into reality with our AI art generator. Simply describe what you want, and our artificial intelligence image generator will create unique, high-quality images based on your text descriptions.
            </p>
            <h3 className="text-2xl font-bold mb-4">AI Profile Picture Maker</h3>
            <p className="mb-4">
              Looking for the perfect profile picture? Our AI profile picture maker (PFP maker) uses advanced artificial intelligence to enhance your photos and create professional-looking profile pictures that stand out on any platform.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

const features = [
  {
    title: "Advanced AI Technology",
    description: "Our artificial intelligence image generator creates stunning, high-quality images that capture your best features.",
    icon: "🤖"
  },
  {
    title: "Multiple Style Options",
    description: "Choose from various AI art styles and themes to match your personality and preferences.",
    icon: "🎨"
  },
  {
    title: "Instant Results",
    description: "Get your AI-generated images in seconds, ready to use on any platform.",
    icon: "⚡"
  }
]

const steps = [
  {
    title: "Upload or Describe",
    description: "Upload your photos or describe the image you want to create"
  },
  {
    title: "Choose Style",
    description: "Select from our range of AI art styles and effects"
  },
  {
    title: "Download & Share",
    description: "Download your AI-generated images instantly and share them anywhere"
  }
] 