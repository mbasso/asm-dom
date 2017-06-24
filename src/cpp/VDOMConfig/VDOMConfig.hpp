#ifndef asmdom_VDOMConfig_hpp
#define asmdom_VDOMConfig_hpp

namespace asmdom {

	class VDOMConfig {
		public:
			static VDOMConfig& getConfig() {
				static VDOMConfig instance;
				return instance;
			}

			bool getClearMemory();
			bool getUnsafePatch();
			bool getCppSide();

			void setClearMemory(bool clear);
			void setUnsafePatch(bool unsafe);
			void setCppSide(bool cpp);

		private:
			VDOMConfig() {};

			bool clearMemory = true;
			bool unsafePatch = false;
			bool cppSide = false;
	};

}

#endif
