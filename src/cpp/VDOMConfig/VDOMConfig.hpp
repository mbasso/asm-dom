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

			void setClearMemory(bool clear);
			void setUnsafePatch(bool unsafe);

		private:
			VDOMConfig() {};

			bool clearMemory = true;
			bool unsafePatch = false;
	};

}

#endif
