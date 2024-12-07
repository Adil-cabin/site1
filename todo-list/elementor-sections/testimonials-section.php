<?php
if (!defined('ABSPATH')) {
    exit;
}

class MonPsy_Testimonials_Widget extends \Elementor\Widget_Base {
    public function get_name() {
        return 'monpsy_testimonials';
    }

    public function get_title() {
        return esc_html__('MonPsy Testimonials', 'monpsy');
    }

    public function get_icon() {
        return 'eicon-testimonial';
    }

    public function get_categories() {
        return ['monpsy-elements'];
    }

    protected function register_controls() {
        $this->start_controls_section(
            'content_section',
            [
                'label' => esc_html__('Content', 'monpsy'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'section_title',
            [
                'label' => esc_html__('Section Title', 'monpsy'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Témoignages', 'monpsy'),
            ]
        );

        $this->add_control(
            'section_subtitle',
            [
                'label' => esc_html__('Section Subtitle', 'monpsy'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Ce que disent nos patients', 'monpsy'),
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'testimonial_content',
            [
                'label' => esc_html__('Content', 'monpsy'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => esc_html__('Testimonial content goes here', 'monpsy'),
            ]
        );

        $repeater->add_control(
            'author_name',
            [
                'label' => esc_html__('Author Name', 'monpsy'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('John Doe', 'monpsy'),
            ]
        );

        $repeater->add_control(
            'author_title',
            [
                'label' => esc_html__('Author Title', 'monpsy'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Client depuis 2023', 'monpsy'),
            ]
        );

        $this->add_control(
            'testimonials_list',
            [
                'label' => esc_html__('Testimonials', 'monpsy'),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'testimonial_content' => esc_html__('Les séances avec MonPsy m\'ont vraiment aidé à surmonter mes difficultés.', 'monpsy'),
                        'author_name' => 'Sarah L.',
                        'author_title' => 'Cliente depuis 2022',
                    ],
                ],
                'title_field' => '{{{ author_name }}}',
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
                'name' => 'testimonial_typography',
                'label' => esc_html__('Content Typography', 'monpsy'),
                'selector' => '{{WRAPPER}} .testimonial-content',
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        $is_rtl = is_rtl();
        ?>
        <div class="bg-white py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-xl text-center <?php echo $is_rtl ? 'rtl' : ''; ?>">
                    <h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                        <?php echo esc_html($settings['section_title']); ?>
                    </h2>
                    <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <?php echo esc_html($settings['section_subtitle']); ?>
                    </p>
                </div>
                <div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 <?php echo $is_rtl ? 'rtl' : ''; ?>">
                        <?php foreach ($settings['testimonials_list'] as $testimonial) : ?>
                            <div class="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                                <blockquote class="text-gray-900 <?php echo $is_rtl ? 'text-right' : ''; ?>">
                                    <p class="testimonial-content"><?php echo esc_html($testimonial['testimonial_content']); ?></p>
                                </blockquote>
                                <figcaption class="mt-6 flex items-center gap-x-4 <?php echo $is_rtl ? 'flex-row-reverse' : ''; ?>">
                                    <div class="<?php echo $is_rtl ? 'text-right' : ''; ?>">
                                        <div class="font-semibold text-gray-900"><?php echo esc_html($testimonial['author_name']); ?></div>
                                        <div class="text-gray-600"><?php echo esc_html($testimonial['author_title']); ?></div>
                                    </div>
                                </figcaption>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
        <?php
    }
}