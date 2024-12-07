<?php
if (!defined('ABSPATH')) {
    exit;
}

class MonPsy_Hero_Widget extends \Elementor\Widget_Base {
    public function get_name() {
        return 'monpsy_hero';
    }

    public function get_title() {
        return esc_html__('MonPsy Hero', 'monpsy');
    }

    public function get_icon() {
        return 'eicon-banner';
    }

    public function get_categories() {
        return ['monpsy-elements'];
    }

    protected function register_controls() {
        // Content Section
        $this->start_controls_section(
            'content_section',
            [
                'label' => esc_html__('Content', 'monpsy'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'title',
            [
                'label' => esc_html__('Title', 'monpsy'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Votre bien-être mental est notre priorité', 'monpsy'),
            ]
        );

        $this->add_control(
            'subtitle',
            [
                'label' => esc_html__('Subtitle', 'monpsy'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => esc_html__('Consultez un psychologue professionnel en ligne ou en cabinet.', 'monpsy'),
            ]
        );

        $this->add_control(
            'button_text',
            [
                'label' => esc_html__('Button Text', 'monpsy'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Prendre rendez-vous', 'monpsy'),
            ]
        );

        $this->add_control(
            'button_link',
            [
                'label' => esc_html__('Button Link', 'monpsy'),
                'type' => \Elementor\Controls_Manager::URL,
                'placeholder' => esc_html__('https://your-link.com', 'monpsy'),
                'default' => [
                    'url' => '#',
                ],
            ]
        );

        $this->add_control(
            'image',
            [
                'label' => esc_html__('Hero Image', 'monpsy'),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $this->end_controls_section();

        // Style Section
        $this->start_controls_section(
            'style_section',
            [
                'label' => esc_html__('Style', 'monpsy'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'title_typography',
                'label' => esc_html__('Title Typography', 'monpsy'),
                'selector' => '{{WRAPPER}} .hero-title',
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        $is_rtl = is_rtl();
        ?>
        <div class="relative isolate overflow-hidden">
            <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8 <?php echo $is_rtl ? 'lg:text-right' : 'lg:text-left'; ?>">
                    <h1 class="hero-title mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        <?php echo esc_html($settings['title']); ?>
                    </h1>
                    <p class="mt-6 text-lg leading-8 text-gray-600">
                        <?php echo esc_html($settings['subtitle']); ?>
                    </p>
                    <div class="mt-10 flex items-center gap-x-6 <?php echo $is_rtl ? 'flex-row-reverse' : ''; ?>">
                        <a href="<?php echo esc_url($settings['button_link']['url']); ?>" 
                           class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                            <?php echo esc_html($settings['button_text']); ?>
                        </a>
                    </div>
                </div>
                <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <?php if ($settings['image']['url']) : ?>
                            <img src="<?php echo esc_url($settings['image']['url']); ?>"
                                 alt="<?php echo esc_attr($settings['title']); ?>"
                                 class="w-[76rem] rounded-md bg-gray-900/5 object-cover shadow-lg">
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
        <?php
    }
}